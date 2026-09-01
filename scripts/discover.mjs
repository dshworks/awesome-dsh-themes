#!/usr/bin/env node
// Scheduled theme discovery. Queues new finds in data/candidates.json, the
// human/agent triage queue. Candidates NEVER flow into data/themes.json
// automatically. Rejections live in data/rejected.json; one is skipped while
// it is live and re-queued once its `recheckAfter` date passes.
//
// Why this exists: until 2026-08-15 this repo had no discovery of its own, so
// every theme in it arrived as a byproduct of somebody sweeping for plugins.
// That is why 219 themes sit next to 2,642 plugins in an ecosystem where
// skins are the single most popular thing people build.
//
// Themes are also the hardest thing for a plugin-shaped gate to see. A skin is
// usually shipped from a subdirectory (packages/client/ui-appearance,
// skins/<name>/), sometimes as a bare stylesheet, so a gate that reads only
// the root package.json throws most of them away.
//
// The `dsh-theme` topic is nearly empty — 2 repos as of 2026-08-15 — so theme
// discovery cannot rely on it. It sweeps the general dsh topics and routes by
// what the repo calls itself.
//
// GitHub caps search at 1000 results per query and `dsh-plugin` passed that on
// 2026-08-14, so each topic is sliced by creation date, and a single over-cap
// day by star count, until every slice fits. Then every page is drained.
//
// Env: GITHUB_TOKEN (optional, raises rate limits)

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { looksLikeATheme as themeNameGate } from "./theme-name.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const TODAY = new Date().toISOString().slice(0, 10);
const TOKEN = process.env.GITHUB_TOKEN ?? "";
const MAX_NEW_PER_RUN = Number(process.env.DISCOVER_MAX_NEW ?? 200);
const SLUG_RE = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
// Widened 2026-08-20, after the sibling registry measured that its own
// five-topic list was missing 1,058 repositories -- 13% of the real universe --
// carrying `deepseek-harness` or a bare `dsh`. The same hole was here, plus
// `dsh-skin`, which is what a Chinese-language skin author is most likely to
// tag. Re-measure before removing any of these; a topic nobody sweeps and a
// topic that went quiet produce the same zero.
const TOPICS = [
  "dsh-theme",
  "dsh-skin",
  "dsh-plugin",
  "dsh-plugins",
  "dsh",
  "deepseek-harness",
];
const SEARCH_CAP = 1000;
const EPOCH = "2020-01-01";

// What makes a repo a theme candidate. Deliberately name-first: a launcher and
// a token-balance HUD both embed the web UI and both ship `--dsw-*` CSS, so
// stylesheet contents are not evidence of a skin. The repo has to say what it
// is. Human triage is what turns a candidate into an entry.
//
// The gate itself lives in theme-name.mjs, because triage.mjs assumed it had
// run and needed the same rule to say so.

const read = (rel) => JSON.parse(readFileSync(join(ROOT, rel), "utf8"));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function gh(path) {
  for (let attempt = 0; attempt < 5; attempt++) {
    let res;
    try {
      res = await fetch(`https://api.github.com${path}`, {
        headers: {
          accept: "application/vnd.github+json",
          "user-agent": "awesome-dsh-themes-watch",
          ...(TOKEN ? { authorization: `Bearer ${TOKEN}` } : {}),
        },
        signal: AbortSignal.timeout(30000),
      });
    } catch {
      await sleep(2000 * (attempt + 1)); // transient socket error, not a verdict
      continue;
    }
    if (res.status === 403 || res.status === 429) {
      const reset = Number(res.headers.get("x-ratelimit-reset") ?? 0) * 1000;
      await sleep(Math.min(Math.max(5000, reset - Date.now() + 2000), 70000));
      continue;
    }
    if (!res.ok) throw new Error(`GitHub ${path}: HTTP ${res.status}`);
    if (Number(res.headers.get("x-ratelimit-remaining") ?? 30) <= 1) await sleep(3000);
    else await sleep(1100);
    return res.json();
  }
  throw new Error(`GitHub ${path}: gave up after retries`);
}

const searchRepos = (q, page = 1) =>
  gh(`/search/repositories?q=${encodeURIComponent(q)}&per_page=100&page=${page}&sort=updated&order=desc`);

const isoDay = (t) => new Date(t).toISOString().slice(0, 10);

const asEntry = (r) => ({
  repo: r.full_name, // resolved name: a rename redirect must not fork an entry
  stars: r.stargazers_count,
  description: r.description ?? null,
  fork: r.fork,
  archived: r.archived,
  topics: r.topics ?? [],
});

async function drain(q, out) {
  const first = await searchRepos(q, 1);
  first.items.forEach((r) => out.push(asEntry(r)));
  const pages = Math.min(10, Math.ceil(first.total_count / 100));
  for (let p = 2; p <= pages; p++) {
    (await searchRepos(q, p)).items.forEach((r) => out.push(asEntry(r)));
  }
  return first.total_count;
}

async function sweepRange(base, lo, hi, out) {
  const q = `${base} ${lo === hi ? `created:${lo}` : `created:${lo}..${hi}`}`;
  const probe = await searchRepos(q, 1);
  if (probe.total_count === 0) return;

  if (probe.total_count <= SEARCH_CAP) {
    probe.items.forEach((r) => out.push(asEntry(r)));
    const pages = Math.min(10, Math.ceil(probe.total_count / 100));
    for (let p = 2; p <= pages; p++) {
      (await searchRepos(q, p)).items.forEach((r) => out.push(asEntry(r)));
    }
    return;
  }

  if (lo !== hi) {
    const mid = isoDay((Date.parse(lo) + Date.parse(hi)) / 2);
    await sweepRange(base, lo, mid, out);
    await sweepRange(base, isoDay(Date.parse(mid) + 86400000), hi, out);
    return;
  }

  for (const stars of ["0", "1", "2", "3", "4..5", "6..10", "11..30", ">30"]) {
    await drain(`${q} stars:${stars}`, out);
  }
}

// The sibling registry's triage recognises themes and parks them with the note
// "looks like a theme; belongs in awesome-dsh-themes". Until 2026-08-20 that
// note had no delivery: 32 such rows sat in the plugins queue reading like a
// backlog while this registry, which wanted every one of them, never heard.
// 27 were new here and all 27 proved a restyle path on the first pass.
//
// Pulled rather than pushed, deliberately. A push needs a cross-repo token and
// a workflow in someone else's repo; a fetch of a public file needs neither and
// cannot break their sweep when ours is down. A failed fetch degrades to "we
// found nothing this way", never to a wrong rejection.
//
// Read from two files, because the queue was never the right home for this.
// A routed repo is one the sibling has DECIDED -- it belongs here, not there --
// yet parking it in their queue kept it counted as undecided in the coverage
// figure they publish, and it sat there forever because their triage never
// decides it. data/routed-to-themes.json is the decision written down. The
// queue stays as a fallback so the lane keeps working while both sides land,
// and because a routed row that is somehow only in the queue is still a row we
// want.
const ROUTED_LIST = "https://raw.githubusercontent.com/dshworks/awesome-dsh-plugins/main/data/routed-to-themes.json";
const ROUTED_FROM = "https://raw.githubusercontent.com/dshworks/awesome-dsh-plugins/main/data/candidates.json";
const ROUTED_NOTE = /belongs in awesome-dsh-themes/i;

async function readJson(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(30000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function fromRoutedQueue() {
  const seen = new Map();
  try {
    const { repos = [] } = await readJson(ROUTED_LIST);
    for (const r of repos) seen.set(r.repo.toLowerCase(), r);
    console.error(`discover: ${seen.size} repo(s) on the plugins registry's routing list`);
  } catch (err) {
    console.error(`discover: no routing list (${err.message}); falling back to their queue alone`);
  }
  try {
    const { candidates = [] } = await readJson(ROUTED_FROM);
    let extra = 0;
    for (const c of candidates) {
      if (!ROUTED_NOTE.test(c.note ?? "")) continue;
      if (seen.has(c.repo.toLowerCase())) continue;
      seen.set(c.repo.toLowerCase(), c);
      extra += 1;
    }
    if (extra) console.error(`discover: ${extra} more routed repo(s) found only in their queue`);
  } catch (err) {
    console.error(`discover: could not read the plugins queue (${err.message}); routed themes may be missed this run`);
  }
  const routed = [...seen.values()];
  console.error(`discover: ${routed.length} repo(s) routed here by the plugins registry`);
  return routed.map((c) => ({
      repo: c.repo,
      stars: c.stars ?? 0,
      description: c.description ?? null,
      source: "routed-from-plugins",
      // Their triage already decided this is a theme. Re-applying our own
      // name-first gate would drop the ones whose repo name says nothing --
      // which is most background plugins -- so the routing IS the gate.
      routed: true,
    }));
}

async function fromTopics() {
  const out = [];
  for (const topic of TOPICS) {
    const base = `topic:${topic}`;
    const probe = await searchRepos(base, 1);
    const total = probe.total_count;
    const before = new Set(out.map((r) => r.repo)).size;
    if (total <= SEARCH_CAP) await drain(base, out);
    else await sweepRange(base, EPOCH, isoDay(Date.now() + 86400000), out);
    // Coverage, not just yield: a sweep that read part of a topic and a topic
    // that went quiet produce the same candidate count.
    const seen = new Set(out.map((r) => r.repo)).size - before;
    console.error(`discover: ${base} -> examined ${seen} new / ${total} in topic`);
  }
  return out;
}

// --- routing ---------------------------------------------------------------

function looksLikeATheme(c) {
  if (c.topics.includes("dsh-theme")) return true;
  const name = c.repo.split("/")[1] ?? "";
  return themeNameGate(name, `${name} ${c.description ?? ""}`);
}

function passesSpamGate(c) {
  if (c.fork || c.archived) return false;
  return c.repo.split("/")[0] !== "deepseek-ai"; // first-party, tracked directly
}

// --- merge -----------------------------------------------------------------

const registry = read("data/themes.json");
const file = read("data/candidates.json");
const rejectedFile = read("data/rejected.json");

const known = new Set(registry.themes.map((t) => t.repo.toLowerCase()));
const rejected = new Set(
  rejectedFile.rejected
    .filter((r) => !r.recheckAfter || r.recheckAfter > TODAY)
    .map((r) => r.repo.toLowerCase()));
const expired = rejectedFile.rejected.filter((r) => r.recheckAfter && r.recheckAfter <= TODAY).length;
if (expired) console.error(`discover: ${expired} rejection(s) expired and are eligible again`);

const queue = new Map(file.candidates.map((c) => [c.repo.toLowerCase(), c]));

let found = [];
try {
  found = await fromTopics();
} catch (err) {
  console.error(`discover: topic sweep failed: ${err.message}`);
}
found.push(...(await fromRoutedQueue()));

// Routed rows first, then by stars. A routed row carries no star count of its
// own worth trusting and would sort to the bottom, where a binding cap eats it
// -- and a lane that silently loses its entries to the topic sweep is worse
// than no lane, because it looks like it ran.
found.sort((x, y) => {
  if (!!x.routed !== !!y.routed) return x.routed ? -1 : 1;
  return (y.stars ?? 0) - (x.stars ?? 0);
});

let added = 0;
let overflow = 0;
for (const c of found) {
  if (!SLUG_RE.test(c.repo)) continue;
  const slug = c.repo.toLowerCase();
  if (known.has(slug) || rejected.has(slug)) continue;
  const existing = queue.get(slug);
  if (existing) {
    existing.stars = c.stars;
    if (c.description) existing.description = c.description.slice(0, 200);
    continue;
  }
  if (!c.routed && !looksLikeATheme(c)) continue; // the sibling's triage already decided
  if (!passesSpamGate(c)) continue;
  if (added >= MAX_NEW_PER_RUN) { overflow += 1; continue; }
  queue.set(slug, {
    repo: c.repo,
    // Where a row came from, so the routed lane is visible in the data rather
    // than inferred from a coincidence of dates.
    sources: [c.source ?? "github-topic"],
    stars: c.stars,
    ...(c.description ? { description: c.description.slice(0, 200) } : {}),
    discovered: TODAY,
  });
  added += 1;
}

const candidates = [...queue.values()].sort((a, b) => a.repo.localeCompare(b.repo));
const next = { updated: file.updated, candidates };

// A cap that truncates quietly reads as "that was everything".
if (overflow) {
  console.error(`discover: ${overflow} find(s) over the ${MAX_NEW_PER_RUN}/run cap were NOT queued; raise DISCOVER_MAX_NEW or run again after triage`);
}

if (JSON.stringify(next.candidates) === JSON.stringify(file.candidates)) {
  console.log(`discover: no changes (${candidates.length} candidates queued)`);
} else {
  next.updated = TODAY;
  writeFileSync(join(ROOT, "data/candidates.json"), `${JSON.stringify(next, null, 2)}\n`);
  console.log(`discover: ${added} new, ${candidates.length} total candidates${overflow ? `, ${overflow} held back by the cap` : ""}`);
}

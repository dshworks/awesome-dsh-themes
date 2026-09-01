#!/usr/bin/env node
// Find listed themes whose repository has been renamed, and stop counting one
// theme twice.
//
// GitHub's REST API follows a rename silently: ask for the old slug and you
// get 301 -> the new repo, with a 200 and a full payload. Every prover in this
// repo therefore keeps passing on a row whose `repo` field has been wrong for
// weeks, and discover.mjs meets the same repository under its new name, finds
// it unlisted and unrejected, and queues it as a find. Triage proves it -- it
// is a real theme, it really does install -- and admits it. One theme, two
// rows, both verified, both correct in isolation.
//
// Measured on 2026-09-01 across 489 listed themes: 22 renamed, and 12 of those
// were already listed a second time under the new name. The sibling registry
// hit this in August and recorded it in its own data/renamed.json; this is the
// same fix on this side.
//
// What it does NOT do:
//   - re-date `lastVerified` or rewrite `evidence`. A rename does not move
//     files. Re-stamping a check nobody re-ran is the lie this registry exists
//     to avoid.
//   - merge anything ambiguous. Two different themes can be renamed into one
//     repository -- an author folding both into `dsh-archive` -- and that is
//     not one theme listed twice, it is two themes that stopped existing
//     separately. Those are held, not merged.
//
// Usage:
//   node scripts/renames.mjs              probe, apply, write
//   node scripts/renames.mjs --dry-run    probe and report only
//
// Env: GITHUB_TOKEN (one call per listed theme).

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const TODAY = new Date().toISOString().slice(0, 10);
const DRY = process.argv.includes("--dry-run");
const TOKEN = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN;
const CONCURRENCY = 8;

const read = (rel) => JSON.parse(readFileSync(join(ROOT, rel), "utf8"));
const write = (rel, data) => writeFileSync(join(ROOT, rel), `${JSON.stringify(data, null, 2)}\n`);

if (!TOKEN) {
  console.error("renames: GITHUB_TOKEN is required (one API call per listed theme)");
  process.exit(1);
}

const registry = read("data/themes.json");
const themes = registry.themes;
const byRepo = new Map(themes.map((t) => [t.repo.toLowerCase(), t]));

const moved = [];   // { row, now }
const gone = [];    // rows whose repo 404s
let calls = 0;

async function probe(t) {
  const res = await fetch(`https://api.github.com/repos/${t.repo}`, {
    headers: { authorization: `token ${TOKEN}`, "user-agent": "awesome-dsh-themes-renames" },
    signal: AbortSignal.timeout(30000),
  });
  calls += 1;
  if (res.status === 404) { gone.push(t); return; }
  if (!res.ok) return; // rate limit, 5xx: say nothing rather than something wrong
  const { full_name: now } = await res.json();
  if (now && now.toLowerCase() !== t.repo.toLowerCase()) moved.push({ row: t, now });
}

const queue = [...themes];
let done = 0;
await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
  while (queue.length) {
    const t = queue.shift();
    try { await probe(t); } catch { /* transient: a missed rename is caught next run */ }
    if (++done % 100 === 0) console.error(`renames: probed ${done}/${themes.length}`);
  }
}));

console.error(`renames: ${themes.length} probed (api ${calls}) — ${moved.length} renamed, ${gone.length} gone`);

// A target that two or more rows move into is an archive, not a rename. Held.
const targetCount = new Map();
for (const m of moved) targetCount.set(m.now.toLowerCase(), (targetCount.get(m.now.toLowerCase()) ?? 0) + 1);

const renames = [];
const merged = [];
const held = [];

for (const { row, now } of moved) {
  const key = now.toLowerCase();
  const existing = byRepo.get(key);

  if (targetCount.get(key) > 1 && (!existing || existing === row)) {
    held.push({ from: row.repo, to: now, why: "two or more listed themes were renamed into this one repository; that is an archive, not a rename" });
    continue;
  }

  if (existing && existing !== row) {
    // The same repository, listed twice. Keep the row that has been here
    // longest -- it carries the earlier `added`, the older inbound links, and
    // usually the richer entry -- and record the other so a stale link is
    // still traceable to a row.
    const [keep, drop] = (existing.added ?? "9999") <= (row.added ?? "9999") ? [existing, row] : [row, existing];
    // `was` is always the slug that stops identifying anything: the one that
    // was renamed. Recording the dropped ROW's repo instead prints
    // "X == X" when the row we drop is the one already sitting at the new
    // name, which is the commoner half of these.
    const was = row.repo;
    keep.repo = now;
    merged.push({ was, now, keptName: keep.name, droppedName: drop.name, on: TODAY });
    continue;
  }

  const from = row.repo;
  row.repo = now;
  renames.push({
    from,
    to: now,
    // An ownership transfer is not a URL change. The install decision now
    // rests on a different person, which is a fact about trust.
    ownerChanged: now.split("/")[0].toLowerCase() !== from.split("/")[0].toLowerCase(),
    name: row.name,
    on: TODAY,
  });
}

// Rows are identified by `name`, which is unique in this file and, unlike
// `repo`, was not mutated above.
const dropped = new Set(merged.map((m) => m.droppedName));
registry.themes = themes.filter((t) => !dropped.has(t.name));

console.error(`renames: ${renames.length} repo field(s) updated, ${merged.length} duplicate row(s) merged, ${held.length} held`);
for (const r of renames) console.error(`  move  ${r.from} -> ${r.to}${r.ownerChanged ? "  (OWNER CHANGED)" : ""}`);
for (const m of merged) console.error(`  dupe  ${m.was} -> ${m.now}  (kept row ${m.keptName}, dropped row ${m.droppedName})`);
for (const h of held) console.error(`  held  ${h.from} -> ${h.to}`);
if (gone.length) {
  console.error(`renames: ${gone.length} listed repo(s) answer 404 — not touched here, that is triage --prove's job:`);
  for (const g of gone) console.error(`  - ${g.repo} (${g.name})`);
}

if (DRY) { console.error("renames: --dry-run, nothing written"); process.exit(0); }
if (!renames.length && !merged.length && !held.length) { console.error("renames: nothing to write"); process.exit(0); }

let file;
try { file = read("data/renamed.json"); } catch { file = { renames: [], merged: [], held: [] }; }

write("data/renamed.json", {
  _comment: "Repositories that answered under a new name. GitHub's API follows a rename and returns the current full_name, so every prover here keeps passing on a stale `repo` field while discovery meets the same repository under its new name and lists it again. `renames` had their `repo` field updated -- a refresh, not a re-listing. `merged` were the same repository listed twice; the older row survives and the dropped name is kept here so an inbound link is still traceable. `held` are repositories two or more listed themes were renamed into, which is an author archiving both, not a rename, and needs a person. `lastVerified` and `evidence` are never touched: a rename does not move files. Written by scripts/renames.mjs.",
  detected: TODAY,
  counts: { renames: renames.length, merged: merged.length, held: held.length },
  renames: [...(file.renames ?? []), ...renames],
  merged: [...(file.merged ?? []), ...merged],
  held: [...(file.held ?? []).filter((h) => !held.some((x) => x.from === h.from)), ...held],
});
write("data/themes.json", { ...registry, updated: TODAY });
console.error(`renames: registry ${themes.length} -> ${registry.themes.length}`);

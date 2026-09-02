#!/usr/bin/env node
// Stage 2 of the pipeline. discover.mjs finds theme-shaped repositories; this
// decides them.
//
// Until now this registry had a queue and no drain: the sweep filled
// data/candidates.json and only a human moving rows by hand could empty it.
// The sibling plugin registry routes theme-looking finds here too, so the
// backlog was arriving from two directions and leaving from none.
//
// What this proves is narrow, and the evidence string says exactly what it is:
// this file was fetched from the repo's default branch and it carries this
// key. It is not "we installed it and the UI changed" — nothing can assert
// that from outside — but it is a claim a reader can click and check, which
// `status: verified` on its own never was.
//
// The name gate lives in theme-name.mjs. This script used to say it did not
// re-open that question because "discover.mjs already routes name-first" --
// but routed rows, the ones the plugins registry hands over, skip the gate on
// purpose ("the routing IS the gate"). So one whole lane arrived un-gated and
// was admitted by a rule that assumed the gate had run: a bare
// `package.json#dsh.bundle` proves the repo installs into dsh, never that it
// restyles anything. `chenyangcun/dsh-command-palette` came in that way.
//
// So an install-path-only proof is never admitted on its own. It is backed by
// a real restyle signal in the tree (a `--dsw-*` override, or the ThemeRuntime)
// or it is held for review, never rejected: a launcher and a skin can look
// identical from outside, and that is a human's call. The name gate used to
// stand in for that signal, but for the topic lane the gate is what queued the
// row in the first place, so it proved nothing twice: on 2026-09-02 it admitted
// a model switcher because "skin" was in the repo name.
//
// Two more things the same day taught this file:
//   - a token *mention* is not an override. `var(--dsw-bg)` is a consumer; a
//     skin writes `--dsw-bg:`. The regex now wants the declaration, and it is
//     also run over scripts, because a skin that ships its sheet from
//     client.js (`--dsw-font-family: ${SERIF}`) is still a skin.
//   - a hand decision has to outlive the next run. A candidate carrying
//     `hold: "<why>"` is a human's call already made; this script leaves it in
//     the queue untouched instead of re-deciding it by machine.
//
// Usage:
//   node scripts/triage.mjs                drain data/candidates.json
//   node scripts/triage.mjs --dry-run      decide everything, write nothing
//   node scripts/triage.mjs --prove        re-prove entries already listed
//   node scripts/triage.mjs --limit 20     stop after 20 repos
//   node scripts/triage.mjs --report f.json  write the full per-repo trace
//
// Env: GITHUB_TOKEN (one tree call per unsettled repo; raw reads need none)

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const TODAY = new Date().toISOString().slice(0, 10);
const TOKEN = process.env.GITHUB_TOKEN ?? "";
// The dsh release entries are stamped as verified against. Bump only after
// re-checking that what this prover reads has not moved.
//
// Re-checked against 0.1.1-rc.2 (npm `latest` since 2026-08-21): the `--dsw-*`
// token stylesheet, packages/client/ui-theme/src/styles/, is byte-identical to
// rc.8, and @deepseek-ai/dsh-client-ui-theme keeps its name, so every
// token-override theme in here is checked under the contract it was checked
// under before. Skins that target the shell's compiled class names are the
// other half, and six client `.module.css` files moved between the two tags:
//
//   ui-conversation/.../chat/AssistantMarkdown.module.css
//   ui-conversation/.../chat/ChatView.module.css
//   ui-conversation/.../skeleton/ConversationRoot.module.css
//   ui-primitives/src/markdown/MarkdownText.module.css
//   ui-subagent/.../SubagentHeaderLineage.module.css
//   ui-user-questions/.../QuestionComposer.module.css
//
// Their hashes moved, so a hash-targeting skin aimed at any of those six may
// no longer reach anything. That is why this registry records HOW a theme
// reaches the UI and not just that it does: the bump is safe for the token
// lane and explicitly is not a re-verification of the hash lane.
const DSH_VERSION = process.env.DSH_VERSION ?? "0.1.1-rc.2";

const argv = process.argv.slice(2);
const has = (f) => argv.includes(f);
const opt = (f, d) => { const i = argv.indexOf(f); return i >= 0 && argv[i + 1] ? argv[i + 1] : d; };
const DRY = has("--dry-run");
const PROVE = has("--prove");
const LIMIT = Number(opt("--limit", Infinity));
const REPORT = opt("--report", null);
const CONCURRENCY = Number(opt("--concurrency", 6));

const read = (rel) => JSON.parse(readFileSync(join(ROOT, rel), "utf8"));
const write = (rel, v) => writeFileSync(join(ROOT, rel), `${JSON.stringify(v, null, 2)}\n`);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const addDays = (iso, n) => new Date(Date.parse(iso) + n * 86400000).toISOString().slice(0, 10);

// --- fetchers ---------------------------------------------------------------

// Files come off raw.githubusercontent, which costs no GitHub API budget.
async function raw(repo, path) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(`https://raw.githubusercontent.com/${repo}/HEAD/${path}`, {
        headers: { "user-agent": "awesome-dsh-themes-triage" },
        signal: AbortSignal.timeout(15000),
      });
      if (res.status === 404) return null;
      if (res.status === 429 || res.status >= 500) { await sleep(1500 * (attempt + 1)); continue; }
      if (!res.ok) return null;
      const text = await res.text();
      return text.length > 300000 ? text.slice(0, 300000) : text;
    } catch { await sleep(800 * (attempt + 1)); }
  }
  return null;
}

let apiCalls = 0;
async function gh(path) {
  for (let attempt = 0; attempt < 5; attempt++) {
    let res;
    try {
      res = await fetch(`https://api.github.com${path}`, {
        headers: {
          accept: "application/vnd.github+json",
          "user-agent": "awesome-dsh-themes-triage",
          ...(TOKEN ? { authorization: `Bearer ${TOKEN}` } : {}),
        },
        signal: AbortSignal.timeout(25000),
      });
      apiCalls += 1;
    } catch { await sleep(1500 * (attempt + 1)); continue; }
    if (res.status === 404) return { __missing: true };
    if (res.status === 403 || res.status === 429) {
      const reset = Number(res.headers.get("x-ratelimit-reset") ?? 0) * 1000;
      await sleep(Math.min(Math.max(5000, reset - Date.now() + 2000), 65000));
      continue;
    }
    if (!res.ok) return null;
    return res.json();
  }
  return null;
}

// --- the prover -------------------------------------------------------------

const THEME_RUNTIME = "@deepseek-ai/dsh-client-ui-theme";
const SKIP_PATH = /(^|\/)(node_modules|dist|build|out|vendor|\.git|coverage|fixtures?)\//;
// The registry's own subject: dsh's design tokens. A sheet that overrides
// these is the only install path a pure-CSS skin has.
const DSW_TOKEN = /--dsw-[a-z0-9-]+/i;
// A declaration, not a mention: `--dsw-bg:` in a sheet, `"--dsw-bg":` in a
// token map, `--dsw-bg: ${x}` in a template literal. `var(--dsw-bg)` is not it.
const DSW_OVERRIDE = /--dsw-[a-z0-9-]+"?\s*:/i;
const SCRIPT_FILE = /\.(js|mjs|cjs|ts|tsx|jsx)$/i;
const TEST_FILE = /(^|\/)(tests?|__tests__|spec)\/|\.(test|spec)\.[a-z]+$/i;
const STYLE_FILE = /\.(css|scss|less)$/i;
// Token skins ship as JSON override maps as often as stylesheets.
const TOKEN_JSON = /(theme|skin|token|palette|colou?rs?)[^/]*\.json$/i;
const IMAGE = /\.(png|jpe?g|webp|gif)$/i;
const SHOT = /(screenshot|preview|demo|showcase|hero)/i;

const parse = (t) => { if (!t) return null; try { return JSON.parse(t); } catch { return null; } };
// [section, name] pairs, not bare names: `evidence` is a receipt a reader
// follows to an exact key, and a skin peer-depends on the client packages it
// restyles far more often than it depends on them. Writing `#dependencies.X`
// for all three sections names a path that does not resolve in the file it
// points at. (Same bug, same fix, as awesome-dsh-plugins' triage.)
const DEP_SECTIONS = ["dependencies", "peerDependencies", "devDependencies"];
const depsOf = (p) => DEP_SECTIONS.flatMap(
  (section) => Object.keys(p?.[section] ?? {}).map((name) => [section, name]));

// A package.json proves a restyle path when it names the ThemeRuntime, or
// declares a dsh bundle at all — the repo already passed the name gate, so a
// bundle here is a bundle that calls itself a skin.
function proveFromPackage(pkg, path) {
  if (!pkg) return null;
  const deps = depsOf(pkg);
  const sectionOf = (name) => (deps.find(([, d]) => d === name) || [])[0];
  const names = deps.map(([, d]) => d);
  // Depending on the ThemeRuntime is the strongest proof a skin can carry:
  // registering with it means overriding same-named alias variables, which is
  // exactly what the `tokens` shelf holds. It does not make the repo a
  // runtime — `kind: runtime` belongs to the first-party extension point
  // alone, and that entry is already listed.
  if (names.includes(THEME_RUNTIME)) {
    return {
      evidence: `${path}#${sectionOf(THEME_RUNTIME)}.${THEME_RUNTIME}`,
      why: "registers with ThemeRuntime",
      tokens: true,
    };
  }
  // Injecting the ThemeRuntime is the same proof by a different door: a client
  // manifest that names it is asking dsh to hand it the token layer.
  if (pkg.dsh?.client?.inject?.includes?.(THEME_RUNTIME)) {
    return { evidence: `${path}#dsh.client.inject.${THEME_RUNTIME}`, why: "injects ThemeRuntime", tokens: true };
  }
  // Everything below proves the repo installs into dsh. That is an install
  // path, not a restyle path -- `install: true` says so, and decide() will not
  // admit on it alone.
  if (pkg.dsh?.bundle) return { evidence: `${path}#dsh.bundle`, why: "dsh.bundle manifest", install: true };
  if (pkg.dsh) return { evidence: `${path}#dsh.${Object.keys(pkg.dsh).join("+")}`, why: "dsh manifest", install: true };
  const ds = deps.filter(([, d]) => d.startsWith("@deepseek-ai/"));
  if (ds.length) {
    const [section, name] = ds[0];
    return { evidence: `${path}#${section}.${name}`, why: `depends on ${name}`, install: true };
  }
  return null;
}

function ledeFromReadme(text) {
  if (!text) return null;
  const body = text.slice(0, 8000)
    .replace(/<!--[\s\S]*?-->/g, "").replace(/```[\s\S]*?```/g, "").replace(/<[^>]+>/g, " ");
  for (let line of body.split(/\r?\n/)) {
    line = line.trim();
    if (!line) continue;
    if (/^#{1,6}\s/.test(line)) continue;
    if (/^[-*_]{3,}$/.test(line)) continue;
    if (/^[[!|>]/.test(line) && !/[.。！!？?]/.test(line)) continue;
    line = line.replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/[*_`]+/g, "").replace(/\s+/g, " ").trim();
    if (line.length >= 20) return line;
  }
  return null;
}

async function proveRoot(repo) {
  const [pkgText, readme] = await Promise.all([raw(repo, "package.json"), raw(repo, "README.md")]);
  const pkg = parse(pkgText);
  const facts = {
    hasPkg: !!pkg,
    pkgDesc: pkg?.description ?? null,
    readmeLede: ledeFromReadme(readme),
    // A README that names the tokens is a hint, never a proof: the file that
    // carries them still has to exist.
    readmeMentionsTokens: readme ? DSW_TOKEN.test(readme) : false,
    empty: !pkg && !readme,
  };
  return { proof: proveFromPackage(pkg, "package.json"), facts };
}

// One tree call, then free reads of whatever it points at.
async function proveDeep(repo) {
  const tree = await gh(`/repos/${repo}/git/trees/HEAD?recursive=1`);
  if (tree?.__missing) return { proof: null, facts: { tree: "gone" } };
  if (!tree || !Array.isArray(tree.tree)) return { proof: null, facts: { tree: "unreadable" } };
  const paths = tree.tree.filter((n) => n.type === "blob").map((n) => n.path).filter((p) => !SKIP_PATH.test(p));

  // A screenshot the author took of their own running UI. Copying it is the
  // same rule as copying a description: the author's material, not ours.
  const preview = paths.filter((p) => IMAGE.test(p) && SHOT.test(p))
    .sort((a, b) => a.split("/").length - b.split("/").length || a.length - b.length)[0] ?? null;
  const facts = { tree: paths.length, preview };

  for (const p of paths.filter((x) => x.endsWith("package.json") && x !== "package.json").slice(0, 15)) {
    const proof = proveFromPackage(parse(await raw(repo, p)), p);
    if (proof) return { proof: { ...proof, path: dirname(p) }, facts };
  }

  const sheets = paths.filter((p) => STYLE_FILE.test(p)).slice(0, 8);
  for (const p of sheets) {
    const text = await raw(repo, p);
    if (text && DSW_OVERRIDE.test(text)) return { proof: { evidence: `${p}#--dsw-tokens`, why: "dsw token override", tokens: true }, facts };
  }

  for (const p of paths.filter((x) => TOKEN_JSON.test(x)).slice(0, 6)) {
    const text = await raw(repo, p);
    if (text && DSW_OVERRIDE.test(text)) return { proof: { evidence: `${p}#--dsw-tokens`, why: "dsw token map", tokens: true }, facts };
  }

  // A sheet written from a script is still a sheet. Smallest files first: a
  // skin's client.js is short and its bundle, if committed, is not.
  const scripts = paths.filter((p) => SCRIPT_FILE.test(p) && !TEST_FILE.test(p))
    .sort((a, b) => a.split("/").length - b.split("/").length || a.length - b.length).slice(0, 8);
  for (const p of scripts) {
    const text = await raw(repo, p);
    if (text && DSW_OVERRIDE.test(text)) return { proof: { evidence: `${p}#--dsw-tokens`, why: "dsw token override (css-in-js)", tokens: true }, facts };
  }

  return { proof: null, facts };
}

const NO_PATH = "no restyle path proven: no ThemeRuntime dependency, no dsh manifest, no --dsw-* override in any sheet";

// `says` is everything the repo says about itself that we have at this point:
// its name plus whatever description the discovery lane carried. Empty for
// --prove, where the row is already listed and the gate is not the question.
async function decide(repo, says = null) {
  const root = await proveRoot(repo);
  if (root.proof && !root.proof.install) return { repo, verdict: "accept", ...root.proof, facts: root.facts };

  const deep = await proveDeep(repo);
  const facts = { ...root.facts, ...deep.facts };
  // A --dsw-* override or the ThemeRuntime found deeper in the tree outranks
  // whatever install path the root package.json carried.
  if (deep.proof && !deep.proof.install) return { repo, verdict: "accept", ...deep.proof, facts };

  // An install path with no restyle signal anywhere in the tree. A human
  // decides -- except under --prove, where the row is already listed and the
  // question is whether its receipt still holds, not whether it is a skin.
  if (root.proof || deep.proof) {
    const proof = root.proof ?? deep.proof;
    if (says === null) return { repo, verdict: "accept", ...proof, facts };
    return {
      repo,
      verdict: "review",
      reason: `installs into dsh (${proof.evidence}) but nothing in the tree restyles it`,
      facts,
    };
  }
  if (facts.tree === "gone") return { repo, verdict: "reject", reason: "repo gone (404) at triage time", recheck: true, facts };
  if (facts.tree === "unreadable") return { repo, verdict: "reject", reason: "repo tree unreadable at triage time", recheck: true, facts };

  // A repo that documents the tokens but ships none is mid-build, not a lie.
  // That is a fact about today, so it gets a recheck date, not a verdict.
  if (facts.readmeMentionsTokens) {
    return { repo, verdict: "review", reason: "README names --dsw-* tokens but no sheet in the tree carries them", facts };
  }
  if (facts.empty) return { repo, verdict: "reject", reason: "empty repo: no package.json, no README", recheck: true, facts };
  return { repo, verdict: "reject", reason: NO_PATH, recheck: true, facts };
}

// --- entry construction -----------------------------------------------------

const STAR_BEG = /[【\[(]\s*(求[⭐★*]+|求star|please\s*star|star\s*me|点个?[⭐★]|欢迎star)\s*[】\])]/gi;
const EMOJI = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{2B00}-\u{2BFF}]/gu;
const MOJIBAKE = /\?{4,}|�/;

function cleanDescription(input) {
  if (!input) return null;
  let s = String(input).replace(/\r?\n/g, " ").replace(STAR_BEG, " ").replace(EMOJI, " ")
    .replace(/\s+/g, " ").replace(/^[\s|·•\-—:：,，.。]+/, "").trim();
  if (MOJIBAKE.test(s)) return null;
  if (s.length < 8) return null;
  if (s.length > 320) {
    const cut = s.slice(0, 320);
    const at = Math.max(cut.lastIndexOf("; "), cut.lastIndexOf("。"), cut.lastIndexOf("，"), cut.lastIndexOf(", "), cut.lastIndexOf(" · "), cut.lastIndexOf(" "));
    s = (at > 200 ? cut.slice(0, at) : cut.slice(0, 317)).replace(/[\s,;·、，。]+$/, "");
  }
  return s;
}

const COMPANION = /\b(pet|companion|buddy|mascot|widget|desktop.?pet|live2d)\b|宠物|挂件|桌宠|看板娘/i;
const FUN = /\b(meme|joke|prank|april.?fool|troll|cursed|silly)\b|整活|搞笑|沙雕|恶搞/i;

// The public shelf, derived from what the author already said. `tokens` is the
// one that is not a guess: it means the proof itself was a --dsw-* override.
function categoryFor(text, proof) {
  if (COMPANION.test(text)) return "companion";
  if (FUN.test(text)) return "fun";
  if (proof.tokens) return "tokens";
  return "skin";
}

function nameFor(repo, taken) {
  const [owner, base] = repo.split("/");
  const stem = base.replace(/\.git$/, "").slice(0, 64);
  if (!taken.has(stem.toLowerCase())) { taken.add(stem.toLowerCase()); return stem; }
  const suffix = owner.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 8) || "x";
  let candidate = `${stem.slice(0, 63 - suffix.length)}-${suffix}`;
  let n = 2;
  while (taken.has(candidate.toLowerCase())) candidate = `${stem.slice(0, 60 - suffix.length)}-${suffix}-${n++}`;
  taken.add(candidate.toLowerCase());
  return candidate;
}

// Key order matches the existing file so a diff shows what changed.
const ORDER = ["name", "repo", "path", "npm", "official", "kind", "category", "status", "evidence",
  "added", "lastVerified", "verifiedAgainst", "description", "license", "notes", "preview", "previewCss", "install", "gist"];
const ordered = (o) => Object.fromEntries(ORDER.filter((k) => o[k] !== undefined && o[k] !== null).map((k) => [k, o[k]]));


// --- pool --------------------------------------------------------------------

async function pooled(items, worker, label) {
  const results = [];
  const queue = [...items];
  let done = 0;
  await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      results.push(await worker(queue.shift()));
      if (++done % 25 === 0) console.error(`triage: ${label} ${done}/${items.length} (api ${apiCalls})`);
    }
  }));
  return results;
}

// --- run --------------------------------------------------------------------

const registry = read("data/themes.json");
const queue = read("data/candidates.json");
const ledger = read("data/rejected.json");

const listed = new Set(registry.themes.map((t) => t.repo.toLowerCase()));
const takenNames = new Set(registry.themes.map((t) => t.name.toLowerCase()));
const rejectedBy = new Map(ledger.rejected.map((r) => [r.repo.toLowerCase(), r]));

// --- mode: --prove ----------------------------------------------------------

// 193 of the 224 listed themes say `status: verified` and nothing in this repo
// has ever checked one. That is the same unfalsifiable badge every other
// directory in this ecosystem prints. This turns the claim into a citation,
// or removes it.

if (PROVE) {
  const targets = registry.themes.filter((t) => !t.official).slice(0, LIMIT);
  console.error(`triage: proving ${targets.length} listed themes (skipping ${registry.themes.length - targets.length} first-party/limited)`);
  const results = await pooled(targets, async (t) => {
    // An entry with a `path` names its own subdirectory: prove that, not the
    // repo root, or a monorepo's root package.json answers for all of them.
    if (t.path) {
      const proof = proveFromPackage(parse(await raw(t.repo, `${t.path}/package.json`)), `${t.path}/package.json`);
      if (proof) return { entry: t, verdict: "accept", ...proof };
    }
    return { entry: t, ...(await decide(t.repo)) };
  }, "prove");

  const proven = results.filter((r) => r.verdict === "accept");
  const gone = results.filter((r) => r.facts?.tree === "gone");
  console.error(`triage: proven ${proven.length}, unproven ${results.length - proven.length} of ${results.length}`);
  if (gone.length) {
    console.error(`triage: ${gone.length} listed repo(s) now 404 - confirm on a second run before removing:`);
    for (const g of gone) console.error(`  - ${g.entry.repo} (${g.entry.name})`);
  }

  const byName = new Map(results.map((r) => [r.entry.name, r]));
  for (const t of registry.themes) {
    const r = byName.get(t.name);
    if (!r) continue;
    if (r.verdict === "accept") {
      t.evidence = r.evidence;
      t.status = "verified";
      t.lastVerified = TODAY;
      t.verifiedAgainst = DSH_VERSION;
    } else {
      // Never delete a row on a machine's say-so - an unreadable tree and a
      // dead project look identical from here. Drop the claim, keep the row.
      delete t.evidence;
      t.status = "unverified";
    }
  }

  if (REPORT) {
    writeFileSync(REPORT, `${JSON.stringify(results.map((r) => ({
      repo: r.entry.repo, name: r.entry.name, verdict: r.verdict, evidence: r.evidence ?? null, reason: r.reason ?? null,
    })), null, 2)}\n`);
  }
  if (DRY) { console.error("triage: --dry-run, nothing written"); process.exit(0); }
  write("data/themes.json", { ...registry, updated: TODAY, themes: registry.themes.map(ordered) });
  console.error(`triage: rewrote data/themes.json with evidence on ${proven.length} entries`);
  process.exit(0);
}

// --- mode: drain the queue --------------------------------------------------

const byHand = queue.candidates.filter((c) => typeof c.hold === "string" && c.hold.trim());
const pending = queue.candidates.filter((c) => !listed.has(c.repo.toLowerCase()) && !byHand.includes(c)).slice(0, LIMIT);
console.error(`triage: ${pending.length} candidate(s) to decide${byHand.length ? `, ${byHand.length} held by hand and left alone` : ""}`);

const admitted = [];
const rejects = [];
const held = [];
const trace = [];

for (const [i, c] of pending.entries()) {
  if (i && i % 25 === 0) console.error(`triage: decide ${i}/${pending.length} (api ${apiCalls})`);
  const d = await decide(c.repo, `${c.description ?? ""}`);
  trace.push(d);

  if (d.verdict === "reject") {
    rejects.push({
      repo: c.repo,
      reason: d.reason,
      date: TODAY,
      // A judgment is permanent; a fact about the day you looked is not.
      // Every rejection this script writes is the second kind.
      ...(d.recheck ? { recheckAfter: addDays(TODAY, 45) } : {}),
    });
    continue;
  }
  if (d.verdict === "review") { held.push({ ...c, note: d.reason }); continue; }

  const description = cleanDescription(d.facts?.pkgDesc) ?? cleanDescription(c.description) ?? cleanDescription(d.facts?.readmeLede);
  if (!description) { held.push({ ...c, note: "restyle path proven, but no usable description upstream" }); continue; }

  const preview = d.facts?.preview
    ? `https://raw.githubusercontent.com/${c.repo}/HEAD/${d.facts.preview}`
    : undefined;

  admitted.push(ordered({
    name: nameFor(c.repo, takenNames),
    repo: c.repo,
    path: d.path,
    official: false,
    kind: "skin",
    category: categoryFor(`${c.repo} ${description}`, d),
    status: "verified",
    evidence: d.evidence,
    added: TODAY,
    lastVerified: TODAY,
    verifiedAgainst: DSH_VERSION,
    description,
    preview,
  }));
}

console.error(`triage: ${admitted.length} admitted, ${rejects.length} rejected, ${held.length} held for review (api ${apiCalls})`);

if (REPORT) {
  writeFileSync(REPORT, `${JSON.stringify({ admitted, rejects, held, trace }, null, 2)}\n`);
  console.error(`triage: wrote ${REPORT}`);
}
if (DRY) { console.error("triage: --dry-run, nothing written"); process.exit(0); }

if (admitted.length) {
  registry.themes = [...registry.themes, ...admitted].sort((a, b) => a.name.localeCompare(b.name));
  registry.updated = TODAY;
  write("data/themes.json", registry);
}
if (rejects.length) {
  for (const r of rejects) rejectedBy.set(r.repo.toLowerCase(), r);
  ledger.rejected = [...rejectedBy.values()].sort((a, b) => a.repo.localeCompare(b.repo));
  ledger.updated = TODAY;
  write("data/rejected.json", ledger);
}
const decided = new Set([...admitted.map((a) => a.repo.toLowerCase()), ...rejects.map((r) => r.repo.toLowerCase())]);
const remaining = queue.candidates.filter((c) => !decided.has(c.repo.toLowerCase()) && !listed.has(c.repo.toLowerCase()));
const heldNotes = new Map(held.map((h) => [h.repo.toLowerCase(), h.note]));
queue.candidates = remaining.map((c) => (heldNotes.has(c.repo.toLowerCase()) ? { ...c, note: heldNotes.get(c.repo.toLowerCase()) } : c));
queue.updated = TODAY;
write("data/candidates.json", queue);

console.error(`triage: registry ${registry.themes.length - admitted.length} -> ${registry.themes.length}`);

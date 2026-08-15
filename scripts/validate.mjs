#!/usr/bin/env node
// Check required fields on data/themes.json, plus hygiene on the discovery
// queue and the rejection ledger. Node stdlib only.
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => JSON.parse(readFileSync(join(ROOT, rel), "utf8"));
const data = read("data/themes.json");
const candidates = read("data/candidates.json");
const rejected = read("data/rejected.json");

const TOP = ["updated", "themes"];
const REQ = ["name", "repo", "description", "kind", "added", "lastVerified", "verifiedAgainst", "status"];
const KINDS = new Set(["runtime", "skin"]);
const CATEGORIES = new Set(["runtime", "tokens", "skin", "companion", "fun"]);
const STATUSES = new Set(["verified", "unverified", "broken"]);
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const SLUG = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
const HTTP = /^https?:\/\//i;
const MOJIBAKE = /\?{4,}|�/;

const errors = [];
for (const k of TOP) if (!(k in data)) errors.push(`registry: missing ${k}`);
if (!DATE.test(data.updated ?? "")) errors.push(`registry: bad updated date`);
if (!Array.isArray(data.themes)) errors.push("registry: themes must be an array");
const seen = new Set();
(data.themes ?? []).forEach((t, i) => {
  const at = `themes[${i}] (${t?.name ?? "?"})`;
  for (const k of REQ) {
    if (t[k] == null || t[k] === "") errors.push(`${at}: missing ${k}`);
  }
  if (t.name) {
    if (seen.has(t.name)) errors.push(`${at}: duplicate name`);
    seen.add(t.name);
  }
  if (t.repo && !SLUG.test(t.repo)) errors.push(`${at}: bad repo slug`);
  // Some upstream GitHub descriptions arrive already destroyed — the API
  // itself returns "DSH ????:??????? + ??/????" for repos whose owner set the
  // description from a mis-encoded terminal. Copying that in helps nobody.
  if (t.description && MOJIBAKE.test(t.description)) {
    errors.push(`${at}: description looks mis-encoded; write one or leave the entry out`);
  }
  if (t.kind && !KINDS.has(t.kind)) errors.push(`${at}: bad kind`);
  if (t.category && !CATEGORIES.has(t.category)) errors.push(`${at}: bad category`);
  if (t.preview != null && (typeof t.preview !== "string" || !t.preview.trim())) errors.push(`${at}: bad preview`);
  if (t.previewCss != null && (typeof t.previewCss !== "string" || !HTTP.test(t.previewCss))) {
    errors.push(`${at}: bad previewCss`);
  }
  if (t.gist != null && (typeof t.gist !== "string" || !t.gist.trim())) errors.push(`${at}: bad gist`);
  if (t.install != null && (typeof t.install !== "string" || !t.install.trim())) errors.push(`${at}: bad install`);
  if (t.status && !STATUSES.has(t.status)) errors.push(`${at}: bad status`);
  for (const k of ["added", "lastVerified"]) {
    if (t[k] && !DATE.test(t[k])) errors.push(`${at}: bad ${k}`);
  }
  if (t.added && t.lastVerified && t.lastVerified < t.added) {
    errors.push(`${at}: lastVerified predates added`);
  }
});

// --- discovery queue and rejection ledger ----------------------------------

const registrySlugs = new Set((data.themes ?? []).map((t) => (t.repo ?? "").toLowerCase()));

// A rejection carrying `recheckAfter` is a snapshot, not a verdict: once it
// expires the repo is a candidate again, so it is not an error to see it queued.
const today = new Date().toISOString().slice(0, 10);
const liveRejections = new Set();

if (!DATE.test(rejected.updated ?? "")) errors.push("rejected.json: bad updated date");
if (!Array.isArray(rejected.rejected)) {
  errors.push("rejected.json: rejected must be an array");
} else {
  const seenRejected = new Set();
  rejected.rejected.forEach((r, i) => {
    const at = `rejected[${i}] (${r?.repo ?? "?"})`;
    if (!SLUG.test(r.repo ?? "")) { errors.push(`${at}: bad repo slug`); return; }
    const slug = r.repo.toLowerCase();
    if (seenRejected.has(slug)) errors.push(`${at}: duplicate rejection`);
    seenRejected.add(slug);
    if (typeof r.reason !== "string" || !r.reason) errors.push(`${at}: missing reason`);
    if (!DATE.test(r.date ?? "")) errors.push(`${at}: bad date`);
    if (r.recheckAfter !== undefined) {
      if (!DATE.test(r.recheckAfter)) errors.push(`${at}: bad recheckAfter`);
      else if (r.recheckAfter < r.date) errors.push(`${at}: recheckAfter predates date`);
    }
    if (registrySlugs.has(slug)) errors.push(`${at}: both rejected and in themes.json; pick one`);
    if (!r.recheckAfter || r.recheckAfter > today) liveRejections.add(slug);
  });
}

if (!DATE.test(candidates.updated ?? "")) errors.push("candidates.json: bad updated date");
if (!Array.isArray(candidates.candidates)) {
  errors.push("candidates.json: candidates must be an array");
} else {
  const seenCandidates = new Set();
  candidates.candidates.forEach((c, i) => {
    const at = `candidates[${i}] (${c?.repo ?? "?"})`;
    if (!SLUG.test(c.repo ?? "")) { errors.push(`${at}: bad repo slug`); return; }
    const slug = c.repo.toLowerCase();
    if (seenCandidates.has(slug)) errors.push(`${at}: duplicate candidate`);
    seenCandidates.add(slug);
    if (registrySlugs.has(slug)) errors.push(`${at}: already in themes.json; drop it from the queue`);
    if (liveRejections.has(slug)) errors.push(`${at}: rejected and not yet expired; drop it from the queue`);
  });
}

if (errors.length) {
  console.error(`validate: ${errors.length} error(s)`);
  for (const e of errors) console.error(` - ${e}`);
  process.exit(1);
}
console.log(`validate: ok (${data.themes.length} themes, ${candidates.candidates.length} candidates, ${rejected.rejected.length} rejected)`);

#!/usr/bin/env node
// Check required fields on data/themes.json. Node stdlib only.
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const data = JSON.parse(readFileSync(join(ROOT, "data/themes.json"), "utf8"));

const TOP = ["updated", "themes"];
const REQ = ["name", "repo", "description", "kind", "added", "lastVerified", "verifiedAgainst", "status"];
const KINDS = new Set(["runtime", "skin"]);
const CATEGORIES = new Set(["runtime", "tokens", "skin", "companion"]);
const STATUSES = new Set(["verified", "unverified", "broken"]);
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const SLUG = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
const HTTP = /^https?:\/\//i;

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
  if (t.kind && !KINDS.has(t.kind)) errors.push(`${at}: bad kind`);
  if (t.category && !CATEGORIES.has(t.category)) errors.push(`${at}: bad category`);
  if (t.preview != null && (typeof t.preview !== "string" || !t.preview.trim())) errors.push(`${at}: bad preview`);
  if (t.previewCss != null && (typeof t.previewCss !== "string" || !HTTP.test(t.previewCss))) {
    errors.push(`${at}: bad previewCss`);
  }
  if (t.gist != null && (typeof t.gist !== "string" || !t.gist.trim())) errors.push(`${at}: bad gist`);
  if (t.status && !STATUSES.has(t.status)) errors.push(`${at}: bad status`);
  for (const k of ["added", "lastVerified"]) {
    if (t[k] && !DATE.test(t[k])) errors.push(`${at}: bad ${k}`);
  }
  if (t.added && t.lastVerified && t.lastVerified < t.added) {
    errors.push(`${at}: lastVerified predates added`);
  }
});

if (errors.length) {
  console.error(`validate: ${errors.length} error(s)`);
  for (const e of errors) console.error(` - ${e}`);
  process.exit(1);
}
console.log(`validate: ok (${data.themes.length} themes)`);

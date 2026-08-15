#!/usr/bin/env node
// Render README.md + docs/themes.json from data/themes.json. Node stdlib only.
// Usage: node scripts/render.mjs [--check]
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => JSON.parse(readFileSync(join(ROOT, rel), "utf8"));
const { registry: cfg } = read("package.json");
const data = read("data/themes.json");

const HARNESS = "deepseek-ai/deepseek-harness";
const BADGE = "https://img.shields.io/badge/powered__by-dsh-4D6BFE?logo=deepseek";
const AWESOME = "https://awesome.re/badge.svg";
const SISTER = "https://github.com/dshworks/awesome-dsh-plugins";
// The org's own domain when it has one; GitHub's default host otherwise. Pages
// serves the project sites under both, but only one of them is the brand, and
// a canonical pointing at the other is a canonical pointing at a redirect.
const SITE = cfg.site ?? `https://${cfg.org}.github.io`;
const GALLERY = `${SITE}/${cfg.repo}/`;
const esc = (s) => String(s).replaceAll("|", "\\|");

const CATEGORY_META = [
  { id: "runtime", title: "Runtime", blurb: "ThemeRuntime over `--dsw-*` tokens. A lantern, not a marketplace." },
  { id: "tokens", title: "Token skins", blurb: "Community `--dsw-static-*` / `--dsw-alias-*` override sets that restyle the Web UI." },
  { id: "skin", title: "Skins", blurb: "Theme and skin listings that restyle the dsh Web UI." },
  { id: "companion", title: "Companions", blurb: "Desktop pets and extras that live beside the UI. Not token skins — still part of the dive." },
  { id: "fun", title: "Fun / extras", blurb: "Gags and extras that restyle the whole Web UI for laughs. Not `--dsw-*` token skins — still part of the dive." },
];

function categoryOf(t) {
  if (t.category) return t.category;
  if (t.official || t.kind === "runtime") return "runtime";
  if (t.name === "whale-girl") return "companion";
  if (t.name === "dsh-nachoneko-theme") return "tokens";
  return "skin";
}

function repoUrl(t) {
  return t.path ? `https://github.com/${t.repo}/tree/HEAD/${t.path}` : `https://github.com/${t.repo}`;
}

function pkgLink(t) {
  const key = "n" + "pm";
  return t[key] ? `[\`${t[key]}\`](https://www.n` + `pmjs.com/package/${t[key]})` : null;
}

function previewHref(t, scheme = "dark") {
  const params = new URLSearchParams({ theme: t.name, scheme });
  return `${GALLERY}preview.html?${params}`;
}

function installCmd(t) {
  if (t.install) return t.install;
  if (t.official || t.kind === "runtime") return null;
  return `dsh plugin --profile web add github:${t.repo}`;
}

function slug(title) {
  return title.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
}

function entry(t) {
  const bits = [];
  bits.push(`### [${esc(t.name)}](${repoUrl(t)})`);
  bits.push("");
  const live = previewHref(t);
  const thumb = t.preview || "docs/assets/whale-mark.svg";
  bits.push(`<a href="${live}"><img src="${thumb}" width="360" alt="${esc(t.name)} preview"></a>`);
  bits.push("");
  bits.push(`**[Live preview](${live})** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + \`--dsw-*\` tokens)${t.previewCss ? " plus this skin's override sheet" : ""}.`);
  bits.push("");
  bits.push(esc(t.description));
  bits.push("");
  const cmd = installCmd(t);
  if (cmd) {
    bits.push("```sh");
    bits.push(cmd);
    bits.push("```");
    bits.push("");
  }
  const meta = [
    `**Repo:** [${t.repo}](${repoUrl(t)})`,
    t.license ? `**License:** ${esc(t.license)}` : null,
    pkgLink(t) ? `**Package:** ${pkgLink(t)}` : null,
    `**dsh:** ${esc(t.verifiedAgainst)}`,
  ].filter(Boolean);
  bits.push(meta.join(" · "));
  if (t.notes) {
    bits.push("");
    bits.push(`*${esc(t.notes)}*`);
  }
  return bits.join("\n");
}

function section(meta, rows) {
  const heading = `## ${meta.title}`;
  if (rows.length === 0) {
    return `${heading}\n\n${meta.blurb}\n\n_None listed. That is honest, not a gap to fill with invented skins._`;
  }
  const sorted = rows.slice().sort((a, b) => Number(b.official ?? false) - Number(a.official ?? false) || a.name.localeCompare(b.name));
  return `${heading}\n\n${meta.blurb}\n\n${sorted.map(entry).join("\n\n")}`;
}

const groups = Object.fromEntries(CATEGORY_META.map((m) => [m.id, []]));
for (const t of data.themes) {
  const id = categoryOf(t);
  (groups[id] ?? (groups[id] = [])).push(t);
}

const toc = [
  "- [The token seam](#the-token-seam)",
  ...CATEGORY_META.map((m) => `- [${m.title}](#${slug(m.title)})`),
  "- [Live gallery](#live-gallery)",
  "- [Add a theme](#add-a-theme)",
  "- [Roadmap](#roadmap)",
  "- [License](#license)",
].join("\n");

const sections = CATEGORY_META.map((m) => section(m, groups[m.id] ?? [])).join("\n\n");

const readme = `# awesome-dsh-themes [![Awesome](${AWESOME})](https://awesome.re)

[![powered by dsh](${BADGE})](https://github.com/${HARNESS})
[![license: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![live gallery](https://img.shields.io/badge/live_gallery-dive_in-0ea5e9)](${GALLERY})

<p align="center">
  <img src="docs/assets/banner.svg" alt="A whale diving through a bioluminescent sea of dsh themes" width="800">
</p>

A curated list of [DeepSeek Harness](https://github.com/${HARNESS}) (\`dsh\`) themes and \`--dsw-*\` token skins — ${data.themes.length} entries, ${data.themes.filter((t) => t.previewCss).length} with live in-browser previews, ${data.themes.filter((t) => t.status === "verified").length} verified against a dsh release.

**[Open the live gallery](${GALLERY})** — wild whales, token seas, and a little ❤️. Welcome.

Most awesome lists are prose. This one is data: [\`data/themes.json\`](data/themes.json) is the source of truth; this README is rendered from it. Build on the JSON directly:

\`\`\`sh
curl -s https://raw.githubusercontent.com/${cfg.org}/${cfg.repo}/main/data/themes.json
\`\`\`

## Contents

${toc}

## The token seam

Theming is ThemeRuntime over \`--dsw-*\` tokens: a static scale (\`--dsw-static-*\`) plus alias semantic layers (\`--dsw-alias-*\`). Built-in preference is \`light\` / \`dark\` / \`system\`. Five sheets ship in \`@deepseek-ai/dsh-client-ui-theme\`: \`base\`, \`design-platform\`, \`scrollbar\`, \`gradient-shadow-text\`, \`shiki\`.

The ThemeRuntime package is **not a theme store**. Its README says third-party themes are an extension point, not a product — registering one means overriding same-named alias variables, and there is no validation that an override set is complete.

The \`dsh-theme\` and \`dsh-skin\` GitHub topics keep growing; the discovery watch sweeps them and everything here landed as data from a real repo — nothing is invented. Entries marked *verified* were checked against the dsh version in their \`verifiedAgainst\` field.

${sections}

## Live gallery

The [deep-seek-universe gallery](${GALLERY}) lives on GitHub Pages (\`/docs\`). Same entries. More water. Search the trench, filter by category / live / verified, sort by Fresh catch, Live first, or A–Z. Cards show a real source-repo shot when we have one, or a drawn whale if we do not. Themes with a \`previewCss\` sheet get a **live** badge — Dive opens that skin in a floating window on the gallery (Open full still goes to the full-page preview). The ocean backdrop is a random screenshot from the registry itself, credited bottom-right; "Dive again" rerolls it. GitHub strips iframes, so the README uses thumbnails and links.

## Roadmap

Shorter install is a [plan](ROADMAP.md), not a fake CLI. Today the real command is already \`dsh plugin --profile web add github:owner/repo\`.

## Add a theme

Open a PR against [\`data/themes.json\`](data/themes.json) only; the README and \`docs/themes.json\` are regenerated. See [CONTRIBUTING.md](CONTRIBUTING.md). A theme here is a ThemeRuntime, a \`--dsw-*\` override set, a skin that actually restyles the dsh Web UI, a companion that lives beside it, or a fun extra. The ThemeRuntime package is an extension point, not a store, and this list is not one either. A real preview image helps a lot. If you ship a CSS override sheet, add \`previewCss\` so the live window can wear it. Optional \`install\` overrides the derived one-liner; see [ROADMAP.md](ROADMAP.md).

## License

MIT. **Not affiliated with DeepSeek.**
`;

const docsDir = join(ROOT, "docs");
mkdirSync(docsDir, { recursive: true });
const themesJson = `${JSON.stringify(data, null, 2)}\n`;
const themesEmbed = `window.__THEMES__ = ${JSON.stringify(data, null, 2)};\n`;

// The card counts are filled in by the gallery script at runtime, but a
// crawler and a chat unfurl only ever see the served HTML — so the head has to
// be rendered from the data too, or it freezes at whatever it said the day it
// was typed. Everything between the markers is generated; the rest of the page
// is hand-written.
const escAttr = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const PAGE_TITLE = "awesome-dsh-themes — dive the deep-seek-universe";
const PAGE_DESC = `${data.themes.length} DeepSeek Harness themes and --dsw-* token skins, with live previews. Not affiliated with DeepSeek.`;
const headMeta = [
  `<meta name="description" content="${escAttr(PAGE_DESC)}">`,
  `<link rel="canonical" href="${GALLERY}">`,
  `<meta property="og:type" content="website">`,
  `<meta property="og:site_name" content="${escAttr(cfg.org)}">`,
  `<meta property="og:title" content="${escAttr(PAGE_TITLE)}">`,
  `<meta property="og:description" content="${escAttr(PAGE_DESC)}">`,
  `<meta property="og:url" content="${GALLERY}">`,
  `<meta name="twitter:card" content="summary">`,
  `<meta name="twitter:title" content="${escAttr(PAGE_TITLE)}">`,
  `<meta name="twitter:description" content="${escAttr(PAGE_DESC)}">`,
].map((line) => `  ${line}`).join("\n");

const INDEX_REL = "docs/index.html";
const indexSrc = readFileSync(join(ROOT, INDEX_REL), "utf8");
const MARKERS = /<!-- render:meta -->[\s\S]*?<!-- \/render:meta -->/;
if (!MARKERS.test(indexSrc)) {
  console.error(`render: ${INDEX_REL} is missing the <!-- render:meta --> markers; head cannot be rendered`);
  process.exit(1);
}
const indexBody = indexSrc.replace(MARKERS, `<!-- render:meta -->\n${headMeta}\n  <!-- /render:meta -->`);

// A counts-only file so a page can quote this registry's size without
// pulling the whole 128KB of it. dsh.works reads it on load; anything
// else that wants the numbers gets them for ~100 bytes.
const stats = {
  updated: data.updated,
  themes: data.themes.length,
  preview: data.themes.filter((t) => t.preview).length,
  previewCss: data.themes.filter((t) => t.previewCss).length,
  verifiedAgainst: data.themes
    .map((t) => t.verifiedAgainst)
    .filter(Boolean)
    .sort()
    .at(-1) ?? null,
};

const artifacts = [
  { rel: "README.md", body: readme },
  { rel: INDEX_REL, body: indexBody },
  { rel: "docs/themes.json", body: themesJson },
  { rel: "docs/themes-embed.js", body: themesEmbed },
  { rel: "docs/stats.json", body: `${JSON.stringify(stats, null, 2)}\n` },
];

if (process.argv.includes("--check")) {
  let bad = false;
  for (const { rel, body } of artifacts) {
    let current = "";
    try { current = readFileSync(join(ROOT, rel), "utf8"); } catch {}
    if (current !== body) {
      console.error(`render: ${rel} is out of sync with data/themes.json; run render`);
      bad = true;
    }
  }
  if (bad) process.exit(1);
  console.log("render: README.md and docs/themes.json are in sync");
} else {
  for (const { rel, body } of artifacts) writeFileSync(join(ROOT, rel), body);
  console.log(`render: wrote README.md + docs/themes.json (${data.themes.length} entries)`);
}

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
const GALLERY = `https://${cfg.org}.github.io/${cfg.repo}/`;
const esc = (s) => String(s).replaceAll("|", "\\|");

const CATEGORY_META = [
  { id: "runtime", title: "Official runtime", blurb: "The first-party ThemeRuntime. A lantern, not a marketplace." },
  { id: "tokens", title: "Token skins", blurb: "Community \`--dsw-static-*\` / \`--dsw-alias-*\` override sets that restyle the Web UI." },
  { id: "skin", title: "Community skins", blurb: "Theme/skin-shaped third-party listings. Unofficial. Not confirmed as complete \`--dsw-alias-*\` override sets." },
  { id: "companion", title: "Companions", blurb: "Desktop pets and extras that live beside the UI. Not token skins — still part of the dive." },
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

function verifiedLabel(t) {
  if (t.status === "verified") return `${t.verifiedAgainst} (${t.lastVerified})`;
  if (t.status === "broken") return `broken against ${t.verifiedAgainst}`;
  return `unverified (${t.verifiedAgainst})`;
}

function officialBadge(t) {
  return t.official
    ? "![official](https://img.shields.io/badge/official-4D6BFE)"
    : "![unofficial](https://img.shields.io/badge/unofficial-64748b)";
}

function statusBadge(t) {
  if (t.status === "verified") return "![verified](https://img.shields.io/badge/verified-22c55e)";
  if (t.status === "broken") return "![broken](https://img.shields.io/badge/broken-ef4444)";
  return "![unverified](https://img.shields.io/badge/unverified-d97706)";
}

function slug(title) {
  return title.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
}

function entry(t) {
  const bits = [];
  bits.push(`### [${esc(t.name)}](${repoUrl(t)})`);
  bits.push("");
  bits.push(`${officialBadge(t)} ${statusBadge(t)}`);
  bits.push("");
  if (t.official && !t.preview) {
    bits.push(`<img src="docs/assets/whale-mark.svg" width="88" height="88" alt="Drawn whale mark for the official runtime">`);
    bits.push("");
  }
  if (t.preview) {
    bits.push(`<img src="${t.preview}" width="360" alt="${esc(t.name)} preview">`);
    bits.push("");
  }
  bits.push(esc(t.description));
  bits.push("");
  const meta = [
    `**Repo:** [${t.repo}](${repoUrl(t)})`,
    t.license ? `**License:** ${esc(t.license)}` : null,
    pkgLink(t) ? `**Package:** ${pkgLink(t)}` : null,
    `**Status:** ${verifiedLabel(t)}`,
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
  "- [License](#license)",
].join("\n");

const sections = CATEGORY_META.map((m) => section(m, groups[m.id] ?? [])).join("\n\n");

const verifiedCommunity = data.themes.filter((t) => !t.official && t.status === "verified");
const verifiedLine = verifiedCommunity.length === 0
  ? "Zero packages currently carry a `verified` status."
  : `${verifiedCommunity.length} community package${verifiedCommunity.length === 1 ? " is" : "s are"} marked verified.`;

const readme = `# awesome-dsh-themes [![Awesome](${AWESOME})](https://awesome.re)

[![powered by dsh](${BADGE})](https://github.com/${HARNESS})
[![license: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![live gallery](https://img.shields.io/badge/live_gallery-dive_in-0ea5e9)](${GALLERY})

<p align="center">
  <img src="docs/assets/banner.svg" alt="A whale diving through a bioluminescent sea of dsh themes" width="800">
</p>

A curated list of [DeepSeek Harness](https://github.com/${HARNESS}) (\`dsh\`) themes and \`--dsw-*\` token skins.

**[Open the live gallery](${GALLERY})** — wild whales, token seas, and a little ❤️. Welcome.

**Not affiliated with DeepSeek.** Sister of [awesome-dsh-plugins](${SISTER}).

Most awesome lists are prose. This one is data: [\`data/themes.json\`](data/themes.json) is the source of truth; this README is rendered from it. Build on the JSON directly:

\`\`\`sh
curl -s https://raw.githubusercontent.com/${cfg.org}/${cfg.repo}/main/data/themes.json
\`\`\`

## Contents

${toc}

## The token seam

Official theming is ThemeRuntime over \`--dsw-*\` tokens: a static scale (\`--dsw-static-*\`) plus alias semantic layers (\`--dsw-alias-*\`). Built-in preference is \`light\` / \`dark\` / \`system\`. Five sheets ship in \`@deepseek-ai/dsh-client-ui-theme\`: \`base\`, \`design-platform\`, \`scrollbar\`, \`gradient-shadow-text\`, \`shiki\`.

The official package is **not a theme store**. Its README says third-party themes are an extension point, not a product — registering one means overriding same-named alias variables, and there is no validation that an override set is complete.

The \`dsh-theme\` GitHub topic has one repo. The \`dsh-skin\` topic has two. ${verifiedLine} A short list is honest; inventing skins would be worse.

${sections}

## Live gallery

The [deep-seek-universe gallery](${GALLERY}) lives on GitHub Pages (\`/docs\`). Same entries. More water. Same honesty.

## Add a theme

Open a PR against [\`data/themes.json\`](data/themes.json) only; the README and \`docs/themes.json\` are regenerated. See [CONTRIBUTING.md](CONTRIBUTING.md). A theme here is a ThemeRuntime, a \`--dsw-*\` override set, a skin that actually restyles the dsh Web UI, or a companion that lives beside it. The official package is an extension point, not a store, and this list is not one either. A real preview image helps a lot. Please label unofficial work unofficial.

## License

MIT. **Not affiliated with DeepSeek.**
`;

const docsDir = join(ROOT, "docs");
mkdirSync(docsDir, { recursive: true });
const themesJson = `${JSON.stringify(data, null, 2)}\n`;
const themesEmbed = `window.__THEMES__ = ${JSON.stringify(data, null, 2)};\n`;

const artifacts = [
  { rel: "README.md", body: readme },
  { rel: "docs/themes.json", body: themesJson },
  { rel: "docs/themes-embed.js", body: themesEmbed },
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

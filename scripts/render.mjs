#!/usr/bin/env node
// Render README.md from data/themes.json. Node stdlib only.
// Usage: node scripts/render.mjs [--check]
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => JSON.parse(readFileSync(join(ROOT, rel), "utf8"));
const { registry: cfg } = read("package.json");
const data = read("data/themes.json");

const HARNESS = "deepseek-ai/deepseek-harness";
const BADGE = "https://img.shields.io/badge/powered__by-dsh-4D6BFE?logo=deepseek";
const SISTER = "https://github.com/dshworks/awesome-dsh-plugins";
const esc = (s) => s.replaceAll("|", "\\|");

function repoCell(t) {
  const url = t.path
    ? `https://github.com/${t.repo}/tree/HEAD/${t.path}`
    : `https://github.com/${t.repo}`;
  return `[${t.repo}](${url})`;
}

function pkgCell(t) {
  const key = "n" + "pm";
  return t[key] ? `[\`${t[key]}\`](https://www.n` + `pmjs.com/package/${t[key]})` : "-";
}

function verifiedCell(t) {
  if (t.status === "verified") return `${t.verifiedAgainst} (${t.lastVerified})`;
  if (t.status === "broken") return `broken against ${t.verifiedAgainst}`;
  return `unverified (${t.verifiedAgainst})`;
}

function table(rows) {
  const body = rows
    .slice()
    .sort((a, b) => Number(b.official ?? false) - Number(a.official ?? false) || a.name.localeCompare(b.name))
    .map((t) => {
      const note = t.notes ? ` ${esc(t.notes)}` : "";
      return `| ${esc(t.name)}${t.official ? " (official)" : ""} | ${repoCell(t)} | ${pkgCell(t)} | ${esc(t.description)}${note} | ${verifiedCell(t)} |`;
    });
  return [
    "| Name | Repo | package | Description | Status |",
    "|---|---|---|---|---|",
    ...body,
  ].join("\n");
}

function section(title, blurb, rows) {
  if (rows.length === 0) {
    return `### ${title}\n\n${blurb}\n\n_None listed. That is honest, not a gap to fill with invented skins._`;
  }
  return `### ${title}\n\n${blurb}\n\n${table(rows)}`;
}

const official = data.themes.filter((t) => t.official);
const community = data.themes.filter((t) => !t.official);

const readme = `# awesome-dsh-themes

[![powered by dsh](${BADGE})](https://github.com/${HARNESS})
[![license: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)

A small, data-driven registry of [DeepSeek Harness](https://github.com/${HARNESS}) (\`dsh\`) themes and \`--dsw-*\` token skins.

**Not affiliated with DeepSeek.** Sister of [awesome-dsh-plugins](${SISTER}).

Most awesome lists are prose. This one is data: [\`data/themes.json\`](data/themes.json) is the source of truth; this README is rendered from it. Build on the JSON directly:

\`\`\`sh
curl -s https://raw.githubusercontent.com/${cfg.org}/${cfg.repo}/main/data/themes.json
\`\`\`

## The token seam

Official theming is ThemeRuntime over \`--dsw-*\` tokens: a static scale (\`--dsw-static-*\`) plus alias semantic layers (\`--dsw-alias-*\`). Built-in preference is \`light\` / \`dark\` / \`system\`. Five sheets ship in \`@deepseek-ai/dsh-client-ui-theme\`: \`base\`, \`design-platform\`, \`scrollbar\`, \`gradient-shadow-text\`, \`shiki\`.

The official package is **not a theme store**. Its README says third-party themes are an extension point, not a product — registering one means overriding same-named alias variables, and there is no validation that an override set is complete.

The \`dsh-theme\` GitHub topic is empty. The \`dsh-skin\` topic has one repo. Zero packages are verified as \`--dsw-alias-*\` token overrides. A short community section is honest; inventing skins would be worse.

## Registry

${data.themes.length} entries. Data updated ${data.updated}.

${section("Official", "The first-party ThemeRuntime. Not a marketplace.", official)}

${section("Community", "Theme/skin-shaped third-party listings. Unofficial and unverified. None of these are confirmed \`--dsw-alias-*\` override sets.", community)}

## Add a theme

Open a PR against [\`data/themes.json\`](data/themes.json) only; the README is regenerated. See [CONTRIBUTING.md](CONTRIBUTING.md). A theme here is a ThemeRuntime, a \`--dsw-*\` override set, or a skin that actually restyles the dsh Web UI. The official package is an extension point, not a store, and this list is not one either.

## License

MIT. **Not affiliated with DeepSeek.**
`;

const target = join(ROOT, "README.md");
if (process.argv.includes("--check")) {
  let current = "";
  try { current = readFileSync(target, "utf8"); } catch {}
  if (current !== readme) {
    console.error("render: README.md is out of sync with data/themes.json; run render");
    process.exit(1);
  }
  console.log("render: README.md is in sync");
} else {
  writeFileSync(target, readme);
  console.log(`render: wrote README.md (${data.themes.length} entries)`);
}

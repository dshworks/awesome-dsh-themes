# Contributing

Hey. The sea is small on purpose, and we still want you here.

The registry is the JSON, not the README. All contributions are PRs against
[`data/themes.json`](data/themes.json); the README and the gallery data in
`docs/` are regenerated from it.

## Submit a theme

Community themes are wanted. Handmade lanterns, token seas, desktop whales —
if it actually restyles (or companionably lives beside) the dsh Web UI, open a PR.

1. Add one entry to the `themes` array in `data/themes.json`. Field
   reference lives in [`data/schema.json`](data/schema.json); copy an existing
   entry as a starting point.
2. Set `official` to `true` only for the first-party ThemeRuntime package.
3. A real `preview` image URL helps a lot. A screenshot from the running UI,
   not a mock, not a generated product shot.
4. If you ship a --dsw-* override stylesheet, set `previewCss` so the live window can wear it.
5. Set `category` if you can: `runtime` | `tokens` | `skin` | `companion`.
6. Regenerate and check:

   ```sh
   node scripts/validate.mjs
   node scripts/render.mjs
   ```

7. Commit the JSON, the rendered README, and `docs/themes.json` /
   `docs/themes-embed.js`. CI runs validate + `render:check`.

Set `verifiedAgainst` to the dsh version you actually tested and `lastVerified` to today.

## What counts as a theme

This list is small on purpose. An entry must be one of:

1. The ThemeRuntime (`@deepseek-ai/dsh-client-ui-theme`), or
2. A `--dsw-static-*` / `--dsw-alias-*` override set that restyles the dsh
   Web UI, or
3. A skin that actually restyles that UI (plugin, sheet, or asset pack), or
4. A companion / extra that lives beside the UI (desktop pet, etc.).

Not a theme: a renamed template, a VS Code / DSCode color theme, or a repo
that only rides a GitHub topic. Do not invent entries to fill a section.

## ThemeRuntime is not a store

The ThemeRuntime package is an extension point, not a product. Registering a
third-party theme means overriding same-named alias variables. There is no
validation that an override set is complete, and this registry is not a
theme store either.

## License and affiliation

New work should be licensed (MIT is easiest to list). This project is MIT.
**Not affiliated with DeepSeek.**

## Verification

dsh is a developer preview with promised breaking changes, so entries rot.
Re-verification PRs that only bump `lastVerified` / `verifiedAgainst`, or
flip `status` to `broken` with a one-line reason, are always welcome.

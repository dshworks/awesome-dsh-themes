# Contributing

The registry is the JSON, not the README. All contributions are PRs against
[`data/themes.json`](data/themes.json); the README is regenerated from it.

## Submit a theme

1. Add one entry to the `themes` array in `data/themes.json`. Field
   reference lives in [`data/schema.json`](data/schema.json); copy an existing
   entry as a starting point.
2. Regenerate and check:

   ```sh
   node scripts/validate.mjs
   node scripts/render.mjs
   ```

3. Commit both files and open the PR. CI runs the same two checks.

Set `verifiedAgainst` to the dsh version you actually tested, `lastVerified`
to today, and `status` honestly. `unverified` entries are accepted; lying in
`verified` gets the entry pulled.

## What counts as a theme

This list is small on purpose. An entry must be one of:

1. The official ThemeRuntime (`@deepseek-ai/dsh-client-ui-theme`), or
2. A `--dsw-static-*` / `--dsw-alias-*` override set that restyles the dsh
   Web UI, or
3. A skin that actually restyles that UI (plugin, sheet, or asset pack).

Not a theme: a renamed template, a VS Code / DSCode color theme, a desktop
pet with no skin, or a repo that only rides a GitHub topic. The `dsh-theme`
topic is empty and the `dsh-skin` topic is nearly empty; do not invent
entries to fill the community section.

## Official is not a store

The official package is an extension point, not a product. Registering a
third-party theme means overriding same-named alias variables. There is no
validation that an override set is complete, and this registry is not a
theme store either.

## Verification

dsh is a developer preview with promised breaking changes, so entries rot.
Re-verification PRs that only bump `lastVerified` / `verifiedAgainst`, or
flip `status` to `broken` with a one-line reason, are always welcome.

# awesome-dsh-themes

[![powered by dsh](https://img.shields.io/badge/powered__by-dsh-4D6BFE?logo=deepseek)](https://github.com/deepseek-ai/deepseek-harness)
[![license: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)

A small, data-driven registry of [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`) themes and `--dsw-*` token skins.

**Not affiliated with DeepSeek.** Sister of [awesome-dsh-plugins](https://github.com/dshworks/awesome-dsh-plugins).

Most awesome lists are prose. This one is data: [`data/themes.json`](data/themes.json) is the source of truth; this README is rendered from it. Build on the JSON directly:

```sh
curl -s https://raw.githubusercontent.com/dshworks/awesome-dsh-themes/main/data/themes.json
```

## The token seam

Official theming is ThemeRuntime over `--dsw-*` tokens: a static scale (`--dsw-static-*`) plus alias semantic layers (`--dsw-alias-*`). Built-in preference is `light` / `dark` / `system`. Five sheets ship in `@deepseek-ai/dsh-client-ui-theme`: `base`, `design-platform`, `scrollbar`, `gradient-shadow-text`, `shiki`.

The official package is **not a theme store**. Its README says third-party themes are an extension point, not a product — registering one means overriding same-named alias variables, and there is no validation that an override set is complete.

The `dsh-theme` GitHub topic has one repo. The `dsh-skin` topic has two. 1 community package is verified as `--dsw-alias-*` token overrides. A short community section is honest; inventing skins would be worse.

## Registry

6 entries. Data updated 2026-08-14.

### Official

The first-party ThemeRuntime. Not a marketplace.

| Name | Repo | package | Description | Status |
|---|---|---|---|---|
| dsh-client-ui-theme (official) | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/client/ui-theme) | [`@deepseek-ai/dsh-client-ui-theme`](https://www.npmjs.com/package/@deepseek-ai/dsh-client-ui-theme) | Official ThemeRuntime over --dsw-* tokens (static scale + alias semantic layers); light/dark/system. Five sheets: base, design-platform, scrollbar, gradient-shadow-text, shiki. Third-party themes are an extension point, not a product. Not a theme store. | 0.1.0-rc.5 (2026-08-13) |

### Community

Theme/skin-shaped third-party listings. Unofficial. One of these (dsh-nachoneko-theme) is a confirmed `--dsw-alias-*` override set; the rest are unverified skins.

| Name | Repo | package | Description | Status |
|---|---|---|---|---|
| dsh-deep-whale | [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) | - | DSH Web whale-girl skin series (maid-atelier). Theme/skin-shaped third-party listing. Not verified as a --dsw-alias-* token override. | unverified (0.1.0-rc.5) |
| dsh-nachoneko-theme | [TheMyceliumOfAntan/dsh-nachoneko-theme](https://github.com/TheMyceliumOfAntan/dsh-nachoneko-theme) | - | Nachoneko (甘城猫猫) skin for the dsh Web GUI: #A3D3FF --dsw-static-*/--dsw-alias-* override set, full-screen wallpaper, frosted-glass sidebar/composer/code blocks and a settings-panel corner art, shipped as a self-contained dsh bundle+client plugin. Confirmed --dsw-alias-* override set (deepseek/blue static scales + alias layers); hashed module-class overrides (frame/conversation/composer/settings) are pinned to 0.1.0-rc.6. | 0.1.0-rc.6 (2026-08-14) |
| dsh-qq2006 | [LaplaceYoung/dsh-qq2006](https://github.com/LaplaceYoung/dsh-qq2006) | - | QQ2006 skin plugin: registers a qq2006 theme, mirrors body[data-ds-skin], ships a global skin sheet and assets. Tagged dsh-skin. Not verified as a --dsw-alias-* token override. | unverified (0.1.0-rc.5) |
| dsh-web-ui | [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | - | Third-party plugin/skin collection for the dsh Web UI. Skin center routes around the theme-persistence gap. Also listed in awesome-dsh-plugins. Not verified as a --dsw-alias-* token override. | unverified (0.1.0-rc.5) |
| whale-girl | [vlln/whale-girl](https://github.com/vlln/whale-girl) | - | DSH Web GUI desktop-pet plugin (QQ pet form): floating companion. Theme/skin-shaped listing. Not verified as a --dsw-alias-* token override. | unverified (0.1.0-rc.5) |

## Add a theme

Open a PR against [`data/themes.json`](data/themes.json) only; the README is regenerated. See [CONTRIBUTING.md](CONTRIBUTING.md). A theme here is a ThemeRuntime, a `--dsw-*` override set, or a skin that actually restyles the dsh Web UI. The official package is an extension point, not a store, and this list is not one either.

## License

MIT. **Not affiliated with DeepSeek.**

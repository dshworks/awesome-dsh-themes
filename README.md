# awesome-dsh-themes [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[![powered by dsh](https://img.shields.io/badge/powered__by-dsh-4D6BFE?logo=deepseek)](https://github.com/deepseek-ai/deepseek-harness)
[![license: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![live gallery](https://img.shields.io/badge/live_gallery-dive_in-0ea5e9)](https://dshworks.github.io/awesome-dsh-themes/)

<p align="center">
  <img src="docs/assets/banner.svg" alt="A whale diving through a bioluminescent sea of dsh themes" width="800">
</p>

A curated list of [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`) themes and `--dsw-*` token skins.

**[Open the live gallery](https://dshworks.github.io/awesome-dsh-themes/)** — wild whales, token seas, and a little ❤️. Welcome.

**Not affiliated with DeepSeek.** Sister of [awesome-dsh-plugins](https://github.com/dshworks/awesome-dsh-plugins).

Most awesome lists are prose. This one is data: [`data/themes.json`](data/themes.json) is the source of truth; this README is rendered from it. Build on the JSON directly:

```sh
curl -s https://raw.githubusercontent.com/dshworks/awesome-dsh-themes/main/data/themes.json
```

## Contents

- [The token seam](#the-token-seam)
- [Official runtime](#official-runtime)
- [Token skins](#token-skins)
- [Community skins](#community-skins)
- [Companions](#companions)
- [Live gallery](#live-gallery)
- [Add a theme](#add-a-theme)
- [License](#license)

## The token seam

Official theming is ThemeRuntime over `--dsw-*` tokens: a static scale (`--dsw-static-*`) plus alias semantic layers (`--dsw-alias-*`). Built-in preference is `light` / `dark` / `system`. Five sheets ship in `@deepseek-ai/dsh-client-ui-theme`: `base`, `design-platform`, `scrollbar`, `gradient-shadow-text`, `shiki`.

The official package is **not a theme store**. Its README says third-party themes are an extension point, not a product — registering one means overriding same-named alias variables, and there is no validation that an override set is complete.

The `dsh-theme` GitHub topic has one repo. The `dsh-skin` topic has two. Zero packages currently carry a `verified` status. A short list is honest; inventing skins would be worse.

## Official runtime

The first-party ThemeRuntime. A lantern, not a marketplace.

### [dsh-client-ui-theme](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/client/ui-theme)

![official](https://img.shields.io/badge/official-4D6BFE) ![verified](https://img.shields.io/badge/verified-22c55e)

<img src="docs/assets/whale-mark.svg" width="88" height="88" alt="Drawn whale mark for the official runtime">

Official ThemeRuntime over --dsw-* tokens (static scale + alias semantic layers); light/dark/system. Five sheets: base, design-platform, scrollbar, gradient-shadow-text, shiki. Third-party themes are an extension point, not a product. Not a theme store.

**Repo:** [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/client/ui-theme) · **License:** MIT · **Package:** [`@deepseek-ai/dsh-client-ui-theme`](https://www.npmjs.com/package/@deepseek-ai/dsh-client-ui-theme) · **Status:** 0.1.0-rc.5 (2026-08-13)

## Token skins

Community `--dsw-static-*` / `--dsw-alias-*` override sets that restyle the Web UI.

### [dsh-nachoneko-theme](https://github.com/TheMyceliumOfAntan/dsh-nachoneko-theme)

![unofficial](https://img.shields.io/badge/unofficial-64748b) ![unverified](https://img.shields.io/badge/unverified-d97706)

<img src="https://raw.githubusercontent.com/TheMyceliumOfAntan/dsh-nachoneko-theme/main/assets/screenshot.png" width="360" alt="dsh-nachoneko-theme preview">

Nachoneko (甘城猫猫) skin for the dsh Web GUI: #A3D3FF --dsw-static-*/--dsw-alias-* override set, full-screen wallpaper, frosted-glass sidebar/composer/code blocks and a settings-panel corner art, shipped as a self-contained dsh bundle+client plugin.

**Repo:** [TheMyceliumOfAntan/dsh-nachoneko-theme](https://github.com/TheMyceliumOfAntan/dsh-nachoneko-theme) · **License:** MIT · **Status:** unverified (0.1.0-rc.6)

*Confirmed --dsw-alias-* override set (deepseek/blue static scales + alias layers) and boot roster on 0.1.0-rc.6; a fresh main-UI boot stall was reported on one machine -- client.js payload was cut 440KB -> 238KB (wallpaper base64 deduped) in response, and a local no-cache fresh boot reaches the main chat UI, but the stall is not independently re-confirmed fixed. Hashed module-class overrides (frame/conversation/composer/settings) are pinned to 0.1.0-rc.6.*

## Community skins

Theme/skin-shaped third-party listings. Unofficial. Not confirmed as complete `--dsw-alias-*` override sets.

### [dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale)

![unofficial](https://img.shields.io/badge/unofficial-64748b) ![unverified](https://img.shields.io/badge/unverified-d97706)

DSH Web whale-girl skin series (maid-atelier). Theme/skin-shaped third-party listing.

**Repo:** [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) · **License:** CC-BY-NC-SA-4.0 · **Status:** unverified (0.1.0-rc.5)

*Not verified as a --dsw-alias-* token override.*

### [dsh-qq2006](https://github.com/LaplaceYoung/dsh-qq2006)

![unofficial](https://img.shields.io/badge/unofficial-64748b) ![unverified](https://img.shields.io/badge/unverified-d97706)

QQ2006 skin plugin: registers a qq2006 theme, mirrors body[data-ds-skin], ships a global skin sheet and assets.

**Repo:** [LaplaceYoung/dsh-qq2006](https://github.com/LaplaceYoung/dsh-qq2006) · **Status:** unverified (0.1.0-rc.5)

*Tagged dsh-skin. Not verified as a --dsw-alias-* token override.*

### [dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui)

![unofficial](https://img.shields.io/badge/unofficial-64748b) ![unverified](https://img.shields.io/badge/unverified-d97706)

Third-party plugin/skin collection for the dsh Web UI. Skin center routes around the theme-persistence gap. Also listed in awesome-dsh-plugins.

**Repo:** [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) · **Status:** unverified (0.1.0-rc.5)

*Not verified as a --dsw-alias-* token override.*

## Companions

Desktop pets and extras that live beside the UI. Not token skins — still part of the dive.

### [whale-girl](https://github.com/vlln/whale-girl)

![unofficial](https://img.shields.io/badge/unofficial-64748b) ![unverified](https://img.shields.io/badge/unverified-d97706)

DSH Web GUI desktop-pet plugin (QQ pet form): floating companion. Theme/skin-shaped listing.

**Repo:** [vlln/whale-girl](https://github.com/vlln/whale-girl) · **Status:** unverified (0.1.0-rc.5)

*Not verified as a --dsw-alias-* token override.*

## Live gallery

The [deep-seek-universe gallery](https://dshworks.github.io/awesome-dsh-themes/) lives on GitHub Pages (`/docs`). Same entries. More water. Same honesty.

## Add a theme

Open a PR against [`data/themes.json`](data/themes.json) only; the README and `docs/themes.json` are regenerated. See [CONTRIBUTING.md](CONTRIBUTING.md). A theme here is a ThemeRuntime, a `--dsw-*` override set, a skin that actually restyles the dsh Web UI, or a companion that lives beside it. The official package is an extension point, not a store, and this list is not one either. A real preview image helps a lot. Please label unofficial work unofficial.

## License

MIT. **Not affiliated with DeepSeek.**

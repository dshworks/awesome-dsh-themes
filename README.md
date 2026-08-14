# awesome-dsh-themes [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[![powered by dsh](https://img.shields.io/badge/powered__by-dsh-4D6BFE?logo=deepseek)](https://github.com/deepseek-ai/deepseek-harness)
[![license: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![live gallery](https://img.shields.io/badge/live_gallery-dive_in-0ea5e9)](https://dshworks.github.io/awesome-dsh-themes/)

<p align="center">
  <img src="docs/assets/banner.svg" alt="A whale diving through a bioluminescent sea of dsh themes" width="800">
</p>

A curated list of [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`) themes and `--dsw-*` token skins.

**[Open the live gallery](https://dshworks.github.io/awesome-dsh-themes/)** — wild whales, token seas, and a little ❤️. Welcome.

Most awesome lists are prose. This one is data: [`data/themes.json`](data/themes.json) is the source of truth; this README is rendered from it. Build on the JSON directly:

```sh
curl -s https://raw.githubusercontent.com/dshworks/awesome-dsh-themes/main/data/themes.json
```

## Contents

- [The token seam](#the-token-seam)
- [Runtime](#runtime)
- [Token skins](#token-skins)
- [Skins](#skins)
- [Companions](#companions)
- [Live gallery](#live-gallery)
- [Add a theme](#add-a-theme)
- [License](#license)

## The token seam

Theming is ThemeRuntime over `--dsw-*` tokens: a static scale (`--dsw-static-*`) plus alias semantic layers (`--dsw-alias-*`). Built-in preference is `light` / `dark` / `system`. Five sheets ship in `@deepseek-ai/dsh-client-ui-theme`: `base`, `design-platform`, `scrollbar`, `gradient-shadow-text`, `shiki`.

The ThemeRuntime package is **not a theme store**. Its README says third-party themes are an extension point, not a product — registering one means overriding same-named alias variables, and there is no validation that an override set is complete.

The `dsh-theme` and `dsh-skin` GitHub topics keep growing. A short list is still honest; inventing skins would be worse. No harness themes turned up on gist.

## Runtime

ThemeRuntime over `--dsw-*` tokens. A lantern, not a marketplace.

### [dsh-client-ui-theme](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/client/ui-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark)** — tiny fake dsh window, real `--dsw-*` tokens.

ThemeRuntime over --dsw-* tokens (static scale + alias semantic layers); light/dark/system. Five sheets: base, design-platform, scrollbar, gradient-shadow-text, shiki. Third-party themes are an extension point, not a product. Not a theme store.

**Repo:** [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/client/ui-theme) · **License:** MIT · **Package:** [`@deepseek-ai/dsh-client-ui-theme`](https://www.npmjs.com/package/@deepseek-ai/dsh-client-ui-theme) · **dsh:** 0.1.0-rc.6

## Token skins

Community `--dsw-static-*` / `--dsw-alias-*` override sets that restyle the Web UI.

### [dsh-black-whale](https://github.com/147228/dsh-black-whale)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark&css=https%3A%2F%2Fraw.githubusercontent.com%2F147228%2Fdsh-black-whale%2Fmain%2Fsrc%2Fclient%2Fblack-whale.module.css"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark&css=https%3A%2F%2Fraw.githubusercontent.com%2F147228%2Fdsh-black-whale%2Fmain%2Fsrc%2Fclient%2Fblack-whale.module.css)** — tiny fake dsh window, real `--dsw-*` tokens plus this skin's override sheet.

<img src="https://raw.githubusercontent.com/147228/dsh-black-whale/main/preview/dark.png" width="360" alt="dsh-black-whale preview">

Black Whale Lab --dsw-* token skin for the dsh Web UI: 黑鲸 × 夕小瑶 laboratory look.

**Repo:** [147228/dsh-black-whale](https://github.com/147228/dsh-black-whale) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-claude-theme](https://github.com/chajiuqqq/dsh-claude-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark)** — tiny fake dsh window, real `--dsw-*` tokens.

Claude-style --dsw-* interface theme for the dsh Web UI.

**Repo:** [chajiuqqq/dsh-claude-theme](https://github.com/chajiuqqq/dsh-claude-theme) · **dsh:** 0.1.0-rc.6

### [dsh-four-seasons-theme](https://github.com/czj527/dsh-four-seasons-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark)** — tiny fake dsh window, real `--dsw-*` tokens.

Four-seasons --dsw-* theme for the dsh Web GUI: seasonal palettes, weather particles, day/night, moon, and a night lamp.

**Repo:** [czj527/dsh-four-seasons-theme](https://github.com/czj527/dsh-four-seasons-theme) · **dsh:** 0.1.0-rc.6

### [dsh-miku-skin](https://github.com/stushansusu/dsh-miku-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark&css=https%3A%2F%2Fraw.githubusercontent.com%2Fstushansusu%2Fdsh-miku-skin%2Fmain%2Fsrc%2Fclient%2Fmiku.module.css"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark&css=https%3A%2F%2Fraw.githubusercontent.com%2Fstushansusu%2Fdsh-miku-skin%2Fmain%2Fsrc%2Fclient%2Fmiku.module.css)** — tiny fake dsh window, real `--dsw-*` tokens plus this skin's override sheet.

<img src="https://raw.githubusercontent.com/stushansusu/dsh-miku-skin/main/preview/dark.png" width="360" alt="dsh-miku-skin preview">

Hatsune Miku --dsw-* token skin: blue-purple-magenta gradients, frosted panels, custom wallpaper, light and dark.

**Repo:** [stushansusu/dsh-miku-skin](https://github.com/stushansusu/dsh-miku-skin) · **License:** BSD-3-Clause · **dsh:** 0.1.0-rc.6

### [dsh-nachoneko-theme](https://github.com/TheMyceliumOfAntan/dsh-nachoneko-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark&css=https%3A%2F%2Fraw.githubusercontent.com%2FTheMyceliumOfAntan%2Fdsh-nachoneko-theme%2Fmain%2Fassets%2Fnachoneko.css"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark&css=https%3A%2F%2Fraw.githubusercontent.com%2FTheMyceliumOfAntan%2Fdsh-nachoneko-theme%2Fmain%2Fassets%2Fnachoneko.css)** — tiny fake dsh window, real `--dsw-*` tokens plus this skin's override sheet.

<img src="https://raw.githubusercontent.com/TheMyceliumOfAntan/dsh-nachoneko-theme/main/assets/screenshot.png" width="360" alt="dsh-nachoneko-theme preview">

Nachoneko (甘城猫猫) skin for the dsh Web GUI: #A3D3FF --dsw-static-*/--dsw-alias-* override set, full-screen wallpaper, frosted-glass sidebar/composer/code blocks and a settings-panel corner art, shipped as a self-contained dsh bundle+client plugin.

**Repo:** [TheMyceliumOfAntan/dsh-nachoneko-theme](https://github.com/TheMyceliumOfAntan/dsh-nachoneko-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6

*Confirmed --dsw-alias-* override set (deepseek/blue static scales + alias layers) and boot roster on 0.1.0-rc.6; a fresh main-UI boot stall was reported on one machine -- client.js payload was cut 440KB -> 238KB (wallpaper base64 deduped) in response, and a local no-cache fresh boot reaches the main chat UI, but the stall is not independently re-confirmed fixed. Hashed module-class overrides (frame/conversation/composer/settings) are pinned to 0.1.0-rc.6.*

### [dsh-skin](https://github.com/KinGao294/dsh-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark)** — tiny fake dsh window, real `--dsw-*` tokens.

Skin switcher and custom wallpaper for dsh: curated --dsw-alias-* palettes with opacity and blur, persisted per browser.

**Repo:** [KinGao294/dsh-skin](https://github.com/KinGao294/dsh-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-skin-diablo-dark](https://github.com/dengxuhui/dsh-skin-diablo-dark)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark&css=https%3A%2F%2Fraw.githubusercontent.com%2Fdengxuhui%2Fdsh-skin-diablo-dark%2Fmain%2Fsrc%2Fclient%2Fdiablo-dark.module.css"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark&css=https%3A%2F%2Fraw.githubusercontent.com%2Fdengxuhui%2Fdsh-skin-diablo-dark%2Fmain%2Fsrc%2Fclient%2Fdiablo-dark.module.css)** — tiny fake dsh window, real `--dsw-*` tokens plus this skin's override sheet.

Diablo dark-gothic --dsw-* token skin (暗黑·熔火) for the dsh Web GUI.

**Repo:** [dengxuhui/dsh-skin-diablo-dark](https://github.com/dengxuhui/dsh-skin-diablo-dark) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-skin-kawaii2000](https://github.com/shunkwon/dsh-skin-kawaii2000)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark&css=https%3A%2F%2Fraw.githubusercontent.com%2Fshunkwon%2Fdsh-skin-kawaii2000%2Fmain%2Flib%2Fskin.css"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark&css=https%3A%2F%2Fraw.githubusercontent.com%2Fshunkwon%2Fdsh-skin-kawaii2000%2Fmain%2Flib%2Fskin.css)** — tiny fake dsh window, real `--dsw-*` tokens plus this skin's override sheet.

<img src="https://raw.githubusercontent.com/shunkwon/dsh-skin-kawaii2000/main/screenshots/dark.png" width="360" alt="dsh-skin-kawaii2000 preview">

Kawaii 2000s --dsw-* token skin: candy pink and baby blue for the dsh Web UI.

**Repo:** [shunkwon/dsh-skin-kawaii2000](https://github.com/shunkwon/dsh-skin-kawaii2000) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-theme](https://github.com/oil-oil/dsh-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark)** — tiny fake dsh window, real `--dsw-*` tokens.

Live theme editor for dsh: curated --dsw-* palettes and typography controls.

**Repo:** [oil-oil/dsh-theme](https://github.com/oil-oil/dsh-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-theme-neko](https://github.com/drfccv/dsh-theme-neko)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark&css=https%3A%2F%2Fraw.githubusercontent.com%2Fdrfccv%2Fdsh-theme-neko%2Fmain%2Fsrc%2Fclient%2Fneko.module.css"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark&css=https%3A%2F%2Fraw.githubusercontent.com%2Fdrfccv%2Fdsh-theme-neko%2Fmain%2Fsrc%2Fclient%2Fneko.module.css)** — tiny fake dsh window, real `--dsw-*` tokens plus this skin's override sheet.

<img src="https://raw.githubusercontent.com/drfccv/dsh-theme-neko/main/sample/screenshot.png" width="360" alt="dsh-theme-neko preview">

Nachoneko (甘城猫猫) --dsw-* token skin for the dsh Web GUI.

**Repo:** [drfccv/dsh-theme-neko](https://github.com/drfccv/dsh-theme-neko) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-theme-ti](https://github.com/longyu065/dsh-theme-ti)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark)** — tiny fake dsh window, real `--dsw-*` tokens.

<img src="https://raw.githubusercontent.com/longyu065/dsh-theme-ti/master/wings.png" width="360" alt="dsh-theme-ti preview">

Dota 2 The International --dsw-* token skin: TI6 red, immortal-shield gold, vector wings and a starfield.

**Repo:** [longyu065/dsh-theme-ti](https://github.com/longyu065/dsh-theme-ti) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-theme-vscode-red](https://github.com/RainbowDashy/dsh-theme-vscode-red)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark)** — tiny fake dsh window, real `--dsw-*` tokens.

VS Code Red --dsw-* token theme: deep maroon surfaces with a #cc3333 accent, applied from client JS.

**Repo:** [RainbowDashy/dsh-theme-vscode-red](https://github.com/RainbowDashy/dsh-theme-vscode-red) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-themes](https://github.com/MangMax/dsh-themes)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark)** — tiny fake dsh window, real `--dsw-*` tokens.

Appearance plugin for dsh: built-in --dsw-* palettes, mixed light/dark, Open VSX search, and VS Code theme import.

**Repo:** [MangMax/dsh-themes](https://github.com/MangMax/dsh-themes) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-web-skins](https://github.com/ZeroZ-lab/dsh-web-skins)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark)** — tiny fake dsh window, real `--dsw-*` tokens.

21 editor-inspired --dsw-* theme families for the dsh Web UI (Gruvbox, Catppuccin, Dracula, Solarized, Tokyo Night, and more), each with light and dark.

**Repo:** [ZeroZ-lab/dsh-web-skins](https://github.com/ZeroZ-lab/dsh-web-skins) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-xiaoyao-skins](https://github.com/147228/dsh-xiaoyao-skins)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark)** — tiny fake dsh window, real `--dsw-*` tokens.

<img src="https://raw.githubusercontent.com/147228/dsh-xiaoyao-skins/main/site/previews/black-whale.jpg" width="360" alt="dsh-xiaoyao-skins preview">

夕小瑶 × dsh Web skin collection, installer, and community toolchain.

**Repo:** [147228/dsh-xiaoyao-skins](https://github.com/147228/dsh-xiaoyao-skins) · **dsh:** 0.1.0-rc.6

*Gallery: https://147228.github.io/dsh-xiaoyao-skins/*

### [freestyle-dsh-theme](https://github.com/suzike/freestyle-dsh-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark)** — tiny fake dsh window, real `--dsw-*` tokens.

dsh theme studio: OKLCH theme proposals and a designer that persists across restarts.

**Repo:** [suzike/freestyle-dsh-theme](https://github.com/suzike/freestyle-dsh-theme) · **License:** BSD-3-Clause · **dsh:** 0.1.0-rc.6

## Skins

Theme and skin listings that restyle the dsh Web UI.

### [dsh-client-ui-skin-priestess](https://github.com/Sealessland/dsh-client-ui-skin-priestess)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark)** — tiny fake dsh window, real `--dsw-*` tokens.

<img src="https://raw.githubusercontent.com/Sealessland/dsh-client-ui-skin-priestess/main/assets/priestess-dark.webp" width="360" alt="dsh-client-ui-skin-priestess preview">

Priestess dual-theme skin for the dsh Web UI: night portrait with graphite glass, light portrait with cool-white glass.

**Repo:** [Sealessland/dsh-client-ui-skin-priestess](https://github.com/Sealessland/dsh-client-ui-skin-priestess) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark)** — tiny fake dsh window, real `--dsw-*` tokens.

<img src="https://raw.githubusercontent.com/Small-tailqwq/dsh-deep-whale/main/maid-atelier/preview/dark.webp" width="360" alt="dsh-deep-whale preview">

DSH Web whale-girl skin series (maid-atelier). Theme/skin-shaped third-party listing.

**Repo:** [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) · **License:** CC-BY-NC-SA-4.0 · **dsh:** 0.1.0-rc.5

### [dsh-qq2006](https://github.com/LaplaceYoung/dsh-qq2006)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark)** — tiny fake dsh window, real `--dsw-*` tokens.

QQ2006 skin plugin: registers a qq2006 theme, mirrors body[data-ds-skin], ships a global skin sheet and assets.

**Repo:** [LaplaceYoung/dsh-qq2006](https://github.com/LaplaceYoung/dsh-qq2006) · **License:** BSD-3-Clause · **dsh:** 0.1.0-rc.5

### [dsh-theme-taffy](https://github.com/Misaki14987/dsh-theme-taffy)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark)** — tiny fake dsh window, real `--dsw-*` tokens.

<img src="https://raw.githubusercontent.com/Misaki14987/dsh-theme-taffy/main/assets/art-light.jpg" width="360" alt="dsh-theme-taffy preview">

Taffy-themed skin for the dsh Web UI (我不是雏草姬).

**Repo:** [Misaki14987/dsh-theme-taffy](https://github.com/Misaki14987/dsh-theme-taffy) · **dsh:** 0.1.0-rc.6

### [dsh-tp7-skin](https://github.com/adamwdff/dsh-tp7-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark)** — tiny fake dsh window, real `--dsw-*` tokens.

<img src="https://raw.githubusercontent.com/adamwdff/dsh-tp7-skin/master/docs/preview.png" width="360" alt="dsh-tp7-skin preview">

Turbo Pascal 7.0 blue-screen skin for the dsh Web GUI.

**Repo:** [adamwdff/dsh-tp7-skin](https://github.com/adamwdff/dsh-tp7-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark)** — tiny fake dsh window, real `--dsw-*` tokens.

Third-party plugin/skin collection for the dsh Web UI. Skin center routes around the theme-persistence gap. Also listed in awesome-dsh-plugins.

**Repo:** [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) · **dsh:** 0.1.0-rc.5

### [dsh-webUI-Glass-Theme](https://github.com/makuralymi/dsh-webUI-Glass-Theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark)** — tiny fake dsh window, real `--dsw-*` tokens.

<img src="https://raw.githubusercontent.com/makuralymi/dsh-webUI-Glass-Theme/master/assets/sc.png" width="360" alt="dsh-webUI-Glass-Theme preview">

Frosted-glass theme for the dsh Web UI: translucent surfaces and a global backdrop blur.

**Repo:** [makuralymi/dsh-webUI-Glass-Theme](https://github.com/makuralymi/dsh-webUI-Glass-Theme) · **dsh:** 0.1.0-rc.6

### [dskin](https://github.com/dancingmemory/dskin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark)** — tiny fake dsh window, real `--dsw-*` tokens.

<img src="https://raw.githubusercontent.com/dancingmemory/dskin/main/preview/dark.png" width="360" alt="dskin preview">

Cartoon pixel skin for the dsh Web GUI: living pixel pets that stroll, blink, and hop.

**Repo:** [dancingmemory/dskin](https://github.com/dancingmemory/dskin) · **License:** MIT · **dsh:** 0.1.0-rc.6

## Companions

Desktop pets and extras that live beside the UI. Not token skins — still part of the dive.

### [whale-girl](https://github.com/vlln/whale-girl)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark"><img src="docs/assets/whale-mark.svg" width="72" height="72" alt="" align="left"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?scheme=dark)** — tiny fake dsh window, real `--dsw-*` tokens.

DSH Web GUI desktop-pet plugin (QQ pet form): floating companion. Theme/skin-shaped listing.

**Repo:** [vlln/whale-girl](https://github.com/vlln/whale-girl) · **License:** MIT · **dsh:** 0.1.0-rc.5

## Live gallery

The [deep-seek-universe gallery](https://dshworks.github.io/awesome-dsh-themes/) lives on GitHub Pages (`/docs`). Same entries. More water. Each card embeds a tiny fake dsh window painted from the real `--dsw-*` tokens (and an override sheet when we have one).

## Add a theme

Open a PR against [`data/themes.json`](data/themes.json) only; the README and `docs/themes.json` are regenerated. See [CONTRIBUTING.md](CONTRIBUTING.md). A theme here is a ThemeRuntime, a `--dsw-*` override set, a skin that actually restyles the dsh Web UI, or a companion that lives beside it. The ThemeRuntime package is an extension point, not a store, and this list is not one either. A real preview image helps a lot. If you ship a CSS override sheet, add `previewCss` so the live window can wear it.

## License

MIT. **Not affiliated with DeepSeek.**

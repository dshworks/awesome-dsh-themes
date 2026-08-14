# awesome-dsh-themes [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[![powered by dsh](https://img.shields.io/badge/powered__by-dsh-4D6BFE?logo=deepseek)](https://github.com/deepseek-ai/deepseek-harness)
[![license: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![live gallery](https://img.shields.io/badge/live_gallery-dive_in-0ea5e9)](https://dshworks.github.io/awesome-dsh-themes/)

<p align="center">
  <img src="docs/assets/banner.svg" alt="A whale diving through a bioluminescent sea of dsh themes" width="800">
</p>

A curated list of [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`) themes and `--dsw-*` token skins — 189 entries, 31 with live in-browser previews, 159 verified against a dsh release.

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
- [Fun / extras](#fun-extras)
- [Live gallery](#live-gallery)
- [Add a theme](#add-a-theme)
- [Roadmap](#roadmap)
- [License](#license)

## The token seam

Theming is ThemeRuntime over `--dsw-*` tokens: a static scale (`--dsw-static-*`) plus alias semantic layers (`--dsw-alias-*`). Built-in preference is `light` / `dark` / `system`. Five sheets ship in `@deepseek-ai/dsh-client-ui-theme`: `base`, `design-platform`, `scrollbar`, `gradient-shadow-text`, `shiki`.

The ThemeRuntime package is **not a theme store**. Its README says third-party themes are an extension point, not a product — registering one means overriding same-named alias variables, and there is no validation that an override set is complete.

The `dsh-theme` and `dsh-skin` GitHub topics keep growing; the discovery watch sweeps them and everything here landed as data from a real repo — nothing is invented. Entries marked *verified* were checked against the dsh version in their `verifiedAgainst` field.

## Runtime

ThemeRuntime over `--dsw-*` tokens. A lantern, not a marketplace.

### [dsh-client-ui-theme](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/client/ui-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-client-ui-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-client-ui-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-client-ui-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

ThemeRuntime over --dsw-* tokens (static scale + alias semantic layers); light/dark/system. Five sheets: base, design-platform, scrollbar, gradient-shadow-text, shiki. Third-party themes are an extension point, not a product. Not a theme store.

**Repo:** [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/client/ui-theme) · **License:** MIT · **Package:** [`@deepseek-ai/dsh-client-ui-theme`](https://www.npmjs.com/package/@deepseek-ai/dsh-client-ui-theme) · **dsh:** 0.1.0-rc.6

## Token skins

Community `--dsw-static-*` / `--dsw-alias-*` override sets that restyle the Web UI.

### [chiral-pulse](https://github.com/MoonShadow1976/chiral-pulse)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=chiral-pulse&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="chiral-pulse preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=chiral-pulse&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Death Stranding --dsw-* skin with a BB vital-signs monitor: amber-on-ink palette and a live heartbeat paper feed under the composer.

```sh
dsh plugin --profile web add github:MoonShadow1976/chiral-pulse
```

**Repo:** [MoonShadow1976/chiral-pulse](https://github.com/MoonShadow1976/chiral-pulse) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [claude-parchment-theme](https://github.com/RayYeung1989/claude-parchment-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=claude-parchment-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="claude-parchment-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=claude-parchment-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Claude-style parchment theme for the Web UI: warm paper palette, terracotta accents, serif titles, and full DSW token coverage.

```sh
dsh plugin --profile web add github:RayYeung1989/claude-parchment-theme
```

**Repo:** [RayYeung1989/claude-parchment-theme](https://github.com/RayYeung1989/claude-parchment-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [deepseek-harness-plugin-image-skin](https://github.com/fufankeji/deepseek-harness-plugin-image-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=deepseek-harness-plugin-image-skin&scheme=dark"><img src="https://raw.githubusercontent.com/fufankeji/deepseek-harness-plugin-image-skin/main/.github/assets/readme/hero.png" width="360" alt="deepseek-harness-plugin-image-skin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=deepseek-harness-plugin-image-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Image-to-skin studio that turns a picture into an installable dsh Web skin plugin with light and dark adaptation.

```sh
dsh plugin --profile web add github:fufankeji/deepseek-harness-plugin-image-skin
```

**Repo:** [fufankeji/deepseek-harness-plugin-image-skin](https://github.com/fufankeji/deepseek-harness-plugin-image-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [deepseek-harness-skin](https://github.com/HeiGeAi/deepseek-harness-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=deepseek-harness-skin&scheme=dark"><img src="https://raw.githubusercontent.com/HeiGeAi/deepseek-harness-skin/main/docs/images/skin-center.webp" width="360" alt="deepseek-harness-skin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=deepseek-harness-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

21 built-in Web UI skins plus one-image custom palettes: QQ 2007/2008, Miku, Genshin, Naruto, Wuthering Waves, and more, with contrast-preserving --dsw-* derivation.

```sh
bash scripts/install.sh /path/to/deepseek-harness
```

**Repo:** [HeiGeAi/deepseek-harness-skin](https://github.com/HeiGeAi/deepseek-harness-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [deepseek-harness-themes](https://github.com/orxz/deepseek-harness-themes/tree/HEAD/packages/ui)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=deepseek-harness-themes&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="deepseek-harness-themes preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=deepseek-harness-themes&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Six alias-token themes: DeepSeek light, OLED, Dracula, Catppuccin Mocha, Tokyo Night, and GitHub Dark, with a Settings General picker.

```sh
dsh plugin --profile web add github:orxz/deepseek-harness-themes
```

**Repo:** [orxz/deepseek-harness-themes](https://github.com/orxz/deepseek-harness-themes/tree/HEAD/packages/ui) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dhs-theme-plugin](https://github.com/kongxiangyiren/dhs-theme-plugin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dhs-theme-plugin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dhs-theme-plugin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dhs-theme-plugin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Theme manager for the dsh Web UI: a Settings Theme section with Forest Green and Ocean Blue alias-token skins, plus upload-and-switch for custom JS themes persisted on disk.

```sh
dsh plugin --profile web add github:kongxiangyiren/dhs-theme-plugin
```

**Repo:** [kongxiangyiren/dhs-theme-plugin](https://github.com/kongxiangyiren/dhs-theme-plugin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [ds-image-skin](https://github.com/ahren112/ds-image-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=ds-image-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="ds-image-skin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=ds-image-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Upload an image, k-means extract a palette, generate light/dark --dsw-* tokens with WCAG contrast, and use the image as wallpaper.

```sh
dsh plugin --profile web add github:ahren112/ds-image-skin
```

**Repo:** [ahren112/ds-image-skin](https://github.com/ahren112/ds-image-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-angelina-themes](https://github.com/bilbillm/deepseek-harness-angelina-themes)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-angelina-themes&scheme=dark"><img src="https://raw.githubusercontent.com/bilbillm/deepseek-harness-angelina-themes/main/src/assets/angelina-light-hero.webp" width="360" alt="dsh-angelina-themes preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-angelina-themes&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Angelina light and dark glass themes with restrained parallax for the DeepSeek Harness Web UI.

```sh
dsh plugin --profile web add github:bilbillm/deepseek-harness-angelina-themes
```

**Repo:** [bilbillm/deepseek-harness-angelina-themes](https://github.com/bilbillm/deepseek-harness-angelina-themes) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-aqua](https://github.com/WYH66666666/DSH)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-aqua&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-aqua preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-aqua&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Aqua, a toggleable deep-sea theme layer for the DeepSeek Harness web surface.

```sh
dsh plugin --profile web add github:WYH66666666/DSH
```

**Repo:** [WYH66666666/DSH](https://github.com/WYH66666666/DSH) · **License:** MIT · **Package:** [`@deepseek-ai/dsh-client-ui-aqua`](https://www.npmjs.com/package/@deepseek-ai/dsh-client-ui-aqua) · **dsh:** 0.1.0-rc.6

### [dsh-aurora](https://github.com/wenliang9527/dsh-themes/tree/HEAD/plugins/dsh-aurora/persist)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-aurora&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-aurora preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-aurora&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Eight --dsw-* palettes for the dsh Web UI (aurora, sakura, bamboo, violet, amber, abyss, graphite, midnight), each with light and dark.

```sh
dsh plugin --profile web add github:wenliang9527/dsh-themes
```

**Repo:** [wenliang9527/dsh-themes](https://github.com/wenliang9527/dsh-themes/tree/HEAD/plugins/dsh-aurora/persist) · **dsh:** 0.1.0-rc.6

### [dsh-black-whale](https://github.com/147228/dsh-black-whale)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-black-whale&scheme=dark"><img src="https://raw.githubusercontent.com/147228/dsh-black-whale/main/preview/dark.png" width="360" alt="dsh-black-whale preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-black-whale&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Black Whale Lab --dsw-* token skin for the dsh Web UI: 黑鲸 × 夕小瑶 laboratory look.

```sh
dsh plugin --profile web add github:147228/dsh-black-whale
```

**Repo:** [147228/dsh-black-whale](https://github.com/147228/dsh-black-whale) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-blue-whale](https://github.com/starslittle/dsh-blue-whale)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-blue-whale&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-blue-whale preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-blue-whale&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Official DeepSeek Chat blue-whale default skin for DeepSeek Harness. Light and dark follow the built-in appearance; brand tokens use #4D6BFE.

```sh
dsh plugin --profile web add github:starslittle/dsh-blue-whale
```

**Repo:** [starslittle/dsh-blue-whale](https://github.com/starslittle/dsh-blue-whale) · **License:** MIT · **Package:** [`dsh-blue-whale`](https://www.npmjs.com/package/dsh-blue-whale) · **dsh:** 0.1.0-rc.6

### [dsh-blur-theme](https://github.com/hashdiana/dsh-blur-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-blur-theme&scheme=dark"><img src="https://raw.githubusercontent.com/hashdiana/dsh-blur-theme/main/p1.png" width="360" alt="dsh-blur-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-blur-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Frosted-glass --dsw-* theme for the dsh Web UI: floating rounded sidebar, frosted header, floating composer, and a live blur slider.

```sh
dsh plugin --profile web add github:hashdiana/dsh-blur-theme
```

**Repo:** [hashdiana/dsh-blur-theme](https://github.com/hashdiana/dsh-blur-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-catppuccin](https://github.com/zhijun-dai/dsh-Catppuccin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-catppuccin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-catppuccin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-catppuccin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Catppuccin pastel themes for DeepSeek Harness: Latte, Frappe, Macchiato, and Mocha.

```sh
dsh plugin --profile web add github:zhijun-dai/dsh-Catppuccin
```

**Repo:** [zhijun-dai/dsh-Catppuccin](https://github.com/zhijun-dai/dsh-Catppuccin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-catppuccin-nonamelego](https://github.com/NoNameLeGo/dsh-catppuccin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-catppuccin-nonamelego&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-catppuccin-nonamelego preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-catppuccin-nonamelego&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Catppuccin themes for the DeepSeek Harness web GUI: Latte, Frappe, Macchiato and Mocha.

```sh
dsh plugin --profile web add github:NoNameLeGo/dsh-catppuccin
```

**Repo:** [NoNameLeGo/dsh-catppuccin](https://github.com/NoNameLeGo/dsh-catppuccin) · **License:** MIT · **Package:** [`dsh-catppuccin`](https://www.npmjs.com/package/dsh-catppuccin) · **dsh:** 0.1.0-rc.6

### [dsh-chat-skin](https://github.com/1m01m0/dsh-chat-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-chat-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-chat-skin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-chat-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Client plugin with six gradient presets, custom wallpaper, and a Settings General skin card.

```sh
dsh plugin --profile web add github:1m01m0/dsh-chat-skin
```

**Repo:** [1m01m0/dsh-chat-skin](https://github.com/1m01m0/dsh-chat-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-classic-colorways](https://github.com/heiyouhu/dsh-themes)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-classic-colorways&scheme=dark"><img src="https://raw.githubusercontent.com/heiyouhu/dsh-themes/main/assets/previews/nord-dark.png" width="360" alt="dsh-classic-colorways preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-classic-colorways&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Appearance skin pack for the DeepSeek Harness Web GUI: Nord, Gruvbox, Solarized, Dracula, and Tokyo Night, each with light and dark variants.

```sh
dsh plugin --profile web add github:heiyouhu/dsh-themes
```

**Repo:** [heiyouhu/dsh-themes](https://github.com/heiyouhu/dsh-themes) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-claude-theme](https://github.com/chajiuqqq/dsh-claude-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-claude-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-claude-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-claude-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Claude-style --dsw-* interface theme for the dsh Web UI.

```sh
dsh plugin --profile web add github:chajiuqqq/dsh-claude-theme
```

**Repo:** [chajiuqqq/dsh-claude-theme](https://github.com/chajiuqqq/dsh-claude-theme) · **dsh:** 0.1.0-rc.6

### [dsh-cyberpunk-theme](https://github.com/ai7603/dsh-cyberpunk-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-cyberpunk-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-cyberpunk-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-cyberpunk-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Cyberpunk 2077 (Night City) theme for DeepSeek Harness — installable as a permanent composition plugin or a dynamic Cordis plugin.

```sh
dsh plugin --profile web add github:ai7603/dsh-cyberpunk-theme
```

**Repo:** [ai7603/dsh-cyberpunk-theme](https://github.com/ai7603/dsh-cyberpunk-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-deepsea-theme](https://github.com/i1j/dsh-deepsea-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-deepsea-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-deepsea-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-deepsea-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Deep Sea dark token theme for the DeepSeek Harness web UI, overriding --dsw-alias and --dsw-static tokens.

```sh
dsh plugin --profile web add github:i1j/dsh-deepsea-theme
```

**Repo:** [i1j/dsh-deepsea-theme](https://github.com/i1j/dsh-deepsea-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-eye-care](https://github.com/Anionex/dsh-eye-care)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-eye-care&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-eye-care preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-eye-care&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Warm light, warm dark, and system-aware eye-care palettes for the DeepSeek Harness Web UI.

```sh
dsh plugin --profile web add github:Anionex/dsh-eye-care
```

**Repo:** [Anionex/dsh-eye-care](https://github.com/Anionex/dsh-eye-care) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-eyecare-theme](https://github.com/Cocowwy/dsh-plugin-eyecare-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-eyecare-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-eyecare-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-eyecare-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Customizable eye-care palettes for the DeepSeek Harness Web UI.

```sh
dsh plugin --profile web add github:Cocowwy/dsh-plugin-eyecare-theme
```

**Repo:** [Cocowwy/dsh-plugin-eyecare-theme](https://github.com/Cocowwy/dsh-plugin-eyecare-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-four-seasons-theme](https://github.com/czj527/dsh-four-seasons-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-four-seasons-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-four-seasons-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-four-seasons-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Four-seasons --dsw-* theme for the dsh Web GUI: seasonal palettes, weather particles, day/night, moon, and a night lamp.

```sh
dsh plugin --profile web add github:czj527/dsh-four-seasons-theme
```

**Repo:** [czj527/dsh-four-seasons-theme](https://github.com/czj527/dsh-four-seasons-theme) · **dsh:** 0.1.0-rc.6

### [dsh-genshin-skin](https://github.com/bupianlizhugui/dsh-genshin-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-genshin-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-genshin-skin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-genshin-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Snezhnaya Genshin-inspired skin: gold tokens and a snow-palace wallpaper.

```sh
dsh plugin --profile web add github:bupianlizhugui/dsh-genshin-skin
```

**Repo:** [bupianlizhugui/dsh-genshin-skin](https://github.com/bupianlizhugui/dsh-genshin-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-gui-customization](https://github.com/LAN-TINA-WS/dsh-gui-customization/tree/HEAD/packages/dsh-gui-customization)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-gui-customization&scheme=dark"><img src="https://raw.githubusercontent.com/LAN-TINA-WS/dsh-gui-customization/master/docs/screenshots/gui-customization.png" width="360" alt="dsh-gui-customization preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-gui-customization&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Nous-blue theme workshop: four presets plus 13 custom colors, ambient glow, and a file-picker wallpaper, persisted in Settings.

```sh
dsh plugin --profile web add github:LAN-TINA-WS/dsh-gui-customization
```

**Repo:** [LAN-TINA-WS/dsh-gui-customization](https://github.com/LAN-TINA-WS/dsh-gui-customization/tree/HEAD/packages/dsh-gui-customization) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-image-theme](https://github.com/Carpon39038/dsh-image-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-image-theme&scheme=dark"><img src="https://raw.githubusercontent.com/Carpon39038/dsh-image-theme/main/docs/preview.png" width="360" alt="dsh-image-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-image-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Warp-inspired image-to-theme plugin: extract a five-color Lab palette from an uploaded background, map it onto --dsw-* glass surfaces, and use the image as a full-window wallpaper.

```sh
dsh plugin --profile web add github:Carpon39038/dsh-image-theme
```

**Repo:** [Carpon39038/dsh-image-theme](https://github.com/Carpon39038/dsh-image-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-liang-skin](https://github.com/kingOfSoySauce/dsh-liang-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-liang-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-liang-skin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-liang-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

An opt-in adaptive reasoning slider skin for DeepSeek Harness.

```sh
dsh plugin --profile web add github:kingOfSoySauce/dsh-liang-skin
```

**Repo:** [kingOfSoySauce/dsh-liang-skin](https://github.com/kingOfSoySauce/dsh-liang-skin) · **Package:** [`dsh-client-liang-intensity-skin`](https://www.npmjs.com/package/dsh-client-liang-intensity-skin) · **dsh:** 0.1.0-rc.6

### [dsh-liquid-theme](https://github.com/more-nico/dshLiquidTheme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-liquid-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-liquid-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-liquid-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

macOS-style floating Liquid Glass theme for DeepSeek Harness Web UI

```sh
dsh plugin --profile web add github:more-nico/dshLiquidTheme
```

**Repo:** [more-nico/dshLiquidTheme](https://github.com/more-nico/dshLiquidTheme) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-macos-theme](https://github.com/dataizu/dsh-macos-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-macos-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-macos-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-macos-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

macOS-style Web theme with Apple colors, frosted chrome, and an underwater whale background.

```sh
dsh plugin --profile web add github:dataizu/dsh-macos-theme
```

**Repo:** [dataizu/dsh-macos-theme](https://github.com/dataizu/dsh-macos-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-mamba-theme](https://github.com/wangq32801-dev/dsh-mamba-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-mamba-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-mamba-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-mamba-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Black-and-gold mamba Web theme: pure black canvas, mamba-gold accents, and a hero black-mamba backdrop.

```sh
dsh plugin --profile web add github:wangq32801-dev/dsh-mamba-theme
```

**Repo:** [wangq32801-dev/dsh-mamba-theme](https://github.com/wangq32801-dev/dsh-mamba-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-material-you](https://github.com/mtaech/dsh-material-you/tree/HEAD/theme-material-you)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-material-you&scheme=dark"><img src="https://raw.githubusercontent.com/mtaech/dsh-material-you/main/demo.png" width="360" alt="dsh-material-you preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-material-you&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Material You (M3) --dsw-* skin: HCT tonal palette from seed #3B82F6 and Maple Mono NF CN, light blue-and-white plus dark.

```sh
dsh plugin --profile web add github:mtaech/dsh-material-you
```

**Repo:** [mtaech/dsh-material-you](https://github.com/mtaech/dsh-material-you/tree/HEAD/theme-material-you) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-matugen](https://github.com/Nocehi/dsh-matugen)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-matugen&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-matugen preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-matugen&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Matugen and DankMaterialShell palette bridge for DeepSeek Harness web themes.

```sh
dsh plugin --profile web add github:Nocehi/dsh-matugen
```

**Repo:** [Nocehi/dsh-matugen](https://github.com/Nocehi/dsh-matugen) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-miku-skin](https://github.com/stushansusu/dsh-miku-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-miku-skin&scheme=dark"><img src="https://raw.githubusercontent.com/stushansusu/dsh-miku-skin/main/preview/dark.png" width="360" alt="dsh-miku-skin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-miku-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Hatsune Miku --dsw-* token skin: blue-purple-magenta gradients, frosted panels, custom wallpaper, light and dark.

```sh
dsh plugin --profile web add github:stushansusu/dsh-miku-skin
```

**Repo:** [stushansusu/dsh-miku-skin](https://github.com/stushansusu/dsh-miku-skin) · **License:** BSD-3-Clause · **dsh:** 0.1.0-rc.6

### [dsh-modern-skin](https://github.com/gavinlee9051/dsh-modern-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-modern-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-modern-skin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-modern-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Modern Agent-client skin for the dsh Web UI with five switchable palettes.

```sh
dsh plugin --profile web add github:gavinlee9051/dsh-modern-skin
```

**Repo:** [gavinlee9051/dsh-modern-skin](https://github.com/gavinlee9051/dsh-modern-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-nachoneko-theme](https://github.com/TheMyceliumOfAntan/dsh-nachoneko-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-nachoneko-theme&scheme=dark"><img src="https://raw.githubusercontent.com/TheMyceliumOfAntan/dsh-nachoneko-theme/main/assets/screenshot.png" width="360" alt="dsh-nachoneko-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-nachoneko-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Nachoneko (甘城猫猫) skin for the dsh Web GUI: #A3D3FF --dsw-static-*/--dsw-alias-* override set, full-screen wallpaper, frosted-glass sidebar/composer/code blocks and a settings-panel corner art, shipped as a self-contained dsh bundle+client plugin.

```sh
dsh plugin --profile web add github:TheMyceliumOfAntan/dsh-nachoneko-theme
```

**Repo:** [TheMyceliumOfAntan/dsh-nachoneko-theme](https://github.com/TheMyceliumOfAntan/dsh-nachoneko-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6

*Confirmed --dsw-alias-* override set (deepseek/blue static scales + alias layers) and boot roster on 0.1.0-rc.6; a fresh main-UI boot stall was reported on one machine -- client.js payload was cut 440KB -> 238KB (wallpaper base64 deduped) in response, and a local no-cache fresh boot reaches the main chat UI, but the stall is not independently re-confirmed fixed. Hashed module-class overrides (frame/conversation/composer/settings) are pinned to 0.1.0-rc.6.*

### [dsh-outdoor-theme](https://github.com/Estellalee/dsh-outdoor-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-outdoor-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-outdoor-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-outdoor-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

DSH 皮肤：山野向导（Trail Guide）· 户外徒步风换皮 + 右侧路标工作进度面板

```sh
dsh plugin --profile web add github:Estellalee/dsh-outdoor-theme
```

**Repo:** [Estellalee/dsh-outdoor-theme](https://github.com/Estellalee/dsh-outdoor-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-paper-theme](https://github.com/Baurt-Li/dsh-paper-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-paper-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-paper-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-paper-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Warm paper light theme for the dsh Web UI covering the design tokens. Leaves dark mode alone.

```sh
dsh plugin --profile web add github:Baurt-Li/dsh-paper-theme
```

**Repo:** [Baurt-Li/dsh-paper-theme](https://github.com/Baurt-Li/dsh-paper-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-paper-theme-blaczz](https://github.com/Blaczz/dsh-paper-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-paper-theme-blaczz&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-paper-theme-blaczz preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-paper-theme-blaczz&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness Web UI theme-color plugin: a warm cream paper eye-friendly palette with a few preset colors and an optional paper-grain texture. Zero core changes, one settings row.

```sh
dsh plugin --profile web add github:Blaczz/dsh-paper-theme
```

**Repo:** [Blaczz/dsh-paper-theme](https://github.com/Blaczz/dsh-paper-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-plugin-colorscheme](https://github.com/Civitasv/dsh-plugin-colorscheme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-plugin-colorscheme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-plugin-colorscheme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-plugin-colorscheme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Colorschemes for DeepSeek Harness: MIT-licensed preset themes mapped onto the --dsw-* token system, a settings picker row, and user extension via a themes directory, plugin config, or settings.yaml.

```sh
dsh plugin --profile web add github:Civitasv/dsh-plugin-colorscheme
```

**Repo:** [Civitasv/dsh-plugin-colorscheme](https://github.com/Civitasv/dsh-plugin-colorscheme) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-plugin-gouden-leeuw-theme](https://github.com/Andy294753951/dsh-plugin-gouden-leeuw-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-plugin-gouden-leeuw-theme&scheme=dark"><img src="https://raw.githubusercontent.com/Andy294753951/dsh-plugin-gouden-leeuw-theme/main/assets/gouden-leeuw.png" width="360" alt="dsh-plugin-gouden-leeuw-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-plugin-gouden-leeuw-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Gouden Leeuw moonlit sanctuary theme for the dsh Web UI.

```sh
dsh plugin --profile web add github:Andy294753951/dsh-plugin-gouden-leeuw-theme
```

**Repo:** [Andy294753951/dsh-plugin-gouden-leeuw-theme](https://github.com/Andy294753951/dsh-plugin-gouden-leeuw-theme) · **dsh:** 0.1.0-rc.6

### [dsh-qq-skin](https://github.com/kevinnn04/dsh-qq-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-qq-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-qq-skin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-qq-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Old-school QQ chat-frame skin pack for the DeepSeek Harness Web UI.

```sh
dsh plugin --profile web add github:kevinnn04/dsh-qq-skin
```

**Repo:** [kevinnn04/dsh-qq-skin](https://github.com/kevinnn04/dsh-qq-skin) · **dsh:** 0.1.0-rc.6

### [dsh-skin](https://github.com/KinGao294/dsh-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Skin switcher and custom wallpaper for dsh: curated --dsw-alias-* palettes with opacity and blur, persisted per browser.

```sh
dsh plugin --profile web add github:KinGao294/dsh-skin
```

**Repo:** [KinGao294/dsh-skin](https://github.com/KinGao294/dsh-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-skin-claude-code](https://github.com/LucasN0820/dsh-skin-claude-code)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-claude-code&scheme=dark"><img src="https://raw.githubusercontent.com/LucasN0820/dsh-skin-claude-code/main/docs/screenshots/skin-dark.png" width="360" alt="dsh-skin-claude-code preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-claude-code&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Claude Code-inspired token skin: warm charcoal and cream surfaces with a terracotta accent.

```sh
dsh plugin --profile web add github:LucasN0820/dsh-skin-claude-code
```

**Repo:** [LucasN0820/dsh-skin-claude-code](https://github.com/LucasN0820/dsh-skin-claude-code) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-skin-claude-code-le-soleil](https://github.com/le-soleil-se-couche/dsh-skin-claude-code)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-claude-code-le-soleil&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-claude-code-le-soleil preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-claude-code-le-soleil&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Claude Code-style Web skin: Source Han Serif UI, SF Mono, terracotta cream and ink palette.

```sh
dsh plugin --profile web add github:le-soleil-se-couche/dsh-skin-claude-code
```

**Repo:** [le-soleil-se-couche/dsh-skin-claude-code](https://github.com/le-soleil-se-couche/dsh-skin-claude-code) · **License:** BSD-3-Clause · **dsh:** 0.1.0-rc.6

### [dsh-skin-diablo-dark](https://github.com/dengxuhui/dsh-skin-diablo-dark)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-diablo-dark&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-diablo-dark preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-diablo-dark&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Diablo dark-gothic --dsw-* token skin (暗黑·熔火) for the dsh Web GUI.

```sh
dsh plugin --profile web add github:dengxuhui/dsh-skin-diablo-dark
```

**Repo:** [dengxuhui/dsh-skin-diablo-dark](https://github.com/dengxuhui/dsh-skin-diablo-dark) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-skin-gadgets](https://github.com/Highjobop/dsh-gadgets/tree/HEAD/dsh-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-gadgets&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-gadgets preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-gadgets&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Appearance skin for the Web GUI: 15 light/dark presets, font scaling, and 13 color roles persisted in localStorage.

```sh
dsh plugin --profile web add github:Highjobop/dsh-gadgets
```

**Repo:** [Highjobop/dsh-gadgets](https://github.com/Highjobop/dsh-gadgets/tree/HEAD/dsh-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-skin-kawaii2000](https://github.com/shunkwon/dsh-skin-kawaii2000)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-kawaii2000&scheme=dark"><img src="https://raw.githubusercontent.com/shunkwon/dsh-skin-kawaii2000/main/screenshots/dark.png" width="360" alt="dsh-skin-kawaii2000 preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-kawaii2000&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Kawaii 2000s --dsw-* token skin: candy pink and baby blue for the dsh Web UI.

```sh
dsh plugin --profile web add github:shunkwon/dsh-skin-kawaii2000
```

**Repo:** [shunkwon/dsh-skin-kawaii2000](https://github.com/shunkwon/dsh-skin-kawaii2000) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-skin-plugin](https://github.com/ylqit/dsh-skin-plugin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-plugin&scheme=dark"><img src="https://raw.githubusercontent.com/ylqit/dsh-skin-plugin/master/themes/pikachu/assets/backdrop-light.webp" width="360" alt="dsh-skin-plugin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-plugin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Synchronized component skins and a visual theme studio for the Web UI, with bundled palettes such as Pikachu, Bulbasaur, and Squirtle.

```sh
dsh plugin --profile web add github:ylqit/dsh-skin-plugin
```

**Repo:** [ylqit/dsh-skin-plugin](https://github.com/ylqit/dsh-skin-plugin) · **dsh:** 0.1.0-rc.6

### [dsh-skin-sakura](https://github.com/leo-aba/dsh-skins/tree/HEAD/skins/sakura)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-sakura&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-sakura preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-sakura&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Sakura cherry-blossom skin: a warm pink palette pair plus a picker row in Settings.

```sh
dsh plugin --profile web add github:leo-aba/dsh-skins
```

**Repo:** [leo-aba/dsh-skins](https://github.com/leo-aba/dsh-skins/tree/HEAD/skins/sakura) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-skin-studio](https://github.com/Yugitan/dsh-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-studio&scheme=dark"><img src="https://raw.githubusercontent.com/Yugitan/dsh-skin/main/screenshots/preview.png" width="360" alt="dsh-skin-studio preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-studio&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Skinning plugin for the dsh Web UI: gradient presets, image wallpapers, translucency, and accent colors, persisted in user settings.

```sh
dsh plugin --profile web add github:Yugitan/dsh-skin
```

**Repo:** [Yugitan/dsh-skin](https://github.com/Yugitan/dsh-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-skin-switcher](https://github.com/zhtx2024/dsh-skin-switcher)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-switcher&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-switcher preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-switcher&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Settings-page skin switcher that lists installed skins and applies one with a click.

```sh
dsh plugin --profile web add github:zhtx2024/dsh-skin-switcher
```

**Repo:** [zhtx2024/dsh-skin-switcher](https://github.com/zhtx2024/dsh-skin-switcher) · **dsh:** 0.1.0-rc.6

### [dsh-skin-universe](https://github.com/springbrand-lab/dsh-skin-universe)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-universe&scheme=dark"><img src="https://raw.githubusercontent.com/springbrand-lab/dsh-skin-universe/main/docs/screenshots/theme-first-love.png" width="360" alt="dsh-skin-universe preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-universe&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Web extension pack with a five-theme skin center, plus a task board, git graph, remote mobile UI, and a theme-linked desktop pet.

```sh
dsh plugin --profile web add github:springbrand-lab/dsh-skin-universe
```

**Repo:** [springbrand-lab/dsh-skin-universe](https://github.com/springbrand-lab/dsh-skin-universe) · **License:** BSD-3-Clause · **dsh:** 0.1.0-rc.6

### [dsh-skin-yanisuu](https://github.com/xassuyge003-ui/dsh-skin-yanisuu/tree/HEAD/packages/ui-skin-yanisuu)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-yanisuu&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-yanisuu preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-yanisuu&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Glass wallpaper skin with a left-edge control drawer for blur, rotation, and local uploads.

```sh
dsh plugin --profile web add github:xassuyge003-ui/dsh-skin-yanisuu
```

**Repo:** [xassuyge003-ui/dsh-skin-yanisuu](https://github.com/xassuyge003-ui/dsh-skin-yanisuu/tree/HEAD/packages/ui-skin-yanisuu) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-skins-harbor](https://github.com/Moeblack/dsh-skins/tree/HEAD/packages/dsh-web-skins)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skins-harbor&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skins-harbor preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skins-harbor&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

dsh-skins pack with the Harbor dusk skin: alias-token themes plus optional AI-art backgrounds.

```sh
dsh plugin --profile web add github:Moeblack/dsh-skins
```

**Repo:** [Moeblack/dsh-skins](https://github.com/Moeblack/dsh-skins/tree/HEAD/packages/dsh-web-skins) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-theme](https://github.com/oil-oil/dsh-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Live theme editor for dsh: curated --dsw-* palettes and typography controls.

```sh
dsh plugin --profile web add github:oil-oil/dsh-theme
```

**Repo:** [oil-oil/dsh-theme](https://github.com/oil-oil/dsh-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-theme-blackgold](https://github.com/frostgao/dsh-theme-blackgold)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-blackgold&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-blackgold preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-blackgold&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Black-gold --dsw-* token theme: gold accents on a black-and-white base, light and dark.

```sh
dsh plugin --profile web add github:frostgao/dsh-theme-blackgold
```

**Repo:** [frostgao/dsh-theme-blackgold](https://github.com/frostgao/dsh-theme-blackgold) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-theme-cyberpunk](https://github.com/dlpufan/dsh-theme-cyberpunk/tree/HEAD/dsh-theme-cyberpunk)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-cyberpunk&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-cyberpunk preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-cyberpunk&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Neon cyberpunk appearance for the dsh web surface: RGB ambient lighting, CRT scanlines, and a cyan/magenta/violet token palette.

```sh
dsh plugin --profile web add github:dlpufan/dsh-theme-cyberpunk
```

**Repo:** [dlpufan/dsh-theme-cyberpunk](https://github.com/dlpufan/dsh-theme-cyberpunk/tree/HEAD/dsh-theme-cyberpunk) · **License:** MIT · **Package:** [`dsh-theme-cyberpunk`](https://www.npmjs.com/package/dsh-theme-cyberpunk) · **dsh:** 0.1.0-rc.6

### [dsh-theme-matcha-dark-sea](https://github.com/zhangzujian/dsh-theme-matcha-dark-sea)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-matcha-dark-sea&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-matcha-dark-sea preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-matcha-dark-sea&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Matcha Dark Sea token theme for the Web GUI, a dark-only mapping of btop matcha-dark-sea anchors onto --dsw-* tokens.

```sh
dsh plugin --profile web add github:zhangzujian/dsh-theme-matcha-dark-sea
```

**Repo:** [zhangzujian/dsh-theme-matcha-dark-sea](https://github.com/zhangzujian/dsh-theme-matcha-dark-sea) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-theme-neko](https://github.com/drfccv/dsh-theme-neko)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-neko&scheme=dark"><img src="https://raw.githubusercontent.com/drfccv/dsh-theme-neko/main/sample/screenshot.png" width="360" alt="dsh-theme-neko preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-neko&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Nachoneko (甘城猫猫) --dsw-* token skin for the dsh Web GUI.

```sh
dsh plugin --profile web add github:drfccv/dsh-theme-neko
```

**Repo:** [drfccv/dsh-theme-neko](https://github.com/drfccv/dsh-theme-neko) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-theme-pack](https://github.com/math-lrz/dsh-theme-pack)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-pack&scheme=dark"><img src="https://raw.githubusercontent.com/math-lrz/dsh-theme-pack/main/previews/nord.png" width="360" alt="dsh-theme-pack preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-pack&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Sixteen Web GUI token skins: Catppuccin, Gruvbox, Everforest, Rose Pine, Solarized, Kanagawa, Tokyo Night, Nord, Dracula, and more.

```sh
dsh plugin --profile web add github:math-lrz/dsh-theme-pack
```

**Repo:** [math-lrz/dsh-theme-pack](https://github.com/math-lrz/dsh-theme-pack) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-theme-palettes](https://github.com/RainbowDashy/dsh-theme-palettes)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-palettes&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-palettes preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-palettes&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Palette infrastructure for dsh: ships a VS Code Red token palette and a client API for more palettes.

```sh
dsh plugin --profile web add github:RainbowDashy/dsh-theme-palettes
```

**Repo:** [RainbowDashy/dsh-theme-palettes](https://github.com/RainbowDashy/dsh-theme-palettes) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-theme-plugin](https://github.com/BeiZi6/dsh-theme-plugin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-plugin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-plugin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-plugin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH Web GUI theme studio with presets and per-mode customization: accent, background, foreground, fonts, translucent sidebar, and contrast. Overrides CSS tokens in every served index.html via the official webServer.tapIndex seam.

```sh
dsh plugin --profile web add github:BeiZi6/dsh-theme-plugin
```

**Repo:** [BeiZi6/dsh-theme-plugin](https://github.com/BeiZi6/dsh-theme-plugin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-theme-ti](https://github.com/longyu065/dsh-theme-ti)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-ti&scheme=dark"><img src="https://raw.githubusercontent.com/longyu065/dsh-theme-ti/master/wings.png" width="360" alt="dsh-theme-ti preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-ti&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Dota 2 The International --dsw-* token skin: TI6 red, immortal-shield gold, vector wings and a starfield.

```sh
dsh plugin --profile web add github:longyu065/dsh-theme-ti
```

**Repo:** [longyu065/dsh-theme-ti](https://github.com/longyu065/dsh-theme-ti) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-theme-triptych](https://github.com/iMocking/dsh-theme-triptych)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-triptych&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-triptych preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-triptych&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Appearance pack for DeepSeek Harness with NEXUS, COMIKET, and IRONCORE editions, wallpapers, and a sidebar switcher.

```sh
dsh plugin --profile web add github:iMocking/dsh-theme-triptych
```

**Repo:** [iMocking/dsh-theme-triptych](https://github.com/iMocking/dsh-theme-triptych) · **dsh:** 0.1.0-rc.6

### [dsh-theme-vscode-red](https://github.com/RainbowDashy/dsh-theme-vscode-red)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-vscode-red&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-vscode-red preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-vscode-red&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

VS Code Red --dsw-* token theme: deep maroon surfaces with a #cc3333 accent, applied from client JS.

```sh
dsh plugin --profile web add github:RainbowDashy/dsh-theme-vscode-red
```

**Repo:** [RainbowDashy/dsh-theme-vscode-red](https://github.com/RainbowDashy/dsh-theme-vscode-red) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-theme-xp](https://github.com/SamizuHM/dsh-client-ui-theme-xp)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-xp&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-xp preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-xp&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Windows XP Luna-style Web GUI theme: token palette, Tahoma, XP title bars, beveled buttons, list rows, balloon bubbles, and a Bliss taskbar.

```sh
dsh plugin --profile web add github:SamizuHM/dsh-client-ui-theme-xp
```

**Repo:** [SamizuHM/dsh-client-ui-theme-xp](https://github.com/SamizuHM/dsh-client-ui-theme-xp) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-themes](https://github.com/MangMax/dsh-themes)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-themes&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-themes preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-themes&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Appearance plugin for dsh: built-in --dsw-* palettes, mixed light/dark, Open VSX search, and VS Code theme import.

```sh
dsh plugin --profile web add github:MangMax/dsh-themes
```

**Repo:** [MangMax/dsh-themes](https://github.com/MangMax/dsh-themes) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-themes-pack](https://github.com/whyihaveyou/dsh-themes)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-themes-pack&scheme=dark"><img src="https://raw.githubusercontent.com/whyihaveyou/dsh-themes/main/skins/catppuccin/preview/dark.png" width="360" alt="dsh-themes-pack preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-themes-pack&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

151 day/night token skins for the dsh Web UI: game characters, editor palettes, aesthetic styles, holidays, and a few eggs. Migrated from aionui-themes.

```sh
dsh plugin --profile web add github:whyihaveyou/dsh-themes
```

**Repo:** [whyihaveyou/dsh-themes](https://github.com/whyihaveyou/dsh-themes) · **dsh:** 0.1.0-rc.6

### [dsh-ui-appearance](https://github.com/TQSY114514/dsh-ui-appearance/tree/HEAD/packages/client/ui-appearance)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-ui-appearance&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-ui-appearance preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-ui-appearance&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Appearance customizer: six --dsw-alias-* palettes, color pickers, wallpaper upload, opacity/blur/mask, and frosted panels, live from Settings General.

```sh
dsh plugin --profile web add github:TQSY114514/dsh-ui-appearance
```

**Repo:** [TQSY114514/dsh-ui-appearance](https://github.com/TQSY114514/dsh-ui-appearance/tree/HEAD/packages/client/ui-appearance) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-ui-skins](https://github.com/edwardyang0011/dsh-ui-skins)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-ui-skins&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-ui-skins preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-ui-skins&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Registers preset color skins as alias-token themes and adds a Skin row to Settings General.

```sh
dsh plugin --profile web add github:edwardyang0011/dsh-ui-skins
```

**Repo:** [edwardyang0011/dsh-ui-skins](https://github.com/edwardyang0011/dsh-ui-skins) · **dsh:** 0.1.0-rc.6

### [dsh-ui-theme-skins](https://github.com/ikomom/dsh-ui-skins)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-ui-theme-skins&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-ui-theme-skins preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-ui-theme-skins&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Eight alias-token skins registered as system themes (cyber neon, soft dark, midnight blue, forest, fresh light, vintage paper, sakura, mint) with a Settings General appearance dropdown.

```sh
dsh plugin --profile web add github:ikomom/dsh-ui-skins
```

**Repo:** [ikomom/dsh-ui-skins](https://github.com/ikomom/dsh-ui-skins) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-web-background](https://github.com/BruceWu1126/dsh-web-background)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-web-background&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-web-background preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-web-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Background settings page: solid, gradient, or image per light/dark mode, with sidebar linkage and token overrides.

```sh
dsh plugin --profile web add github:BruceWu1126/dsh-web-background
```

**Repo:** [BruceWu1126/dsh-web-background](https://github.com/BruceWu1126/dsh-web-background) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-web-client-theme-switcher](https://github.com/yingpanwang/dsh_web_client_theme_switcher)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-web-client-theme-switcher&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-web-client-theme-switcher preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-web-client-theme-switcher&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Custom theme switcher for the dsh Web UI: preset solid colors and a custom wallpaper background.

```sh
dsh plugin --profile web add github:yingpanwang/dsh_web_client_theme_switcher
```

**Repo:** [yingpanwang/dsh_web_client_theme_switcher](https://github.com/yingpanwang/dsh_web_client_theme_switcher) · **dsh:** 0.1.0-rc.6

### [dsh-web-skins](https://github.com/ZeroZ-lab/dsh-web-skins)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-web-skins&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-web-skins preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-web-skins&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

21 editor-inspired --dsw-* theme families for the dsh Web UI (Gruvbox, Catppuccin, Dracula, Solarized, Tokyo Night, and more), each with light and dark.

```sh
dsh plugin --profile web add github:ZeroZ-lab/dsh-web-skins
```

**Repo:** [ZeroZ-lab/dsh-web-skins](https://github.com/ZeroZ-lab/dsh-web-skins) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-web-theme-packs](https://github.com/tzy168/dsh-web-theme-packs)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-web-theme-packs&scheme=dark"><img src="https://raw.githubusercontent.com/tzy168/dsh-web-theme-packs/master/themes/aero-blue/preview.svg" width="360" alt="dsh-web-theme-packs preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-web-theme-packs&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Web UI theme packs with bundled sheets (Aero Blue, Ink Night, Misty Forest) and a settings-row picker.

```sh
dsh plugin --profile web add github:tzy168/dsh-web-theme-packs
```

**Repo:** [tzy168/dsh-web-theme-packs](https://github.com/tzy168/dsh-web-theme-packs) · **dsh:** 0.1.0-rc.6

### [dsh-xiaoyao-skins](https://github.com/147228/dsh-xiaoyao-skins)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-xiaoyao-skins&scheme=dark"><img src="https://raw.githubusercontent.com/147228/dsh-xiaoyao-skins/main/site/previews/black-whale.jpg" width="360" alt="dsh-xiaoyao-skins preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-xiaoyao-skins&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

夕小瑶 × dsh Web skin collection, installer, and community toolchain.

```sh
dsh plugin --profile web add github:147228/dsh-xiaoyao-skins
```

**Repo:** [147228/dsh-xiaoyao-skins](https://github.com/147228/dsh-xiaoyao-skins) · **dsh:** 0.1.0-rc.6

*Gallery: https://147228.github.io/dsh-xiaoyao-skins/*

### [dsh-zhongguo-themes](https://github.com/nevertoday/dsh-theme-plugin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-zhongguo-themes&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-zhongguo-themes preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-zhongguo-themes&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Chinese traditional color theme pack for DeepSeek Harness: 48 anchors times light/dark writing the full --dsw-* token vocabulary.

```sh
dsh plugin --profile web add github:nevertoday/dsh-theme-plugin
```

**Repo:** [nevertoday/dsh-theme-plugin](https://github.com/nevertoday/dsh-theme-plugin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [freestyle-dsh-theme](https://github.com/suzike/freestyle-dsh-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=freestyle-dsh-theme&scheme=dark"><img src="https://raw.githubusercontent.com/suzike/freestyle-dsh-theme/main/docs/images/screenshot-designer.png" width="360" alt="freestyle-dsh-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=freestyle-dsh-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

dsh theme studio: OKLCH theme proposals and a designer that persists across restarts.

```sh
dsh plugin --profile web add github:suzike/freestyle-dsh-theme
```

**Repo:** [suzike/freestyle-dsh-theme](https://github.com/suzike/freestyle-dsh-theme) · **License:** BSD-3-Clause · **dsh:** 0.1.0-rc.6

### [goodpostidea-dsh-skin](https://github.com/goodpostidea-tech/deepseek-harness-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=goodpostidea-dsh-skin&scheme=dark"><img src="https://raw.githubusercontent.com/goodpostidea-tech/deepseek-harness-skin/main/docs/coding.png" width="360" alt="goodpostidea-dsh-skin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=goodpostidea-dsh-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Selectable Web GUI skins with paired light/dark token overrides, backgrounds, and a settings-row picker.

```sh
dsh plugin --profile web add github:goodpostidea-tech/deepseek-harness-skin
```

**Repo:** [goodpostidea-tech/deepseek-harness-skin](https://github.com/goodpostidea-tech/deepseek-harness-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [silk-background](https://github.com/z21for99/silk-background)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=silk-background&scheme=dark"><img src="https://raw.githubusercontent.com/z21for99/silk-background/main/screenshots/screenshot-1.png" width="360" alt="silk-background preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=silk-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

WebGL Silk shader wallpaper plus glass --dsw-alias-* overlays: dim/vivid/off modes, seven palettes, and a live RGB picker.

```sh
dsh plugin --profile web add github:z21for99/silk-background
```

**Repo:** [z21for99/silk-background](https://github.com/z21for99/silk-background) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [solarized-dsh-theme](https://github.com/zhijun-dai/Solarized-dsh-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=solarized-dsh-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="solarized-dsh-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=solarized-dsh-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Solarized and Selenized palettes registered into the theme runtime, with a Settings picker and code-block colors.

```sh
dsh plugin --profile web add github:zhijun-dai/Solarized-dsh-theme
```

**Repo:** [zhijun-dai/Solarized-dsh-theme](https://github.com/zhijun-dai/Solarized-dsh-theme) · **dsh:** 0.1.0-rc.6

### [ui-song-theme](https://github.com/yunfei07/ui-song-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=ui-song-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="ui-song-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=ui-song-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Song-inspired light and dark theme: silk-paper surfaces, celadon accents, and CJK serif headings.

```sh
dsh plugin --profile web add github:yunfei07/ui-song-theme
```

**Repo:** [yunfei07/ui-song-theme](https://github.com/yunfei07/ui-song-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6

## Skins

Theme and skin listings that restyle the dsh Web UI.

### [deepseek-harness-animated-skin](https://github.com/bangbang-PPT/deepseek-harness-animated-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=deepseek-harness-animated-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="deepseek-harness-animated-skin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=deepseek-harness-animated-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Animated Web UI background skin with video or still wallpapers, a floating control panel, and built-in WebM clips.

```sh
dsh plugin --profile web add github:bangbang-PPT/deepseek-harness-animated-skin
```

**Repo:** [bangbang-PPT/deepseek-harness-animated-skin](https://github.com/bangbang-PPT/deepseek-harness-animated-skin) · **dsh:** 0.1.0-rc.6

### [dsh-background](https://github.com/leavestring/awesome-dsh-background-plugin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-background&scheme=dark"><img src="https://raw.githubusercontent.com/leavestring/awesome-dsh-background-plugin/main/screenshots/dark-mode-image.png" width="360" alt="dsh-background preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Background settings plugin: upload a local image or switch aurora, ember, and paper presets, with live opacity, mask, blur, and fit controls.

```sh
dsh plugin --profile web add github:leavestring/awesome-dsh-background-plugin
```

**Repo:** [leavestring/awesome-dsh-background-plugin](https://github.com/leavestring/awesome-dsh-background-plugin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-background-carousel](https://github.com/manjiayu20071022/dsh-ui-background)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-background-carousel&scheme=dark"><img src="https://raw.githubusercontent.com/manjiayu20071022/dsh-ui-background/main/screenshots/01-panel-open.png" width="360" alt="dsh-background-carousel preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-background-carousel&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Web UI background carousel: local or URL images, blur, dark overlay, glass, fill modes, plus chat and sidebar font controls.

```sh
dsh plugin --profile web add github:manjiayu20071022/dsh-ui-background
```

**Repo:** [manjiayu20071022/dsh-ui-background](https://github.com/manjiayu20071022/dsh-ui-background) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-bg-beautify](https://github.com/halosb/dsh-bg-beautify)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-bg-beautify&scheme=dark"><img src="https://raw.githubusercontent.com/halosb/dsh-bg-beautify/HEAD/docs/screenshots/demo-1.png" width="360" alt="dsh-bg-beautify preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-bg-beautify&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Background image and translucent panels for the DeepSeek Harness web UI, with a live settings page.

```sh
dsh plugin --profile web add github:halosb/dsh-bg-beautify
```

**Repo:** [halosb/dsh-bg-beautify](https://github.com/halosb/dsh-bg-beautify) · **dsh:** 0.1.0-rc.6

### [dsh-bgwall](https://github.com/hubo980205/dsh-bgwall-plugin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-bgwall&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-bgwall preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-bgwall&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

背景图片墙 (Background Wall)：把 DeepSeek Harness Web 界面背景换成任意图片（远程 URL 或服务器本地文件），支持透明度、模糊与铺放方式调节。控制面板位于「设置 → 背景图片」。

```sh
dsh plugin --profile web add github:hubo980205/dsh-bgwall-plugin
```

**Repo:** [hubo980205/dsh-bgwall-plugin](https://github.com/hubo980205/dsh-bgwall-plugin) · **License:** MIT · **Package:** [`dsh-bgwall-plugin`](https://www.npmjs.com/package/dsh-bgwall-plugin) · **dsh:** 0.1.0-rc.6

### [dsh-capsule-skin](https://github.com/DawnCloud1213/dsh-capsule-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-capsule-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-capsule-skin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-capsule-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Wallpaper skin with capsule sidebar chrome and wallpaper-derived theme colors.

```sh
dsh plugin --profile web add github:DawnCloud1213/dsh-capsule-skin
```

**Repo:** [DawnCloud1213/dsh-capsule-skin](https://github.com/DawnCloud1213/dsh-capsule-skin) · **dsh:** 0.1.0-rc.6

### [dsh-chat-skin-bg](https://github.com/yuemingyue1119-lune/dsh-chat-skin/tree/HEAD/dsh-chat-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-chat-skin-bg&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-chat-skin-bg preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-chat-skin-bg&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Chat-area background skin: image wallpaper with brightness controls that leave the rest of the UI chrome alone.

```sh
dsh plugin --profile web add github:yuemingyue1119-lune/dsh-chat-skin
```

**Repo:** [yuemingyue1119-lune/dsh-chat-skin](https://github.com/yuemingyue1119-lune/dsh-chat-skin/tree/HEAD/dsh-chat-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-client-ui-skin-claude](https://github.com/PAKIKNOWLEDGE/dsh-client-ui-skin-claude)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-client-ui-skin-claude&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-client-ui-skin-claude preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-client-ui-skin-claude&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Claude-style dark skin for the DeepSeek Harness web GUI: charcoal panels and warm clay accent.

```sh
dsh plugin --profile web add github:PAKIKNOWLEDGE/dsh-client-ui-skin-claude
```

**Repo:** [PAKIKNOWLEDGE/dsh-client-ui-skin-claude](https://github.com/PAKIKNOWLEDGE/dsh-client-ui-skin-claude) · **License:** MIT · **Package:** [`@dsh-external/dsh-client-ui-skin-claude`](https://www.npmjs.com/package/@dsh-external/dsh-client-ui-skin-claude) · **dsh:** 0.1.0-rc.6

### [dsh-client-ui-skin-priestess](https://github.com/Sealessland/dsh-client-ui-skin-priestess)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-client-ui-skin-priestess&scheme=dark"><img src="https://raw.githubusercontent.com/Sealessland/dsh-client-ui-skin-priestess/main/assets/priestess-dark.webp" width="360" alt="dsh-client-ui-skin-priestess preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-client-ui-skin-priestess&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Priestess dual-theme skin for the dsh Web UI: night portrait with graphite glass, light portrait with cool-white glass.

```sh
dsh plugin --profile web add github:Sealessland/dsh-client-ui-skin-priestess
```

**Repo:** [Sealessland/dsh-client-ui-skin-priestess](https://github.com/Sealessland/dsh-client-ui-skin-priestess) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-deep-whale&scheme=dark"><img src="https://raw.githubusercontent.com/Small-tailqwq/dsh-deep-whale/main/maid-atelier/preview/dark.webp" width="360" alt="dsh-deep-whale preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-deep-whale&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH Web whale-girl skin series (maid-atelier). Theme/skin-shaped third-party listing.

```sh
dsh plugin --profile web add github:Small-tailqwq/dsh-deep-whale
```

**Repo:** [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) · **License:** CC-BY-NC-SA-4.0 · **dsh:** 0.1.0-rc.5

### [dsh-deepseek-ui-skin](https://github.com/aslixzhou-byte/dsh-deepseek-ui-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-deepseek-ui-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-deepseek-ui-skin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-deepseek-ui-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Minimal navy DeepSeek Web UI skin with light/dark and a left-to-right looping particle stream along the bottom.

```sh
dsh plugin --profile web add github:aslixzhou-byte/dsh-deepseek-ui-skin
```

**Repo:** [aslixzhou-byte/dsh-deepseek-ui-skin](https://github.com/aslixzhou-byte/dsh-deepseek-ui-skin) · **License:** CC-BY-NC-SA-4.0 · **dsh:** 0.1.0-rc.6

### [dsh-eva-theme-plugin](https://github.com/oceanxuikun/dsh-eva-theme-plugin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-eva-theme-plugin&scheme=dark"><img src="https://raw.githubusercontent.com/oceanxuikun/dsh-eva-theme-plugin/master/assets/screenshot01.png" width="360" alt="dsh-eva-theme-plugin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-eva-theme-plugin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Evangelion-inspired Web UI themes: Unit-00, Unit-01, and Unit-02, with immersive backgrounds and mecha-style chrome.

```sh
dsh plugin --profile web add github:oceanxuikun/dsh-eva-theme-plugin
```

**Repo:** [oceanxuikun/dsh-eva-theme-plugin](https://github.com/oceanxuikun/dsh-eva-theme-plugin) · **dsh:** 0.1.0-rc.6

### [dsh-home-ui](https://github.com/lehhair/dsh-home-ui)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-home-ui&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-home-ui preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-home-ui&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Home-feed visual refinement: sidebar palette unified with the conversation and a soft gradient hairline.

```sh
dsh plugin --profile web add github:lehhair/dsh-home-ui
```

**Repo:** [lehhair/dsh-home-ui](https://github.com/lehhair/dsh-home-ui) · **License:** BSD-3-Clause · **dsh:** 0.1.0-rc.6

### [dsh-homepage-skin](https://github.com/changan0617/dsh-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-homepage-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-homepage-skin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-homepage-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Homepage-style chat background for DeepSeek Harness: deep-blue gradient, dot grid, and a digitile whale.

```sh
dsh plugin --profile web add github:changan0617/dsh-skin
```

**Repo:** [changan0617/dsh-skin](https://github.com/changan0617/dsh-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-local-background](https://github.com/luoyu-xingu/dsh-background)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-local-background&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-local-background preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-local-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Local-path wallpaper plugin: host-served background image with a theme-matched readability wash and a live Settings General preview.

```sh
dsh plugin --profile web add github:luoyu-xingu/dsh-background
```

**Repo:** [luoyu-xingu/dsh-background](https://github.com/luoyu-xingu/dsh-background) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-naiwa-theme](https://github.com/DevourerM/dsh-naiwa-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-naiwa-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-naiwa-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-naiwa-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Milk-frog Web theme: peek overlay, wordmark treatment, and send/complete sounds.

```sh
dsh plugin --profile web add github:DevourerM/dsh-naiwa-theme
```

**Repo:** [DevourerM/dsh-naiwa-theme](https://github.com/DevourerM/dsh-naiwa-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-pixel-ui](https://github.com/zhang66633/dsh-pixel-ui)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-pixel-ui&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-pixel-ui preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-pixel-ui&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Pixel skin for DeepSeek Harness with four palettes, pixel fonts, and CRT scanlines.

```sh
dsh plugin --profile web add github:zhang66633/dsh-pixel-ui
```

**Repo:** [zhang66633/dsh-pixel-ui](https://github.com/zhang66633/dsh-pixel-ui) · **License:** MIT · **Package:** [`dsh-pixel-ui`](https://www.npmjs.com/package/dsh-pixel-ui) · **dsh:** 0.1.0-rc.6

### [dsh-plugin-background](https://github.com/gameswu/dsh-plugin-background)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-plugin-background&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-plugin-background preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-plugin-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Per-area Web GUI backgrounds for conversation, trajectory, sidebar, and settings with image or video groups and local files.

```sh
dsh plugin --profile web add github:gameswu/dsh-plugin-background
```

**Repo:** [gameswu/dsh-plugin-background](https://github.com/gameswu/dsh-plugin-background) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-plugin-background-image](https://github.com/Voyage-He/dsh-plugin-background-image)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-plugin-background-image&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-plugin-background-image preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-plugin-background-image&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness 界面背景图片插件：网络/本地图片与预设渐变背景，支持开关、透明度调节、沉浸式全屏或仅对话区域显示。

```sh
dsh plugin --profile web add github:Voyage-He/dsh-plugin-background-image
```

**Repo:** [Voyage-He/dsh-plugin-background-image](https://github.com/Voyage-He/dsh-plugin-background-image) · **License:** MIT · **Package:** [`dsh-plugin-background-image`](https://www.npmjs.com/package/dsh-plugin-background-image) · **dsh:** 0.1.0-rc.6

### [dsh-plugin-image-wallpaper](https://github.com/CaoNing3212/dsh-plugin-image-wallpaper)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-plugin-image-wallpaper&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-plugin-image-wallpaper preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-plugin-image-wallpaper&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Upload an image as the DeepSeek Harness background wallpaper with adjustable dark scrim.

```sh
dsh plugin --profile web add github:CaoNing3212/dsh-plugin-image-wallpaper
```

**Repo:** [CaoNing3212/dsh-plugin-image-wallpaper](https://github.com/CaoNing3212/dsh-plugin-image-wallpaper) · **License:** MIT · **Package:** [`dsh-plugin-image-wallpaper`](https://www.npmjs.com/package/dsh-plugin-image-wallpaper) · **dsh:** 0.1.0-rc.6

### [dsh-plugin-webui-bg](https://github.com/z827439974/dsh-background-plugin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-plugin-webui-bg&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-plugin-webui-bg preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-plugin-webui-bg&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Pick a local image as the dsh web UI background with a theme-matched translucent mask; persistence is browser-local.

```sh
dsh plugin --profile web add github:z827439974/dsh-background-plugin
```

**Repo:** [z827439974/dsh-background-plugin](https://github.com/z827439974/dsh-background-plugin) · **License:** MIT · **Package:** [`dsh-plugin-webui-bg`](https://www.npmjs.com/package/dsh-plugin-webui-bg) · **dsh:** 0.1.0-rc.6

### [dsh-qq2006](https://github.com/LaplaceYoung/dsh-qq2006)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-qq2006&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-qq2006 preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-qq2006&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

QQ2006 skin plugin: registers a qq2006 theme, mirrors body[data-ds-skin], ships a global skin sheet and assets.

```sh
dsh plugin --profile web add github:LaplaceYoung/dsh-qq2006
```

**Repo:** [LaplaceYoung/dsh-qq2006](https://github.com/LaplaceYoung/dsh-qq2006) · **License:** BSD-3-Clause · **dsh:** 0.1.0-rc.5

### [dsh-rhodes-angelina](https://github.com/FlowerWater1019/Angelina-dsh-plugin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-rhodes-angelina&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-rhodes-angelina preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-rhodes-angelina&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Angelina companion and Rhodes-inspired theme for the DeepSeek Harness Web UI.

```sh
dsh plugin --profile web add github:FlowerWater1019/Angelina-dsh-plugin
```

**Repo:** [FlowerWater1019/Angelina-dsh-plugin](https://github.com/FlowerWater1019/Angelina-dsh-plugin) · **dsh:** 0.1.0-rc.6

### [dsh-skin-alphacoders](https://github.com/sakka6868/dsh-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-alphacoders&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-alphacoders preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-alphacoders&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Alphacoders wallpapers as the DeepSeek Harness Web GUI background.

```sh
dsh plugin --profile web add github:sakka6868/dsh-skin
```

**Repo:** [sakka6868/dsh-skin](https://github.com/sakka6868/dsh-skin) · **License:** MIT · **Package:** [`dsh-skin-alphacoders`](https://www.npmjs.com/package/dsh-skin-alphacoders) · **dsh:** 0.1.0-rc.6

### [dsh-skin-amis](https://github.com/wanzhiwei5/dsh-skin-amis)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-amis&scheme=dark"><img src="https://raw.githubusercontent.com/wanzhiwei5/dsh-skin-amis/main/preview/light.png" width="360" alt="dsh-skin-amis preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-amis&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Wuthering Waves Amis-inspired Web GUI skin: cherry-pink and white gradients, neon machine accents, and frosted-glass panels.

```sh
dsh plugin --profile web add github:wanzhiwei5/dsh-skin-amis
```

**Repo:** [wanzhiwei5/dsh-skin-amis](https://github.com/wanzhiwei5/dsh-skin-amis) · **dsh:** 0.1.0-rc.6

### [dsh-skin-appearance](https://github.com/Vim0x3c/dsh-skin-appearance)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-appearance&scheme=dark"><img src="https://raw.githubusercontent.com/Vim0x3c/dsh-skin-appearance/HEAD/assets/screenshots/deepsea-whale.jpg" width="360" alt="dsh-skin-appearance preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-appearance&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Eight built-in DeepSeek Harness appearance presets plus custom wallpaper with opacity and blur.

```sh
dsh plugin --profile web add github:Vim0x3c/dsh-skin-appearance
```

**Repo:** [Vim0x3c/dsh-skin-appearance](https://github.com/Vim0x3c/dsh-skin-appearance) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-skin-blue-whale](https://github.com/zenghuizhu69-hub/dsh-skin-blue-whale)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-blue-whale&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-blue-whale preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-blue-whale&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

蓝鲸跃海皮肤 —— 为 dsh Web UI 打造的极简深海蓝鲸主题：官网同款蓝白流动海水渐变背景、跃出海面的官方蓝鲸 logo、主页/会话双场景自适应，以及整套蓝鲸配色的界面令牌。

```sh
dsh plugin --profile web add github:zenghuizhu69-hub/dsh-skin-blue-whale
```

**Repo:** [zenghuizhu69-hub/dsh-skin-blue-whale](https://github.com/zenghuizhu69-hub/dsh-skin-blue-whale) · **License:** MIT · **Package:** [`dsh-skin-blue-whale`](https://www.npmjs.com/package/dsh-skin-blue-whale) · **dsh:** 0.1.0-rc.6

### [dsh-skin-engine](https://github.com/xylt369/dsh-skin-engine)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-engine&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-engine preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-engine&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

换肤中心 skin-engine：上传背景图作为 DSH 应用皮肤，叠加多种光标交互动态背景（skin / theme / background plugin for DeepSeek Harness web UI）

```sh
dsh plugin --profile web add github:xylt369/dsh-skin-engine
```

**Repo:** [xylt369/dsh-skin-engine](https://github.com/xylt369/dsh-skin-engine) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-skin-manuspurs](https://github.com/ManuSpurs/dsh-skin20260814)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-manuspurs&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-manuspurs preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-manuspurs&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Skin switcher + custom wallpaper for DeepSeek Harness: curated --dsw-alias-* palettes, translucent wallpaper with opacity/blur controls, and durable per-user persistence (like Codex themes)

```sh
dsh plugin --profile web add github:ManuSpurs/dsh-skin20260814
```

**Repo:** [ManuSpurs/dsh-skin20260814](https://github.com/ManuSpurs/dsh-skin20260814) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-theme-background-center](https://github.com/syOPV/dsh-theme-background-center)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-background-center&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-background-center preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-background-center&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Theme and background center for DeepSeek Harness: presets, gradient or custom image, frosted glass.

```sh
dsh plugin --profile web add github:syOPV/dsh-theme-background-center
```

**Repo:** [syOPV/dsh-theme-background-center](https://github.com/syOPV/dsh-theme-background-center) · **License:** MIT · **Package:** [`dsh-theme-background-center`](https://www.npmjs.com/package/dsh-theme-background-center) · **dsh:** 0.1.0-rc.6

### [dsh-theme-bgimage](https://github.com/yuyedaidao/dsh-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-bgimage&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-bgimage preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-bgimage&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Web UI background-image plugin: paste a URL or pick a local image under Settings, with sharpness and overlay-opacity controls.

```sh
dsh plugin --profile web add github:yuyedaidao/dsh-theme
```

**Repo:** [yuyedaidao/dsh-theme](https://github.com/yuyedaidao/dsh-theme) · **dsh:** 0.1.0-rc.6

### [dsh-theme-switcher-wenjin](https://github.com/Wenjin-111/dsh-theme-switcher)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-switcher-wenjin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-switcher-wenjin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-switcher-wenjin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Theme switcher for the Web UI: glass and retro-paper styles, color presets, light/dark mode, and custom image backgrounds.

```sh
dsh plugin --profile web add github:Wenjin-111/dsh-theme-switcher
```

**Repo:** [Wenjin-111/dsh-theme-switcher](https://github.com/Wenjin-111/dsh-theme-switcher) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-theme-taffy](https://github.com/Misaki14987/dsh-theme-taffy)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-taffy&scheme=dark"><img src="https://raw.githubusercontent.com/Misaki14987/dsh-theme-taffy/main/assets/art-light.jpg" width="360" alt="dsh-theme-taffy preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-taffy&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Taffy-themed skin for the dsh Web UI (我不是雏草姬).

```sh
dsh plugin --profile web add github:Misaki14987/dsh-theme-taffy
```

**Repo:** [Misaki14987/dsh-theme-taffy](https://github.com/Misaki14987/dsh-theme-taffy) · **dsh:** 0.1.0-rc.6

### [dsh-theme-yourname](https://github.com/elfin1z/dsh-theme-yourname)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-yourname&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-yourname preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-theme-yourname&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Your Name starry-sky Web theme: plum palette, full-page starfield wallpaper, and floating stardust.

```sh
dsh plugin --profile web add github:elfin1z/dsh-theme-yourname
```

**Repo:** [elfin1z/dsh-theme-yourname](https://github.com/elfin1z/dsh-theme-yourname) · **dsh:** 0.1.0-rc.6

### [dsh-themes-people-ai](https://github.com/95384/DSH-themes-people-ai)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-themes-people-ai&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-themes-people-ai preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-themes-people-ai&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

People AI wallpaper theme for the DeepSeek Harness Web GUI.

```sh
dsh plugin --profile web add github:95384/DSH-themes-people-ai
```

**Repo:** [95384/DSH-themes-people-ai](https://github.com/95384/DSH-themes-people-ai) · **License:** MIT · **Package:** [`people-ai`](https://www.npmjs.com/package/people-ai) · **dsh:** 0.1.0-rc.6

### [dsh-thinking-status-customizer](https://github.com/Dbi-Eshuh/dsh-thinking-status-customizer)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-thinking-status-customizer&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-thinking-status-customizer preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-thinking-status-customizer&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Lifecycle-safe CSS customizer for the visible DeepSeek Harness Web thinking status.

```sh
dsh plugin --profile web add github:Dbi-Eshuh/dsh-thinking-status-customizer
```

**Repo:** [Dbi-Eshuh/dsh-thinking-status-customizer](https://github.com/Dbi-Eshuh/dsh-thinking-status-customizer) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-tp7-skin](https://github.com/adamwdff/dsh-tp7-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-tp7-skin&scheme=dark"><img src="https://raw.githubusercontent.com/adamwdff/dsh-tp7-skin/master/docs/preview.png" width="360" alt="dsh-tp7-skin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-tp7-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Turbo Pascal 7.0 blue-screen skin for the dsh Web GUI.

```sh
dsh plugin --profile web add github:adamwdff/dsh-tp7-skin
```

**Repo:** [adamwdff/dsh-tp7-skin](https://github.com/adamwdff/dsh-tp7-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-ui-background](https://github.com/ropz12138/dsh-ui-background)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-ui-background&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-ui-background preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-ui-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Conversation-column wallpaper: upload a raster, paint it behind the chat with a readable wash, and float the composer as an island.

```sh
dsh plugin --profile web add github:ropz12138/dsh-ui-background
```

**Repo:** [ropz12138/dsh-ui-background](https://github.com/ropz12138/dsh-ui-background) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-ui-beautify](https://github.com/Junt184/dsh-ui-beautify)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-ui-beautify&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-ui-beautify preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-ui-beautify&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Apple-style appearance suite: wallpaper carousel with Ken Burns, glass blur, font presets, and particle backgrounds.

```sh
dsh plugin --profile web add github:Junt184/dsh-ui-beautify
```

**Repo:** [Junt184/dsh-ui-beautify](https://github.com/Junt184/dsh-ui-beautify) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-ui-beautify-zalpha](https://github.com/Zalpha263/dsh-ui-beautify)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-ui-beautify-zalpha&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-ui-beautify-zalpha preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-ui-beautify-zalpha&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Web UI beautify client plugin with color presets for the main area, sidebar, message bubbles, and send button.

```sh
dsh plugin --profile web add github:Zalpha263/dsh-ui-beautify
```

**Repo:** [Zalpha263/dsh-ui-beautify](https://github.com/Zalpha263/dsh-ui-beautify) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-uplink-skin](https://github.com/cavaljames/dsh-uplink-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-uplink-skin&scheme=dark"><img src="https://raw.githubusercontent.com/cavaljames/dsh-uplink-skin/master/preview/dark.svg" width="360" alt="dsh-uplink-skin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-uplink-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Uplink cyberpunk Web skin: indigo night, neon cyan/magenta, CRT scanlines, glass panels, and a terminal-style composer placeholder.

```sh
dsh plugin --profile web add github:cavaljames/dsh-uplink-skin
```

**Repo:** [cavaljames/dsh-uplink-skin](https://github.com/cavaljames/dsh-uplink-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-visual-skin](https://github.com/HuggingFries/dsh-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-visual-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-visual-skin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-visual-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Visual customization for the Web UI: localized wallpapers, theme management, and conversation readability controls.

```sh
dsh plugin --profile web add github:HuggingFries/dsh-skin
```

**Repo:** [HuggingFries/dsh-skin](https://github.com/HuggingFries/dsh-skin) · **dsh:** 0.1.0-rc.6

### [dsh-wallpaper](https://github.com/Gao-Yee/dsh-wallpaper)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-wallpaper&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-wallpaper&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Custom wallpaper background for the dsh web GUI (light theme only): fixed cover image under translucent liquid-glass surfaces, with an in-page control panel.

```sh
dsh plugin --profile web add github:Gao-Yee/dsh-wallpaper
```

**Repo:** [Gao-Yee/dsh-wallpaper](https://github.com/Gao-Yee/dsh-wallpaper) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-wallpaper-chinarxq](https://github.com/chinaRXQ/dsh-wallpaper)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-chinarxq&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-chinarxq preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-chinarxq&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Wallpaper skin for the DeepSeek Harness web UI: image background with opacity, mask, and blur controls.

```sh
dsh plugin --profile web add github:chinaRXQ/dsh-wallpaper
```

**Repo:** [chinaRXQ/dsh-wallpaper](https://github.com/chinaRXQ/dsh-wallpaper) · **License:** MIT · **Package:** [`dsh-wallpaper`](https://www.npmjs.com/package/dsh-wallpaper) · **dsh:** 0.1.0-rc.6

### [dsh-wallpaper-rnlao](https://github.com/RNlao/dsh-wallpaper)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-rnlao&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-rnlao preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-rnlao&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Choose an image or gradient as the DeepSeek Harness web background.

```sh
dsh plugin --profile web add github:RNlao/dsh-wallpaper
```

**Repo:** [RNlao/dsh-wallpaper](https://github.com/RNlao/dsh-wallpaper) · **License:** MIT · **Package:** [`dsh-wallpaper`](https://www.npmjs.com/package/dsh-wallpaper) · **dsh:** 0.1.0-rc.6

### [dsh-wallpaper-skin](https://github.com/ddbj-hub/dsh-wallpaper-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-skin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Persistent wallpaper skin: static image or muted looping video background with translucent panels, path editable live from Settings Plugins.

```sh
dsh plugin --profile web add github:ddbj-hub/dsh-wallpaper-skin
```

**Repo:** [ddbj-hub/dsh-wallpaper-skin](https://github.com/ddbj-hub/dsh-wallpaper-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-web-ui&scheme=dark"><img src="https://raw.githubusercontent.com/zhu1090093659/dsh-web-ui/main/docs/screenshots/13-hero-main.png" width="360" alt="dsh-web-ui preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-web-ui&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Third-party plugin/skin collection for the dsh Web UI. Skin center routes around the theme-persistence gap. Also listed in awesome-dsh-plugins.

```sh
dsh plugin --profile web add github:zhu1090093659/dsh-web-ui
```

**Repo:** [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) · **dsh:** 0.1.0-rc.5

### [dsh-webUI-Glass-Theme](https://github.com/makuralymi/dsh-webUI-Glass-Theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-webUI-Glass-Theme&scheme=dark"><img src="https://raw.githubusercontent.com/makuralymi/dsh-webUI-Glass-Theme/master/assets/sc.png" width="360" alt="dsh-webUI-Glass-Theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-webUI-Glass-Theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Frosted-glass theme for the dsh Web UI: translucent surfaces and a global backdrop blur.

```sh
dsh plugin --profile web add github:makuralymi/dsh-webUI-Glass-Theme
```

**Repo:** [makuralymi/dsh-webUI-Glass-Theme](https://github.com/makuralymi/dsh-webUI-Glass-Theme) · **dsh:** 0.1.0-rc.6

### [dsh-whale-background](https://github.com/tuogusa/dsh-whale-background)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-whale-background&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-whale-background preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-whale-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Deep-sea whale-girl wallpaper with a translucent app surface for the DeepSeek Harness web UI.

```sh
dsh plugin --profile web add github:tuogusa/dsh-whale-background
```

**Repo:** [tuogusa/dsh-whale-background](https://github.com/tuogusa/dsh-whale-background) · **License:** MIT · **Package:** [`dsh-whale-background`](https://www.npmjs.com/package/dsh-whale-background) · **dsh:** 0.1.0-rc.6

### [dsh-wx-skin](https://github.com/wangxilhy23/dsh-wx-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-wx-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wx-skin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-wx-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Full-screen wallpaper skin: local image or URL background with presets, dim, blur, and persistence.

```sh
dsh plugin --profile web add github:wangxilhy23/dsh-wx-skin
```

**Repo:** [wangxilhy23/dsh-wx-skin](https://github.com/wangxilhy23/dsh-wx-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dskin](https://github.com/dancingmemory/dskin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dskin&scheme=dark"><img src="https://raw.githubusercontent.com/dancingmemory/dskin/main/preview/dark.png" width="360" alt="dskin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dskin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Cartoon pixel skin for the dsh Web GUI: living pixel pets that stroll, blink, and hop.

```sh
dsh plugin --profile web add github:dancingmemory/dskin
```

**Repo:** [dancingmemory/dskin](https://github.com/dancingmemory/dskin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [galgame-skin](https://github.com/Shmilyol/galgame-skin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=galgame-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="galgame-skin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=galgame-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Galgame-style Japanese interface skin: dusk curtains, gold corners, falling sakura.

```sh
dsh plugin --profile web add github:Shmilyol/galgame-skin
```

**Repo:** [Shmilyol/galgame-skin](https://github.com/Shmilyol/galgame-skin) · **dsh:** 0.1.0-rc.6

### [kaori-theme](https://github.com/Bonny0430/kaori-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=kaori-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="kaori-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=kaori-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

kaori theme for DeepSeek Harness.

```sh
dsh plugin --profile web add github:Bonny0430/kaori-theme
```

**Repo:** [Bonny0430/kaori-theme](https://github.com/Bonny0430/kaori-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [touhou-hakurei](https://github.com/xiake595/touhou-hakurei)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=touhou-hakurei&scheme=dark"><img src="https://raw.githubusercontent.com/xiake595/touhou-hakurei/master/preview/dark.webp" width="360" alt="touhou-hakurei preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=touhou-hakurei&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Touhou Hakurei Shrine skin: day/night shrine wallpapers, Reimu portraits, vermilion-and-paper framed sidebar and composer, gold shrine chrome.

```sh
dsh plugin --profile web add github:xiake595/touhou-hakurei
```

**Repo:** [xiake595/touhou-hakurei](https://github.com/xiake595/touhou-hakurei) · **License:** CC-BY-NC-SA-4.0 · **dsh:** 0.1.0-rc.6

## Companions

Desktop pets and extras that live beside the UI. Not token skins — still part of the dive.

### [dsh-aemeath-pet](https://github.com/culture-flask/dsh-aemeath-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-aemeath-pet&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-aemeath-pet preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-aemeath-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Aemeath desktop pet for the DeepSeek Harness web GUI: a pixel-art companion that idles, works, waits, and reacts alongside the agent.

```sh
dsh plugin --profile web add github:culture-flask/dsh-aemeath-pet
```

**Repo:** [culture-flask/dsh-aemeath-pet](https://github.com/culture-flask/dsh-aemeath-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-answer-pet](https://github.com/Nanki-nn/dsh-answer-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-answer-pet&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-answer-pet preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-answer-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Blue-whale overlay pet that shows per-session answer progress, token rate, tool trace, and elapsed time on live status cards.

```sh
dsh plugin --profile web add github:Nanki-nn/dsh-answer-pet
```

**Repo:** [Nanki-nn/dsh-answer-pet](https://github.com/Nanki-nn/dsh-answer-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-blue-whale-maid](https://github.com/yuxino/dsh-blue-whale-maid)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-blue-whale-maid&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-blue-whale-maid preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-blue-whale-maid&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

A desktop pixel pet for the DeepSeek Harness web GUI.

```sh
dsh plugin --profile web add github:yuxino/dsh-blue-whale-maid
```

**Repo:** [yuxino/dsh-blue-whale-maid](https://github.com/yuxino/dsh-blue-whale-maid) · **License:** MIT · **Package:** [`dsh-blue-whale-maid`](https://www.npmjs.com/package/dsh-blue-whale-maid) · **dsh:** 0.1.0-rc.6

### [dsh-client-ui-pet](https://github.com/Vulcan626/dsh-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-client-ui-pet&scheme=dark"><img src="https://raw.githubusercontent.com/Vulcan626/dsh-pet/main/docs/assets/deepseek-pet-idle.png" width="360" alt="dsh-client-ui-pet preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-client-ui-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek whale overlay pet: in-place swim, session-state frames, drag, and a click-open API stats panel.

```sh
dsh plugin --profile web add github:Vulcan626/dsh-pet
```

**Repo:** [Vulcan626/dsh-pet](https://github.com/Vulcan626/dsh-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-client-ui-whale](https://github.com/AllenYu0118/dsh-client-ui-whale)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-client-ui-whale&scheme=dark"><img src="https://raw.githubusercontent.com/AllenYu0118/dsh-client-ui-whale/main/docs/whale-demo.gif" width="360" alt="dsh-client-ui-whale preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-client-ui-whale&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek-logo whale on the conversation column whose water spout scales with live token consumption.

```sh
dsh plugin --profile web add github:AllenYu0118/dsh-client-ui-whale
```

**Repo:** [AllenYu0118/dsh-client-ui-whale](https://github.com/AllenYu0118/dsh-client-ui-whale) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-codex-pet](https://github.com/minybear/DeepSeek-Harness-Pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-codex-pet&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-codex-pet preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-codex-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Codex-style overlay pet driven by agent running/waiting/error/done states, with a pet.json plus spritesheet pack format.

```sh
dsh plugin --profile web add github:minybear/DeepSeek-Harness-Pet
```

**Repo:** [minybear/DeepSeek-Harness-Pet](https://github.com/minybear/DeepSeek-Harness-Pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-cyber-girlfriend](https://github.com/zhulin025/LaoA-dshGF)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-cyber-girlfriend&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-cyber-girlfriend preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-cyber-girlfriend&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

State-driven black and white cyber-girlfriend skins for the DeepSeek Harness web GUI.

```sh
dsh plugin --profile web add github:zhulin025/LaoA-dshGF
```

**Repo:** [zhulin025/LaoA-dshGF](https://github.com/zhulin025/LaoA-dshGF) · **License:** MIT · **Package:** [`@laoa-ai/dsh-client-ui-cyber-girlfriend`](https://www.npmjs.com/package/@laoa-ai/dsh-client-ui-cyber-girlfriend) · **dsh:** 0.1.0-rc.6

### [dsh-dafeiyu](https://github.com/QCYTSN/dsh-dafeiyu)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-dafeiyu&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-dafeiyu preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-dafeiyu&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Desktop-native BigFish companion driven by DeepSeek Harness session events.

```sh
dsh plugin --profile web add github:QCYTSN/dsh-dafeiyu
```

**Repo:** [QCYTSN/dsh-dafeiyu](https://github.com/QCYTSN/dsh-dafeiyu) · **dsh:** 0.1.0-rc.6

### [dsh-deepseek-girl-pet](https://github.com/f0909172434/dsh-deepseek-girl-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-deepseek-girl-pet&scheme=dark"><img src="https://raw.githubusercontent.com/f0909172434/dsh-deepseek-girl-pet/main/assets/deepseek-girl-harness-demo.gif" width="360" alt="dsh-deepseek-girl-pet preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-deepseek-girl-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Animated DeepSeek-girl overlay pet for the dsh Web UI with session-state animations and mouse tracking.

```sh
dsh plugin --profile web add github:f0909172434/dsh-deepseek-girl-pet
```

**Repo:** [f0909172434/dsh-deepseek-girl-pet](https://github.com/f0909172434/dsh-deepseek-girl-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-desk-pet](https://github.com/anneheartrecord/dsh-desk-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-desk-pet&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-desk-pet preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-desk-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Always-on-top DeepSeek Harness desktop pet. Default whale, four skins, four silent states. Not an in-page widget.

```sh
dsh plugin --profile web add github:anneheartrecord/dsh-desk-pet
```

**Repo:** [anneheartrecord/dsh-desk-pet](https://github.com/anneheartrecord/dsh-desk-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-desktop-pet-crabossss](https://github.com/crabossss/dsh-desktop-pet/tree/HEAD/plugin)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-desktop-pet-crabossss&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-desktop-pet-crabossss preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-desktop-pet-crabossss&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Desktop pet plugin for DeepSeek Harness with a floating companion client.

```sh
dsh plugin --profile web add github:crabossss/dsh-desktop-pet
```

**Repo:** [crabossss/dsh-desktop-pet](https://github.com/crabossss/dsh-desktop-pet/tree/HEAD/plugin) · **dsh:** 0.1.0-rc.6

### [dsh-desktop-pet-sereinmono](https://github.com/sereinmono/dsh-desktop-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-desktop-pet-sereinmono&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-desktop-pet-sereinmono preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-desktop-pet-sereinmono&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Animated desktop companion that shows ambient agent status, supporting the Codex pet format.

```sh
dsh plugin --profile web add github:sereinmono/dsh-desktop-pet
```

**Repo:** [sereinmono/dsh-desktop-pet](https://github.com/sereinmono/dsh-desktop-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-furina-desk-pet](https://github.com/fykuang02/furina-desk-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-furina-desk-pet&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-furina-desk-pet preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-furina-desk-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Floating Furina chibi desk pet for the DeepSeek Harness web GUI, with click effects, affinity levels, and drag.

```sh
dsh plugin --profile web add github:fykuang02/furina-desk-pet
```

**Repo:** [fykuang02/furina-desk-pet](https://github.com/fykuang02/furina-desk-pet) · **dsh:** 0.1.0-rc.6

### [dsh-galgame](https://github.com/Lanxing6480/dsh-galgame)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-galgame&scheme=dark"><img src="https://raw.githubusercontent.com/Lanxing6480/dsh-galgame/main/assets/characters/deepseek/portraits/neutral.webp" width="360" alt="dsh-galgame preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-galgame&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

GalGame mode for the dsh web GUI: a third conversation view tab (after 轨迹) that renders the real agent session as a visual-novel stage — whale-girl (DeepSeek) portrait with diff switching + draggab...

```sh
dsh plugin --profile web add github:Lanxing6480/dsh-galgame
```

**Repo:** [Lanxing6480/dsh-galgame](https://github.com/Lanxing6480/dsh-galgame) · **License:** MIT · **Package:** [`@lanxing/dsh-galgame`](https://www.npmjs.com/package/@lanxing/dsh-galgame) · **dsh:** 0.1.0-rc.6

### [dsh-kun-like-pet](https://github.com/liyupi/dsh-kun-like-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-kun-like-pet&scheme=dark"><img src="https://raw.githubusercontent.com/liyupi/dsh-kun-like-pet/main/docs/screenshot-working.png" width="360" alt="dsh-kun-like-pet preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-kun-like-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Kun Like desktop pet for the dsh Web UI: a corner companion that switches among 9 animations with the agent work state.

```sh
dsh plugin --profile web add github:liyupi/dsh-kun-like-pet
```

**Repo:** [liyupi/dsh-kun-like-pet](https://github.com/liyupi/dsh-kun-like-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-live2d-pets](https://github.com/cyanfish-x/dsh-live2d-pets)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-live2d-pets&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-live2d-pets preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-live2d-pets&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Live2D pet plugin for DeepSeek Harness: agent-state mirror plus interactive companionship with curated presets.

```sh
dsh plugin --profile web add github:cyanfish-x/dsh-live2d-pets
```

**Repo:** [cyanfish-x/dsh-live2d-pets](https://github.com/cyanfish-x/dsh-live2d-pets) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-maid-pet](https://github.com/PC2005-cloud/dsh-pet/tree/HEAD/dsh-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-maid-pet&scheme=dark"><img src="https://raw.githubusercontent.com/PC2005-cloud/dsh-pet/master/dsh-pet/assets/preview/%E5%BE%85%E6%9C%BA%E5%91%BC%E5%90%B8%E4%BC%91%E9%97%B2.gif" width="360" alt="dsh-maid-pet preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-maid-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Floating maid desktop pet for the dsh Web UI with idle breathing and random actions.

```sh
dsh plugin --profile web add github:PC2005-cloud/dsh-pet
```

**Repo:** [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet/tree/HEAD/dsh-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-meep](https://github.com/omdsh-dev/dsh-meep)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-meep&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-meep preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-meep&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Customizable independent-process desktop pet that stays quiet by default and pings at key moments.

```sh
dsh plugin --profile web add github:omdsh-dev/dsh-meep
```

**Repo:** [omdsh-dev/dsh-meep](https://github.com/omdsh-dev/dsh-meep) · **dsh:** 0.1.0-rc.6

### [dsh-nailong-desktop-pet](https://github.com/2002yxy/dsh-nailong-desktop-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-nailong-desktop-pet&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-nailong-desktop-pet preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-nailong-desktop-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Nailong desktop-pet companion for the DeepSeek Harness Web UI.

```sh
dsh plugin --profile web add github:2002yxy/dsh-nailong-desktop-pet
```

**Repo:** [2002yxy/dsh-nailong-desktop-pet](https://github.com/2002yxy/dsh-nailong-desktop-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-pet](https://github.com/zealot00/dsh-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-pet&scheme=dark"><img src="https://raw.githubusercontent.com/zealot00/dsh-pet/main/docs/screenshot-scene.png" width="360" alt="dsh-pet preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Sprite-sheet desktop pet with agent-state animation, drag, alarm, pomodoro, sticky notes, and a right-click skin picker.

```sh
dsh plugin --profile web add github:zealot00/dsh-pet
```

**Repo:** [zealot00/dsh-pet](https://github.com/zealot00/dsh-pet) · **dsh:** 0.1.0-rc.6

### [dsh-pet-corner](https://github.com/omdsh-dev/dsh-pet-corner)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-pet-corner&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-pet-corner preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-pet-corner&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Pet corner for the dsh Web UI: a draggable cat, proxied pictures, favorites, and plugin-owned settings.

```sh
dsh plugin --profile web add github:omdsh-dev/dsh-pet-corner
```

**Repo:** [omdsh-dev/dsh-pet-corner](https://github.com/omdsh-dev/dsh-pet-corner) · **License:** BSD-3-Clause · **dsh:** 0.1.0-rc.6

### [dsh-pet-flytomayday](https://github.com/FlytoMAYDAY80/dsh-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-pet-flytomayday&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-pet-flytomayday preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-pet-flytomayday&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness 桌宠：悬浮在桌面上的小鲸鱼，实时反映会话状态（工作中 / 需要确认 / 任务完成 / 空闲），支持零代码定制素材

```sh
dsh plugin --profile web add github:FlytoMAYDAY80/dsh-pet
```

**Repo:** [FlytoMAYDAY80/dsh-pet](https://github.com/FlytoMAYDAY80/dsh-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-pet-johlin](https://github.com/johlin/dsh-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-pet-johlin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-pet-johlin preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-pet-johlin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Standalone Cordis plugin template for DeepSeek Harness

```sh
dsh plugin --profile web add github:johlin/dsh-pet
```

**Repo:** [johlin/dsh-pet](https://github.com/johlin/dsh-pet) · **License:** BSD-3-Clause · **Package:** [`@your-scope/dsh-plugin-template`](https://www.npmjs.com/package/@your-scope/dsh-plugin-template) · **dsh:** 0.1.0-rc.6

### [dsh-pet-live2d](https://github.com/YilunLi-999/dsh-pet-live2d)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-pet-live2d&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-pet-live2d preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-pet-live2d&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Desktop-pet companion for the DSH web GUI: hatch Codex-compatible sprite pets from an image, render them in the shell.overlay slot, and react to session state.

```sh
dsh plugin --profile web add github:YilunLi-999/dsh-pet-live2d
```

**Repo:** [YilunLi-999/dsh-pet-live2d](https://github.com/YilunLi-999/dsh-pet-live2d) · **License:** MIT · **Package:** [`dsh-pet`](https://www.npmjs.com/package/dsh-pet) · **dsh:** 0.1.0-rc.6

### [dsh-pet-maid](https://github.com/skylar-fei/dsh-wechat-maid/tree/HEAD/packages/dsh-pet-maid)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-pet-maid&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-pet-maid preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-pet-maid&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH Web 插件合集：微信机器人（连接 + 主动消息/定时推送）+ 深蓝女仆桌宠，两个插件共享构建预设的单仓库。

```sh
dsh plugin --profile web add github:skylar-fei/dsh-wechat-maid
```

**Repo:** [skylar-fei/dsh-wechat-maid](https://github.com/skylar-fei/dsh-wechat-maid/tree/HEAD/packages/dsh-pet-maid) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-pet-mathhyphen](https://github.com/mathhyphen/dsh-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-pet-mathhyphen&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-pet-mathhyphen preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-pet-mathhyphen&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek 桌宠（桌面置顶悬浮窗）：多宠物可切换、随 Harness 状态反应、支持自定义像素素材。A floating desktop pet for DeepSeek Harness with switchable pets and custom sprites.

```sh
dsh plugin --profile web add github:mathhyphen/dsh-pet
```

**Repo:** [mathhyphen/dsh-pet](https://github.com/mathhyphen/dsh-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-pet-shura](https://github.com/brittanistrehlowll-oss/dsh-pet-shura)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-pet-shura&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-pet-shura preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-pet-shura&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Shura tiger desktop pet for the dsh Web UI: v2 spritesheet animation, drag and drop, look-at-mouse, and a settings panel.

```sh
dsh plugin --profile web add github:brittanistrehlowll-oss/dsh-pet-shura
```

**Repo:** [brittanistrehlowll-oss/dsh-pet-shura](https://github.com/brittanistrehlowll-oss/dsh-pet-shura) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-pet-zhuangfangyi](https://github.com/zealot00/dsh-pet-zhuangfangyi)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-pet-zhuangfangyi&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-pet-zhuangfangyi preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-pet-zhuangfangyi&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Chibi desktop pet for the dsh Web UI: idle float animation and click-to-speak bubbles, with a rebuild script to swap the PNG.

```sh
dsh plugin --profile web add github:zealot00/dsh-pet-zhuangfangyi
```

**Repo:** [zealot00/dsh-pet-zhuangfangyi](https://github.com/zealot00/dsh-pet-zhuangfangyi) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-pets](https://github.com/hellosz/dsh-pets)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-pets&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-pets preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-pets&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Pikachu and Charmander overlay pets driven by agent state, with petdex-compatible sprite packs and a Settings pet section.

```sh
dsh plugin --profile web add github:hellosz/dsh-pets
```

**Repo:** [hellosz/dsh-pets](https://github.com/hellosz/dsh-pets) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-plugin-pet](https://github.com/c-ling/dsh-plugin-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-plugin-pet&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-plugin-pet preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-plugin-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Overlay pet with six built-in SVG skins, custom image upload, and Codex spritesheet import, mood-linked to agent state.

```sh
dsh plugin --profile web add github:c-ling/dsh-plugin-pet
```

**Repo:** [c-ling/dsh-plugin-pet](https://github.com/c-ling/dsh-plugin-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-plugin-pet-rs](https://github.com/HuanLinOTO/dsh-plugin-pet-rs)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-plugin-pet-rs&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-plugin-pet-rs preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-plugin-pet-rs&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Rust desktop pet: five whale states, dual SSE live push, transparent always-on-top window, and a tray icon.

```sh
dsh plugin --profile web add github:HuanLinOTO/dsh-plugin-pet-rs
```

**Repo:** [HuanLinOTO/dsh-plugin-pet-rs](https://github.com/HuanLinOTO/dsh-plugin-pet-rs) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-sprite-pet](https://github.com/skr311/dsh-codex-pet/tree/HEAD/packages/dsh-codex-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-sprite-pet&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-sprite-pet preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-sprite-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Sprite-sheet desktop pet for the Web UI: import Codex-style pets, floating overlay render, library, and agent-state linkage.

```sh
dsh plugin --profile web add github:skr311/dsh-codex-pet
```

**Repo:** [skr311/dsh-codex-pet](https://github.com/skr311/dsh-codex-pet/tree/HEAD/packages/dsh-codex-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-ui-desktop-pet](https://github.com/jmctsh/dsh-ui-desktop-pet/tree/HEAD/ui-desktop-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-ui-desktop-pet&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-ui-desktop-pet preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-ui-desktop-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Draggable Live2D desktop pet floating in the Web UI overlay, with click speech and agent-state linkage.

```sh
dsh plugin --profile web add github:jmctsh/dsh-ui-desktop-pet
```

**Repo:** [jmctsh/dsh-ui-desktop-pet](https://github.com/jmctsh/dsh-ui-desktop-pet/tree/HEAD/ui-desktop-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-ui-whale](https://github.com/omdsh-dev/dsh-ui-whale)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-ui-whale&scheme=dark"><img src="https://raw.githubusercontent.com/omdsh-dev/dsh-ui-whale/main/docs/dsh-ui-whale-demo.gif" width="360" alt="dsh-ui-whale preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-ui-whale&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Pixel whale in the session title bar that animates with agent state, spouts on turn complete, and hearts on click.

```sh
dsh plugin --profile web add github:omdsh-dev/dsh-ui-whale
```

**Repo:** [omdsh-dev/dsh-ui-whale](https://github.com/omdsh-dev/dsh-ui-whale) · **License:** BSD-3-Clause · **dsh:** 0.1.0-rc.6

### [dsh-waterball-pet](https://github.com/sundusk/dsh-waterball-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-waterball-pet&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-waterball-pet preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-waterball-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

SVG water-ball companion: halo color and motion follow agent idle/think/tool/done/error, with size and drag in plugin settings.

```sh
dsh plugin --profile web add github:sundusk/dsh-waterball-pet
```

**Repo:** [sundusk/dsh-waterball-pet](https://github.com/sundusk/dsh-waterball-pet) · **dsh:** 0.1.0-rc.6

### [dsh-webUI-pets](https://github.com/pineapple880066/dsh-webUI-pets/tree/HEAD/packages/client/ui-desktop-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-webUI-pets&scheme=dark"><img src="https://raw.githubusercontent.com/pineapple880066/dsh-webUI-pets/main/assets/webui-preview.png" width="360" alt="dsh-webUI-pets preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-webUI-pets&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Four Codex-style overlay pets (Doki, Crimson Flower, Blue Ribbon, Deep Sea): 12-frame sprites, drag, minimize, and cycle.

```sh
dsh plugin --profile web add github:pineapple880066/dsh-webUI-pets
```

**Repo:** [pineapple880066/dsh-webUI-pets](https://github.com/pineapple880066/dsh-webUI-pets/tree/HEAD/packages/client/ui-desktop-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-whale-girl-pet](https://github.com/Er1c0v0/dsh-whale-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-whale-girl-pet&scheme=dark"><img src="https://raw.githubusercontent.com/Er1c0v0/dsh-whale-pet/main/docs/working-preview.gif" width="360" alt="dsh-whale-girl-pet preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-whale-girl-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Whale-girl overlay pet for the dsh Web UI: idle, working, needs-input, ready, and blocked states, with drag and a clickable status panel.

```sh
dsh plugin --profile web add github:Er1c0v0/dsh-whale-pet
```

**Repo:** [Er1c0v0/dsh-whale-pet](https://github.com/Er1c0v0/dsh-whale-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-whale-pet](https://github.com/lglglglgy/dsh-whale-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-whale-pet&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-whale-pet preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-whale-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Blue whale overlay that swims, tracks the cursor, sprays water on click, and can be dizzy-spun then tapped awake.

```sh
dsh plugin --profile web add github:lglglglgy/dsh-whale-pet
```

**Repo:** [lglglglgy/dsh-whale-pet](https://github.com/lglglglgy/dsh-whale-pet) · **dsh:** 0.1.0-rc.6

### [dsh-whale-pet-aceice](https://github.com/aceice01/dsh-whale-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-whale-pet-aceice&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-whale-pet-aceice preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-whale-pet-aceice&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Whale-girl desktop pet plus a Web floating pet, with voice, interaction, and task-done pings.

```sh
dsh plugin --profile web add github:aceice01/dsh-whale-pet
```

**Repo:** [aceice01/dsh-whale-pet](https://github.com/aceice01/dsh-whale-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-whale-pet-rongzi5](https://github.com/rongzi5/dsh-whale-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-whale-pet-rongzi5&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-whale-pet-rongzi5 preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-whale-pet-rongzi5&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Frame-wide 3D whale desktop pet with edge habitat, hover reactions, and smooth shape-aware dragging

```sh
dsh plugin --profile web add github:rongzi5/dsh-whale-pet
```

**Repo:** [rongzi5/dsh-whale-pet](https://github.com/rongzi5/dsh-whale-pet) · **License:** MIT · **Package:** [`@deepseek-ai/dsh-client-ui-whale-pet`](https://www.npmjs.com/package/@deepseek-ai/dsh-client-ui-whale-pet) · **dsh:** 0.1.0-rc.6

### [emoji-desktop-pet](https://github.com/Gcsimple/Emoji_Desktop_Pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=emoji-desktop-pet&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="emoji-desktop-pet preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=emoji-desktop-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Draggable emoji desktop pet for the Web UI, built as a dynamic Cordis plugin.

```sh
dsh plugin --profile web add github:Gcsimple/Emoji_Desktop_Pet
```

**Repo:** [Gcsimple/Emoji_Desktop_Pet](https://github.com/Gcsimple/Emoji_Desktop_Pet) · **dsh:** 0.1.0-rc.6

### [harness-pet](https://github.com/cakeni/harness-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=harness-pet&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="harness-pet preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=harness-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Pixel whale companion with nine agent states, a live prompt/reply card, drag, and an optional always-on-top picture-in-picture window.

```sh
dsh plugin --profile web add github:cakeni/harness-pet
```

**Repo:** [cakeni/harness-pet](https://github.com/cakeni/harness-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [whale-girl](https://github.com/vlln/whale-girl)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=whale-girl&scheme=dark"><img src="https://raw.githubusercontent.com/vlln/whale-girl/main/docs/preview/idle.gif" width="360" alt="whale-girl preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=whale-girl&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH Web GUI desktop-pet plugin (QQ pet form): floating companion. Theme/skin-shaped listing.

```sh
dsh plugin --profile web add github:vlln/whale-girl
```

**Repo:** [vlln/whale-girl](https://github.com/vlln/whale-girl) · **License:** MIT · **dsh:** 0.1.0-rc.5

### [whale-girl-plus](https://github.com/Henry91200/whale-girl-plus)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=whale-girl-plus&scheme=dark"><img src="https://raw.githubusercontent.com/Henry91200/whale-girl-plus/HEAD/.dsh-plugin/assets/characters/whale-girl-office/idle.png" width="360" alt="whale-girl-plus preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=whale-girl-plus&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Whale-girl desk pet for DeepSeek Harness with extra outfits, idle animations, and configurable work-rhythm behavior.

```sh
dsh plugin --profile web add github:Henry91200/whale-girl-plus
```

**Repo:** [Henry91200/whale-girl-plus](https://github.com/Henry91200/whale-girl-plus) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [yuhao-pet](https://github.com/dlpufan/yuhao-pet)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=yuhao-pet&scheme=dark"><img src="https://raw.githubusercontent.com/dlpufan/yuhao-pet/HEAD/assets/full.webp" width="360" alt="yuhao-pet preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=yuhao-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Floating Yuhao desk pet for the DeepSeek Harness web GUI, with drag, feed, play, work, and a token-points shop.

```sh
dsh plugin --profile web add github:dlpufan/yuhao-pet
```

**Repo:** [dlpufan/yuhao-pet](https://github.com/dlpufan/yuhao-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

## Fun / extras

Gags and extras that restyle the whole Web UI for laughs. Not `--dsw-*` token skins — still part of the dive.

### [dafy-whale-theme](https://github.com/DViridescent/dafy-whale-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dafy-whale-theme&scheme=dark"><img src="https://raw.githubusercontent.com/DViridescent/dafy-whale-theme/main/preview.png" width="360" alt="dafy-whale-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dafy-whale-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Ocean-blue DeepSeek Harness skin with swimming fish, rising bubbles, a corner mascot, and token palettes.

```sh
dsh plugin --profile web add github:DViridescent/dafy-whale-theme
```

**Repo:** [DViridescent/dafy-whale-theme](https://github.com/DViridescent/dafy-whale-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-ads](https://github.com/Nagi-ovo/dsh-ads)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-ads&scheme=dark"><img src="https://raw.githubusercontent.com/Nagi-ovo/dsh-ads/main/assets/screenshot.webp" width="360" alt="dsh-ads preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-ads&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

2005-portal gag plugin that restyles the whole Web UI with fake ads — sidebar banners, in-thread plugs, corner popups. Not a --dsw-* token skin.

```sh
dsh plugin --profile web add github:Nagi-ovo/dsh-ads
```

**Repo:** [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) · **dsh:** 0.1.0-rc.6

### [dsh-cyber-particle](https://github.com/AKS1st/dsh-cyber-particle)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-cyber-particle&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-cyber-particle preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-cyber-particle&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Cyber particle overlay for the DeepSeek Harness web GUI.

```sh
dsh plugin --profile web add github:AKS1st/dsh-cyber-particle
```

**Repo:** [AKS1st/dsh-cyber-particle](https://github.com/AKS1st/dsh-cyber-particle) · **License:** MIT · **Package:** [`cyber-particle`](https://www.npmjs.com/package/cyber-particle) · **dsh:** 0.1.0-rc.6

### [dsh-lulu-theme](https://github.com/shaoqing404/dsh-lulu-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-lulu-theme&scheme=dark"><img src="https://raw.githubusercontent.com/shaoqing404/dsh-lulu-theme/main/assets/lulu-compact-sheet.png" width="360" alt="dsh-lulu-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-lulu-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Capybara Lulu skin for the dsh web UI: cream-coffee light and warm-night dark token palettes, plus a corner pet with wave and sway animations.

```sh
dsh plugin --profile web add github:shaoqing404/dsh-lulu-theme
```

**Repo:** [shaoqing404/dsh-lulu-theme](https://github.com/shaoqing404/dsh-lulu-theme) · **dsh:** 0.1.0-rc.6

### [dsh-meow-cat](https://github.com/dsh-pub/dsh-meow-cat)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-meow-cat&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-meow-cat preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-meow-cat&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

A cat runs across the bottom of the DeepSeek Harness web UI with a synthesized meow when a conversation turn ends.

```sh
dsh plugin --profile web add github:dsh-pub/dsh-meow-cat
```

**Repo:** [dsh-pub/dsh-meow-cat](https://github.com/dsh-pub/dsh-meow-cat) · **License:** MIT · **Package:** [`dsh-meow-cat`](https://www.npmjs.com/package/dsh-meow-cat) · **dsh:** 0.1.0-rc.6

### [dsh-skin-mojing](https://github.com/Gyanano/dsh-skin-mojing)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-mojing&scheme=dark"><img src="https://raw.githubusercontent.com/Gyanano/dsh-skin-mojing/HEAD/docs/screenshots/home-dawn.jpg" width="360" alt="dsh-skin-mojing preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=dsh-skin-mojing&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Oil-painted whale-girl skin for the DeepSeek Harness web UI.

```sh
dsh plugin --profile web add github:Gyanano/dsh-skin-mojing
```

**Repo:** [Gyanano/dsh-skin-mojing](https://github.com/Gyanano/dsh-skin-mojing) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [liuli-theme](https://github.com/LilycleHeart/liuli-theme)

<a href="https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=liuli-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="liuli-theme preview"></a>

**[Live preview](https://dshworks.github.io/awesome-dsh-themes/preview.html?theme=liuli-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

DenpaPush-style glass theme for the DeepSeek Harness web UI, with M3 dynamic color, wallpaper material, and day/night palettes.

```sh
dsh plugin --profile web add github:LilycleHeart/liuli-theme
```

**Repo:** [LilycleHeart/liuli-theme](https://github.com/LilycleHeart/liuli-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6

## Live gallery

The [deep-seek-universe gallery](https://dshworks.github.io/awesome-dsh-themes/) lives on GitHub Pages (`/docs`). Same entries. More water. Search the trench, filter by category / live / verified, sort by Fresh catch, Live first, or A–Z. Cards show a real source-repo shot when we have one, or a drawn whale if we do not. Themes with a `previewCss` sheet get a **live** badge — Dive opens that skin in a floating window on the gallery (Open full still goes to the full-page preview). The ocean backdrop is a random screenshot from the registry itself, credited bottom-right; "Dive again" rerolls it. GitHub strips iframes, so the README uses thumbnails and links.

## Roadmap

Shorter install is a [plan](ROADMAP.md), not a fake CLI. Today the real command is already `dsh plugin --profile web add github:owner/repo`.

## Add a theme

Open a PR against [`data/themes.json`](data/themes.json) only; the README and `docs/themes.json` are regenerated. See [CONTRIBUTING.md](CONTRIBUTING.md). A theme here is a ThemeRuntime, a `--dsw-*` override set, a skin that actually restyles the dsh Web UI, a companion that lives beside it, or a fun extra. The ThemeRuntime package is an extension point, not a store, and this list is not one either. A real preview image helps a lot. If you ship a CSS override sheet, add `previewCss` so the live window can wear it. Optional `install` overrides the derived one-liner; see [ROADMAP.md](ROADMAP.md).

## License

MIT. **Not affiliated with DeepSeek.**

# awesome-dsh-themes [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[![powered by dsh](https://img.shields.io/badge/powered__by-dsh-4D6BFE?logo=deepseek)](https://github.com/deepseek-ai/deepseek-harness)
[![license: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![live gallery](https://img.shields.io/badge/live_gallery-dive_in-0ea5e9)](https://dsh.works/awesome-dsh-themes/)

<p align="center">
  <img src="docs/assets/banner.svg" alt="A whale diving through a bioluminescent sea of dsh themes" width="800">
</p>

A curated list of [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`) themes and `--dsw-*` token skins — 489 entries, 38 with live in-browser previews, 473 verified against a dsh release.

**[Open the live gallery](https://dsh.works/awesome-dsh-themes/)** — wild whales, token seas, and a little ❤️. Welcome.

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

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-client-ui-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

ThemeRuntime over --dsw-* tokens (static scale + alias semantic layers); light/dark/system. Five sheets: base, design-platform, scrollbar, gradient-shadow-text, shiki. Third-party themes are an extension point, not a product. Not a theme store.

**Repo:** [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/tree/HEAD/packages/client/ui-theme) · **License:** MIT · **Package:** [`@deepseek-ai/dsh-client-ui-theme`](https://www.npmjs.com/package/@deepseek-ai/dsh-client-ui-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [packages/client/ui-theme/package.json#name](https://github.com/deepseek-ai/deepseek-harness/blob/HEAD/packages/client/ui-theme/package.json)

## Token skins

Community `--dsw-static-*` / `--dsw-alias-*` override sets that restyle the Web UI.

### [chiral-pulse](https://github.com/MoonShadow1976/chiral-pulse)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=chiral-pulse&scheme=dark"><img src="https://raw.githubusercontent.com/MoonShadow1976/chiral-pulse/HEAD/assets/chiral-pulse-hero.png" width="360" alt="chiral-pulse preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=chiral-pulse&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Death Stranding --dsw-* skin with a BB vital-signs monitor: amber-on-ink palette and a live heartbeat paper feed under the composer.

```sh
dsh plugin --profile web add github:MoonShadow1976/chiral-pulse
```

**Repo:** [MoonShadow1976/chiral-pulse](https://github.com/MoonShadow1976/chiral-pulse) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/MoonShadow1976/chiral-pulse/blob/HEAD/package.json)

### [claude-parchment-theme](https://github.com/RayYeung1989/claude-parchment-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=claude-parchment-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="claude-parchment-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=claude-parchment-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Claude-style parchment theme for the Web UI: warm paper palette, terracotta accents, serif titles, and full DSW token coverage.

```sh
dsh plugin --profile web add github:RayYeung1989/claude-parchment-theme
```

**Repo:** [RayYeung1989/claude-parchment-theme](https://github.com/RayYeung1989/claude-parchment-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/RayYeung1989/claude-parchment-theme/blob/HEAD/package.json)

### [deepseek-harness-liquid-glass-theme](https://github.com/Rainpomelo/deepseek-harness-liquid-glass-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-harness-liquid-glass-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="deepseek-harness-liquid-glass-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-harness-liquid-glass-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Liquid Glass & Live Wallpaper: a physical Snell-refraction fluid glassmorphism theme and dynamic wallpaper engine for Web surface

```sh
dsh plugin --profile web add github:Rainpomelo/deepseek-harness-liquid-glass-theme
```

**Repo:** [Rainpomelo/deepseek-harness-liquid-glass-theme](https://github.com/Rainpomelo/deepseek-harness-liquid-glass-theme) · **dsh:** 0.1.0-rc.7 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/Rainpomelo/deepseek-harness-liquid-glass-theme/blob/HEAD/package.json)

### [deepseek-harness-liverpool-theme](https://github.com/pinkear/deepseek-harness-liverpool-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-harness-liverpool-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="deepseek-harness-liverpool-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-harness-liverpool-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Liverpool-inspired red and gold visual skin for DeepSeek Harness

```sh
dsh plugin --profile web add github:pinkear/deepseek-harness-liverpool-theme
```

**Repo:** [pinkear/deepseek-harness-liverpool-theme](https://github.com/pinkear/deepseek-harness-liverpool-theme) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/pinkear/deepseek-harness-liverpool-theme/blob/HEAD/package.json)

### [deepseek-harness-plugin-image-skin](https://github.com/fufankeji/deepseek-harness-plugin-image-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-harness-plugin-image-skin&scheme=dark"><img src="https://raw.githubusercontent.com/fufankeji/deepseek-harness-plugin-image-skin/main/.github/assets/readme/hero.png" width="360" alt="deepseek-harness-plugin-image-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-harness-plugin-image-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Image-to-skin studio that turns a picture into an installable dsh Web skin plugin with light and dark adaptation.

```sh
dsh plugin --profile web add github:fufankeji/deepseek-harness-plugin-image-skin
```

**Repo:** [fufankeji/deepseek-harness-plugin-image-skin](https://github.com/fufankeji/deepseek-harness-plugin-image-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [examples/generated-plugin/package.json#dsh.bundle](https://github.com/fufankeji/deepseek-harness-plugin-image-skin/blob/HEAD/examples/generated-plugin/package.json)

### [deepseek-harness-skin](https://github.com/HeiGeAi/deepseek-harness-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-harness-skin&scheme=dark"><img src="https://raw.githubusercontent.com/HeiGeAi/deepseek-harness-skin/main/docs/images/skin-center.webp" width="360" alt="deepseek-harness-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-harness-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

21 built-in Web UI skins plus one-image custom palettes: QQ 2007/2008, Miku, Genshin, Naruto, Wuthering Waves, and more, with contrast-preserving --dsw-* derivation.

```sh
bash scripts/install.sh /path/to/deepseek-harness
```

**Repo:** [HeiGeAi/deepseek-harness-skin](https://github.com/HeiGeAi/deepseek-harness-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [tree/packages/client/ui-theme/package.json#dsh.client](https://github.com/HeiGeAi/deepseek-harness-skin/blob/HEAD/tree/packages/client/ui-theme/package.json)

### [deepseek-harness-themes](https://github.com/orxz/deepseek-harness-themes/tree/HEAD/packages/ui)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-harness-themes&scheme=dark"><img src="https://raw.githubusercontent.com/orxz/deepseek-harness-themes/HEAD/screenshots/settings.png" width="360" alt="deepseek-harness-themes preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-harness-themes&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Six alias-token themes: DeepSeek light, OLED, Dracula, Catppuccin Mocha, Tokyo Night, and GitHub Dark, with a Settings General picker.

```sh
dsh plugin --profile web add github:orxz/deepseek-harness-themes
```

**Repo:** [orxz/deepseek-harness-themes](https://github.com/orxz/deepseek-harness-themes/tree/HEAD/packages/ui) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [packages/ui/package.json#dsh.bundle](https://github.com/orxz/deepseek-harness-themes/blob/HEAD/packages/ui/package.json)

### [dhs-theme-plugin](https://github.com/kongxiangyiren/dhs-theme-plugin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dhs-theme-plugin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dhs-theme-plugin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dhs-theme-plugin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Theme manager for the dsh Web UI: a Settings Theme section with Forest Green and Ocean Blue alias-token skins, plus upload-and-switch for custom JS themes persisted on disk.

```sh
dsh plugin --profile web add github:kongxiangyiren/dhs-theme-plugin
```

**Repo:** [kongxiangyiren/dhs-theme-plugin](https://github.com/kongxiangyiren/dhs-theme-plugin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/kongxiangyiren/dhs-theme-plugin/blob/HEAD/package.json)

### [ds-image-skin](https://github.com/ahren112/ds-image-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=ds-image-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="ds-image-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=ds-image-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Upload an image, k-means extract a palette, generate light/dark --dsw-* tokens with WCAG contrast, and use the image as wallpaper.

```sh
dsh plugin --profile web add github:ahren112/ds-image-skin
```

**Repo:** [ahren112/ds-image-skin](https://github.com/ahren112/ds-image-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-angelina-themes](https://github.com/bilbillm/deepseek-harness-angelina-themes)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-angelina-themes&scheme=dark"><img src="https://raw.githubusercontent.com/bilbillm/deepseek-harness-angelina-themes/main/src/assets/angelina-light-hero.webp" width="360" alt="dsh-angelina-themes preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-angelina-themes&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Angelina light and dark glass themes with restrained parallax for the DeepSeek Harness Web UI.

```sh
dsh plugin --profile web add github:bilbillm/deepseek-harness-angelina-themes
```

**Repo:** [bilbillm/deepseek-harness-angelina-themes](https://github.com/bilbillm/deepseek-harness-angelina-themes) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/bilbillm/deepseek-harness-angelina-themes/blob/HEAD/package.json)

### [dsh-any-background](https://github.com/Tkingxiao/dsh-any-background)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-any-background&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-any-background preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-any-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Appearance plugin: custom theme colour via a PS-style colour wheel, background wallpaper with opacity and blur, main and settings surfaces styled separately.

```sh
dsh plugin --profile web add github:Tkingxiao/dsh-any-background
```

**Repo:** [Tkingxiao/dsh-any-background](https://github.com/Tkingxiao/dsh-any-background) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/Tkingxiao/dsh-any-background/blob/HEAD/package.json)

### [dsh-aqua](https://github.com/WYH66666666/DSH)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-aqua&scheme=dark"><img src="https://raw.githubusercontent.com/WYH66666666/DSH/HEAD/assets/2.png" width="360" alt="dsh-aqua preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-aqua&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Aqua, a toggleable deep-sea theme layer for the DeepSeek Harness web surface.

```sh
dsh plugin --profile web add github:WYH66666666/DSH
```

**Repo:** [WYH66666666/DSH](https://github.com/WYH66666666/DSH) · **License:** MIT · **Package:** [`@deepseek-ai/dsh-client-ui-aqua`](https://www.npmjs.com/package/@deepseek-ai/dsh-client-ui-aqua) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/WYH66666666/DSH/blob/HEAD/package.json)

### [DSH-Aqua-Theme](https://github.com/lcb522/DSH-Aqua-Theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=DSH-Aqua-Theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="DSH-Aqua-Theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=DSH-Aqua-Theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Aqua: a highly customizable glassmorphism theme for the Web surface — adjustable blur, frost, fluid or wallpaper backdrop, unified corners, and motion

```sh
dsh plugin --profile web add github:lcb522/DSH-Aqua-Theme
```

**Repo:** [lcb522/DSH-Aqua-Theme](https://github.com/lcb522/DSH-Aqua-Theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/lcb522/DSH-Aqua-Theme/blob/HEAD/package.json)

### [dsh-arcaea-theme](https://github.com/a1swg1159-pixel/dsh-arcaea-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-arcaea-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-arcaea-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-arcaea-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

An original high-key prismatic memory theme for the DeepSeek Harness web UI.

```sh
dsh plugin --profile web add github:a1swg1159-pixel/dsh-arcaea-theme
```

**Repo:** [a1swg1159-pixel/dsh-arcaea-theme](https://github.com/a1swg1159-pixel/dsh-arcaea-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/a1swg1159-pixel/dsh-arcaea-theme/blob/HEAD/package.json)

### [dsh-asuka-school-theme](https://github.com/Yyyyyylor/dsh-asuka-school-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-asuka-school-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-asuka-school-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-asuka-school-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Asuka School // 02 theme for the DeepSeek Harness web UI.

```sh
dsh plugin --profile web add github:Yyyyyylor/dsh-asuka-school-theme
```

**Repo:** [Yyyyyylor/dsh-asuka-school-theme](https://github.com/Yyyyyylor/dsh-asuka-school-theme) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/Yyyyyylor/dsh-asuka-school-theme/blob/HEAD/package.json)

### [dsh-aurora](https://github.com/wenliang9527/dsh-themes/tree/HEAD/plugins/dsh-aurora/persist)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-aurora&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-aurora preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-aurora&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Eight --dsw-* palettes for the dsh Web UI (aurora, sakura, bamboo, violet, amber, abyss, graphite, midnight), each with light and dark.

```sh
dsh plugin --profile web add github:wenliang9527/dsh-themes
```

**Repo:** [wenliang9527/dsh-themes](https://github.com/wenliang9527/dsh-themes/tree/HEAD/plugins/dsh-aurora/persist) · **dsh:** 0.1.0-rc.6 · **Proof:** [plugins/dsh-aurora/persist/package.json#dsh.bundle](https://github.com/wenliang9527/dsh-themes/blob/HEAD/plugins/dsh-aurora/persist/package.json)

### [dsh-aurora-skin](https://github.com/breaker505/dsh-aurora-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-aurora-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-aurora-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-aurora-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Three hand-tuned skins for DeepSeek Harness (DSH): Aurora (deep navy + electric cyan + warm coral), Paper (cool white + deep teal, daytime reading), and Hologram (near-black + lime-cyan, terminal vibes). Pure --dsw-alias-* token system, no core patches, persisted in localStorage.

```sh
dsh plugin --profile web add github:breaker505/dsh-aurora-skin
```

**Repo:** [breaker505/dsh-aurora-skin](https://github.com/breaker505/dsh-aurora-skin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/breaker505/dsh-aurora-skin/blob/HEAD/package.json)

### [dsh-beige-theme](https://github.com/SweetCandy-gift/dsh-beige-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-beige-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-beige-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-beige-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

米黄色皮肤 — DeepSeek Harness 主题皮肤

```sh
dsh plugin --profile web add github:SweetCandy-gift/dsh-beige-theme
```

**Repo:** [SweetCandy-gift/dsh-beige-theme](https://github.com/SweetCandy-gift/dsh-beige-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/SweetCandy-gift/dsh-beige-theme/blob/HEAD/package.json)

### [dsh-black-whale](https://github.com/147228/dsh-black-whale)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-black-whale&scheme=dark"><img src="https://raw.githubusercontent.com/147228/dsh-black-whale/main/preview/dark.png" width="360" alt="dsh-black-whale preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-black-whale&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Black Whale Lab --dsw-* token skin for the dsh Web UI: 黑鲸 × 夕小瑶 laboratory look.

```sh
dsh plugin --profile web add github:147228/dsh-black-whale
```

**Repo:** [147228/dsh-black-whale](https://github.com/147228/dsh-black-whale) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/147228/dsh-black-whale/blob/HEAD/package.json)

### [dsh-blue-whale](https://github.com/starslittle/dsh-blue-whale)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-blue-whale&scheme=dark"><img src="https://raw.githubusercontent.com/starslittle/dsh-blue-whale/HEAD/docs/compare-brand.png" width="360" alt="dsh-blue-whale preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-blue-whale&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Official DeepSeek Chat blue-whale default skin for DeepSeek Harness. Light and dark follow the built-in appearance; brand tokens use #4D6BFE.

```sh
dsh plugin --profile web add github:starslittle/dsh-blue-whale
```

**Repo:** [starslittle/dsh-blue-whale](https://github.com/starslittle/dsh-blue-whale) · **License:** MIT · **Package:** [`dsh-blue-whale`](https://www.npmjs.com/package/dsh-blue-whale) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/starslittle/dsh-blue-whale/blob/HEAD/package.json)

### [dsh-blur-theme](https://github.com/hashdiana/dsh-blur-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-blur-theme&scheme=dark"><img src="https://raw.githubusercontent.com/hashdiana/dsh-blur-theme/main/p1.png" width="360" alt="dsh-blur-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-blur-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Frosted-glass --dsw-* theme for the dsh Web UI: floating rounded sidebar, frosted header, floating composer, and a live blur slider.

```sh
dsh plugin --profile web add github:hashdiana/dsh-blur-theme
```

**Repo:** [hashdiana/dsh-blur-theme](https://github.com/hashdiana/dsh-blur-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/hashdiana/dsh-blur-theme/blob/HEAD/package.json)

### [dsh-catppuccin](https://github.com/zhijun-dai/dsh-Catppuccin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-catppuccin&scheme=dark"><img src="https://raw.githubusercontent.com/zhijun-dai/dsh-Catppuccin/HEAD/assets/preview.webp" width="360" alt="dsh-catppuccin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-catppuccin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Catppuccin pastel themes for DeepSeek Harness: Latte, Frappe, Macchiato, and Mocha.

```sh
dsh plugin --profile web add github:zhijun-dai/dsh-Catppuccin
```

**Repo:** [zhijun-dai/dsh-Catppuccin](https://github.com/zhijun-dai/dsh-Catppuccin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/zhijun-dai/dsh-Catppuccin/blob/HEAD/package.json)

### [dsh-catppuccin-nonamelego](https://github.com/NoNameLeGo/dsh-catppuccin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-catppuccin-nonamelego&scheme=dark"><img src="https://raw.githubusercontent.com/NoNameLeGo/dsh-catppuccin/HEAD/assets/previews/latte.png" width="360" alt="dsh-catppuccin-nonamelego preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-catppuccin-nonamelego&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Catppuccin themes for the DeepSeek Harness web GUI: Latte, Frappe, Macchiato and Mocha.

```sh
dsh plugin --profile web add github:NoNameLeGo/dsh-catppuccin
```

**Repo:** [NoNameLeGo/dsh-catppuccin](https://github.com/NoNameLeGo/dsh-catppuccin) · **License:** MIT · **Package:** [`dsh-catppuccin`](https://www.npmjs.com/package/dsh-catppuccin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#devDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/NoNameLeGo/dsh-catppuccin/blob/HEAD/package.json)

### [dsh-catppuccin-theme](https://github.com/NoNameLeGo/dsh-catppuccin-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-catppuccin-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-catppuccin-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-catppuccin-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Catppuccin themes + a toggleable glassmorphism skin for the DeepSeek Harness web GUI — Latte, Frappé, Macchiato and Mocha registered into the official theme system (Appearance settings), fully remapping the --dsw-* token ladder, with adjustable frosted glass for the top bar, sidebar, composer, stats line and

```sh
dsh plugin --profile web add github:NoNameLeGo/dsh-catppuccin-theme
```

**Repo:** [NoNameLeGo/dsh-catppuccin-theme](https://github.com/NoNameLeGo/dsh-catppuccin-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#devDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/NoNameLeGo/dsh-catppuccin-theme/blob/HEAD/package.json)

### [dsh-chat-skin](https://github.com/1m01m0/dsh-chat-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-chat-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-chat-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-chat-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Client plugin with six gradient presets, custom wallpaper, and a Settings General skin card.

```sh
dsh plugin --profile web add github:1m01m0/dsh-chat-skin
```

**Repo:** [1m01m0/dsh-chat-skin](https://github.com/1m01m0/dsh-chat-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/1m01m0/dsh-chat-skin/blob/HEAD/package.json)

### [dsh-classic-colorways](https://github.com/heiyouhu/dsh-themes)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-classic-colorways&scheme=dark"><img src="https://raw.githubusercontent.com/heiyouhu/dsh-themes/main/assets/previews/nord-dark.png" width="360" alt="dsh-classic-colorways preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-classic-colorways&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Appearance skin pack for the DeepSeek Harness Web GUI: Nord, Gruvbox, Solarized, Dracula, and Tokyo Night, each with light and dark variants.

```sh
dsh plugin --profile web add github:heiyouhu/dsh-themes
```

**Repo:** [heiyouhu/dsh-themes](https://github.com/heiyouhu/dsh-themes) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#devDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/heiyouhu/dsh-themes/blob/HEAD/package.json)

### [dsh-claude-theme](https://github.com/chajiuqqq/dsh-claude-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-claude-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-claude-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-claude-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Claude-style --dsw-* interface theme for the dsh Web UI.

```sh
dsh plugin --profile web add github:chajiuqqq/dsh-claude-theme
```

**Repo:** [chajiuqqq/dsh-claude-theme](https://github.com/chajiuqqq/dsh-claude-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/chajiuqqq/dsh-claude-theme/blob/HEAD/package.json)

### [dsh-columbina-theme](https://github.com/hyposelen1a/dsh-columbina-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-columbina-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-columbina-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-columbina-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

A Genshin Impact Columbina (哥伦比娅) themed plugin for DeepSeek Harness Web: preset/custom background images with a translucent mask, per light/dark scheme palettes, and a special glow for the active conversation title.

```sh
dsh plugin --profile web add github:hyposelen1a/dsh-columbina-theme
```

**Repo:** [hyposelen1a/dsh-columbina-theme](https://github.com/hyposelen1a/dsh-columbina-theme) · **dsh:** 0.1.0-rc.7 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/hyposelen1a/dsh-columbina-theme/blob/HEAD/package.json)

### [dsh-crt-theme](https://github.com/WJNCT55555/dsh-crt-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-crt-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-crt-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-crt-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Dual-palette CRT terminal skin for DSH Web: Unit-02 black/red/orange/amber and Unit-01 violet/acid-green instruments with fine CRT meters and scan-striped branding.

```sh
dsh plugin --profile web add github:WJNCT55555/dsh-crt-theme
```

**Repo:** [WJNCT55555/dsh-crt-theme](https://github.com/WJNCT55555/dsh-crt-theme) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/WJNCT55555/dsh-crt-theme/blob/HEAD/package.json)

### [dsh-cursor-theme](https://github.com/auki-zy/dsh-cursor-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-cursor-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-cursor-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-cursor-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Customize the PC mouse cursor for every UI state inside DeepSeek Harness. 在 DSH 里自定义鼠标各种状态的图案。

```sh
dsh plugin --profile web add github:auki-zy/dsh-cursor-theme
```

**Repo:** [auki-zy/dsh-cursor-theme](https://github.com/auki-zy/dsh-cursor-theme) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/auki-zy/dsh-cursor-theme/blob/HEAD/package.json)

### [dsh-cyberpunk-theme](https://github.com/ai7603/dsh-cyberpunk-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-cyberpunk-theme&scheme=dark"><img src="https://raw.githubusercontent.com/ai7603/dsh-cyberpunk-theme/HEAD/docs/screenshots/session-light.png" width="360" alt="dsh-cyberpunk-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-cyberpunk-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Cyberpunk 2077 (Night City) theme for DeepSeek Harness — installable as a permanent composition plugin or a dynamic Cordis plugin.

```sh
dsh plugin --profile web add github:ai7603/dsh-cyberpunk-theme
```

**Repo:** [ai7603/dsh-cyberpunk-theme](https://github.com/ai7603/dsh-cyberpunk-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/ai7603/dsh-cyberpunk-theme/blob/HEAD/package.json)

### [dsh-deepsea-theme](https://github.com/i1j/dsh-deepsea-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-deepsea-theme&scheme=dark"><img src="https://raw.githubusercontent.com/i1j/dsh-deepsea-theme/HEAD/assets/plankton-1.0.gif" width="360" alt="dsh-deepsea-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-deepsea-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Deep Sea dark token theme for the DeepSeek Harness web UI, overriding --dsw-alias and --dsw-static tokens.

```sh
dsh plugin --profile web add github:i1j/dsh-deepsea-theme
```

**Repo:** [i1j/dsh-deepsea-theme](https://github.com/i1j/dsh-deepsea-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/i1j/dsh-deepsea-theme/blob/HEAD/package.json)

### [dsh-dracula-theme](https://github.com/ossFrankFrank/dsh-dracula-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-dracula-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-dracula-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-dracula-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Dracula theme for DeepSeek Harness: the classic dark palette (plus the Soft variant) registered into the built-in theme runtime

```sh
dsh plugin --profile web add github:ossFrankFrank/dsh-dracula-theme
```

**Repo:** [ossFrankFrank/dsh-dracula-theme](https://github.com/ossFrankFrank/dsh-dracula-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/ossFrankFrank/dsh-dracula-theme/blob/HEAD/package.json)

### [dsh-dynamic-background](https://github.com/njuptlzf/dsh-dynamic-background)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-dynamic-background&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-dynamic-background preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-dynamic-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness (DSH) 动态背景切换插件：上传 GIF/WebP 动图与静态图、内置 12 色纯色调色板，定时丝滑交叉淡入淡出切换页面背景，聊天区自动叠加主题色保护层。

```sh
dsh plugin --profile web add github:njuptlzf/dsh-dynamic-background
```

**Repo:** [njuptlzf/dsh-dynamic-background](https://github.com/njuptlzf/dsh-dynamic-background) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/njuptlzf/dsh-dynamic-background/blob/HEAD/package.json)

### [dsh-dynamic-wallpaper](https://github.com/Willmylife/dsh-dynamic-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-dynamic-wallpaper&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-dynamic-wallpaper preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-dynamic-wallpaper&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Animated wallpaper plugin for DeepSeek Harness: 8 built-in canvas backgrounds (particles, meteor shower, starfield, waves, rain, bubbles, matrix, aurora) plus custom video import, with speed/density/opacity/blur controls and durable localStorage persistence

```sh
dsh plugin --profile web add github:Willmylife/dsh-dynamic-wallpaper
```

**Repo:** [Willmylife/dsh-dynamic-wallpaper](https://github.com/Willmylife/dsh-dynamic-wallpaper) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/Willmylife/dsh-dynamic-wallpaper/blob/HEAD/package.json)

### [dsh-endfield-theme](https://github.com/INnoVationEE/dsh-endfield-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-endfield-theme&scheme=dark"><img src="https://raw.githubusercontent.com/INnoVationEE/dsh-endfield-theme/HEAD/docs/field-terminal-preview.png" width="360" alt="dsh-endfield-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-endfield-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

The Terminal — an unofficial Arknights: Endfield-inspired theme for the DeepSeek Harness Web UI with usage monitoring wigdet.

```sh
dsh plugin --profile web add github:INnoVationEE/dsh-endfield-theme
```

**Repo:** [INnoVationEE/dsh-endfield-theme](https://github.com/INnoVationEE/dsh-endfield-theme) · **dsh:** 0.1.0-rc.8 · **Proof:** [endfield.css#--dsw-tokens](https://github.com/INnoVationEE/dsh-endfield-theme/blob/HEAD/endfield.css)

### [dsh-extensions-wallpaperskin](https://github.com/haibala-aii/dsh-extensions-wallpaperskin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-extensions-wallpaperskin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-extensions-wallpaperskin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-extensions-wallpaperskin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Use local Wallpaper Engine images, videos, and scene textures as the DeepSeek Harness web background

```sh
dsh plugin --profile web add github:haibala-aii/dsh-extensions-wallpaperskin
```

**Repo:** [haibala-aii/dsh-extensions-wallpaperskin](https://github.com/haibala-aii/dsh-extensions-wallpaperskin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/haibala-aii/dsh-extensions-wallpaperskin/blob/HEAD/package.json)

### [dsh-eye-care](https://github.com/Anionex/dsh-eye-care)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-eye-care&scheme=dark"><img src="https://raw.githubusercontent.com/Anionex/dsh-eye-care/HEAD/assets/eye-care-light.png" width="360" alt="dsh-eye-care preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-eye-care&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Warm light, warm dark, and system-aware eye-care palettes for the DeepSeek Harness Web UI.

```sh
dsh plugin --profile web add github:Anionex/dsh-eye-care
```

**Repo:** [Anionex/dsh-eye-care](https://github.com/Anionex/dsh-eye-care) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/Anionex/dsh-eye-care/blob/HEAD/package.json)

### [dsh-eyecare-theme](https://github.com/Cocowwy/dsh-plugin-eyecare-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-eyecare-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-eyecare-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-eyecare-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Customizable eye-care palettes for the DeepSeek Harness Web UI.

```sh
dsh plugin --profile web add github:Cocowwy/dsh-plugin-eyecare-theme
```

**Repo:** [Cocowwy/dsh-plugin-eyecare-theme](https://github.com/Cocowwy/dsh-plugin-eyecare-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Cocowwy/dsh-plugin-eyecare-theme/blob/HEAD/package.json)

### [dsh-four-seasons-theme](https://github.com/czj527/dsh-four-seasons-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-four-seasons-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-four-seasons-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-four-seasons-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Four-seasons --dsw-* theme for the dsh Web GUI: seasonal palettes, weather particles, day/night, moon, and a night lamp.

```sh
dsh plugin --profile web add github:czj527/dsh-four-seasons-theme
```

**Repo:** [czj527/dsh-four-seasons-theme](https://github.com/czj527/dsh-four-seasons-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/czj527/dsh-four-seasons-theme/blob/HEAD/package.json)

### [dsh-genshin-skin](https://github.com/bupianlizhugui/dsh-genshin-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-genshin-skin&scheme=dark"><img src="https://raw.githubusercontent.com/bupianlizhugui/dsh-genshin-skin/HEAD/src/client/assets/genshin-snezhnaya.jpeg" width="360" alt="dsh-genshin-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-genshin-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Snezhnaya Genshin-inspired skin: gold tokens and a snow-palace wallpaper.

```sh
dsh plugin --profile web add github:bupianlizhugui/dsh-genshin-skin
```

**Repo:** [bupianlizhugui/dsh-genshin-skin](https://github.com/bupianlizhugui/dsh-genshin-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/bupianlizhugui/dsh-genshin-skin/blob/HEAD/package.json)

### [dsh-glass-ui-theme](https://github.com/lkdxzhxi/dsh-glass-ui-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-glass-ui-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-glass-ui-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-glass-ui-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

为 DeepSeek Harness 打造的液态玻璃 UI 主题：磨砂玻璃+边缘折射、可调透明度/模糊/色调、自定义字体、背景图与动态壁纸（多图轮播）、自定义 CSS、柔和动画。

```sh
dsh plugin --profile web add github:lkdxzhxi/dsh-glass-ui-theme
```

**Repo:** [lkdxzhxi/dsh-glass-ui-theme](https://github.com/lkdxzhxi/dsh-glass-ui-theme) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.client.inject.@deepseek-ai/dsh-client-ui-theme](https://github.com/lkdxzhxi/dsh-glass-ui-theme/blob/HEAD/package.json)

### [dsh-gui-customization](https://github.com/LAN-TINA-WS/dsh-gui-customization/tree/HEAD/packages/dsh-gui-customization)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-gui-customization&scheme=dark"><img src="https://raw.githubusercontent.com/LAN-TINA-WS/dsh-gui-customization/master/docs/screenshots/gui-customization.png" width="360" alt="dsh-gui-customization preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-gui-customization&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Nous-blue theme workshop: four presets plus 13 custom colors, ambient glow, and a file-picker wallpaper, persisted in Settings.

```sh
dsh plugin --profile web add github:LAN-TINA-WS/dsh-gui-customization
```

**Repo:** [LAN-TINA-WS/dsh-gui-customization](https://github.com/LAN-TINA-WS/dsh-gui-customization/tree/HEAD/packages/dsh-gui-customization) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [packages/dsh-gui-customization/package.json#dsh.bundle](https://github.com/LAN-TINA-WS/dsh-gui-customization/blob/HEAD/packages/dsh-gui-customization/package.json)

### [dsh-homepage-skin-yushixxh](https://github.com/yushi-xxh/dsh-homepage-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-homepage-skin-yushixxh&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-homepage-skin-yushixxh preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-homepage-skin-yushixxh&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness homepage-style background skin: WebGL fluid, dot grid and digital whale. Dark and light variants included.

```sh
dsh plugin --profile web add github:yushi-xxh/dsh-homepage-skin
```

**Repo:** [yushi-xxh/dsh-homepage-skin](https://github.com/yushi-xxh/dsh-homepage-skin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/yushi-xxh/dsh-homepage-skin/blob/HEAD/package.json)

### [dsh-image-skin-youhui1](https://github.com/YouHui1/dsh-image-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-image-skin-youhui1&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-image-skin-youhui1 preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-image-skin-youhui1&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH web plugin: set a background image and adapt the theme colors (background + text + brand + borders) to the image palette.

```sh
dsh plugin --profile web add github:YouHui1/dsh-image-skin
```

**Repo:** [YouHui1/dsh-image-skin](https://github.com/YouHui1/dsh-image-skin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/YouHui1/dsh-image-skin/blob/HEAD/package.json)

### [dsh-image-theme](https://github.com/Carpon39038/dsh-image-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-image-theme&scheme=dark"><img src="https://raw.githubusercontent.com/Carpon39038/dsh-image-theme/main/docs/preview.png" width="360" alt="dsh-image-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-image-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Warp-inspired image-to-theme plugin: extract a five-color Lab palette from an uploaded background, map it onto --dsw-* glass surfaces, and use the image as a full-window wallpaper.

```sh
dsh plugin --profile web add github:Carpon39038/dsh-image-theme
```

**Repo:** [Carpon39038/dsh-image-theme](https://github.com/Carpon39038/dsh-image-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/Carpon39038/dsh-image-theme/blob/HEAD/package.json)

### [dsh-joi-channel-theme](https://github.com/tpmoonchefryan/dsh-joi-channel-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-joi-channel-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-joi-channel-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-joi-channel-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

轴伊 Joi 双衣装主题（Joi-Flowers / Joi-Library）for DeepSeek Harness — unofficial, non-commercial fan theme plugin

```sh
dsh plugin --profile web add github:tpmoonchefryan/dsh-joi-channel-theme
```

**Repo:** [tpmoonchefryan/dsh-joi-channel-theme](https://github.com/tpmoonchefryan/dsh-joi-channel-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#devDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/tpmoonchefryan/dsh-joi-channel-theme/blob/HEAD/package.json)

### [dsh-liang-skin](https://github.com/kingOfSoySauce/dsh-liang-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-liang-skin&scheme=dark"><img src="https://raw.githubusercontent.com/kingOfSoySauce/dsh-liang-skin/HEAD/docs/demo.gif" width="360" alt="dsh-liang-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-liang-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

An opt-in adaptive reasoning slider skin for DeepSeek Harness.

```sh
dsh plugin --profile web add github:kingOfSoySauce/dsh-liang-skin
```

**Repo:** [kingOfSoySauce/dsh-liang-skin](https://github.com/kingOfSoySauce/dsh-liang-skin) · **Package:** [`dsh-client-liang-intensity-skin`](https://www.npmjs.com/package/dsh-client-liang-intensity-skin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/kingOfSoySauce/dsh-liang-skin/blob/HEAD/package.json)

### [dsh-liquid-theme](https://github.com/more-nico/dshLiquidTheme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-liquid-theme&scheme=dark"><img src="https://raw.githubusercontent.com/more-nico/dshLiquidTheme/HEAD/assets/home.png" width="360" alt="dsh-liquid-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-liquid-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

macOS-style floating Liquid Glass theme for DeepSeek Harness Web UI

```sh
dsh plugin --profile web add github:more-nico/dshLiquidTheme
```

**Repo:** [more-nico/dshLiquidTheme](https://github.com/more-nico/dshLiquidTheme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/more-nico/dshLiquidTheme/blob/HEAD/package.json)

### [dsh-luvian-ui-wallpaper](https://github.com/EnernityLune/dsh-luvian-ui-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-luvian-ui-wallpaper&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-luvian-ui-wallpaper preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-luvian-ui-wallpaper&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Luvian UI wallpaper theme plugin for DeepSeek Harness web UI. Bring-your-own-assets, stable selector contracts, official theme/slots APIs.

```sh
dsh plugin --profile web add github:EnernityLune/dsh-luvian-ui-wallpaper
```

**Repo:** [EnernityLune/dsh-luvian-ui-wallpaper](https://github.com/EnernityLune/dsh-luvian-ui-wallpaper) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/EnernityLune/dsh-luvian-ui-wallpaper/blob/HEAD/package.json)

### [dsh-macos-theme](https://github.com/dataizu/dsh-macos-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-macos-theme&scheme=dark"><img src="https://raw.githubusercontent.com/dataizu/dsh-macos-theme/HEAD/screenshots/whale-animation.gif" width="360" alt="dsh-macos-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-macos-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

macOS-style Web theme with Apple colors, frosted chrome, and an underwater whale background.

```sh
dsh plugin --profile web add github:dataizu/dsh-macos-theme
```

**Repo:** [dataizu/dsh-macos-theme](https://github.com/dataizu/dsh-macos-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [dsh-vision/package.json#dsh.client](https://github.com/dataizu/dsh-macos-theme/blob/HEAD/dsh-vision/package.json)

### [dsh-mamba-theme](https://github.com/wangq32801-dev/dsh-mamba-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-mamba-theme&scheme=dark"><img src="https://raw.githubusercontent.com/wangq32801-dev/dsh-mamba-theme/HEAD/preview.png" width="360" alt="dsh-mamba-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-mamba-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Black-and-gold mamba Web theme: pure black canvas, mamba-gold accents, and a hero black-mamba backdrop.

```sh
dsh plugin --profile web add github:wangq32801-dev/dsh-mamba-theme
```

**Repo:** [wangq32801-dev/dsh-mamba-theme](https://github.com/wangq32801-dev/dsh-mamba-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/wangq32801-dev/dsh-mamba-theme/blob/HEAD/package.json)

### [dsh-march7th-skin](https://github.com/fishfromsky/dsh-march7th-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-march7th-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-march7th-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-march7th-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Standalone pluggable March 7th (Honkai: Star Rail) skin for the dsh web GUI: theme tokens, night background, and character art flanking the input. Not part of the default web-app — add this package to a profile bundle to enable.

```sh
dsh plugin --profile web add github:fishfromsky/dsh-march7th-skin
```

**Repo:** [fishfromsky/dsh-march7th-skin](https://github.com/fishfromsky/dsh-march7th-skin) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/fishfromsky/dsh-march7th-skin/blob/HEAD/package.json)

### [dsh-material-you](https://github.com/mtaech/dsh-material-you/tree/HEAD/theme-material-you)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-material-you&scheme=dark"><img src="https://raw.githubusercontent.com/mtaech/dsh-material-you/main/demo.png" width="360" alt="dsh-material-you preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-material-you&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Material You (M3) --dsw-* skin: HCT tonal palette from seed #3B82F6 and Maple Mono NF CN, light blue-and-white plus dark.

```sh
dsh plugin --profile web add github:mtaech/dsh-material-you
```

**Repo:** [mtaech/dsh-material-you](https://github.com/mtaech/dsh-material-you/tree/HEAD/theme-material-you) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/mtaech/dsh-material-you/blob/HEAD/package.json)

### [dsh-matrix-theme-zengrz](https://github.com/zengrz/dsh-matrix-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-matrix-theme-zengrz&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-matrix-theme-zengrz preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-matrix-theme-zengrz&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

The Matrix movie theme for the dsh web GUI as an installable plugin: the selectable 'matrix' theme (green-on-black palette), a digital-rain ambient backdrop, and its General-settings toggle

```sh
dsh plugin --profile web add github:zengrz/dsh-matrix-theme
```

**Repo:** [zengrz/dsh-matrix-theme](https://github.com/zengrz/dsh-matrix-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/zengrz/dsh-matrix-theme/blob/HEAD/package.json)

### [dsh-matugen](https://github.com/Nocehi/dsh-matugen)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-matugen&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-matugen preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-matugen&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Matugen and DankMaterialShell palette bridge for DeepSeek Harness web themes.

```sh
dsh plugin --profile web add github:Nocehi/dsh-matugen
```

**Repo:** [Nocehi/dsh-matugen](https://github.com/Nocehi/dsh-matugen) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/Nocehi/dsh-matugen/blob/HEAD/package.json)

### [dsh-miku-skin](https://github.com/stushansusu/dsh-miku-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-miku-skin&scheme=dark"><img src="https://raw.githubusercontent.com/stushansusu/dsh-miku-skin/main/preview/dark.png" width="360" alt="dsh-miku-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-miku-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Hatsune Miku --dsw-* token skin: blue-purple-magenta gradients, frosted panels, custom wallpaper, light and dark.

```sh
dsh plugin --profile web add github:stushansusu/dsh-miku-skin
```

**Repo:** [stushansusu/dsh-miku-skin](https://github.com/stushansusu/dsh-miku-skin) · **License:** BSD-3-Clause · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/stushansusu/dsh-miku-skin/blob/HEAD/package.json)

*repository returns 404 as of 2026-08-19*

### [dsh-modern-skin](https://github.com/gavinlee9051/dsh-modern-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-modern-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-modern-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-modern-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Modern Agent-client skin for the dsh Web UI with five switchable palettes.

```sh
dsh plugin --profile web add github:gavinlee9051/dsh-modern-skin
```

**Repo:** [gavinlee9051/dsh-modern-skin](https://github.com/gavinlee9051/dsh-modern-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/gavinlee9051/dsh-modern-skin/blob/HEAD/package.json)

### [dsh-nachoneko-theme](https://github.com/TheMyceliumOfAntan/dsh-nachoneko-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-nachoneko-theme&scheme=dark"><img src="https://raw.githubusercontent.com/TheMyceliumOfAntan/dsh-nachoneko-theme/main/assets/screenshot.png" width="360" alt="dsh-nachoneko-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-nachoneko-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Nachoneko (甘城猫猫) skin for the dsh Web GUI: #A3D3FF --dsw-static-*/--dsw-alias-* override set, full-screen wallpaper, frosted-glass sidebar/composer/code blocks and a settings-panel corner art, shipped as a self-contained dsh bundle+client plugin.

```sh
dsh plugin --profile web add github:TheMyceliumOfAntan/dsh-nachoneko-theme
```

**Repo:** [TheMyceliumOfAntan/dsh-nachoneko-theme](https://github.com/TheMyceliumOfAntan/dsh-nachoneko-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/TheMyceliumOfAntan/dsh-nachoneko-theme/blob/HEAD/package.json)

*Confirmed --dsw-alias-* override set (deepseek/blue static scales + alias layers) and boot roster on 0.1.0-rc.6; a fresh main-UI boot stall was reported on one machine -- client.js payload was cut 440KB -> 238KB (wallpaper base64 deduped) in response, and a local no-cache fresh boot reaches the main chat UI, but the stall is not independently re-confirmed fixed. Hashed module-class overrides (frame/conversation/composer/settings) are pinned to 0.1.0-rc.6.*

### [dsh-nene-theme](https://github.com/mizuhara37/dsh-nene-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-nene-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-nene-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-nene-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

草薙宁宁同人主题（DeepSeek Harness 客户端插件）：日夜背景 + 可拖动立绘 + 状态台词

```sh
dsh plugin --profile web add github:mizuhara37/dsh-nene-theme
```

**Repo:** [mizuhara37/dsh-nene-theme](https://github.com/mizuhara37/dsh-nene-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/mizuhara37/dsh-nene-theme/blob/HEAD/package.json)

### [dsh-neu-theme](https://github.com/Lhy723/dsh-neu-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-neu-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-neu-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-neu-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Neumorphism soft-UI theme for DeepSeek Harness web — gentle raised-and-recessed surfaces in a cream light and an ink-dark palette. · DeepSeek Harness 轻拟物主题:柔和浮起与凹陷,奶油浅色与墨蓝深色两套配色。

```sh
dsh plugin --profile web add github:Lhy723/dsh-neu-theme
```

**Repo:** [Lhy723/dsh-neu-theme](https://github.com/Lhy723/dsh-neu-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/Lhy723/dsh-neu-theme/blob/HEAD/package.json)

### [dsh-outdoor-theme](https://github.com/Estellalee/dsh-outdoor-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-outdoor-theme&scheme=dark"><img src="https://raw.githubusercontent.com/Estellalee/dsh-outdoor-theme/HEAD/screenshots/light-moonrise.png" width="360" alt="dsh-outdoor-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-outdoor-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

DSH 皮肤：山野向导（Trail Guide）· 户外徒步风换皮 + 右侧路标工作进度面板

```sh
dsh plugin --profile web add github:Estellalee/dsh-outdoor-theme
```

**Repo:** [Estellalee/dsh-outdoor-theme](https://github.com/Estellalee/dsh-outdoor-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Estellalee/dsh-outdoor-theme/blob/HEAD/package.json)

### [dsh-paper-theme](https://github.com/Baurt-Li/dsh-paper-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-paper-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-paper-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-paper-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Warm paper light theme for the dsh Web UI covering the design tokens. Leaves dark mode alone.

```sh
dsh plugin --profile web add github:Baurt-Li/dsh-paper-theme
```

**Repo:** [Baurt-Li/dsh-paper-theme](https://github.com/Baurt-Li/dsh-paper-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [packages/ui-theme-paper/package.json#dsh.client](https://github.com/Baurt-Li/dsh-paper-theme/blob/HEAD/packages/ui-theme-paper/package.json)

### [dsh-paper-theme-blaczz](https://github.com/Blaczz/dsh-paper-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-paper-theme-blaczz&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-paper-theme-blaczz preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-paper-theme-blaczz&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness Web UI theme-color plugin: a warm cream paper eye-friendly palette with a few preset colors and an optional paper-grain texture. Zero core changes, one settings row.

```sh
dsh plugin --profile web add github:Blaczz/dsh-paper-theme
```

**Repo:** [Blaczz/dsh-paper-theme](https://github.com/Blaczz/dsh-paper-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/Blaczz/dsh-paper-theme/blob/HEAD/package.json)

### [dsh-plugin-colorscheme](https://github.com/Civitasv/dsh-plugin-colorscheme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-colorscheme&scheme=dark"><img src="https://raw.githubusercontent.com/Civitasv/dsh-plugin-colorscheme/HEAD/docs/screenshots/catppuccin-mocha.png" width="360" alt="dsh-plugin-colorscheme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-colorscheme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Colorschemes for DeepSeek Harness: MIT-licensed preset themes mapped onto the --dsw-* token system, a settings picker row, and user extension via a themes directory, plugin config, or settings.yaml.

```sh
dsh plugin --profile web add github:Civitasv/dsh-plugin-colorscheme
```

**Repo:** [Civitasv/dsh-plugin-colorscheme](https://github.com/Civitasv/dsh-plugin-colorscheme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#devDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/Civitasv/dsh-plugin-colorscheme/blob/HEAD/package.json)

### [dsh-plugin-gouden-leeuw-theme](https://github.com/Andy294753951/dsh-plugin-gouden-leeuw-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-gouden-leeuw-theme&scheme=dark"><img src="https://raw.githubusercontent.com/Andy294753951/dsh-plugin-gouden-leeuw-theme/main/assets/gouden-leeuw.png" width="360" alt="dsh-plugin-gouden-leeuw-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-gouden-leeuw-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Gouden Leeuw moonlit sanctuary theme for the dsh Web UI.

```sh
dsh plugin --profile web add github:Andy294753951/dsh-plugin-gouden-leeuw-theme
```

**Repo:** [Andy294753951/dsh-plugin-gouden-leeuw-theme](https://github.com/Andy294753951/dsh-plugin-gouden-leeuw-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/Andy294753951/dsh-plugin-gouden-leeuw-theme/blob/HEAD/package.json)

### [dsh-plugin-palette-board](https://github.com/zhm20001/dsh-plugin-palette-board)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-palette-board&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-plugin-palette-board preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-palette-board&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

2D Palette Board & Application Drawer for DeepSeek Harness (dsh): a Raycast/Launchpad-style floating application grid, with the paletteHub service open to all client plugins

```sh
dsh plugin --profile web add github:zhm20001/dsh-plugin-palette-board
```

**Repo:** [zhm20001/dsh-plugin-palette-board](https://github.com/zhm20001/dsh-plugin-palette-board) · **dsh:** 0.1.1-rc.2 · **Proof:** [src/client/palette.module.css#--dsw-tokens](https://github.com/zhm20001/dsh-plugin-palette-board/blob/HEAD/src/client/palette.module.css)

### [dsh-plugin-wallpaper-jerrypho](https://github.com/JerryPhoenixCKY/dsh-plugin-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-wallpaper-jerrypho&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-plugin-wallpaper-jerrypho preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-wallpaper-jerrypho&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness Web wallpaper plugin: upload and crop a local image as the web workspace desktop background, with a dedicated Settings section.

```sh
dsh plugin --profile web add github:JerryPhoenixCKY/dsh-plugin-wallpaper
```

**Repo:** [JerryPhoenixCKY/dsh-plugin-wallpaper](https://github.com/JerryPhoenixCKY/dsh-plugin-wallpaper) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#devDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/JerryPhoenixCKY/dsh-plugin-wallpaper/blob/HEAD/package.json)

### [dsh-premium-themes](https://github.com/xiaoyanzi191/dsh-premium-themes)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-premium-themes&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-premium-themes preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-premium-themes&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Standalone premium-palette plugin for dsh Web: eight curated color schemes plus custom palette import (name + scheme + seed colors -> derived full token map), a Palette row in General settings, durable per-plugin persistence, and hot-plug install via dsh plugin

```sh
dsh plugin --profile web add github:xiaoyanzi191/dsh-premium-themes
```

**Repo:** [xiaoyanzi191/dsh-premium-themes](https://github.com/xiaoyanzi191/dsh-premium-themes) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/xiaoyanzi191/dsh-premium-themes/blob/HEAD/package.json)

### [dsh-qq-skin](https://github.com/kevinnn04/dsh-qq-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-qq-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-qq-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-qq-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Old-school QQ chat-frame skin pack for the DeepSeek Harness Web UI.

```sh
dsh plugin --profile web add github:kevinnn04/dsh-qq-skin
```

**Repo:** [kevinnn04/dsh-qq-skin](https://github.com/kevinnn04/dsh-qq-skin) · **dsh:** 0.1.0-rc.6 · **Proof:** [qq-skin.css#--dsw-tokens](https://github.com/kevinnn04/dsh-qq-skin/blob/HEAD/qq-skin.css)

### [dsh-qq-skin-lispking](https://github.com/lispking/dsh-qq-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-qq-skin-lispking&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-qq-skin-lispking preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-qq-skin-lispking&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

QQ 风格皮肤插件 for DeepSeek Harness: overlays a Tencent QQ messenger look on the Web client through the official theme token layer (ctx.theme.overrideTokens).

```sh
dsh plugin --profile web add github:lispking/dsh-qq-skin
```

**Repo:** [lispking/dsh-qq-skin](https://github.com/lispking/dsh-qq-skin) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/lispking/dsh-qq-skin/blob/HEAD/package.json)

### [dsh-raiden-theme](https://github.com/lengzhanbao/dsh-raiden-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-raiden-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-raiden-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-raiden-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Raiden Inazuma Atelier / 稻妻雷电工房 — violet-gold acrylic DSH Web theme: light conservatory & dark electro stage, Raiden overlays, optional agent preset.

```sh
dsh plugin --profile web add github:lengzhanbao/dsh-raiden-theme
```

**Repo:** [lengzhanbao/dsh-raiden-theme](https://github.com/lengzhanbao/dsh-raiden-theme) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/lengzhanbao/dsh-raiden-theme/blob/HEAD/package.json)

### [dsh-sakura-theme](https://github.com/a1303845406/dsh-sakura-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-sakura-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-sakura-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-sakura-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Sakura Harness brand, icon, font, and Day/Night glass theme for DeepSeek Harness

```sh
dsh plugin --profile web add github:a1303845406/dsh-sakura-theme
```

**Repo:** [a1303845406/dsh-sakura-theme](https://github.com/a1303845406/dsh-sakura-theme) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/a1303845406/dsh-sakura-theme/blob/HEAD/package.json)

### [dsh-skin](https://github.com/KinGao294/dsh-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Skin switcher and custom wallpaper for dsh: curated --dsw-alias-* palettes with opacity and blur, persisted per browser.

```sh
dsh plugin --profile web add github:KinGao294/dsh-skin
```

**Repo:** [KinGao294/dsh-skin](https://github.com/KinGao294/dsh-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/KinGao294/dsh-skin/blob/HEAD/package.json)

### [dsh-skin-bd2-yustia](https://github.com/JacoboJin/dsh-skin-bd2-yustia)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-bd2-yustia&scheme=dark"><img src="https://raw.githubusercontent.com/JacoboJin/dsh-skin-bd2-yustia/HEAD/preview/dark.png" width="360" alt="dsh-skin-bd2-yustia preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-bd2-yustia&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

棕色尘埃2 · 悠丝缇亚 — 象牙白与圣金辉映的圣剑骑士（昼夜双模式）

```sh
dsh plugin --profile web add github:JacoboJin/dsh-skin-bd2-yustia
```

**Repo:** [JacoboJin/dsh-skin-bd2-yustia](https://github.com/JacoboJin/dsh-skin-bd2-yustia) · **dsh:** 0.1.1-rc.2 · **Proof:** [yustia.module.css#--dsw-tokens](https://github.com/JacoboJin/dsh-skin-bd2-yustia/blob/HEAD/yustia.module.css)

### [dsh-skin-chengzi](https://github.com/jer67107-cyber/dsh-skin-chengzi)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-chengzi&scheme=dark"><img src="https://raw.githubusercontent.com/jer67107-cyber/dsh-skin-chengzi/HEAD/preview/dark.png" width="360" alt="dsh-skin-chengzi preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-chengzi&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

橙子 · 深海蓝调 — DSH Web 皮肤中心皮肤（纯资产目录）

```sh
dsh plugin --profile web add github:jer67107-cyber/dsh-skin-chengzi
```

**Repo:** [jer67107-cyber/dsh-skin-chengzi](https://github.com/jer67107-cyber/dsh-skin-chengzi) · **dsh:** 0.1.0-rc.8 · **Proof:** [patches.css#--dsw-tokens](https://github.com/jer67107-cyber/dsh-skin-chengzi/blob/HEAD/patches.css)

### [dsh-skin-claude-code](https://github.com/LucasN0820/dsh-skin-claude-code)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-claude-code&scheme=dark"><img src="https://raw.githubusercontent.com/LucasN0820/dsh-skin-claude-code/main/docs/screenshots/skin-dark.png" width="360" alt="dsh-skin-claude-code preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-claude-code&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Claude Code-inspired token skin: warm charcoal and cream surfaces with a terracotta accent.

```sh
dsh plugin --profile web add github:LucasN0820/dsh-skin-claude-code
```

**Repo:** [LucasN0820/dsh-skin-claude-code](https://github.com/LucasN0820/dsh-skin-claude-code) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/LucasN0820/dsh-skin-claude-code/blob/HEAD/package.json)

### [dsh-skin-claude-code-le-soleil](https://github.com/le-soleil-se-couche/dsh-skin-claude-code)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-claude-code-le-soleil&scheme=dark"><img src="https://raw.githubusercontent.com/le-soleil-se-couche/dsh-skin-claude-code/HEAD/preview/dark.png" width="360" alt="dsh-skin-claude-code-le-soleil preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-claude-code-le-soleil&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Claude Code-style Web skin: Source Han Serif UI, SF Mono, terracotta cream and ink palette.

```sh
dsh plugin --profile web add github:le-soleil-se-couche/dsh-skin-claude-code
```

**Repo:** [le-soleil-se-couche/dsh-skin-claude-code](https://github.com/le-soleil-se-couche/dsh-skin-claude-code) · **License:** BSD-3-Clause · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/le-soleil-se-couche/dsh-skin-claude-code/blob/HEAD/package.json)

### [dsh-skin-claude-code-lucasx00](https://github.com/lucasx001/dsh-skin-claude-code)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-claude-code-lucasx00&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-claude-code-lucasx00 preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-claude-code-lucasx00&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

A Claude Code-inspired skin for the DeepSeek Harness web GUI: warm charcoal/cream surfaces, terracotta accent, and monospace terminal typography.

```sh
dsh plugin --profile web add github:lucasx001/dsh-skin-claude-code
```

**Repo:** [lucasx001/dsh-skin-claude-code](https://github.com/lucasx001/dsh-skin-claude-code) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/lucasx001/dsh-skin-claude-code/blob/HEAD/package.json)

### [dsh-skin-diablo-dark](https://github.com/dengxuhui/dsh-skin-diablo-dark)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-diablo-dark&scheme=dark"><img src="https://raw.githubusercontent.com/dengxuhui/dsh-skin-diablo-dark/HEAD/preview/dark.png" width="360" alt="dsh-skin-diablo-dark preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-diablo-dark&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Diablo dark-gothic --dsw-* token skin (暗黑·熔火) for the dsh Web GUI.

```sh
dsh plugin --profile web add github:dengxuhui/dsh-skin-diablo-dark
```

**Repo:** [dengxuhui/dsh-skin-diablo-dark](https://github.com/dengxuhui/dsh-skin-diablo-dark) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/dengxuhui/dsh-skin-diablo-dark/blob/HEAD/package.json)

### [dsh-skin-gadgets](https://github.com/Highjobop/dsh-gadgets/tree/HEAD/dsh-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-gadgets&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-gadgets preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-gadgets&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Appearance skin for the Web GUI: 15 light/dark presets, font scaling, and 13 color roles persisted in localStorage.

```sh
dsh plugin --profile web add github:Highjobop/dsh-gadgets
```

**Repo:** [Highjobop/dsh-gadgets](https://github.com/Highjobop/dsh-gadgets/tree/HEAD/dsh-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [dsh-skin/package.json#dsh.bundle](https://github.com/Highjobop/dsh-gadgets/blob/HEAD/dsh-skin/package.json)

### [dsh-skin-kawaii2000](https://github.com/shunkwon/dsh-skin-kawaii2000)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-kawaii2000&scheme=dark"><img src="https://raw.githubusercontent.com/shunkwon/dsh-skin-kawaii2000/main/screenshots/dark.png" width="360" alt="dsh-skin-kawaii2000 preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-kawaii2000&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Kawaii 2000s --dsw-* token skin: candy pink and baby blue for the dsh Web UI.

```sh
dsh plugin --profile web add github:shunkwon/dsh-skin-kawaii2000
```

**Repo:** [shunkwon/dsh-skin-kawaii2000](https://github.com/shunkwon/dsh-skin-kawaii2000) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/shunkwon/dsh-skin-kawaii2000/blob/HEAD/package.json)

### [dsh-skin-lab](https://github.com/soarGuo/dsh-skin-lab)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-lab&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-lab preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-lab&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Skin Lab for the DSH Web GUI: official token browser, live try-on (theme override layers), theme freeze, spectrum presets with SVG backdrops and custom backdrop upload for skin authors. Everything is a plugin.

```sh
dsh plugin --profile web add github:soarGuo/dsh-skin-lab
```

**Repo:** [soarGuo/dsh-skin-lab](https://github.com/soarGuo/dsh-skin-lab) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#devDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/soarGuo/dsh-skin-lab/blob/HEAD/package.json)

### [dsh-skin-pack](https://github.com/uckkk/dsh-skin-pack)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-pack&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-pack preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-pack&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH 皮肤合集：苹果风 / 赛博朋克 / 魔兽世界 / 极光 / 暗黑金 / 樱花 / 复古终端 / 深空 共 8 套皮肤，一键切换。8 skins for DeepSeek Harness web UI — Apple, Cyberpunk, Warcraft, Aurora, Black Gold, Sakura, Retro Terminal, Deep Space.

```sh
dsh plugin --profile web add github:uckkk/dsh-skin-pack
```

**Repo:** [uckkk/dsh-skin-pack](https://github.com/uckkk/dsh-skin-pack) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/uckkk/dsh-skin-pack/blob/HEAD/package.json)

### [dsh-skin-pack-yxnas](https://github.com/YX-NAS/dsh-skin-pack)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-pack-yxnas&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-pack-yxnas preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-pack-yxnas&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH Web 综合皮肤插件：5 套主题家族（含 QQ2008/Cyberpunk）+ 强调色 + 壁纸 + 分区背景 + 动效，全部走官方 --dsw-* token 与 ThemeRuntime 机制

```sh
dsh plugin --profile web add github:YX-NAS/dsh-skin-pack
```

**Repo:** [YX-NAS/dsh-skin-pack](https://github.com/YX-NAS/dsh-skin-pack) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/YX-NAS/dsh-skin-pack/blob/HEAD/package.json)

### [dsh-skin-platform](https://github.com/mhdfy1988/dsh-skin-platform/tree/HEAD/packages/runtime)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-platform&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-platform preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-platform&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Independent multi-package skin platform for DeepSeek Harness

```sh
dsh plugin --profile web add github:mhdfy1988/dsh-skin-platform
```

**Repo:** [mhdfy1988/dsh-skin-platform](https://github.com/mhdfy1988/dsh-skin-platform/tree/HEAD/packages/runtime) · **dsh:** 0.1.1-rc.2 · **Proof:** [packages/runtime/package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/mhdfy1988/dsh-skin-platform/blob/HEAD/packages/runtime/package.json)

### [dsh-skin-plugin](https://github.com/ylqit/dsh-skin-plugin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-plugin&scheme=dark"><img src="https://raw.githubusercontent.com/ylqit/dsh-skin-plugin/master/themes/pikachu/assets/backdrop-light.webp" width="360" alt="dsh-skin-plugin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-plugin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Synchronized component skins and a visual theme studio for the Web UI, with bundled palettes such as Pikachu, Bulbasaur, and Squirtle.

```sh
dsh plugin --profile web add github:ylqit/dsh-skin-plugin
```

**Repo:** [ylqit/dsh-skin-plugin](https://github.com/ylqit/dsh-skin-plugin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/ylqit/dsh-skin-plugin/blob/HEAD/package.json)

### [dsh-skin-sakura](https://github.com/leo-aba/dsh-skins/tree/HEAD/skins/sakura)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-sakura&scheme=dark"><img src="https://raw.githubusercontent.com/leo-aba/dsh-skins/HEAD/imgs/RemielleDan.png" width="360" alt="dsh-skin-sakura preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-sakura&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Sakura cherry-blossom skin: a warm pink palette pair plus a picker row in Settings.

```sh
dsh plugin --profile web add github:leo-aba/dsh-skins
```

**Repo:** [leo-aba/dsh-skins](https://github.com/leo-aba/dsh-skins/tree/HEAD/skins/sakura) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [skins/sakura/package.json#dsh.client](https://github.com/leo-aba/dsh-skins/blob/HEAD/skins/sakura/package.json)

### [dsh-skin-studio](https://github.com/Yugitan/dsh-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-studio&scheme=dark"><img src="https://raw.githubusercontent.com/Yugitan/dsh-skin/main/screenshots/preview.png" width="360" alt="dsh-skin-studio preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-studio&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Skinning plugin for the dsh Web UI: gradient presets, image wallpapers, translucency, and accent colors, persisted in user settings.

```sh
dsh plugin --profile web add github:Yugitan/dsh-skin
```

**Repo:** [Yugitan/dsh-skin](https://github.com/Yugitan/dsh-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/Yugitan/dsh-skin/blob/HEAD/package.json)

### [dsh-skin-studio-leemanch](https://github.com/LeemanCheung/dsh-skin-studio)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-studio-leemanch&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-studio-leemanch preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-studio-leemanch&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

A local token-safe DSH theme generator, editor, auditor, and exporter

```sh
dsh plugin --profile web add github:LeemanCheung/dsh-skin-studio
```

**Repo:** [LeemanCheung/dsh-skin-studio](https://github.com/LeemanCheung/dsh-skin-studio) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/LeemanCheung/dsh-skin-studio/blob/HEAD/package.json)

### [dsh-skin-studio-realmisa](https://github.com/realMisakaMikoto/dsh-skin-studio)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-studio-realmisa&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-studio-realmisa preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-studio-realmisa&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Create, manage, and share portable DeepSeek Harness skins.

```sh
dsh plugin --profile web add github:realMisakaMikoto/dsh-skin-studio
```

**Repo:** [realMisakaMikoto/dsh-skin-studio](https://github.com/realMisakaMikoto/dsh-skin-studio) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#devDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/realMisakaMikoto/dsh-skin-studio/blob/HEAD/package.json)

### [dsh-skin-switcher](https://github.com/zhtx2024/dsh-skin-switcher)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-switcher&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-switcher preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-switcher&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Settings-page skin switcher that lists installed skins and applies one with a click.

```sh
dsh plugin --profile web add github:zhtx2024/dsh-skin-switcher
```

**Repo:** [zhtx2024/dsh-skin-switcher](https://github.com/zhtx2024/dsh-skin-switcher) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/zhtx2024/dsh-skin-switcher/blob/HEAD/package.json)

### [dsh-skin-universe](https://github.com/springbrand-lab/dsh-skin-universe)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-universe&scheme=dark"><img src="https://raw.githubusercontent.com/springbrand-lab/dsh-skin-universe/main/docs/screenshots/theme-first-love.png" width="360" alt="dsh-skin-universe preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-universe&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Web extension pack with a five-theme skin center, plus a task board, git graph, remote mobile UI, and a theme-linked desktop pet.

```sh
dsh plugin --profile web add github:springbrand-lab/dsh-skin-universe
```

**Repo:** [springbrand-lab/dsh-skin-universe](https://github.com/springbrand-lab/dsh-skin-universe) · **License:** BSD-3-Clause · **dsh:** 0.1.0-rc.6 · **Proof:** [packages/dsh-aionui-panel/package.json#dsh.bundle](https://github.com/springbrand-lab/dsh-skin-universe/blob/HEAD/packages/dsh-aionui-panel/package.json)

### [dsh-skin-yanisuu](https://github.com/xassuyge003-ui/dsh-skin-yanisuu/tree/HEAD/packages/ui-skin-yanisuu)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-yanisuu&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-yanisuu preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-yanisuu&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Glass wallpaper skin with a left-edge control drawer for blur, rotation, and local uploads.

```sh
dsh plugin --profile web add github:xassuyge003-ui/dsh-skin-yanisuu
```

**Repo:** [xassuyge003-ui/dsh-skin-yanisuu](https://github.com/xassuyge003-ui/dsh-skin-yanisuu/tree/HEAD/packages/ui-skin-yanisuu) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [packages/ui-skin-yanisuu/package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/xassuyge003-ui/dsh-skin-yanisuu/blob/HEAD/packages/ui-skin-yanisuu/package.json)

### [dsh-skins-harbor](https://github.com/Moeblack/dsh-skins/tree/HEAD/packages/dsh-web-skins)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skins-harbor&scheme=dark"><img src="https://raw.githubusercontent.com/Moeblack/dsh-skins/HEAD/docs/images/skin-harbor.jpg" width="360" alt="dsh-skins-harbor preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skins-harbor&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

dsh-skins pack with the Harbor dusk skin: alias-token themes plus optional AI-art backgrounds.

```sh
dsh plugin --profile web add github:Moeblack/dsh-skins
```

**Repo:** [Moeblack/dsh-skins](https://github.com/Moeblack/dsh-skins/tree/HEAD/packages/dsh-web-skins) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [packages/dsh-web-skins/package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/Moeblack/dsh-skins/blob/HEAD/packages/dsh-web-skins/package.json)

### [dsh-spotify-theme](https://github.com/msnlyy-rgb/dsh-spotify-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-spotify-theme&scheme=dark"><img src="https://raw.githubusercontent.com/msnlyy-rgb/dsh-spotify-theme/HEAD/screenshots/dark.png" width="360" alt="dsh-spotify-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-spotify-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness Spotify 风格主题 — 近黑底色、灰阶分层卡片、Spotify 绿 (#1ed760) 点缀的 CSS 主题覆写，含折叠栏加宽与统计卡进度条可选补丁

```sh
dsh plugin --profile web add github:msnlyy-rgb/dsh-spotify-theme
```

**Repo:** [msnlyy-rgb/dsh-spotify-theme](https://github.com/msnlyy-rgb/dsh-spotify-theme) · **dsh:** 0.1.0-rc.8 · **Proof:** [spotify-theme.css#--dsw-tokens](https://github.com/msnlyy-rgb/dsh-spotify-theme/blob/HEAD/spotify-theme.css)

### [dsh-taffy-theme](https://github.com/lengzhanbao/dsh-taffy-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-taffy-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-taffy-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-taffy-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Taffy Live Atelier / 塔菲直播工房 — candy acrylic DSH Web theme: light conservatory & dark stage art, gold-pink chat frame, Taffy overlays, optional agent preset.

```sh
dsh plugin --profile web add github:lengzhanbao/dsh-taffy-theme
```

**Repo:** [lengzhanbao/dsh-taffy-theme](https://github.com/lengzhanbao/dsh-taffy-theme) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/lengzhanbao/dsh-taffy-theme/blob/HEAD/package.json)

### [dsh-theme](https://github.com/oil-oil/dsh-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Live theme editor for dsh: curated --dsw-* palettes and typography controls.

```sh
dsh plugin --profile web add github:oil-oil/dsh-theme
```

**Repo:** [oil-oil/dsh-theme](https://github.com/oil-oil/dsh-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#devDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/oil-oil/dsh-theme/blob/HEAD/package.json)

### [dsh-theme-blackgold](https://github.com/frostgao/dsh-theme-blackgold)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-blackgold&scheme=dark"><img src="https://raw.githubusercontent.com/frostgao/dsh-theme-blackgold/HEAD/screenshots/light.png" width="360" alt="dsh-theme-blackgold preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-blackgold&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Black-gold --dsw-* token theme: gold accents on a black-and-white base, light and dark.

```sh
dsh plugin --profile web add github:frostgao/dsh-theme-blackgold
```

**Repo:** [frostgao/dsh-theme-blackgold](https://github.com/frostgao/dsh-theme-blackgold) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/frostgao/dsh-theme-blackgold/blob/HEAD/package.json)

### [dsh-theme-brick](https://github.com/ShanHaiFish/dsh-theme-brick)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-brick&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-brick preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-brick&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Brick — a restrained, token-only theme layer for DeepSeek Harness Web. Warm plaster neutrals, mortar hairlines, one fired-clay accent, and a Settings on/off switch. 一切皆插件，每一块砖都可承重。

```sh
dsh plugin --profile web add github:ShanHaiFish/dsh-theme-brick
```

**Repo:** [ShanHaiFish/dsh-theme-brick](https://github.com/ShanHaiFish/dsh-theme-brick) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/ShanHaiFish/dsh-theme-brick/blob/HEAD/package.json)

### [dsh-theme-bside-olivia-lin](https://github.com/Leoq-bit/dsh-theme-bside-olivia-lin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-bside-olivia-lin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-bside-olivia-lin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-bside-olivia-lin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

BSide: Olivia Lin (林离) theme for the DeepSeek Harness Web UI — vinyl-warm amber × rainy blue-gray on deep charcoal, preset/uploadable wallpaper with a translucent veil, film-grain and rain overlays, glowing active-session title, full --dsw-* token palette, and a settings card persisted in the Host settings document.

```sh
dsh plugin --profile web add github:Leoq-bit/dsh-theme-bside-olivia-lin
```

**Repo:** [Leoq-bit/dsh-theme-bside-olivia-lin](https://github.com/Leoq-bit/dsh-theme-bside-olivia-lin) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/Leoq-bit/dsh-theme-bside-olivia-lin/blob/HEAD/package.json)

### [dsh-theme-cyberpunk](https://github.com/dlpufan/dsh-theme-cyberpunk/tree/HEAD/dsh-theme-cyberpunk)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-cyberpunk&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-cyberpunk preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-cyberpunk&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Neon cyberpunk appearance for the dsh web surface: RGB ambient lighting, CRT scanlines, and a cyan/magenta/violet token palette.

```sh
dsh plugin --profile web add github:dlpufan/dsh-theme-cyberpunk
```

**Repo:** [dlpufan/dsh-theme-cyberpunk](https://github.com/dlpufan/dsh-theme-cyberpunk/tree/HEAD/dsh-theme-cyberpunk) · **License:** MIT · **Package:** [`dsh-theme-cyberpunk`](https://www.npmjs.com/package/dsh-theme-cyberpunk) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/dlpufan/dsh-theme-cyberpunk/blob/HEAD/package.json)

### [dsh-theme-escook](https://github.com/Simon-yyy/dsh-theme-escook)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-escook&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-escook preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-escook&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

彬哥の经典主题 (escook-theme) for DeepSeek Harness — 优雅暗夜紫调与琥珀金高亮美学主题

```sh
dsh plugin --profile web add github:Simon-yyy/dsh-theme-escook
```

**Repo:** [Simon-yyy/dsh-theme-escook](https://github.com/Simon-yyy/dsh-theme-escook) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/Simon-yyy/dsh-theme-escook/blob/HEAD/package.json)

### [dsh-theme-library](https://github.com/zaimokuza-yoshiteru/dsh-theme-library)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-library&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-library preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-library&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Extensible animated theme library for DeepSeek Harness

```sh
dsh plugin --profile web add github:zaimokuza-yoshiteru/dsh-theme-library
```

**Repo:** [zaimokuza-yoshiteru/dsh-theme-library](https://github.com/zaimokuza-yoshiteru/dsh-theme-library) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/zaimokuza-yoshiteru/dsh-theme-library/blob/HEAD/package.json)

### [dsh-theme-liquid-glass](https://github.com/FAVKTOXIC/dsh-theme-liquid-glass)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-liquid-glass&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-liquid-glass preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-liquid-glass&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Apple Liquid Glass theme for DeepSeek Harness: frosted translucent UI tokens, dynamic wallpaper backgrounds (web URL / local HTML / image / video), and tunable glass (frost, refraction, tint, brightness).

```sh
dsh plugin --profile web add github:FAVKTOXIC/dsh-theme-liquid-glass
```

**Repo:** [FAVKTOXIC/dsh-theme-liquid-glass](https://github.com/FAVKTOXIC/dsh-theme-liquid-glass) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/FAVKTOXIC/dsh-theme-liquid-glass/blob/HEAD/package.json)

### [dsh-theme-manager](https://github.com/runcat-tommy/dsh-theme-manager)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-manager&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-manager preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-manager&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Two-level theme manager for DeepSeek Harness Web: pick a culture/scene or a national flag first, then a style (40 built-in: China·Ink Wash, Japan·Ukiyo-e, Flags·USA, …). 两级主题管理器：先选文化/场景或国旗，再选风格（内置 40 套：中国·水墨、日本·浮世绘、国旗·美国…）。

```sh
dsh plugin --profile web add github:runcat-tommy/dsh-theme-manager
```

**Repo:** [runcat-tommy/dsh-theme-manager](https://github.com/runcat-tommy/dsh-theme-manager) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.client.inject.@deepseek-ai/dsh-client-ui-theme](https://github.com/runcat-tommy/dsh-theme-manager/blob/HEAD/package.json)

### [dsh-theme-matcha-dark-sea](https://github.com/zhangzujian/dsh-theme-matcha-dark-sea)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-matcha-dark-sea&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-matcha-dark-sea preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-matcha-dark-sea&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Matcha Dark Sea token theme for the Web GUI, a dark-only mapping of btop matcha-dark-sea anchors onto --dsw-* tokens.

```sh
dsh plugin --profile web add github:zhangzujian/dsh-theme-matcha-dark-sea
```

**Repo:** [zhangzujian/dsh-theme-matcha-dark-sea](https://github.com/zhangzujian/dsh-theme-matcha-dark-sea) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/zhangzujian/dsh-theme-matcha-dark-sea/blob/HEAD/package.json)

### [dsh-theme-mineradio](https://github.com/dhicoc/dsh-theme-mineradio)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-mineradio&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-mineradio preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-mineradio&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Mineradio: a cinematic private-visual-radio glass theme for the Web surface — champagne glow, fluid or wallpaper backdrop, unified corners, and motion

```sh
dsh plugin --profile web add github:dhicoc/dsh-theme-mineradio
```

**Repo:** [dhicoc/dsh-theme-mineradio](https://github.com/dhicoc/dsh-theme-mineradio) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/dhicoc/dsh-theme-mineradio/blob/HEAD/package.json)

### [dsh-theme-neko](https://github.com/drfccv/dsh-theme-neko)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-neko&scheme=dark"><img src="https://raw.githubusercontent.com/drfccv/dsh-theme-neko/main/sample/screenshot.png" width="360" alt="dsh-theme-neko preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-neko&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Nachoneko (甘城猫猫) --dsw-* token skin for the dsh Web GUI.

```sh
dsh plugin --profile web add github:drfccv/dsh-theme-neko
```

**Repo:** [drfccv/dsh-theme-neko](https://github.com/drfccv/dsh-theme-neko) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/drfccv/dsh-theme-neko/blob/HEAD/package.json)

### [dsh-theme-pack](https://github.com/math-lrz/dsh-theme-pack)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-pack&scheme=dark"><img src="https://raw.githubusercontent.com/math-lrz/dsh-theme-pack/main/previews/nord.png" width="360" alt="dsh-theme-pack preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-pack&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Sixteen Web GUI token skins: Catppuccin, Gruvbox, Everforest, Rose Pine, Solarized, Kanagawa, Tokyo Night, Nord, Dracula, and more.

```sh
dsh plugin --profile web add github:math-lrz/dsh-theme-pack
```

**Repo:** [math-lrz/dsh-theme-pack](https://github.com/math-lrz/dsh-theme-pack) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/math-lrz/dsh-theme-pack/blob/HEAD/package.json)

### [dsh-theme-palettes](https://github.com/RainbowDashy/dsh-theme-palettes)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-palettes&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-palettes preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-palettes&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Palette infrastructure for dsh: ships a VS Code Red token palette and a client API for more palettes.

```sh
dsh plugin --profile web add github:RainbowDashy/dsh-theme-palettes
```

**Repo:** [RainbowDashy/dsh-theme-palettes](https://github.com/RainbowDashy/dsh-theme-palettes) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/RainbowDashy/dsh-theme-palettes/blob/HEAD/package.json)

### [dsh-theme-plugin](https://github.com/BeiZi6/dsh-theme-plugin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-plugin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-plugin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-plugin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH Web GUI theme studio with presets and per-mode customization: accent, background, foreground, fonts, translucent sidebar, and contrast. Overrides CSS tokens in every served index.html via the official webServer.tapIndex seam.

```sh
dsh plugin --profile web add github:BeiZi6/dsh-theme-plugin
```

**Repo:** [BeiZi6/dsh-theme-plugin](https://github.com/BeiZi6/dsh-theme-plugin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/BeiZi6/dsh-theme-plugin/blob/HEAD/package.json)

### [dsh-theme-spectrum](https://github.com/qipenglin/dsh-theme-spectrum)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-spectrum&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-spectrum preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-spectrum&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Ten light and dark theme presets for DeepSeek Harness Web

```sh
dsh plugin --profile web add github:qipenglin/dsh-theme-spectrum
```

**Repo:** [qipenglin/dsh-theme-spectrum](https://github.com/qipenglin/dsh-theme-spectrum) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/qipenglin/dsh-theme-spectrum/blob/HEAD/package.json)

### [dsh-theme-studio](https://github.com/cherrchen/dsh-theme-studio)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-studio&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-studio preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-studio&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Portable DSH theme overlay plugin: builtin palettes, preview, persistence, and General settings UI

```sh
dsh plugin --profile web add github:cherrchen/dsh-theme-studio
```

**Repo:** [cherrchen/dsh-theme-studio](https://github.com/cherrchen/dsh-theme-studio) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/cherrchen/dsh-theme-studio/blob/HEAD/package.json)

### [dsh-theme-ti](https://github.com/longyu065/dsh-theme-ti)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-ti&scheme=dark"><img src="https://raw.githubusercontent.com/longyu065/dsh-theme-ti/master/wings.png" width="360" alt="dsh-theme-ti preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-ti&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Dota 2 The International --dsw-* token skin: TI6 red, immortal-shield gold, vector wings and a starfield.

```sh
dsh plugin --profile web add github:longyu065/dsh-theme-ti
```

**Repo:** [longyu065/dsh-theme-ti](https://github.com/longyu065/dsh-theme-ti) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/longyu065/dsh-theme-ti/blob/HEAD/package.json)

### [dsh-theme-triptych](https://github.com/iMocking/dsh-theme-triptych)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-triptych&scheme=dark"><img src="https://raw.githubusercontent.com/iMocking/dsh-theme-triptych/HEAD/assets/image_nexus.jpg" width="360" alt="dsh-theme-triptych preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-triptych&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Appearance pack for DeepSeek Harness with NEXUS, COMIKET, and IRONCORE editions, wallpapers, and a sidebar switcher.

```sh
dsh plugin --profile web add github:iMocking/dsh-theme-triptych
```

**Repo:** [iMocking/dsh-theme-triptych](https://github.com/iMocking/dsh-theme-triptych) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/iMocking/dsh-theme-triptych/blob/HEAD/package.json)

### [dsh-theme-tuner](https://github.com/shawnlone/dsh-theme-tuner)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-tuner&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-tuner preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-tuner&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH web plugin: theme customization placed under the built-in Appearance (外观) settings. It reuses the Appearance light/dark switch and lets you adjust accent / background / foreground / contrast for the active theme, applied live through DSH theme token overrides.

```sh
dsh plugin --profile web add github:shawnlone/dsh-theme-tuner
```

**Repo:** [shawnlone/dsh-theme-tuner](https://github.com/shawnlone/dsh-theme-tuner) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/shawnlone/dsh-theme-tuner/blob/HEAD/package.json)

### [dsh-theme-vscode-red](https://github.com/RainbowDashy/dsh-theme-vscode-red)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-vscode-red&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-vscode-red preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-vscode-red&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

VS Code Red --dsw-* token theme: deep maroon surfaces with a #cc3333 accent, applied from client JS.

```sh
dsh plugin --profile web add github:RainbowDashy/dsh-theme-vscode-red
```

**Repo:** [RainbowDashy/dsh-theme-vscode-red](https://github.com/RainbowDashy/dsh-theme-vscode-red) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/RainbowDashy/dsh-theme-vscode-red/blob/HEAD/package.json)

### [dsh-theme-xp](https://github.com/SamizuHM/dsh-client-ui-theme-xp)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-xp&scheme=dark"><img src="https://raw.githubusercontent.com/SamizuHM/dsh-client-ui-theme-xp/HEAD/docs/screenshot.png" width="360" alt="dsh-theme-xp preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-xp&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Windows XP Luna-style Web GUI theme: token palette, Tahoma, XP title bars, beveled buttons, list rows, balloon bubbles, and a Bliss taskbar.

```sh
dsh plugin --profile web add github:SamizuHM/dsh-client-ui-theme-xp
```

**Repo:** [SamizuHM/dsh-client-ui-theme-xp](https://github.com/SamizuHM/dsh-client-ui-theme-xp) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/SamizuHM/dsh-client-ui-theme-xp/blob/HEAD/package.json)

### [dsh-themes](https://github.com/MangMax/dsh-themes)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-themes&scheme=dark"><img src="https://raw.githubusercontent.com/MangMax/dsh-themes/HEAD/assets/screenshot.png" width="360" alt="dsh-themes preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-themes&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Appearance plugin for dsh: built-in --dsw-* palettes, mixed light/dark, Open VSX search, and VS Code theme import.

```sh
dsh plugin --profile web add github:MangMax/dsh-themes
```

**Repo:** [MangMax/dsh-themes](https://github.com/MangMax/dsh-themes) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/MangMax/dsh-themes/blob/HEAD/package.json)

### [dsh-themes-pack](https://github.com/whyihaveyou/dsh-themes)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-themes-pack&scheme=dark"><img src="https://raw.githubusercontent.com/whyihaveyou/dsh-themes/main/skins/catppuccin/preview/dark.png" width="360" alt="dsh-themes-pack preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-themes-pack&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

151 day/night token skins for the dsh Web UI: game characters, editor palettes, aesthetic styles, holidays, and a few eggs. Migrated from aionui-themes.

```sh
dsh plugin --profile web add github:whyihaveyou/dsh-themes
```

**Repo:** [whyihaveyou/dsh-themes](https://github.com/whyihaveyou/dsh-themes) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#devDependencies.@deepseek-ai/cordis](https://github.com/whyihaveyou/dsh-themes/blob/HEAD/package.json)

### [dsh-tint-theme](https://github.com/OneZero-Y/dsh-tint-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-tint-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-tint-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-tint-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

A skin picker for the DeepSeek Harness (DSH) Web GUI, offering DSH-native ports of well-known open-source editor color themes

```sh
dsh plugin --profile web add github:OneZero-Y/dsh-tint-theme
```

**Repo:** [OneZero-Y/dsh-tint-theme](https://github.com/OneZero-Y/dsh-tint-theme) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/OneZero-Y/dsh-tint-theme/blob/HEAD/package.json)

### [dsh-ui-appearance](https://github.com/TQSY114514/dsh-ui-appearance/tree/HEAD/packages/client/ui-appearance)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ui-appearance&scheme=dark"><img src="https://raw.githubusercontent.com/TQSY114514/dsh-ui-appearance/HEAD/docs/screenshot-wallpaper.png" width="360" alt="dsh-ui-appearance preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ui-appearance&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Appearance customizer: six --dsw-alias-* palettes, color pickers, wallpaper upload, opacity/blur/mask, and frosted panels, live from Settings General.

```sh
dsh plugin --profile web add github:TQSY114514/dsh-ui-appearance
```

**Repo:** [TQSY114514/dsh-ui-appearance](https://github.com/TQSY114514/dsh-ui-appearance/tree/HEAD/packages/client/ui-appearance) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/TQSY114514/dsh-ui-appearance/blob/HEAD/package.json)

### [dsh-ui-skins](https://github.com/edwardyang0011/dsh-ui-skins)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ui-skins&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-ui-skins preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ui-skins&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Registers preset color skins as alias-token themes and adds a Skin row to Settings General.

```sh
dsh plugin --profile web add github:edwardyang0011/dsh-ui-skins
```

**Repo:** [edwardyang0011/dsh-ui-skins](https://github.com/edwardyang0011/dsh-ui-skins) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/edwardyang0011/dsh-ui-skins/blob/HEAD/package.json)

### [dsh-ui-theme-skins](https://github.com/ikomom/dsh-ui-skins)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ui-theme-skins&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-ui-theme-skins preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ui-theme-skins&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Eight alias-token skins registered as system themes (cyber neon, soft dark, midnight blue, forest, fresh light, vintage paper, sakura, mint) with a Settings General appearance dropdown.

```sh
dsh plugin --profile web add github:ikomom/dsh-ui-skins
```

**Repo:** [ikomom/dsh-ui-skins](https://github.com/ikomom/dsh-ui-skins) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/ikomom/dsh-ui-skins/blob/HEAD/package.json)

### [dsh-ui-wallpaper](https://github.com/youzhoujiMrLiu/dsh-ui-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ui-wallpaper&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-ui-wallpaper preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ui-wallpaper&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Wallpaper plugin for the DeepSeek Harness web GUI: translucent app surfaces over a user-picked local image, GIF, or video background

```sh
dsh plugin --profile web add github:youzhoujiMrLiu/dsh-ui-wallpaper
```

**Repo:** [youzhoujiMrLiu/dsh-ui-wallpaper](https://github.com/youzhoujiMrLiu/dsh-ui-wallpaper) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/youzhoujiMrLiu/dsh-ui-wallpaper/blob/HEAD/package.json)

### [dsh-wallpaper-btq](https://github.com/B-TQ/dsh-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-btq&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-btq preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-btq&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH (DeepSeek Harness) 动态壁纸插件：把本地视频/图片变成全屏动态壁纸，支持效果调节、壁纸切换与 Wallpaper Engine 工坊导入，设置自动保存永久生效。

```sh
dsh plugin --profile web add github:B-TQ/dsh-wallpaper
```

**Repo:** [B-TQ/dsh-wallpaper](https://github.com/B-TQ/dsh-wallpaper) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/B-TQ/dsh-wallpaper/blob/HEAD/package.json)

### [dsh-wallpaper-frog755](https://github.com/Frog755/dsh-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-frog755&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-frog755 preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-frog755&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Persistent image and locally compressed MP4 wallpaper for DeepSeek Harness with opacity, blur, and a fixed web origin.

```sh
dsh plugin --profile web add github:Frog755/dsh-wallpaper
```

**Repo:** [Frog755/dsh-wallpaper](https://github.com/Frog755/dsh-wallpaper) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/Frog755/dsh-wallpaper/blob/HEAD/package.json)

### [dsh-wallpaper-fubao885](https://github.com/fubao885522-debug/dsh-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-fubao885&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-fubao885 preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-fubao885&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Wallpaper background for the DeepSeek Harness Web UI — built-in preset, custom URL, opacity control, auto-adapts to any screen

```sh
dsh plugin --profile web add github:fubao885522-debug/dsh-wallpaper
```

**Repo:** [fubao885522-debug/dsh-wallpaper](https://github.com/fubao885522-debug/dsh-wallpaper) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/fubao885522-debug/dsh-wallpaper/blob/HEAD/package.json)

### [dsh-wallpaper-mengzhan](https://github.com/mengzhangj/dsh-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-mengzhan&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-mengzhan preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-mengzhan&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH-Wallpaper: custom background wallpaper (image / local video / Wallpaper Engine sync) + system font picker for the DSH web UI. Pure client + host plugin, no DSH core modifications.

```sh
dsh plugin --profile web add github:mengzhangj/dsh-wallpaper
```

**Repo:** [mengzhangj/dsh-wallpaper](https://github.com/mengzhangj/dsh-wallpaper) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/mengzhangj/dsh-wallpaper/blob/HEAD/package.json)

### [dsh-web-background](https://github.com/BruceWu1126/dsh-web-background)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-web-background&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-web-background preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-web-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Background settings page: solid, gradient, or image per light/dark mode, with sidebar linkage and token overrides.

```sh
dsh plugin --profile web add github:BruceWu1126/dsh-web-background
```

**Repo:** [BruceWu1126/dsh-web-background](https://github.com/BruceWu1126/dsh-web-background) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/BruceWu1126/dsh-web-background/blob/HEAD/package.json)

### [dsh-web-client-theme-switcher](https://github.com/yingpanwang/dsh_web_client_theme_switcher)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-web-client-theme-switcher&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-web-client-theme-switcher preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-web-client-theme-switcher&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Custom theme switcher for the dsh Web UI: preset solid colors and a custom wallpaper background.

```sh
dsh plugin --profile web add github:yingpanwang/dsh_web_client_theme_switcher
```

**Repo:** [yingpanwang/dsh_web_client_theme_switcher](https://github.com/yingpanwang/dsh_web_client_theme_switcher) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/yingpanwang/dsh_web_client_theme_switcher/blob/HEAD/package.json)

### [dsh-web-skins](https://github.com/ZeroZ-lab/dsh-web-skins)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-web-skins&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-web-skins preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-web-skins&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

21 editor-inspired --dsw-* theme families for the dsh Web UI (Gruvbox, Catppuccin, Dracula, Solarized, Tokyo Night, and more), each with light and dark.

```sh
dsh plugin --profile web add github:ZeroZ-lab/dsh-web-skins
```

**Repo:** [ZeroZ-lab/dsh-web-skins](https://github.com/ZeroZ-lab/dsh-web-skins) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/ZeroZ-lab/dsh-web-skins/blob/HEAD/package.json)

### [dsh-web-theme](https://github.com/luckzhangfengbo/dsh-web-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-web-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-web-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-web-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

墨韵 (Moyun) · 中国水墨画风格主题插件 for DeepSeek Harness：5 套原创水墨主题、自定义壁纸 + 模糊控制、粒子飘落效果、8 种语言国际化，把 DSH 变成一幅流动的水墨画卷。原生 token 系统，零侵入，装一次用很久。

```sh
dsh plugin --profile web add github:luckzhangfengbo/dsh-web-theme
```

**Repo:** [luckzhangfengbo/dsh-web-theme](https://github.com/luckzhangfengbo/dsh-web-theme) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/luckzhangfengbo/dsh-web-theme/blob/HEAD/package.json)

### [dsh-web-theme-packs](https://github.com/tzy168/dsh-web-theme-packs)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-web-theme-packs&scheme=dark"><img src="https://raw.githubusercontent.com/tzy168/dsh-web-theme-packs/master/themes/aero-blue/preview.svg" width="360" alt="dsh-web-theme-packs preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-web-theme-packs&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Web UI theme packs with bundled sheets (Aero Blue, Ink Night, Misty Forest) and a settings-row picker.

```sh
dsh plugin --profile web add github:tzy168/dsh-web-theme-packs
```

**Repo:** [tzy168/dsh-web-theme-packs](https://github.com/tzy168/dsh-web-theme-packs) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/tzy168/dsh-web-theme-packs/blob/HEAD/package.json)

### [dsh-wechat-skin](https://github.com/licheng-ma/dsh-wechat-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wechat-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wechat-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wechat-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

微信风格皮肤 for DeepSeek Harness — WeChat-style light theme for DeepSeek Harness: green bubbles, WeChat green accents, conversation-list sidebar, a far-left function rail, message avatars, and a resizable composer. Light mode only; dark mode falls back to the official look.

```sh
dsh plugin --profile web add github:licheng-ma/dsh-wechat-skin
```

**Repo:** [licheng-ma/dsh-wechat-skin](https://github.com/licheng-ma/dsh-wechat-skin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/licheng-ma/dsh-wechat-skin/blob/HEAD/package.json)

### [dsh-xiaoyao-skins](https://github.com/147228/dsh-xiaoyao-skins)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-xiaoyao-skins&scheme=dark"><img src="https://raw.githubusercontent.com/147228/dsh-xiaoyao-skins/main/site/previews/black-whale.jpg" width="360" alt="dsh-xiaoyao-skins preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-xiaoyao-skins&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

夕小瑶 × dsh Web skin collection, installer, and community toolchain.

```sh
dsh plugin --profile web add github:147228/dsh-xiaoyao-skins
```

**Repo:** [147228/dsh-xiaoyao-skins](https://github.com/147228/dsh-xiaoyao-skins) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#devDependencies.@deepseek-ai/cordis](https://github.com/147228/dsh-xiaoyao-skins/blob/HEAD/package.json)

*Gallery: https://147228.github.io/dsh-xiaoyao-skins/*

### [dsh-zhongguo-themes](https://github.com/nevertoday/dsh-theme-plugin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-zhongguo-themes&scheme=dark"><img src="https://raw.githubusercontent.com/nevertoday/dsh-theme-plugin/HEAD/docs/img/panel-light.png" width="360" alt="dsh-zhongguo-themes preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-zhongguo-themes&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Chinese traditional color theme pack for DeepSeek Harness: 48 anchors times light/dark writing the full --dsw-* token vocabulary.

```sh
dsh plugin --profile web add github:nevertoday/dsh-theme-plugin
```

**Repo:** [nevertoday/dsh-theme-plugin](https://github.com/nevertoday/dsh-theme-plugin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/nevertoday/dsh-theme-plugin/blob/HEAD/package.json)

### [dshthemes](https://github.com/dshworks/dshthemes)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dshthemes&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dshthemes preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dshthemes&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

dshthemes.com — every DeepSeek Harness theme, in its own colours. A reader of dshworks/awesome-dsh-themes.

```sh
dsh plugin --profile web add github:dshworks/dshthemes
```

**Repo:** [dshworks/dshthemes](https://github.com/dshworks/dshthemes) · **dsh:** 0.1.0-rc.7 · **Proof:** [src/chrome.css#--dsw-tokens](https://github.com/dshworks/dshthemes/blob/HEAD/src/chrome.css)

### [fabric-theme-studio](https://github.com/BingChanCN/fabric-theme-studio)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=fabric-theme-studio&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="fabric-theme-studio preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=fabric-theme-studio&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Interactive theme studio and personalization showcase for DeepSeek Harness, built on Fabric.

```sh
dsh plugin --profile web add github:BingChanCN/fabric-theme-studio
```

**Repo:** [BingChanCN/fabric-theme-studio](https://github.com/BingChanCN/fabric-theme-studio) · **Package:** [`@dsh-do/fabric-theme-studio`](https://www.npmjs.com/package/@dsh-do/fabric-theme-studio) · **dsh:** 0.1.0-rc.6

### [freestyle-dsh-theme](https://github.com/suzike/freestyle-dsh-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=freestyle-dsh-theme&scheme=dark"><img src="https://raw.githubusercontent.com/suzike/freestyle-dsh-theme/main/docs/images/screenshot-designer.png" width="360" alt="freestyle-dsh-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=freestyle-dsh-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

dsh theme studio: OKLCH theme proposals and a designer that persists across restarts.

```sh
dsh plugin --profile web add github:suzike/freestyle-dsh-theme
```

**Repo:** [suzike/freestyle-dsh-theme](https://github.com/suzike/freestyle-dsh-theme) · **License:** BSD-3-Clause · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/suzike/freestyle-dsh-theme/blob/HEAD/package.json)

### [goodpostidea-dsh-skin](https://github.com/goodpostidea-tech/deepseek-harness-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=goodpostidea-dsh-skin&scheme=dark"><img src="https://raw.githubusercontent.com/goodpostidea-tech/deepseek-harness-skin/main/docs/coding.png" width="360" alt="goodpostidea-dsh-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=goodpostidea-dsh-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Selectable Web GUI skins with paired light/dark token overrides, backgrounds, and a settings-row picker.

```sh
dsh plugin --profile web add github:goodpostidea-tech/deepseek-harness-skin
```

**Repo:** [goodpostidea-tech/deepseek-harness-skin](https://github.com/goodpostidea-tech/deepseek-harness-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/goodpostidea-tech/deepseek-harness-skin/blob/HEAD/package.json)

### [silk-background](https://github.com/z21for99/silk-background)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=silk-background&scheme=dark"><img src="https://raw.githubusercontent.com/z21for99/silk-background/main/screenshots/screenshot-1.png" width="360" alt="silk-background preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=silk-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

WebGL Silk shader wallpaper plus glass --dsw-alias-* overlays: dim/vivid/off modes, seven palettes, and a live RGB picker.

```sh
dsh plugin --profile web add github:z21for99/silk-background
```

**Repo:** [z21for99/silk-background](https://github.com/z21for99/silk-background) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/z21for99/silk-background/blob/HEAD/package.json)

### [skins](https://github.com/iasiv5/skins)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=skins&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="skins preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=skins&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Modular DSH Web skin pack with official fallback, OpenBMC and UEFI appearances, and verified stable-Release updates

```sh
dsh plugin --profile web add github:iasiv5/skins
```

**Repo:** [iasiv5/skins](https://github.com/iasiv5/skins) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/iasiv5/skins/blob/HEAD/package.json)

### [solarized-dsh-theme](https://github.com/zhijun-dai/Solarized-dsh-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=solarized-dsh-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="solarized-dsh-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=solarized-dsh-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Solarized and Selenized palettes registered into the theme runtime, with a Settings picker and code-block colors.

```sh
dsh plugin --profile web add github:zhijun-dai/Solarized-dsh-theme
```

**Repo:** [zhijun-dai/Solarized-dsh-theme](https://github.com/zhijun-dai/Solarized-dsh-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/zhijun-dai/Solarized-dsh-theme/blob/HEAD/package.json)

### [ui-song-theme](https://github.com/yunfei07/ui-song-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=ui-song-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="ui-song-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=ui-song-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Song-inspired light and dark theme: silk-paper surfaces, celadon accents, and CJK serif headings.

```sh
dsh plugin --profile web add github:yunfei07/ui-song-theme
```

**Repo:** [yunfei07/ui-song-theme](https://github.com/yunfei07/ui-song-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/yunfei07/ui-song-theme/blob/HEAD/package.json)

## Skins

Theme and skin listings that restyle the dsh Web UI.

### [arknits-background-plugin](https://github.com/xxxxxs-ssdd/arknits-background-plugin/tree/HEAD/dsh-client-ui-arknights-background)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=arknits-background-plugin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="arknits-background-plugin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=arknits-background-plugin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

一个适用于deepseek-harness的明日方舟背景插件

```sh
dsh plugin --profile web add github:xxxxxs-ssdd/arknits-background-plugin
```

**Repo:** [xxxxxs-ssdd/arknits-background-plugin](https://github.com/xxxxxs-ssdd/arknits-background-plugin/tree/HEAD/dsh-client-ui-arknights-background) · **dsh:** 0.1.0-rc.8 · **Proof:** [dsh-client-ui-arknights-background/package.json#dsh.client](https://github.com/xxxxxs-ssdd/arknits-background-plugin/blob/HEAD/dsh-client-ui-arknights-background/package.json)

### [ATRI-Theme-DSH](https://github.com/DKthreeFR/ATRI-Theme-DSH/tree/HEAD/dsh-client-ui-atri)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=ATRI-Theme-DSH&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="ATRI-Theme-DSH preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=ATRI-Theme-DSH&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

ATRI 亚托莉主题的DeepSeepk Harnesss装饰

```sh
dsh plugin --profile web add github:DKthreeFR/ATRI-Theme-DSH
```

**Repo:** [DKthreeFR/ATRI-Theme-DSH](https://github.com/DKthreeFR/ATRI-Theme-DSH/tree/HEAD/dsh-client-ui-atri) · **dsh:** 0.1.0-rc.6 · **Proof:** [dsh-client-ui-atri/package.json#dsh.client](https://github.com/DKthreeFR/ATRI-Theme-DSH/blob/HEAD/dsh-client-ui-atri/package.json)

### [background-plugin](https://github.com/cjz-wr/background-plugin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=background-plugin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="background-plugin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=background-plugin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Background plugin: durable background image/video preference, General settings row, and document presenter

```sh
dsh plugin --profile web add github:cjz-wr/background-plugin
```

**Repo:** [cjz-wr/background-plugin](https://github.com/cjz-wr/background-plugin) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/cjz-wr/background-plugin/blob/HEAD/package.json)

### [Catppuccin-dsh-theme](https://github.com/zhijun-dai/Catppuccin-dsh-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=Catppuccin-dsh-theme&scheme=dark"><img src="https://raw.githubusercontent.com/zhijun-dai/Catppuccin-dsh-theme/HEAD/assets/preview.webp" width="360" alt="Catppuccin-dsh-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=Catppuccin-dsh-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Soothing pastel theme for DeepSeek Harness: the four Catppuccin flavors (Latte, Frappé, Macchiato, Mocha) registered into the built-in theme runtime

```sh
dsh plugin --profile web add github:zhijun-dai/Catppuccin-dsh-theme
```

**Repo:** [zhijun-dai/Catppuccin-dsh-theme](https://github.com/zhijun-dai/Catppuccin-dsh-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/zhijun-dai/Catppuccin-dsh-theme/blob/HEAD/package.json)

### [Cyberpunk-theme-for-dsh](https://github.com/GGbao-114/Cyberpunk-theme-for-dsh)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=Cyberpunk-theme-for-dsh&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="Cyberpunk-theme-for-dsh preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=Cyberpunk-theme-for-dsh&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Cyberpunk 2077 red/neon fork of the Night City theme for DeepSeek Harness Web UI — neon red × cyan × green identity, base64-embedded Ryzes & Cyberpunk fonts, CYBERPUNK 2077 INFECTING boot screen, Tab 'relic virus' session switcher (left 120° arc + hacker terminal), green code-rain particles. Forked from

```sh
dsh plugin --profile web add github:GGbao-114/Cyberpunk-theme-for-dsh
```

**Repo:** [GGbao-114/Cyberpunk-theme-for-dsh](https://github.com/GGbao-114/Cyberpunk-theme-for-dsh) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/GGbao-114/Cyberpunk-theme-for-dsh/blob/HEAD/package.json)

### [deepseek-harness-animated-skin](https://github.com/bangbang-PPT/deepseek-harness-animated-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-harness-animated-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="deepseek-harness-animated-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-harness-animated-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Animated Web UI background skin with video or still wallpapers, a floating control panel, and built-in WebM clips.

```sh
dsh plugin --profile web add github:bangbang-PPT/deepseek-harness-animated-skin
```

**Repo:** [bangbang-PPT/deepseek-harness-animated-skin](https://github.com/bangbang-PPT/deepseek-harness-animated-skin) · **dsh:** 0.1.0-rc.6

### [deepseek-harness-background](https://github.com/HaoyueQin/deepseek-harness-background)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-harness-background&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="deepseek-harness-background preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-harness-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Custom background image plugin for the DeepSeek Harness web GUI: upload a local picture or paste an image URL, and render it behind the whole app surface with adjustable opacity, scrim, panel transparency and frosted-glass blur.

```sh
dsh plugin --profile web add github:HaoyueQin/deepseek-harness-background
```

**Repo:** [HaoyueQin/deepseek-harness-background](https://github.com/HaoyueQin/deepseek-harness-background) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/HaoyueQin/deepseek-harness-background/blob/HEAD/package.json)

### [DeepSeek-Harness-Breathing-BG](https://github.com/CharserHH/DeepSeek-Harness-Breathing-BG)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=DeepSeek-Harness-Breathing-BG&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="DeepSeek-Harness-Breathing-BG preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=DeepSeek-Harness-Breathing-BG&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Web ambient backdrop: a dot-wave breathing light over the conversation background, colored and paced by harness activity

```sh
dsh plugin --profile web add github:CharserHH/DeepSeek-Harness-Breathing-BG
```

**Repo:** [CharserHH/DeepSeek-Harness-Breathing-BG](https://github.com/CharserHH/DeepSeek-Harness-Breathing-BG) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/CharserHH/DeepSeek-Harness-Breathing-BG/blob/HEAD/package.json)

### [deepseek-harness-custom-background](https://github.com/vonPaulison/deepseek-harness-custom-background)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-harness-custom-background&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="deepseek-harness-custom-background preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-harness-custom-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness Web 界面自定义背景插件：主界面/边栏/顶栏三区域独立背景、拖拽定位、不透明度 0-100、主题色、圆角、缩放，附健壮定位与内置诊断

```sh
dsh plugin --profile web add github:vonPaulison/deepseek-harness-custom-background
```

**Repo:** [vonPaulison/deepseek-harness-custom-background](https://github.com/vonPaulison/deepseek-harness-custom-background) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/vonPaulison/deepseek-harness-custom-background/blob/HEAD/package.json)

### [deepseek-harness-skin-zdram](https://github.com/Zdram/deepseek-harness-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-harness-skin-zdram&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="deepseek-harness-skin-zdram preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-harness-skin-zdram&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Anime background skin for the DeepSeek Harness Web UI

```sh
dsh plugin --profile web add github:Zdram/deepseek-harness-skin
```

**Repo:** [Zdram/deepseek-harness-skin](https://github.com/Zdram/deepseek-harness-skin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Zdram/deepseek-harness-skin/blob/HEAD/package.json)

### [deepseek-harness-tool-palette](https://github.com/lizhecome/deepseek-harness-tool-palette)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-harness-tool-palette&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="deepseek-harness-tool-palette preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-harness-tool-palette&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Progressive tool discovery and per-agent unlocking for DeepSeek Harness

```sh
dsh plugin --profile web add github:lizhecome/deepseek-harness-tool-palette
```

**Repo:** [lizhecome/deepseek-harness-tool-palette](https://github.com/lizhecome/deepseek-harness-tool-palette) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/lizhecome/deepseek-harness-tool-palette/blob/HEAD/package.json)

### [DeepSeek-Harness-yizi-themes](https://github.com/laoduu/DeepSeek-Harness-yizi-themes)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=DeepSeek-Harness-yizi-themes&scheme=dark"><img src="https://raw.githubusercontent.com/laoduu/DeepSeek-Harness-yizi-themes/HEAD/assets/dsh-yizi-themes.png" width="360" alt="DeepSeek-Harness-yizi-themes preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=DeepSeek-Harness-yizi-themes&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

为 DeepSeek Harness（dsh）Web UI 提供的 19 个精品风格主题，完整移植自 YiziMarkdown 的设计语言。

```sh
dsh plugin --profile web add github:laoduu/DeepSeek-Harness-yizi-themes
```

**Repo:** [laoduu/DeepSeek-Harness-yizi-themes](https://github.com/laoduu/DeepSeek-Harness-yizi-themes) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/laoduu/DeepSeek-Harness-yizi-themes/blob/HEAD/package.json)

### [deepseek-skin-studio](https://github.com/JueMing2049/deepseek-skin-studio)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-skin-studio&scheme=dark"><img src="https://raw.githubusercontent.com/JueMing2049/deepseek-skin-studio/HEAD/docs/images/galaxy.png" width="360" alt="deepseek-skin-studio preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-skin-studio&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness 换肤工作室：一张图一套皮肤。三通道注入（书签/CDP/原生插件）+ 可视化工坊 + 13 套内置主题 + DSH-SKIN-SPEC 导出。社区项目。

```sh
dsh plugin --profile web add github:JueMing2049/deepseek-skin-studio
```

**Repo:** [JueMing2049/deepseek-skin-studio](https://github.com/JueMing2049/deepseek-skin-studio) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.kind+name+displayName+description+version+compat+category+entry](https://github.com/JueMing2049/deepseek-skin-studio/blob/HEAD/package.json)

### [deepseek-style-theme](https://github.com/Lichtspur/deepseek-style-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-style-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="deepseek-style-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=deepseek-style-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek official-home style theme: fluid particle background, glass sidebar, glass composer, frosted header, running-subagent progress panel, and DeepSeek brand link for the dsh web GUI

```sh
dsh plugin --profile web add github:Lichtspur/deepseek-style-theme
```

**Repo:** [Lichtspur/deepseek-style-theme](https://github.com/Lichtspur/deepseek-style-theme) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/Lichtspur/deepseek-style-theme/blob/HEAD/package.json)

### [dph-endfield-theme](https://github.com/thjyy/dph-endfield-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dph-endfield-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dph-endfield-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dph-endfield-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Unofficial industrial Endfield-inspired theme bundle for DeepSeek Harness Web.

```sh
dsh plugin --profile web add github:thjyy/dph-endfield-theme
```

**Repo:** [thjyy/dph-endfield-theme](https://github.com/thjyy/dph-endfield-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/thjyy/dph-endfield-theme/blob/HEAD/package.json)

### [ds-mobile-skin](https://github.com/wenyixiaoqingnian/ds-mobile-skin/tree/HEAD/plugin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=ds-mobile-skin&scheme=dark"><img src="https://raw.githubusercontent.com/wenyixiaoqingnian/ds-mobile-skin/HEAD/docs/screenshot-mobile-home.png" width="360" alt="ds-mobile-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=ds-mobile-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Mobile DeepSeek-app look for DSH Web GUI + dsh-token-viewer billing patch

```sh
dsh plugin --profile web add github:wenyixiaoqingnian/ds-mobile-skin
```

**Repo:** [wenyixiaoqingnian/ds-mobile-skin](https://github.com/wenyixiaoqingnian/ds-mobile-skin/tree/HEAD/plugin) · **dsh:** 0.1.1-rc.2 · **Proof:** [plugin/package.json#dsh.bundle](https://github.com/wenyixiaoqingnian/ds-mobile-skin/blob/HEAD/plugin/package.json)

### [dsh_Rhine_Lab_theme](https://github.com/ReLuckyLucy/dsh_Rhine_Lab_theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh_Rhine_Lab_theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh_Rhine_Lab_theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh_Rhine_Lab_theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Arknights Rhine Lab archive-terminal reconstruction for the DeepSeek Harness Web GUI, with reversible deep styling and restrained institutional HUD

```sh
dsh plugin --profile web add github:ReLuckyLucy/dsh_Rhine_Lab_theme
```

**Repo:** [ReLuckyLucy/dsh_Rhine_Lab_theme](https://github.com/ReLuckyLucy/dsh_Rhine_Lab_theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/ReLuckyLucy/dsh_Rhine_Lab_theme/blob/HEAD/package.json)

### [dsh_theme_terraria](https://github.com/10086ggqq/dsh_theme_terraria)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh_theme_terraria&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh_theme_terraria preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh_theme_terraria&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Terraria pixel theme for the DeepSeek Harness Web UI: a self-contained frontend that replaces the served dist, with the Guide NPC dialog, character-creation mode select, quest HUD, 8-bit sound feedback, and wallpaper system.

```sh
dsh plugin --profile web add github:10086ggqq/dsh_theme_terraria
```

**Repo:** [10086ggqq/dsh_theme_terraria](https://github.com/10086ggqq/dsh_theme_terraria) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/10086ggqq/dsh_theme_terraria/blob/HEAD/package.json)

### [dsh-815-skin](https://github.com/lengduan/dsh-815-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-815-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-815-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-815-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

1945 终战皮肤：陈坚《公元一九四五年九月九日九时》作为 DeepSeek Harness Web 背景

```sh
dsh plugin --profile web add github:lengduan/dsh-815-skin
```

**Repo:** [lengduan/dsh-815-skin](https://github.com/lengduan/dsh-815-skin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/lengduan/dsh-815-skin/blob/HEAD/package.json)

### [dsh-aemeath-skin](https://github.com/Rhongomyniadz/dsh-aemeath-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-aemeath-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-aemeath-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-aemeath-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Hot-pluggable Aemeath (Wuthering Waves fan) skin for the dsh web GUI: pink mecha palette, heart-shaped tacet mark, and user-provided wallpapers

```sh
dsh plugin --profile web add github:Rhongomyniadz/dsh-aemeath-skin
```

**Repo:** [Rhongomyniadz/dsh-aemeath-skin](https://github.com/Rhongomyniadz/dsh-aemeath-skin) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/Rhongomyniadz/dsh-aemeath-skin/blob/HEAD/package.json)

### [dsh-amadeus-skin](https://github.com/justintangsysu/dsh-amadeus-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-amadeus-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-amadeus-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-amadeus-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Amadeus (Steins;Gate 0) static skin for the dsh web GUI: Future Gadget Lab scene + Kurisu portrait layered under the native Harness UI

```sh
dsh plugin --profile web add github:justintangsysu/dsh-amadeus-skin
```

**Repo:** [justintangsysu/dsh-amadeus-skin](https://github.com/justintangsysu/dsh-amadeus-skin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/justintangsysu/dsh-amadeus-skin/blob/HEAD/package.json)

### [dsh-angelina-theme](https://github.com/Demigod-cyber/dsh-angelina-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-angelina-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-angelina-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-angelina-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

直到大地变成一颗酸橙 · Angelina 浅蓝主题：持久化主题插件，每次启动自动生效。

```sh
dsh plugin --profile web add github:Demigod-cyber/dsh-angelina-theme
```

**Repo:** [Demigod-cyber/dsh-angelina-theme](https://github.com/Demigod-cyber/dsh-angelina-theme) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/Demigod-cyber/dsh-angelina-theme/blob/HEAD/package.json)

### [dsh-angelsanddemon-fatesumphony-skin](https://github.com/zhangyuzhangyu233/dsh-angelsanddemon-fatesumphony-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-angelsanddemon-fatesumphony-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-angelsanddemon-fatesumphony-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-angelsanddemon-fatesumphony-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness Web 皮肤：《弹丸论破：天魔命曲》同人游戏素材全量皮肤。

```sh
dsh plugin --profile web add github:zhangyuzhangyu233/dsh-angelsanddemon-fatesumphony-skin
```

**Repo:** [zhangyuzhangyu233/dsh-angelsanddemon-fatesumphony-skin](https://github.com/zhangyuzhangyu233/dsh-angelsanddemon-fatesumphony-skin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/zhangyuzhangyu233/dsh-angelsanddemon-fatesumphony-skin/blob/HEAD/package.json)

### [dsh-anime-skins](https://github.com/ZRTBdSS/dsh-anime-skins)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-anime-skins&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-anime-skins preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-anime-skins&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH anime skin manager: 6 skins, custom message layout, floating menus and theme-adaptive UI overrides.

```sh
dsh plugin --profile web add github:ZRTBdSS/dsh-anime-skins
```

**Repo:** [ZRTBdSS/dsh-anime-skins](https://github.com/ZRTBdSS/dsh-anime-skins) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/ZRTBdSS/dsh-anime-skins/blob/HEAD/package.json)

### [dsh-atom-commune-skin](https://github.com/dingdongji-hub/dsh-atom-commune-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-atom-commune-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-atom-commune-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-atom-commune-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

公社 (Commune) theme for the DeepSeek Harness Web UI — atompunk / Soviet monumental-building background, rose-red UI, yellow hammer-&-sickle & atom accents.

```sh
dsh plugin --profile web add github:dingdongji-hub/dsh-atom-commune-skin
```

**Repo:** [dingdongji-hub/dsh-atom-commune-skin](https://github.com/dingdongji-hub/dsh-atom-commune-skin) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/dingdongji-hub/dsh-atom-commune-skin/blob/HEAD/package.json)

### [dsh-aurora-bg](https://github.com/KUNTING0701/dsh-aurora-bg)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-aurora-bg&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-aurora-bg preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-aurora-bg&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek 官网风格动态极光背景：深蓝流体光斑 + 金色流纹 + 粒子网格，随 dsh 启动自动加载

```sh
dsh plugin --profile web add github:KUNTING0701/dsh-aurora-bg
```

**Repo:** [KUNTING0701/dsh-aurora-bg](https://github.com/KUNTING0701/dsh-aurora-bg) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/KUNTING0701/dsh-aurora-bg/blob/HEAD/package.json)

### [dsh-aurora-theme](https://github.com/seekerwxy/dsh-aurora-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-aurora-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-aurora-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-aurora-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH 动态插件：深黑冷色调主题 + 星网/极光背景 + 动态/静态背景模式开关

```sh
dsh plugin --profile web add github:seekerwxy/dsh-aurora-theme
```

**Repo:** [seekerwxy/dsh-aurora-theme](https://github.com/seekerwxy/dsh-aurora-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/seekerwxy/dsh-aurora-theme/blob/HEAD/package.json)

### [dsh-background](https://github.com/leavestring/awesome-dsh-background-plugin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-background&scheme=dark"><img src="https://raw.githubusercontent.com/leavestring/awesome-dsh-background-plugin/main/screenshots/dark-mode-image.png" width="360" alt="dsh-background preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Background settings plugin: upload a local image or switch aurora, ember, and paper presets, with live opacity, mask, blur, and fit controls.

```sh
dsh plugin --profile web add github:leavestring/awesome-dsh-background-plugin
```

**Repo:** [leavestring/awesome-dsh-background-plugin](https://github.com/leavestring/awesome-dsh-background-plugin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/leavestring/awesome-dsh-background-plugin/blob/HEAD/package.json)

### [dsh-background-carousel](https://github.com/manjiayu20071022/dsh-ui-background)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-background-carousel&scheme=dark"><img src="https://raw.githubusercontent.com/manjiayu20071022/dsh-ui-background/main/screenshots/01-panel-open.png" width="360" alt="dsh-background-carousel preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-background-carousel&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Web UI background carousel: local or URL images, blur, dark overlay, glass, fill modes, plus chat and sidebar font controls.

```sh
dsh plugin --profile web add github:manjiayu20071022/dsh-ui-background
```

**Repo:** [manjiayu20071022/dsh-ui-background](https://github.com/manjiayu20071022/dsh-ui-background) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/manjiayu20071022/dsh-ui-background/blob/HEAD/package.json)

### [dsh-background-image](https://github.com/rumeng-ming/dsh-background-image)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-background-image&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-background-image preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-background-image&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Custom background plugin for the DeepSeek Harness Web GUI: gradient presets, solid colors, image URLs and local images with opacity and size controls

```sh
dsh plugin --profile web add github:rumeng-ming/dsh-background-image
```

**Repo:** [rumeng-ming/dsh-background-image](https://github.com/rumeng-ming/dsh-background-image) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/rumeng-ming/dsh-background-image/blob/HEAD/package.json)

### [dsh-background-lcohvnet](https://github.com/lcohvne-tomorin/dsh-background)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-background-lcohvnet&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-background-lcohvnet preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-background-lcohvnet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Custom background wallpaper for the DeepSeek Harness chat page — upload a local image or paste an image link, tune opacity and brightness, scope to chat area or full screen.

```sh
dsh plugin --profile web add github:lcohvne-tomorin/dsh-background
```

**Repo:** [lcohvne-tomorin/dsh-background](https://github.com/lcohvne-tomorin/dsh-background) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/lcohvne-tomorin/dsh-background/blob/HEAD/package.json)

### [dsh-background-snowinkk](https://github.com/SnoWinKK/dsh-background)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-background-snowinkk&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-background-snowinkk preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-background-snowinkk&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Custom background wallpaper for the DSH desktop UI: image + overlay, configured via ~/.config/dsh-background/config.json.

```sh
dsh plugin --profile web add github:SnoWinKK/dsh-background
```

**Repo:** [SnoWinKK/dsh-background](https://github.com/SnoWinKK/dsh-background) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/SnoWinKK/dsh-background/blob/HEAD/package.json)

### [dsh-beauty-skins](https://github.com/XieRW/dsh-beauty-skins/tree/HEAD/tree/packages/client/ui-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-beauty-skins&scheme=dark"><img src="https://raw.githubusercontent.com/XieRW/dsh-beauty-skins/HEAD/docs/screenshot.png" width="360" alt="dsh-beauty-skins preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-beauty-skins&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

给 DeepSeek Harness 用的美女系列皮肤：设置里从 哲风壁纸 拉预览网格，点一张即应用，配色从壁纸提取。支持动态壁纸，也保留自定义选图。

```sh
dsh plugin --profile web add github:XieRW/dsh-beauty-skins
```

**Repo:** [XieRW/dsh-beauty-skins](https://github.com/XieRW/dsh-beauty-skins/tree/HEAD/tree/packages/client/ui-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [tree/packages/client/ui-theme/package.json#dsh.client](https://github.com/XieRW/dsh-beauty-skins/blob/HEAD/tree/packages/client/ui-theme/package.json)

### [dsh-bg-beautify](https://github.com/halosb/dsh-bg-beautify)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-bg-beautify&scheme=dark"><img src="https://raw.githubusercontent.com/halosb/dsh-bg-beautify/HEAD/docs/screenshots/demo-1.png" width="360" alt="dsh-bg-beautify preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-bg-beautify&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Background image and translucent panels for the DeepSeek Harness web UI, with a live settings page.

```sh
dsh plugin --profile web add github:halosb/dsh-bg-beautify
```

**Repo:** [halosb/dsh-bg-beautify](https://github.com/halosb/dsh-bg-beautify) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/halosb/dsh-bg-beautify/blob/HEAD/package.json)

### [dsh-bg-carousel](https://github.com/Jonah-Wu23/dsh-bg-carousel)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-bg-carousel&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-bg-carousel preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-bg-carousel&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness 背景轮播：把背景换成用户上传的图片并自动轮播

```sh
dsh plugin --profile web add github:Jonah-Wu23/dsh-bg-carousel
```

**Repo:** [Jonah-Wu23/dsh-bg-carousel](https://github.com/Jonah-Wu23/dsh-bg-carousel) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/Jonah-Wu23/dsh-bg-carousel/blob/HEAD/package.json)

### [dsh-bg-image](https://github.com/lyh9712/dsh-bg-image)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-bg-image&scheme=dark"><img src="https://raw.githubusercontent.com/lyh9712/dsh-bg-image/HEAD/docs/screenshot.png" width="360" alt="dsh-bg-image preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-bg-image&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH Web 背景图插件（成品版，带设置界面）：选图/填 URL/本地图片/透明度/模糊度，设置持久化在浏览器 localStorage

```sh
dsh plugin --profile web add github:lyh9712/dsh-bg-image
```

**Repo:** [lyh9712/dsh-bg-image](https://github.com/lyh9712/dsh-bg-image) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/lyh9712/dsh-bg-image/blob/HEAD/package.json)

### [dsh-bg-image-mhwww](https://github.com/mhwww/dsh-bg-image)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-bg-image-mhwww&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-bg-image-mhwww preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-bg-image-mhwww&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Custom background image for the DeepSeek Harness web UI (theme token overlay + settings card)

```sh
dsh plugin --profile web add github:mhwww/dsh-bg-image
```

**Repo:** [mhwww/dsh-bg-image](https://github.com/mhwww/dsh-bg-image) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/mhwww/dsh-bg-image/blob/HEAD/package.json)

### [dsh-bg-plugin](https://github.com/xiaoxingyuemiao/dsh-bg-plugin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-bg-plugin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-bg-plugin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-bg-plugin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH 自定义背景插件：为 DSH Web GUI 应用远程 URL 图片或本地图片作为背景，支持清晰度/压暗/模糊调节，设置面板保持默认外观。

```sh
dsh plugin --profile web add github:xiaoxingyuemiao/dsh-bg-plugin
```

**Repo:** [xiaoxingyuemiao/dsh-bg-plugin](https://github.com/xiaoxingyuemiao/dsh-bg-plugin) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/xiaoxingyuemiao/dsh-bg-plugin/blob/HEAD/package.json)

### [dsh-bg-skin](https://github.com/jinzhengen964-cmyk/dsh-bg-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-bg-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-bg-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-bg-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

背景皮肤：将 DSH 界面背景替换为随插件分发的默认图片（assets/ds.jpeg，安装即用），可选 imagePath 覆盖，缺图自动回退默认皮肤。

```sh
dsh plugin --profile web add github:jinzhengen964-cmyk/dsh-bg-skin
```

**Repo:** [jinzhengen964-cmyk/dsh-bg-skin](https://github.com/jinzhengen964-cmyk/dsh-bg-skin) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/jinzhengen964-cmyk/dsh-bg-skin/blob/HEAD/package.json)

### [dsh-bg-tool](https://github.com/H-table/dsh-bg-tool)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-bg-tool&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-bg-tool preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-bg-tool&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Persistent rembg GPU background-removal tool (remove_background) for DeepSeek Harness, in the dsh-vision-toolkit bundle form.

```sh
dsh plugin --profile web add github:H-table/dsh-bg-tool
```

**Repo:** [H-table/dsh-bg-tool](https://github.com/H-table/dsh-bg-tool) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/H-table/dsh-bg-tool/blob/HEAD/package.json)

### [dsh-bgwall](https://github.com/hubo980205/dsh-bgwall-plugin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-bgwall&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-bgwall preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-bgwall&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

背景图片墙 (Background Wall)：把 DeepSeek Harness Web 界面背景换成任意图片（远程 URL 或服务器本地文件），支持透明度、模糊与铺放方式调节。控制面板位于「设置 → 背景图片」。

```sh
dsh plugin --profile web add github:hubo980205/dsh-bgwall-plugin
```

**Repo:** [hubo980205/dsh-bgwall-plugin](https://github.com/hubo980205/dsh-bgwall-plugin) · **License:** MIT · **Package:** [`dsh-bgwall-plugin`](https://www.npmjs.com/package/dsh-bgwall-plugin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/hubo980205/dsh-bgwall-plugin/blob/HEAD/package.json)

### [dsh-bloom-theme](https://github.com/webkubor/dsh-bloom-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-bloom-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-bloom-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-bloom-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness (DSH) 主题插件：Bloom 莫兰迪配色 4 变体（雾蓝/朱砂/花瓣/涟漪），OKLCH 调色，明暗双主题，顶栏一键切换，全部达 WCAG AA

```sh
dsh plugin --profile web add github:webkubor/dsh-bloom-theme
```

**Repo:** [webkubor/dsh-bloom-theme](https://github.com/webkubor/dsh-bloom-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/webkubor/dsh-bloom-theme/blob/HEAD/package.json)

### [dsh-capsule-skin](https://github.com/DawnCloud1213/dsh-capsule-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-capsule-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-capsule-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-capsule-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Wallpaper skin with capsule sidebar chrome and wallpaper-derived theme colors.

```sh
dsh plugin --profile web add github:DawnCloud1213/dsh-capsule-skin
```

**Repo:** [DawnCloud1213/dsh-capsule-skin](https://github.com/DawnCloud1213/dsh-capsule-skin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/DawnCloud1213/dsh-capsule-skin/blob/HEAD/package.json)

### [dsh-cerrda-theme](https://github.com/Cerrda/dsh-cerrda-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-cerrda-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-cerrda-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-cerrda-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Deployment-level static web plugin for DSH: cerrda dark re-theme of the DeepSeek Harness Web GUI (rose/purple oklch, Liquid Glass composer, Silk WebGL2 background, Sora/Fraunces/JetBrains Mono). Install with: dsh plugin --profile web add dsh-cerrda-theme

```sh
dsh plugin --profile web add github:Cerrda/dsh-cerrda-theme
```

**Repo:** [Cerrda/dsh-cerrda-theme](https://github.com/Cerrda/dsh-cerrda-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Cerrda/dsh-cerrda-theme/blob/HEAD/package.json)

### [dsh-chat-skin-bg](https://github.com/yuemingyue1119-lune/dsh-chat-skin/tree/HEAD/dsh-chat-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-chat-skin-bg&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-chat-skin-bg preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-chat-skin-bg&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Chat-area background skin: image wallpaper with brightness controls that leave the rest of the UI chrome alone.

```sh
dsh plugin --profile web add github:yuemingyue1119-lune/dsh-chat-skin
```

**Repo:** [yuemingyue1119-lune/dsh-chat-skin](https://github.com/yuemingyue1119-lune/dsh-chat-skin/tree/HEAD/dsh-chat-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [dsh-chat-skin/package.json#dsh.client](https://github.com/yuemingyue1119-lune/dsh-chat-skin/blob/HEAD/dsh-chat-skin/package.json)

### [dsh-claude-theme-kc0ed](https://github.com/kc0ed/dsh-claude-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-claude-theme-kc0ed&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-claude-theme-kc0ed preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-claude-theme-kc0ed&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Claude 主题：Cherry Studio Claude 社区主题（igeekbb/Cherry-Studio-Claude-theme）移植到 DSH 变量体系——米白/炭灰配色、SF Pro Rounded + 霞鹜文楷字体、cordis 插件面板气泡卡片（尖角尾巴）+ 设置页开关。

```sh
dsh plugin --profile web add github:kc0ed/dsh-claude-theme
```

**Repo:** [kc0ed/dsh-claude-theme](https://github.com/kc0ed/dsh-claude-theme) · **dsh:** 0.1.0-rc.7 · **Proof:** [package.json#dsh.bundle](https://github.com/kc0ed/dsh-claude-theme/blob/HEAD/package.json)

### [dsh-client-ui-m3-theme](https://github.com/DarkskyX15/dsh-client-ui-m3-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-m3-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-client-ui-m3-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-m3-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Material 3 theme plugin for DeepSeek Harness: full M3 token mapping (light/dark palettes with per-mode chroma) + settings panel with primary color picker, presets and preview

```sh
dsh plugin --profile web add github:DarkskyX15/dsh-client-ui-m3-theme
```

**Repo:** [DarkskyX15/dsh-client-ui-m3-theme](https://github.com/DarkskyX15/dsh-client-ui-m3-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/DarkskyX15/dsh-client-ui-m3-theme/blob/HEAD/package.json)

### [dsh-client-ui-skin-claude](https://github.com/PAKIKNOWLEDGE/dsh-client-ui-skin-claude)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-skin-claude&scheme=dark"><img src="https://raw.githubusercontent.com/PAKIKNOWLEDGE/dsh-client-ui-skin-claude/HEAD/preview/light.png" width="360" alt="dsh-client-ui-skin-claude preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-skin-claude&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Claude-style dark skin for the DeepSeek Harness web GUI: charcoal panels and warm clay accent.

```sh
dsh plugin --profile web add github:PAKIKNOWLEDGE/dsh-client-ui-skin-claude
```

**Repo:** [PAKIKNOWLEDGE/dsh-client-ui-skin-claude](https://github.com/PAKIKNOWLEDGE/dsh-client-ui-skin-claude) · **License:** MIT · **Package:** [`@dsh-external/dsh-client-ui-skin-claude`](https://www.npmjs.com/package/@dsh-external/dsh-client-ui-skin-claude) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/PAKIKNOWLEDGE/dsh-client-ui-skin-claude/blob/HEAD/package.json)

### [dsh-client-ui-skin-cottage](https://github.com/crack-time/dsh-client-ui-skin-cottage)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-skin-cottage&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-client-ui-skin-cottage preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-skin-cottage&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Pastoral cottage skin for the DSH web GUI: full-screen wallpaper with frosted-glass panels

```sh
dsh plugin --profile web add github:crack-time/dsh-client-ui-skin-cottage
```

**Repo:** [crack-time/dsh-client-ui-skin-cottage](https://github.com/crack-time/dsh-client-ui-skin-cottage) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/crack-time/dsh-client-ui-skin-cottage/blob/HEAD/package.json)

### [dsh-client-ui-skin-denia](https://github.com/Ewnscat-ya/dsh-client-ui-skin-denia)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-skin-denia&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-client-ui-skin-denia preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-skin-denia&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Denia (Wuthering Waves) themed skin with bubble-and-chain ornaments and void-star palette for the dsh web GUI

```sh
dsh plugin --profile web add github:Ewnscat-ya/dsh-client-ui-skin-denia
```

**Repo:** [Ewnscat-ya/dsh-client-ui-skin-denia](https://github.com/Ewnscat-ya/dsh-client-ui-skin-denia) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Ewnscat-ya/dsh-client-ui-skin-denia/blob/HEAD/package.json)

### [dsh-client-ui-skin-jarvis](https://github.com/YiCheng-Zzz/dsh-client-ui-skin-jarvis)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-skin-jarvis&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-client-ui-skin-jarvis preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-skin-jarvis&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Jarvis blue-tech HUD skin for the DSH web GUI: deep blue-black palette, ice-cyan neon tokens, glass panels, HUD corners, and a breathing J.A.R.V.I.S. watermark that answers FOR YOU, SIR, ALWAYS while the agent thinks.

```sh
dsh plugin --profile web add github:YiCheng-Zzz/dsh-client-ui-skin-jarvis
```

**Repo:** [YiCheng-Zzz/dsh-client-ui-skin-jarvis](https://github.com/YiCheng-Zzz/dsh-client-ui-skin-jarvis) · **dsh:** 0.1.0-rc.7 · **Proof:** [package.json#dsh.bundle](https://github.com/YiCheng-Zzz/dsh-client-ui-skin-jarvis/blob/HEAD/package.json)

### [dsh-client-ui-skin-priestess](https://github.com/Sealessland/dsh-client-ui-skin-priestess)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-skin-priestess&scheme=dark"><img src="https://raw.githubusercontent.com/Sealessland/dsh-client-ui-skin-priestess/main/assets/priestess-dark.webp" width="360" alt="dsh-client-ui-skin-priestess preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-skin-priestess&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Priestess dual-theme skin for the dsh Web UI: night portrait with graphite glass, light portrait with cool-white glass.

```sh
dsh plugin --profile web add github:Sealessland/dsh-client-ui-skin-priestess
```

**Repo:** [Sealessland/dsh-client-ui-skin-priestess](https://github.com/Sealessland/dsh-client-ui-skin-priestess) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Sealessland/dsh-client-ui-skin-priestess/blob/HEAD/package.json)

### [dsh-client-ui-skin-qingxiao](https://github.com/taoser258/dsh-client-ui-skin-qingxiao)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-skin-qingxiao&scheme=dark"><img src="https://raw.githubusercontent.com/taoser258/dsh-client-ui-skin-qingxiao/HEAD/preview/screen-dark.png" width="360" alt="dsh-client-ui-skin-qingxiao preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-skin-qingxiao&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Qingxiao (Wuthering Waves) themed skin with ice-blue/jade/moon-white palette, sword-light motes and user-swappable background for the dsh web GUI

```sh
dsh plugin --profile web add github:taoser258/dsh-client-ui-skin-qingxiao
```

**Repo:** [taoser258/dsh-client-ui-skin-qingxiao](https://github.com/taoser258/dsh-client-ui-skin-qingxiao) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/taoser258/dsh-client-ui-skin-qingxiao/blob/HEAD/package.json)

### [dsh-client-ui-skin-real-madrid](https://github.com/alexfengrui/dsh-client-ui-skin-real-madrid)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-skin-real-madrid&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-client-ui-skin-real-madrid preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-skin-real-madrid&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Real Madrid dual-mode skin for DeepSeek Harness: Bernabéu night stadium for dark, white-kit pinstripes with crest and 1902 layers for light. Unofficial fan work.

```sh
dsh plugin --profile web add github:alexfengrui/dsh-client-ui-skin-real-madrid
```

**Repo:** [alexfengrui/dsh-client-ui-skin-real-madrid](https://github.com/alexfengrui/dsh-client-ui-skin-real-madrid) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/alexfengrui/dsh-client-ui-skin-real-madrid/blob/HEAD/package.json)

### [dsh-client-ui-skin-verdandi](https://github.com/Sddft97/dsh-client-ui-skin-verdandi)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-skin-verdandi&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-client-ui-skin-verdandi preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-skin-verdandi&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Verdandi White Vow skin for the DSH Web GUI: deep crimson navigation, bridal-white workspace, soft-gold knight details, and scoped plugin-safe surfaces.

```sh
dsh plugin --profile web add github:Sddft97/dsh-client-ui-skin-verdandi
```

**Repo:** [Sddft97/dsh-client-ui-skin-verdandi](https://github.com/Sddft97/dsh-client-ui-skin-verdandi) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/Sddft97/dsh-client-ui-skin-verdandi/blob/HEAD/package.json)

### [dsh-client-ui-skins](https://github.com/caoyiwei850/dsh-client-ui-skins)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-skins&scheme=dark"><img src="https://raw.githubusercontent.com/caoyiwei850/dsh-client-ui-skins/HEAD/assets/screenshots/mint-forest-dsh.jpg" width="360" alt="dsh-client-ui-skins preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-skins&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH skin plugin: built-in skins + custom image skins, pure client plugin (no source patch)

```sh
dsh plugin --profile web add github:caoyiwei850/dsh-client-ui-skins
```

**Repo:** [caoyiwei850/dsh-client-ui-skins](https://github.com/caoyiwei850/dsh-client-ui-skins) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/caoyiwei850/dsh-client-ui-skins/blob/HEAD/package.json)

### [dsh-client-ui-theme-manager](https://github.com/thooy/dsh-client-ui-theme-manager)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-theme-manager&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-client-ui-theme-manager preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-theme-manager&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Dream Skin theme manager for DeepSeek Harness Web: visual theme picker in Settings with custom theme create/import/export, background images, pause/resume. Never see the official palette flash on refresh.

```sh
dsh plugin --profile web add github:thooy/dsh-client-ui-theme-manager
```

**Repo:** [thooy/dsh-client-ui-theme-manager](https://github.com/thooy/dsh-client-ui-theme-manager) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/thooy/dsh-client-ui-theme-manager/blob/HEAD/package.json)

### [dsh-client-ui-wallpaper](https://github.com/Joeytisaly/dsh-client-ui-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-wallpaper&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-client-ui-wallpaper preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-wallpaper&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Wallpaper plugin for DeepSeek Harness web: a photo behind the web surface, set from General settings (Host /wallpaper route + browser apply over the --dsw-* token stylesheets)

```sh
dsh plugin --profile web add github:Joeytisaly/dsh-client-ui-wallpaper
```

**Repo:** [Joeytisaly/dsh-client-ui-wallpaper](https://github.com/Joeytisaly/dsh-client-ui-wallpaper) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/Joeytisaly/dsh-client-ui-wallpaper/blob/HEAD/package.json)

### [dsh-codex-theme](https://github.com/Lxd-Ashe/dsh-codex-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-codex-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-codex-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-codex-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Codex themes (light + dark) for the DSH web GUI as a configurable appearance plugin: maps codex-theme-v1 knobs onto the DSH --dsw-* token system and adds a Codex appearance settings section (colors, contrast, diff/skill semantic colors, UI/code fonts) persisted to settings.yaml.

```sh
dsh plugin --profile web add github:Lxd-Ashe/dsh-codex-theme
```

**Repo:** [Lxd-Ashe/dsh-codex-theme](https://github.com/Lxd-Ashe/dsh-codex-theme) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/Lxd-Ashe/dsh-codex-theme/blob/HEAD/package.json)

### [dsh-colorschemes](https://github.com/hatanokokosa/dsh-colorschemes)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-colorschemes&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-colorschemes preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-colorschemes&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

A DSH web GUI color-scheme plugin: a data-driven registry of themes (Catppuccin, Everforest, Nord) selectable from a settings row, with theme-adapted tooltips and hover cards. Add new schemes by dropping one file into ./schemes and rebuilding.

```sh
dsh plugin --profile web add github:hatanokokosa/dsh-colorschemes
```

**Repo:** [hatanokokosa/dsh-colorschemes](https://github.com/hatanokokosa/dsh-colorschemes) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/hatanokokosa/dsh-colorschemes/blob/HEAD/package.json)

### [dsh-command-palette](https://github.com/hajimixiaojie/dsh-command-palette)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-command-palette&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-command-palette preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-command-palette&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

A searchable command palette for DeepSeek Harness and its plugins

```sh
dsh plugin --profile web add github:hajimixiaojie/dsh-command-palette
```

**Repo:** [hajimixiaojie/dsh-command-palette](https://github.com/hajimixiaojie/dsh-command-palette) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/hajimixiaojie/dsh-command-palette/blob/HEAD/package.json)

### [dsh-cool-theme](https://github.com/CoolTea001/dsh-cool-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-cool-theme&scheme=dark"><img src="https://raw.githubusercontent.com/CoolTea001/dsh-cool-theme/HEAD/assets/previews/1.png" width="360" alt="dsh-cool-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-cool-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

A plugin for changing themes for DSH, with a number of popular default themes built in.

```sh
dsh plugin --profile web add github:CoolTea001/dsh-cool-theme
```

**Repo:** [CoolTea001/dsh-cool-theme](https://github.com/CoolTea001/dsh-cool-theme) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/CoolTea001/dsh-cool-theme/blob/HEAD/package.json)

### [dsh-cornell-classic-theme](https://github.com/leamonac0823/dsh-cornell-classic-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-cornell-classic-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-cornell-classic-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-cornell-classic-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

A Cornell notebook workspace and task brief for DeepSeek Harness Web UI.

```sh
dsh plugin --profile web add github:leamonac0823/dsh-cornell-classic-theme
```

**Repo:** [leamonac0823/dsh-cornell-classic-theme](https://github.com/leamonac0823/dsh-cornell-classic-theme) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/leamonac0823/dsh-cornell-classic-theme/blob/HEAD/package.json)

### [dsh-crimson-theme](https://github.com/aze0695/dsh-crimson-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-crimson-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-crimson-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-crimson-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

CRIMSON 暗夜流火 · 黑红金属质感主题皮肤 for DeepSeek Harness (DSH). Dark obsidian + crimson + gold metallic UI, with a floating control panel (on/off, glow, metal).

```sh
dsh plugin --profile web add github:aze0695/dsh-crimson-theme
```

**Repo:** [aze0695/dsh-crimson-theme](https://github.com/aze0695/dsh-crimson-theme) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.client](https://github.com/aze0695/dsh-crimson-theme/blob/HEAD/package.json)

### [dsh-custom-background](https://github.com/StarryHui/dsh-custom-background)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-custom-background&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-custom-background preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-custom-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

自定义 DSH WebUI 背景：图库随机、自由拉伸裁切框、不透明度、高斯模糊、面板透明、多图交叉淡化轮播。

```sh
dsh plugin --profile web add github:StarryHui/dsh-custom-background
```

**Repo:** [StarryHui/dsh-custom-background](https://github.com/StarryHui/dsh-custom-background) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/StarryHui/dsh-custom-background/blob/HEAD/package.json)

### [dsh-custom-skin](https://github.com/SLin-code/dsh-custom-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-custom-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-custom-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-custom-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Custom wallpapers and translucent skins for DeepSeek Harness Web

```sh
dsh plugin --profile web add github:SLin-code/dsh-custom-skin
```

**Repo:** [SLin-code/dsh-custom-skin](https://github.com/SLin-code/dsh-custom-skin) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/SLin-code/dsh-custom-skin/blob/HEAD/package.json)

### [dsh-custom-skin-v587d](https://github.com/v587d/dsh-custom-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-custom-skin-v587d&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-custom-skin-v587d preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-custom-skin-v587d&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH Web GUI plugin: custom UI/code fonts plus theme selection (palettes ported from dsh-refined: Border / Nord / Twilight / GitHub / Atom One), live settings page, localStorage persistence.

```sh
dsh plugin --profile web add github:v587d/dsh-custom-skin
```

**Repo:** [v587d/dsh-custom-skin](https://github.com/v587d/dsh-custom-skin) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/v587d/dsh-custom-skin/blob/HEAD/package.json)

### [dsh-custom-theme-import](https://github.com/Juryorca/dsh-custom-theme-import)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-custom-theme-import&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-custom-theme-import preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-custom-theme-import&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH WebUI theme manager: import, preview, use, refresh, and manage mainstream DSH skin packages, persisted on the host at ~/.dsh/dsh-custom-theme-import/library.json.

```sh
dsh plugin --profile web add github:Juryorca/dsh-custom-theme-import
```

**Repo:** [Juryorca/dsh-custom-theme-import](https://github.com/Juryorca/dsh-custom-theme-import) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Juryorca/dsh-custom-theme-import/blob/HEAD/package.json)

### [dsh-custom-wallpaper](https://github.com/FunctionHookTJU/dsh-custom-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-custom-wallpaper&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-custom-wallpaper preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-custom-wallpaper&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH 外观定制：主题色 / 背景色 / 壁纸（渐变·URL·本地图片）/ 面板不透明度 / 磨砂玻璃，设置自动持久化。

```sh
dsh plugin --profile web add github:FunctionHookTJU/dsh-custom-wallpaper
```

**Repo:** [FunctionHookTJU/dsh-custom-wallpaper](https://github.com/FunctionHookTJU/dsh-custom-wallpaper) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/FunctionHookTJU/dsh-custom-wallpaper/blob/HEAD/package.json)

### [dsh-custom-wallpaper-baihejia](https://github.com/baihejiangnan/dsh-custom-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-custom-wallpaper-baihejia&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-custom-wallpaper-baihejia preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-custom-wallpaper-baihejia&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Custom wallpaper engine for the dsh web GUI: upload an image (client-side WebP/JPEG compression), frosted-glass blur, pane opacity, and auto font-color linkage.

```sh
dsh plugin --profile web add github:baihejiangnan/dsh-custom-wallpaper
```

**Repo:** [baihejiangnan/dsh-custom-wallpaper](https://github.com/baihejiangnan/dsh-custom-wallpaper) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/baihejiangnan/dsh-custom-wallpaper/blob/HEAD/package.json)

### [dsh-cyberpunk-theme-zjwzjw10](https://github.com/zjwzjw1018-git/dsh-cyberpunk-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-cyberpunk-theme-zjwzjw10&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-cyberpunk-theme-zjwzjw10 preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-cyberpunk-theme-zjwzjw10&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Cyberpunk theme for the DeepSeek Harness Web UI

```sh
dsh plugin --profile web add github:zjwzjw1018-git/dsh-cyberpunk-theme
```

**Repo:** [zjwzjw1018-git/dsh-cyberpunk-theme](https://github.com/zjwzjw1018-git/dsh-cyberpunk-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/zjwzjw1018-git/dsh-cyberpunk-theme/blob/HEAD/package.json)

### [dsh-decor-palette](https://github.com/uckkk/dsh-decor-palette)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-decor-palette&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-decor-palette preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-decor-palette&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

decorpalette：软装配色：按参数精确计算，返回明确建议。

```sh
dsh plugin --profile web add github:uckkk/dsh-decor-palette
```

**Repo:** [uckkk/dsh-decor-palette](https://github.com/uckkk/dsh-decor-palette) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/uckkk/dsh-decor-palette/blob/HEAD/package.json)

### [dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-deep-whale&scheme=dark"><img src="https://raw.githubusercontent.com/Small-tailqwq/dsh-deep-whale/main/maid-atelier/preview/dark.webp" width="360" alt="dsh-deep-whale preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-deep-whale&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH Web whale-girl skin series (maid-atelier). Theme/skin-shaped third-party listing.

```sh
dsh plugin --profile web add github:Small-tailqwq/dsh-deep-whale
```

**Repo:** [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) · **License:** CC-BY-NC-SA-4.0 · **dsh:** 0.1.0-rc.6 · **Proof:** [maid-atelier/package.json#dsh.bundle](https://github.com/Small-tailqwq/dsh-deep-whale/blob/HEAD/maid-atelier/package.json)

### [dsh-deepseek-ui-skin](https://github.com/aslixzhou-byte/dsh-deepseek-ui-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-deepseek-ui-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-deepseek-ui-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-deepseek-ui-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Minimal navy DeepSeek Web UI skin with light/dark and a left-to-right looping particle stream along the bottom.

```sh
dsh plugin --profile web add github:aslixzhou-byte/dsh-deepseek-ui-skin
```

**Repo:** [aslixzhou-byte/dsh-deepseek-ui-skin](https://github.com/aslixzhou-byte/dsh-deepseek-ui-skin) · **License:** CC-BY-NC-SA-4.0 · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/aslixzhou-byte/dsh-deepseek-ui-skin/blob/HEAD/package.json)

### [dsh-dream-skin](https://github.com/RevolutionLA/dsh-dream-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-dream-skin&scheme=dark"><img src="https://raw.githubusercontent.com/RevolutionLA/dsh-dream-skin/HEAD/docs/screenshots/preview.png" width="360" alt="dsh-dream-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-dream-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness 换肤插件 (Dream Skin for DeepSeek Harness): curated --dsw-alias-* theme presets, a custom translucent wallpaper with opacity/blur controls, theme-pack import/export + share links

```sh
dsh plugin --profile web add github:RevolutionLA/dsh-dream-skin
```

**Repo:** [RevolutionLA/dsh-dream-skin](https://github.com/RevolutionLA/dsh-dream-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/RevolutionLA/dsh-dream-skin/blob/HEAD/package.json)

### [dsh-dumpling-skin](https://github.com/uckkk/dsh-dumpling-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-dumpling-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-dumpling-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-dumpling-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

dumplingskin：饺子皮用量：按参数返回面食制作方案。

```sh
dsh plugin --profile web add github:uckkk/dsh-dumpling-skin
```

**Repo:** [uckkk/dsh-dumpling-skin](https://github.com/uckkk/dsh-dumpling-skin) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/uckkk/dsh-dumpling-skin/blob/HEAD/package.json)

### [dsh-elon-skin](https://github.com/kingOfSoySauce/dsh-elon-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-elon-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-elon-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-elon-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

滑动变祖 · 马圣皮肤：an opt-in adaptive reasoning slider skin for DeepSeek Harness

```sh
dsh plugin --profile web add github:kingOfSoySauce/dsh-elon-skin
```

**Repo:** [kingOfSoySauce/dsh-elon-skin](https://github.com/kingOfSoySauce/dsh-elon-skin) · **dsh:** 0.1.0-rc.7 · **Proof:** [package.json#dsh.bundle](https://github.com/kingOfSoySauce/dsh-elon-skin/blob/HEAD/package.json)

### [dsh-eva-theme-plugin](https://github.com/oceanxuikun/dsh-eva-theme-plugin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-eva-theme-plugin&scheme=dark"><img src="https://raw.githubusercontent.com/oceanxuikun/dsh-eva-theme-plugin/master/assets/screenshot01.png" width="360" alt="dsh-eva-theme-plugin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-eva-theme-plugin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Evangelion-inspired Web UI themes: Unit-00, Unit-01, and Unit-02, with immersive backgrounds and mecha-style chrome.

```sh
dsh plugin --profile web add github:oceanxuikun/dsh-eva-theme-plugin
```

**Repo:** [oceanxuikun/dsh-eva-theme-plugin](https://github.com/oceanxuikun/dsh-eva-theme-plugin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/oceanxuikun/dsh-eva-theme-plugin/blob/HEAD/package.json)

### [dsh-free-skins](https://github.com/0928OYX/dsh-free-skins/tree/HEAD/skin-gallery)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-free-skins&scheme=dark"><img src="https://raw.githubusercontent.com/0928OYX/dsh-free-skins/HEAD/preview/session-shorekeeper-poster.jpg" width="360" alt="dsh-free-skins preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-free-skins&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness 界面皮肤插件：原创免费皮肤 + 皮肤画廊 + 自定义对话区背景

```sh
dsh plugin --profile web add github:0928OYX/dsh-free-skins
```

**Repo:** [0928OYX/dsh-free-skins](https://github.com/0928OYX/dsh-free-skins/tree/HEAD/skin-gallery) · **dsh:** 0.1.0-rc.6 · **Proof:** [skin-gallery/package.json#dsh.bundle](https://github.com/0928OYX/dsh-free-skins/blob/HEAD/skin-gallery/package.json)

### [dsh-FreeBackground](https://github.com/SkyM31/dsh-FreeBackground)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-FreeBackground&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-FreeBackground preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-FreeBackground&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

dsh-FreeBackground — a WebUI background customizer for DeepSeek Harness: upload images or a folder, single-image or slideshow mode (sequential/random), image/UI opacity and blur controls, with light & dark theme support.

```sh
dsh plugin --profile web add github:SkyM31/dsh-FreeBackground
```

**Repo:** [SkyM31/dsh-FreeBackground](https://github.com/SkyM31/dsh-FreeBackground) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.client](https://github.com/SkyM31/dsh-FreeBackground/blob/HEAD/package.json)

### [dsh-gemini-m3e-theme](https://github.com/makajo/dsh-gemini-m3e-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-gemini-m3e-theme&scheme=dark"><img src="https://raw.githubusercontent.com/makajo/dsh-gemini-m3e-theme/HEAD/docs/screenshots/dark.png" width="360" alt="dsh-gemini-m3e-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-gemini-m3e-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Gemini-style Material 3 Expressive theme for DeepSeek Harness Web (persistent bundle).

```sh
dsh plugin --profile web add github:makajo/dsh-gemini-m3e-theme
```

**Repo:** [makajo/dsh-gemini-m3e-theme](https://github.com/makajo/dsh-gemini-m3e-theme) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/makajo/dsh-gemini-m3e-theme/blob/HEAD/package.json)

### [dsh-gif-background](https://github.com/alcohol-101/dsh-gif-background)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-gif-background&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-gif-background preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-gif-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Custom background (images / GIFs / animated wallpapers) plugin for the DeepSeek Harness (DSH) Web GUI: an enable switch plus a local asset library, with separate display mechanisms for the official theme and skin-center skins.

```sh
dsh plugin --profile web add github:alcohol-101/dsh-gif-background
```

**Repo:** [alcohol-101/dsh-gif-background](https://github.com/alcohol-101/dsh-gif-background) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/alcohol-101/dsh-gif-background/blob/HEAD/package.json)

### [dsh-glassic-mist-theme](https://github.com/VlanTech/dsh-glassic-mist-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-glassic-mist-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-glassic-mist-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-glassic-mist-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Glassic Mist 雾蓝主题：极浅雾蓝界面 + 云端动效背景 + 全弹窗毛玻璃质感；设置持久化开关 + /misttheme 命令

```sh
dsh plugin --profile web add github:VlanTech/dsh-glassic-mist-theme
```

**Repo:** [VlanTech/dsh-glassic-mist-theme](https://github.com/VlanTech/dsh-glassic-mist-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/VlanTech/dsh-glassic-mist-theme/blob/HEAD/package.json)

### [dsh-glassmorphism-theme](https://github.com/EdwardHamu/dsh-glassmorphism-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-glassmorphism-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-glassmorphism-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-glassmorphism-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Glassmorphism theme layer for the DeepSeek Harness web UI.

```sh
dsh plugin --profile web add github:EdwardHamu/dsh-glassmorphism-theme
```

**Repo:** [EdwardHamu/dsh-glassmorphism-theme](https://github.com/EdwardHamu/dsh-glassmorphism-theme) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/EdwardHamu/dsh-glassmorphism-theme/blob/HEAD/package.json)

### [dsh-hacker-terminal-theme](https://github.com/chengwill45-bot/dsh-hacker-terminal-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-hacker-terminal-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-hacker-terminal-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-hacker-terminal-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

A standalone hacker-terminal theme plugin for DeepSeek Harness Web UI.

```sh
dsh plugin --profile web add github:chengwill45-bot/dsh-hacker-terminal-theme
```

**Repo:** [chengwill45-bot/dsh-hacker-terminal-theme](https://github.com/chengwill45-bot/dsh-hacker-terminal-theme) · **dsh:** 0.1.0-rc.7 · **Proof:** [package.json#dsh.bundle](https://github.com/chengwill45-bot/dsh-hacker-terminal-theme/blob/HEAD/package.json)

### [dsh-home-ui](https://github.com/lehhair/dsh-home-ui)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-home-ui&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-home-ui preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-home-ui&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Home-feed visual refinement: sidebar palette unified with the conversation and a soft gradient hairline.

```sh
dsh plugin --profile web add github:lehhair/dsh-home-ui
```

**Repo:** [lehhair/dsh-home-ui](https://github.com/lehhair/dsh-home-ui) · **License:** BSD-3-Clause · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/lehhair/dsh-home-ui/blob/HEAD/package.json)

### [dsh-homepage-skin](https://github.com/changan0617/dsh-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-homepage-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-homepage-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-homepage-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Homepage-style chat background for DeepSeek Harness: deep-blue gradient, dot grid, and a digitile whale.

```sh
dsh plugin --profile web add github:changan0617/dsh-skin
```

**Repo:** [changan0617/dsh-skin](https://github.com/changan0617/dsh-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [harness-bg.css#--dsw-tokens](https://github.com/changan0617/dsh-skin/blob/HEAD/harness-bg.css)

### [dsh-hubble-theme](https://github.com/Socrates666/dsh-hubble-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-hubble-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-hubble-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-hubble-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Deep-space skin for the DeepSeek Harness (dsh) web client: live daily Hubble imagery from NASA public APIs, procedural starfield, glass panels, hot-reloadable visual tuning — all through official Cordis extension points.

```sh
dsh plugin --profile web add github:Socrates666/dsh-hubble-theme
```

**Repo:** [Socrates666/dsh-hubble-theme](https://github.com/Socrates666/dsh-hubble-theme) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.client](https://github.com/Socrates666/dsh-hubble-theme/blob/HEAD/package.json)

### [dsh-hubu-theme](https://github.com/Amazing-XiaoLi/dsh-hubu-theme/tree/HEAD/hubu-floatball)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-hubu-theme&scheme=dark"><img src="https://raw.githubusercontent.com/Amazing-XiaoLi/dsh-hubu-theme/HEAD/assets/screenshot-dark.png" width="360" alt="dsh-hubu-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-hubu-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH 湖北大学主题插件：护眼淡绿背景主题（浅色/深色自适应 + 校训动画跟随）+ 校标悬浮球（DeepSeek 余额查询）

```sh
dsh plugin --profile web add github:Amazing-XiaoLi/dsh-hubu-theme
```

**Repo:** [Amazing-XiaoLi/dsh-hubu-theme](https://github.com/Amazing-XiaoLi/dsh-hubu-theme/tree/HEAD/hubu-floatball) · **dsh:** 0.1.0-rc.8 · **Proof:** [hubu-floatball/package.json#dsh.client](https://github.com/Amazing-XiaoLi/dsh-hubu-theme/blob/HEAD/hubu-floatball/package.json)

### [dsh-icon-theme](https://github.com/yzke/dsh-icon-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-icon-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-icon-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-icon-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Auto-detected, user-customizable icons for DeepSeek Harness settings and sidebar surfaces.

```sh
dsh plugin --profile web add github:yzke/dsh-icon-theme
```

**Repo:** [yzke/dsh-icon-theme](https://github.com/yzke/dsh-icon-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/yzke/dsh-icon-theme/blob/HEAD/package.json)

### [dsh-inkscreen-theme](https://github.com/Jimmyzwang-cloud/dsh-inkscreen-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-inkscreen-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-inkscreen-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-inkscreen-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH web plugin: an ink-and-paper Apple-glass theme with editorial typography, conversation status tabs, a Conversation/Trace switch, and a handwritten jimmy brand.

```sh
dsh plugin --profile web add github:Jimmyzwang-cloud/dsh-inkscreen-theme
```

**Repo:** [Jimmyzwang-cloud/dsh-inkscreen-theme](https://github.com/Jimmyzwang-cloud/dsh-inkscreen-theme) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/Jimmyzwang-cloud/dsh-inkscreen-theme/blob/HEAD/package.json)

### [dsh-kimino-theme](https://github.com/niiang/dsh-kimino-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-kimino-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-kimino-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-kimino-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Kimi no Na wa (Your Name) theme for DeepSeek Harness Web GUI — dynamic Cordis plugin source (host + client halves) plus an installable dsh bundle, with wallpaper/logo assets

```sh
dsh plugin --profile web add github:niiang/dsh-kimino-theme
```

**Repo:** [niiang/dsh-kimino-theme](https://github.com/niiang/dsh-kimino-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/niiang/dsh-kimino-theme/blob/HEAD/package.json)

### [dsh-krill-theme](https://github.com/i1j/dsh-krill-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-krill-theme&scheme=dark"><img src="https://raw.githubusercontent.com/i1j/dsh-krill-theme/HEAD/assets/plankton-1.0.gif" width="360" alt="dsh-krill-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-krill-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Deep Sea (深海世界) + Shallow Sea (浅海世界) 双模式主题插件 —— 一个插件覆盖 DSH 深/亮两套外观：深海深色（亮度编码信息层级）+ 浅海亮色（清澈度编码），含浮游生物动画背景、深潜工作态增强、水母参数入口。

```sh
dsh plugin --profile web add github:i1j/dsh-krill-theme
```

**Repo:** [i1j/dsh-krill-theme](https://github.com/i1j/dsh-krill-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/i1j/dsh-krill-theme/blob/HEAD/package.json)

### [dsh-Landscape-painting-themed-interface](https://github.com/Dahuangb/dsh-Landscape-painting-themed-interface/tree/HEAD/dsh-shanshui-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-Landscape-painting-themed-interface&scheme=dark"><img src="https://raw.githubusercontent.com/Dahuangb/dsh-Landscape-painting-themed-interface/HEAD/screenshots/dark-theme.png" width="360" alt="dsh-Landscape-painting-themed-interface preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-Landscape-painting-themed-interface&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

A dsh landscape painting themed background interface with a built-in theme time-following function, allowing you to set the theme to change according to the local sunrise and sunset times.

```sh
dsh plugin --profile web add github:Dahuangb/dsh-Landscape-painting-themed-interface
```

**Repo:** [Dahuangb/dsh-Landscape-painting-themed-interface](https://github.com/Dahuangb/dsh-Landscape-painting-themed-interface/tree/HEAD/dsh-shanshui-skin) · **dsh:** 0.1.0-rc.8 · **Proof:** [dsh-shanshui-skin/package.json#dsh.bundle](https://github.com/Dahuangb/dsh-Landscape-painting-themed-interface/blob/HEAD/dsh-shanshui-skin/package.json)

### [dsh-live-wallpaper](https://github.com/hinayoung23/dsh-live-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-live-wallpaper&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-live-wallpaper preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-live-wallpaper&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

A dependency-free live wallpaper and theme center for the DeepSeek Harness Web UI.

```sh
dsh plugin --profile web add github:hinayoung23/dsh-live-wallpaper
```

**Repo:** [hinayoung23/dsh-live-wallpaper](https://github.com/hinayoung23/dsh-live-wallpaper) · **dsh:** 0.1.0-rc.7 · **Proof:** [package.json#dsh.bundle](https://github.com/hinayoung23/dsh-live-wallpaper/blob/HEAD/package.json)

### [dsh-local-background](https://github.com/luoyu-xingu/dsh-background)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-local-background&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-local-background preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-local-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Local-path wallpaper plugin: host-served background image with a theme-matched readability wash and a live Settings General preview.

```sh
dsh plugin --profile web add github:luoyu-xingu/dsh-background
```

**Repo:** [luoyu-xingu/dsh-background](https://github.com/luoyu-xingu/dsh-background) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/luoyu-xingu/dsh-background/blob/HEAD/package.json)

### [dsh-macos-skin](https://github.com/hero-goblins/dsh-macos-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-macos-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-macos-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-macos-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

macOS desktop skin for the DeepSeek Harness web GUI + real-time plugin install/runtime error log panel (host route serves ~/.dsh/logs)

```sh
dsh plugin --profile web add github:hero-goblins/dsh-macos-skin
```

**Repo:** [hero-goblins/dsh-macos-skin](https://github.com/hero-goblins/dsh-macos-skin) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/hero-goblins/dsh-macos-skin/blob/HEAD/package.json)

### [dsh-mario-pixel-skin](https://github.com/EachSheep/dsh-mario-pixel-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-mario-pixel-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-mario-pixel-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-mario-pixel-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

An unofficial Mario-inspired pixel-adventure skin for the DeepSeek Harness Web UI.

```sh
dsh plugin --profile web add github:EachSheep/dsh-mario-pixel-skin
```

**Repo:** [EachSheep/dsh-mario-pixel-skin](https://github.com/EachSheep/dsh-mario-pixel-skin) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/EachSheep/dsh-mario-pixel-skin/blob/HEAD/package.json)

### [dsh-matrix-skin](https://github.com/emeryxu1-blip/dsh-matrix-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-matrix-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-matrix-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-matrix-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Black-first Matrix hacker skin for DeepSeek Harness (DSH) Web with session-powered code rain and readable provider reasoning.

```sh
dsh plugin --profile web add github:emeryxu1-blip/dsh-matrix-skin
```

**Repo:** [emeryxu1-blip/dsh-matrix-skin](https://github.com/emeryxu1-blip/dsh-matrix-skin) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/emeryxu1-blip/dsh-matrix-skin/blob/HEAD/package.json)

### [dsh-matrix-skin-nicecx](https://github.com/nicecx/dsh-matrix-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-matrix-skin-nicecx&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-matrix-skin-nicecx preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-matrix-skin-nicecx&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Matrix-style night-friendly dark skin for the dsh web GUI: near-black green background, ink-green monospace text, low-opacity digital rain (forces dark, no system-theme follow)

```sh
dsh plugin --profile web add github:nicecx/dsh-matrix-skin
```

**Repo:** [nicecx/dsh-matrix-skin](https://github.com/nicecx/dsh-matrix-skin) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/nicecx/dsh-matrix-skin/blob/HEAD/package.json)

### [dsh-matrix-theme](https://github.com/wuzhong962-alt/dsh-matrix-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-matrix-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-matrix-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-matrix-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Matrix / cyberpunk skin for the DeepSeek Harness (DSH) web GUI — a client plugin that overrides the design tokens with a green-on-black palette plus Matrix rain, CRT scanlines, a galaxy starfield, a

```sh
dsh plugin --profile web add github:wuzhong962-alt/dsh-matrix-theme
```

**Repo:** [wuzhong962-alt/dsh-matrix-theme](https://github.com/wuzhong962-alt/dsh-matrix-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/wuzhong962-alt/dsh-matrix-theme/blob/HEAD/package.json)

### [dsh-mcskin](https://github.com/DongDong1997/dsh-mcskin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-mcskin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-mcskin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-mcskin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Minecraft-themed skin for the DeepSeek Harness Web GUI. 6 themes (3 styles x 2 modes), with MC pixel-art icons, sidebar biome gradient, page-level MC decorations, and chest/sword/pickaxe control replacements.

```sh
dsh plugin --profile web add github:DongDong1997/dsh-mcskin
```

**Repo:** [DongDong1997/dsh-mcskin](https://github.com/DongDong1997/dsh-mcskin) · **dsh:** 0.1.0-rc.7 · **Proof:** [package.json#dsh.bundle](https://github.com/DongDong1997/dsh-mcskin/blob/HEAD/package.json)

### [dsh-minecraft-theme](https://github.com/SuperLS-X/dsh-minecraft-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-minecraft-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-minecraft-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-minecraft-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Minecraft 主题插件（DeepSeek Harness）：方块纹理背景铺满页面、像素字体、MC 风格按钮与点击音效、纹理导入与管理、音乐播放器（16 首 Minecraft 原声 + 本地音乐文件夹）。

```sh
dsh plugin --profile web add github:SuperLS-X/dsh-minecraft-theme
```

**Repo:** [SuperLS-X/dsh-minecraft-theme](https://github.com/SuperLS-X/dsh-minecraft-theme) · **dsh:** 0.1.0-rc.7 · **Proof:** [package.json#dsh.bundle](https://github.com/SuperLS-X/dsh-minecraft-theme/blob/HEAD/package.json)

### [dsh-minecraft-theme-edmok](https://github.com/EDMOK/dsh-minecraft-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-minecraft-theme-edmok&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-minecraft-theme-edmok preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-minecraft-theme-edmok&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Hot-pluggable Minecraft Launcher pixel skin for the DeepSeek Harness Web GUI

```sh
dsh plugin --profile web add github:EDMOK/dsh-minecraft-theme
```

**Repo:** [EDMOK/dsh-minecraft-theme](https://github.com/EDMOK/dsh-minecraft-theme) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/EDMOK/dsh-minecraft-theme/blob/HEAD/package.json)

### [dsh-model-palette](https://github.com/Jensen-Yao/dsh-model-palette)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-model-palette&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-model-palette preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-model-palette&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Global model command palette and provider/model configuration panel for DeepSeek Harness, with online capacity presets and optional OpenRouter media tools.

```sh
dsh plugin --profile web add github:Jensen-Yao/dsh-model-palette
```

**Repo:** [Jensen-Yao/dsh-model-palette](https://github.com/Jensen-Yao/dsh-model-palette) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/Jensen-Yao/dsh-model-palette/blob/HEAD/package.json)

### [dsh-model-palette-quanqqq](https://github.com/QuanQQQ/dsh-model-palette)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-model-palette-quanqqq&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-model-palette-quanqqq preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-model-palette-quanqqq&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Dense searchable model palette for DeepSeek Harness Web

```sh
dsh plugin --profile web add github:QuanQQQ/dsh-model-palette
```

**Repo:** [QuanQQQ/dsh-model-palette](https://github.com/QuanQQQ/dsh-model-palette) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/QuanQQQ/dsh-model-palette/blob/HEAD/package.json)

### [dsh-mpkg-wallpaper](https://github.com/XHR666/dsh-mpkg-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-mpkg-wallpaper&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-mpkg-wallpaper preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-mpkg-wallpaper&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH Web 壁纸引擎 Wallpaper Engine mpkg 背景插件：浏览器内直接解析 .mpkg（preview.gif 动态背景/内嵌 mp4 视频/多时段切换），整屏统一虚化/对话框/弹层/遮罩独立虚化、镜头缩放平移、时钟、冲突检测。

```sh
dsh plugin --profile web add github:XHR666/dsh-mpkg-wallpaper
```

**Repo:** [XHR666/dsh-mpkg-wallpaper](https://github.com/XHR666/dsh-mpkg-wallpaper) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/XHR666/dsh-mpkg-wallpaper/blob/HEAD/package.json)

### [dsh-naiwa-theme](https://github.com/DevourerM/dsh-naiwa-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-naiwa-theme&scheme=dark"><img src="https://raw.githubusercontent.com/DevourerM/dsh-naiwa-theme/HEAD/assets/naiwa-laugh-mark.png" width="360" alt="dsh-naiwa-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-naiwa-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Milk-frog Web theme: peek overlay, wordmark treatment, and send/complete sounds.

```sh
dsh plugin --profile web add github:DevourerM/dsh-naiwa-theme
```

**Repo:** [DevourerM/dsh-naiwa-theme](https://github.com/DevourerM/dsh-naiwa-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/DevourerM/dsh-naiwa-theme/blob/HEAD/package.json)

### [dsh-neo-skin](https://github.com/0nt-one/dsh-neo-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-neo-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-neo-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-neo-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Neo-brutalism skin for DeepSeek Harness Web UI — stacks hard-border / high-contrast --dsw-alias-* token overrides (DS-native blue + black-white + green + orange) on top of the built-in light/dark palettes.

```sh
dsh plugin --profile web add github:0nt-one/dsh-neo-skin
```

**Repo:** [0nt-one/dsh-neo-skin](https://github.com/0nt-one/dsh-neo-skin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/0nt-one/dsh-neo-skin/blob/HEAD/package.json)

### [dsh-nothing-skin](https://github.com/Cinnamobot/dsh-nothing-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-nothing-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-nothing-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-nothing-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Nothing Phone style skin for DeepSeek Harness Web — dot-matrix background, Space Grotesk/Mono typography, monochrome hierarchy, zero radius, signal red accent. Each feature is toggleable from Settings → Nothing Skin.

```sh
dsh plugin --profile web add github:Cinnamobot/dsh-nothing-skin
```

**Repo:** [Cinnamobot/dsh-nothing-skin](https://github.com/Cinnamobot/dsh-nothing-skin) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/Cinnamobot/dsh-nothing-skin/blob/HEAD/package.json)

### [dsh-official-homepage-theme](https://github.com/JohnnyTing/dsh-official-homepage-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-official-homepage-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-official-homepage-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-official-homepage-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness官方首页主题插件，包含流体鼠标效果、弹性网格与动态小鱼。

```sh
dsh plugin --profile web add github:JohnnyTing/dsh-official-homepage-theme
```

**Repo:** [JohnnyTing/dsh-official-homepage-theme](https://github.com/JohnnyTing/dsh-official-homepage-theme) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/JohnnyTing/dsh-official-homepage-theme/blob/HEAD/package.json)

### [dsh-oh-my-theme](https://github.com/zhxqc/dsh-oh-my-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-oh-my-theme&scheme=dark"><img src="https://raw.githubusercontent.com/zhxqc/dsh-oh-my-theme/HEAD/docs/assets/md-preview.png" width="360" alt="dsh-oh-my-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-oh-my-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Theme + file workspace plugin for DeepSeek Harness (dsh) web GUI: curated --dsw-alias-* skin palettes with live hover preview, @file mentions in the composer, a lazy-loading project file tree, and

```sh
dsh plugin --profile web add github:zhxqc/dsh-oh-my-theme
```

**Repo:** [zhxqc/dsh-oh-my-theme](https://github.com/zhxqc/dsh-oh-my-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/zhxqc/dsh-oh-my-theme/blob/HEAD/package.json)

### [dsh-opencode-palette](https://github.com/FeatherHunter/dsh-opencode-palette)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-opencode-palette&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-opencode-palette preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-opencode-palette&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH Web 多主题引擎：完整支持 opencode TUI 全部 34 个主题（33 内置 + system）。数据驱动三层管线：主题 JSON → 颜色解析 → DSH 适配注入。

```sh
dsh plugin --profile web add github:FeatherHunter/dsh-opencode-palette
```

**Repo:** [FeatherHunter/dsh-opencode-palette](https://github.com/FeatherHunter/dsh-opencode-palette) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/FeatherHunter/dsh-opencode-palette/blob/HEAD/package.json)

### [dsh-palenight-theme](https://github.com/youyli03/dsh-palenight-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-palenight-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-palenight-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-palenight-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Persistent DeepSeek Palenight Theme for dsh — a dsh client bundle (survives restarts, unlike the dynamic-plugin form).

```sh
dsh plugin --profile web add github:youyli03/dsh-palenight-theme
```

**Repo:** [youyli03/dsh-palenight-theme](https://github.com/youyli03/dsh-palenight-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/youyli03/dsh-palenight-theme/blob/HEAD/package.json)

### [dsh-pixel-skin](https://github.com/ADAning/dsh-pixel-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pixel-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-pixel-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pixel-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

8-bit pixel skin for the DeepSeek Harness web GUI: Fusion Pixel type, chunky CRT palette, hard-edged controls and scanlines.

```sh
dsh plugin --profile web add github:ADAning/dsh-pixel-skin
```

**Repo:** [ADAning/dsh-pixel-skin](https://github.com/ADAning/dsh-pixel-skin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/ADAning/dsh-pixel-skin/blob/HEAD/package.json)

### [dsh-pixel-ui](https://github.com/zhang66633/dsh-pixel-ui)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pixel-ui&scheme=dark"><img src="https://raw.githubusercontent.com/zhang66633/dsh-pixel-ui/HEAD/assets/screenshot-paper-chat.png" width="360" alt="dsh-pixel-ui preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pixel-ui&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Pixel skin for DeepSeek Harness with four palettes, pixel fonts, and CRT scanlines.

```sh
dsh plugin --profile web add github:zhang66633/dsh-pixel-ui
```

**Repo:** [zhang66633/dsh-pixel-ui](https://github.com/zhang66633/dsh-pixel-ui) · **License:** MIT · **Package:** [`dsh-pixel-ui`](https://www.npmjs.com/package/dsh-pixel-ui) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/zhang66633/dsh-pixel-ui/blob/HEAD/package.json)

### [dsh-plugin-background](https://github.com/gameswu/dsh-plugin-background)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-background&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-plugin-background preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Per-area Web GUI backgrounds for conversation, trajectory, sidebar, and settings with image or video groups and local files.

```sh
dsh plugin --profile web add github:gameswu/dsh-plugin-background
```

**Repo:** [gameswu/dsh-plugin-background](https://github.com/gameswu/dsh-plugin-background) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/gameswu/dsh-plugin-background/blob/HEAD/package.json)

### [dsh-plugin-background-haozhu11](https://github.com/haozhu11/dsh-plugin-background)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-background-haozhu11&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-plugin-background-haozhu11 preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-background-haozhu11&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Background image plugin for the DeepSeek Harness web UI (dsh web): pick a local image as the whole-UI background, adjust a theme-aware matte, or clear it anytime.

```sh
dsh plugin --profile web add github:haozhu11/dsh-plugin-background
```

**Repo:** [haozhu11/dsh-plugin-background](https://github.com/haozhu11/dsh-plugin-background) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/haozhu11/dsh-plugin-background/blob/HEAD/package.json)

### [dsh-plugin-background-image](https://github.com/Voyage-He/dsh-plugin-background-image)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-background-image&scheme=dark"><img src="https://raw.githubusercontent.com/Voyage-He/dsh-plugin-background-image/HEAD/demo/screenshot-2.png" width="360" alt="dsh-plugin-background-image preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-background-image&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness 界面背景图片插件：网络/本地图片与预设渐变背景，支持开关、透明度调节、沉浸式全屏或仅对话区域显示。

```sh
dsh plugin --profile web add github:Voyage-He/dsh-plugin-background-image
```

**Repo:** [Voyage-He/dsh-plugin-background-image](https://github.com/Voyage-He/dsh-plugin-background-image) · **License:** MIT · **Package:** [`dsh-plugin-background-image`](https://www.npmjs.com/package/dsh-plugin-background-image) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Voyage-He/dsh-plugin-background-image/blob/HEAD/package.json)

### [dsh-plugin-background-tasks](https://github.com/yaopushen/dsh-plugin-background-tasks)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-background-tasks&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-plugin-background-tasks preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-background-tasks&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Seam-aligned background command execution for DeepSeek Harness — run_command via ctx.shell under the session sandbox policy, auto-promotion into ctx.jobs

```sh
dsh plugin --profile web add github:yaopushen/dsh-plugin-background-tasks
```

**Repo:** [yaopushen/dsh-plugin-background-tasks](https://github.com/yaopushen/dsh-plugin-background-tasks) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/yaopushen/dsh-plugin-background-tasks/blob/HEAD/package.json)

### [dsh-plugin-gemini-theme](https://github.com/dingyi580/dsh-plugin-gemini-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-gemini-theme&scheme=dark"><img src="https://raw.githubusercontent.com/dingyi580/dsh-plugin-gemini-theme/HEAD/assets/hero-dark.png" width="360" alt="dsh-plugin-gemini-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-gemini-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

A Gemini-styled skin for the DeepSeek Harness web client: one stylesheet layered over the --dsw-* tokens, no DOM of its own

```sh
dsh plugin --profile web add github:dingyi580/dsh-plugin-gemini-theme
```

**Repo:** [dingyi580/dsh-plugin-gemini-theme](https://github.com/dingyi580/dsh-plugin-gemini-theme) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/dingyi580/dsh-plugin-gemini-theme/blob/HEAD/package.json)

### [dsh-plugin-image-wallpaper](https://github.com/CaoNing3212/dsh-plugin-image-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-image-wallpaper&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-plugin-image-wallpaper preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-image-wallpaper&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Upload an image as the DeepSeek Harness background wallpaper with adjustable dark scrim.

```sh
dsh plugin --profile web add github:CaoNing3212/dsh-plugin-image-wallpaper
```

**Repo:** [CaoNing3212/dsh-plugin-image-wallpaper](https://github.com/CaoNing3212/dsh-plugin-image-wallpaper) · **License:** MIT · **Package:** [`dsh-plugin-image-wallpaper`](https://www.npmjs.com/package/dsh-plugin-image-wallpaper) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/CaoNing3212/dsh-plugin-image-wallpaper/blob/HEAD/package.json)

### [dsh-plugin-wallpaper](https://github.com/shukookie/dsh-plugin-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-wallpaper&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-plugin-wallpaper preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-wallpaper&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Wallpaper switcher for DeepSeek Harness — sidebar picker with local image upload, dim slider, and a one-click next-wallpaper button. · DSH 壁纸切换：页面上直接添加本地图片壁纸、遮罩浓度滑块（0–100%）、一键切换下一张。

```sh
dsh plugin --profile web add github:shukookie/dsh-plugin-wallpaper
```

**Repo:** [shukookie/dsh-plugin-wallpaper](https://github.com/shukookie/dsh-plugin-wallpaper) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/shukookie/dsh-plugin-wallpaper/blob/HEAD/package.json)

### [dsh-plugin-webui-bg](https://github.com/z827439974/dsh-background-plugin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-webui-bg&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-plugin-webui-bg preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-webui-bg&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Pick a local image as the dsh web UI background with a theme-matched translucent mask; persistence is browser-local.

```sh
dsh plugin --profile web add github:z827439974/dsh-background-plugin
```

**Repo:** [z827439974/dsh-background-plugin](https://github.com/z827439974/dsh-background-plugin) · **License:** MIT · **Package:** [`dsh-plugin-webui-bg`](https://www.npmjs.com/package/dsh-plugin-webui-bg) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/z827439974/dsh-background-plugin/blob/HEAD/package.json)

### [dsh-pnc-theme](https://github.com/Morinissleeping/dsh-pnc-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pnc-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-pnc-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pnc-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

PNC 云图风格主题插件（自包含可移植版）：背景视频/等高线/康威/配额条/LLM 活跃度评分

```sh
dsh plugin --profile web add github:Morinissleeping/dsh-pnc-theme
```

**Repo:** [Morinissleeping/dsh-pnc-theme](https://github.com/Morinissleeping/dsh-pnc-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Morinissleeping/dsh-pnc-theme/blob/HEAD/package.json)

### [dsh-problem-skin](https://github.com/uckkk/dsh-problem-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-problem-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-problem-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-problem-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

problemskin：问题肌护理：按参数返回面部护肤方案。

```sh
dsh plugin --profile web add github:uckkk/dsh-problem-skin
```

**Repo:** [uckkk/dsh-problem-skin](https://github.com/uckkk/dsh-problem-skin) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/uckkk/dsh-problem-skin/blob/HEAD/package.json)

### [dsh-qq2006](https://github.com/LaplaceYoung/dsh-qq2006)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-qq2006&scheme=dark"><img src="https://raw.githubusercontent.com/LaplaceYoung/dsh-qq2006/HEAD/assets/screenshots/qq2006-window-view.webp" width="360" alt="dsh-qq2006 preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-qq2006&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

QQ2006 skin plugin: registers a qq2006 theme, mirrors body[data-ds-skin], ships a global skin sheet and assets.

```sh
dsh plugin --profile web add github:LaplaceYoung/dsh-qq2006
```

**Repo:** [LaplaceYoung/dsh-qq2006](https://github.com/LaplaceYoung/dsh-qq2006) · **License:** BSD-3-Clause · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/LaplaceYoung/dsh-qq2006/blob/HEAD/package.json)

### [dsh-qq2007-skin](https://github.com/LeemanCheung/dsh-qq2007-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-qq2007-skin&scheme=dark"><img src="https://raw.githubusercontent.com/LeemanCheung/dsh-qq2007-skin/HEAD/docs/screenshot.png" width="360" alt="dsh-qq2007-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-qq2007-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

QQ 2007-inspired retro messenger skin for the DeepSeek Harness Web GUI, with native theme tokens, blue window chrome, compact three-pane styling, an original pixel buddy, and a reversible settings

```sh
dsh plugin --profile web add github:LeemanCheung/dsh-qq2007-skin
```

**Repo:** [LeemanCheung/dsh-qq2007-skin](https://github.com/LeemanCheung/dsh-qq2007-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/LeemanCheung/dsh-qq2007-skin/blob/HEAD/package.json)

### [dsh-rhine-theme](https://github.com/mjn96/dsh-rhine-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-rhine-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-rhine-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-rhine-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

RHINE LAB 分析工作台主题：暖冷灰实验室表面、无穷符号品牌、信号橙主操作，为 DeepSeek Harness Web 客户端提供浅色莱茵生命主题。

```sh
dsh plugin --profile web add github:mjn96/dsh-rhine-theme
```

**Repo:** [mjn96/dsh-rhine-theme](https://github.com/mjn96/dsh-rhine-theme) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/mjn96/dsh-rhine-theme/blob/HEAD/package.json)

### [dsh-rhodes-angelina](https://github.com/FlowerWater1019/Angelina-dsh-plugin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-rhodes-angelina&scheme=dark"><img src="https://raw.githubusercontent.com/FlowerWater1019/Angelina-dsh-plugin/HEAD/assets/angelina-mellow-wish.png" width="360" alt="dsh-rhodes-angelina preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-rhodes-angelina&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Angelina companion and Rhodes-inspired theme for the DeepSeek Harness Web UI.

```sh
dsh plugin --profile web add github:FlowerWater1019/Angelina-dsh-plugin
```

**Repo:** [FlowerWater1019/Angelina-dsh-plugin](https://github.com/FlowerWater1019/Angelina-dsh-plugin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/FlowerWater1019/Angelina-dsh-plugin/blob/HEAD/package.json)

### [dsh-scenery-background](https://github.com/soslowsnail/dsh-scenery-background)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-scenery-background&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-scenery-background preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-scenery-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

山海背景每日轮换插件：唯美的山·海大美景色背景（每日一图 / 循环轮播）、毛玻璃半透明界面、悬浮控制按钮。

```sh
dsh plugin --profile web add github:soslowsnail/dsh-scenery-background
```

**Repo:** [soslowsnail/dsh-scenery-background](https://github.com/soslowsnail/dsh-scenery-background) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/soslowsnail/dsh-scenery-background/blob/HEAD/package.json)

### [dsh-session-theme](https://github.com/Xliecc/dsh-session-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-session-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-session-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-session-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH web plugin: show every session's theme in the left sidebar on open — warms the session projection cache at startup so session.list carries titles for cold sessions.

```sh
dsh plugin --profile web add github:Xliecc/dsh-session-theme
```

**Repo:** [Xliecc/dsh-session-theme](https://github.com/Xliecc/dsh-session-theme) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/Xliecc/dsh-session-theme/blob/HEAD/package.json)

### [dsh-shunshun-wallpaper](https://github.com/Ddamage/dsh-shunshun-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-shunshun-wallpaper&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-shunshun-wallpaper preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-shunshun-wallpaper&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

顺顺壁纸：GIF 壁纸（主题融合、突出度控制）+ B站音乐播放器（B站链接下载添加、删除、音量、进度条、单曲/列表/随机循环、侧栏迷你播放器、设置与播放列表持久化）

```sh
dsh plugin --profile web add github:Ddamage/dsh-shunshun-wallpaper
```

**Repo:** [Ddamage/dsh-shunshun-wallpaper](https://github.com/Ddamage/dsh-shunshun-wallpaper) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/Ddamage/dsh-shunshun-wallpaper/blob/HEAD/package.json)

### [dsh-simple-background](https://github.com/RunCross/dsh-simple-background)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-simple-background&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-simple-background preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-simple-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Dynamically change DSH Web CSS from Settings: raw CSS, background image, and a user JS file.

```sh
dsh plugin --profile web add github:RunCross/dsh-simple-background
```

**Repo:** [RunCross/dsh-simple-background](https://github.com/RunCross/dsh-simple-background) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/RunCross/dsh-simple-background/blob/HEAD/package.json)

### [dsh-skin-alphacoders](https://github.com/sakka6868/dsh-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-alphacoders&scheme=dark"><img src="https://raw.githubusercontent.com/sakka6868/dsh-skin/HEAD/docs/preview-main.png" width="360" alt="dsh-skin-alphacoders preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-alphacoders&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Alphacoders wallpapers as the DeepSeek Harness Web GUI background.

```sh
dsh plugin --profile web add github:sakka6868/dsh-skin
```

**Repo:** [sakka6868/dsh-skin](https://github.com/sakka6868/dsh-skin) · **License:** MIT · **Package:** [`dsh-skin-alphacoders`](https://www.npmjs.com/package/dsh-skin-alphacoders) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/sakka6868/dsh-skin/blob/HEAD/package.json)

### [dsh-skin-amis](https://github.com/wanzhiwei5/dsh-skin-amis)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-amis&scheme=dark"><img src="https://raw.githubusercontent.com/wanzhiwei5/dsh-skin-amis/main/preview/light.png" width="360" alt="dsh-skin-amis preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-amis&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Wuthering Waves Amis-inspired Web GUI skin: cherry-pink and white gradients, neon machine accents, and frosted-glass panels.

```sh
dsh plugin --profile web add github:wanzhiwei5/dsh-skin-amis
```

**Repo:** [wanzhiwei5/dsh-skin-amis](https://github.com/wanzhiwei5/dsh-skin-amis) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/wanzhiwei5/dsh-skin-amis/blob/HEAD/package.json)

### [dsh-skin-appearance](https://github.com/Vim0x3c/dsh-skin-appearance)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-appearance&scheme=dark"><img src="https://raw.githubusercontent.com/Vim0x3c/dsh-skin-appearance/HEAD/assets/screenshots/deepsea-whale.jpg" width="360" alt="dsh-skin-appearance preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-appearance&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Eight built-in DeepSeek Harness appearance presets plus custom wallpaper with opacity and blur.

```sh
dsh plugin --profile web add github:Vim0x3c/dsh-skin-appearance
```

**Repo:** [Vim0x3c/dsh-skin-appearance](https://github.com/Vim0x3c/dsh-skin-appearance) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/Vim0x3c/dsh-skin-appearance/blob/HEAD/package.json)

### [dsh-skin-argentina](https://github.com/henrychenhao/dsh-skin-argentina)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-argentina&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-argentina preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-argentina&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

阿根廷·梅西 (Argentina · Messi) web skin for the DeepSeek Harness GUI: celeste/navy/gold alias-token theme, photo & gold backgrounds, roaming #10 badge.

```sh
dsh plugin --profile web add github:henrychenhao/dsh-skin-argentina
```

**Repo:** [henrychenhao/dsh-skin-argentina](https://github.com/henrychenhao/dsh-skin-argentina) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/henrychenhao/dsh-skin-argentina/blob/HEAD/package.json)

### [dsh-skin-background](https://github.com/megatronyy/dsh-skin-background)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-background&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-background preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Skin plugin for the DeepSeek Harness web client: selectable image backgrounds (shipped + user wallpapers), translucent glass surfaces, live dim and blur controls. · dsh 皮肤插件：图片背景、毛玻璃面板、亮度与模糊调节。

```sh
dsh plugin --profile web add github:megatronyy/dsh-skin-background
```

**Repo:** [megatronyy/dsh-skin-background](https://github.com/megatronyy/dsh-skin-background) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/megatronyy/dsh-skin-background/blob/HEAD/package.json)

### [dsh-skin-blue-whale](https://github.com/zenghuizhu69-hub/dsh-skin-blue-whale)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-blue-whale&scheme=dark"><img src="https://raw.githubusercontent.com/zenghuizhu69-hub/dsh-skin-blue-whale/HEAD/screenshots/work.png" width="360" alt="dsh-skin-blue-whale preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-blue-whale&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

蓝鲸跃海皮肤 —— 为 dsh Web UI 打造的极简深海蓝鲸主题：官网同款蓝白流动海水渐变背景、跃出海面的官方蓝鲸 logo、主页/会话双场景自适应，以及整套蓝鲸配色的界面令牌。

```sh
dsh plugin --profile web add github:zenghuizhu69-hub/dsh-skin-blue-whale
```

**Repo:** [zenghuizhu69-hub/dsh-skin-blue-whale](https://github.com/zenghuizhu69-hub/dsh-skin-blue-whale) · **License:** MIT · **Package:** [`dsh-skin-blue-whale`](https://www.npmjs.com/package/dsh-skin-blue-whale) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/zenghuizhu69-hub/dsh-skin-blue-whale/blob/HEAD/package.json)

### [dsh-skin-center](https://github.com/bruce-hmz/dsh-skin-center)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-center&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-center preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-center&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness Skin as an out-of-tree plugin bundle: 21 skins, one-image custom themes, runtime chrome stamping — no host source patches

```sh
dsh plugin --profile web add github:bruce-hmz/dsh-skin-center
```

**Repo:** [bruce-hmz/dsh-skin-center](https://github.com/bruce-hmz/dsh-skin-center) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/bruce-hmz/dsh-skin-center/blob/HEAD/package.json)

### [dsh-skin-chatlab](https://github.com/Liyuk/dsh-skin-chatlab/tree/HEAD/packages/core)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-chatlab&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-chatlab preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-chatlab&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

ChatLab 可扩展聊天皮肤 monorepo：core 基座 + 各皮肤包 + 聚合包。

```sh
dsh plugin --profile web add github:Liyuk/dsh-skin-chatlab
```

**Repo:** [Liyuk/dsh-skin-chatlab](https://github.com/Liyuk/dsh-skin-chatlab/tree/HEAD/packages/core) · **dsh:** 0.1.0-rc.6 · **Proof:** [packages/core/package.json#dsh.bundle](https://github.com/Liyuk/dsh-skin-chatlab/blob/HEAD/packages/core/package.json)

### [dsh-skin-collection](https://github.com/NonchalantLudens/dsh-skin-collection)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-collection&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-collection preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-collection&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Multi-style skin collection for the DeepSeek Harness (dsh) web GUI. Each skin registers a theme (Settings → Appearance / sidebar picker) plus scoped decoration CSS keyed to its active state.

```sh
dsh plugin --profile web add github:NonchalantLudens/dsh-skin-collection
```

**Repo:** [NonchalantLudens/dsh-skin-collection](https://github.com/NonchalantLudens/dsh-skin-collection) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/NonchalantLudens/dsh-skin-collection/blob/HEAD/package.json)

### [dsh-skin-digital-arcade](https://github.com/RizenHNT/dsh-skin-digital-arcade)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-digital-arcade&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-digital-arcade preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-digital-arcade&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Rizen Signal Console — digital arcade HUD skin for DeepSeek Harness Web GUI: neon cyan/violet/magenta palette, pixel fonts, animated HUD sprites, custom crosshair cursor

```sh
dsh plugin --profile web add github:RizenHNT/dsh-skin-digital-arcade
```

**Repo:** [RizenHNT/dsh-skin-digital-arcade](https://github.com/RizenHNT/dsh-skin-digital-arcade) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/RizenHNT/dsh-skin-digital-arcade/blob/HEAD/package.json)

### [dsh-skin-engine](https://github.com/xylt369/dsh-skin-engine)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-engine&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-engine preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-engine&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

换肤中心 skin-engine：上传背景图作为 DSH 应用皮肤，叠加多种光标交互动态背景（skin / theme / background plugin for DeepSeek Harness web UI）

```sh
dsh plugin --profile web add github:xylt369/dsh-skin-engine
```

**Repo:** [xylt369/dsh-skin-engine](https://github.com/xylt369/dsh-skin-engine) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/xylt369/dsh-skin-engine/blob/HEAD/package.json)

### [dsh-skin-galactic-opera](https://github.com/xmnathan/dsh-skin-galactic-opera)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-galactic-opera&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-galactic-opera preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-galactic-opera&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Unofficial cinematic space-opera dark skin bundle for the DSH Web GUI.

```sh
dsh plugin --profile web add github:xmnathan/dsh-skin-galactic-opera
```

**Repo:** [xmnathan/dsh-skin-galactic-opera](https://github.com/xmnathan/dsh-skin-galactic-opera) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/xmnathan/dsh-skin-galactic-opera/blob/HEAD/package.json)

### [dsh-skin-glass](https://github.com/noexcs/dsh-skin-glass)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-glass&scheme=dark"><img src="https://raw.githubusercontent.com/noexcs/dsh-skin-glass/HEAD/screenshots/screenshot_1.jpg" width="360" alt="dsh-skin-glass preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-glass&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Frosted-glass skin for the DeepSeek Harness web UI: pick any image as background, theme colors extracted from it, glassmorphism surfaces.

```sh
dsh plugin --profile web add github:noexcs/dsh-skin-glass
```

**Repo:** [noexcs/dsh-skin-glass](https://github.com/noexcs/dsh-skin-glass) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/noexcs/dsh-skin-glass/blob/HEAD/package.json)

### [dsh-skin-huyanshe](https://github.com/huyansheng3/dsh-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-huyanshe&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-huyanshe preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-huyanshe&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Theme / skin plugin for DeepSeek Harness (DSH) web client. Override CSS variables, add background images, and switch themes — loaded as a native Cordis plugin, no browser extension or CDP required.

```sh
dsh plugin --profile web add github:huyansheng3/dsh-skin
```

**Repo:** [huyansheng3/dsh-skin](https://github.com/huyansheng3/dsh-skin) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/huyansheng3/dsh-skin/blob/HEAD/package.json)

### [dsh-skin-kamisato](https://github.com/Danieltoraji/dsh-skin-kamisato)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-kamisato&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-kamisato preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-kamisato&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

「神里印象」DeepSeek Harness 皮肤插件：神里纹章/绫华取色的青蓝·蓝紫金主题 + 汉仪文黑标题字体（浅色/深色双配色）。

```sh
dsh plugin --profile web add github:Danieltoraji/dsh-skin-kamisato
```

**Repo:** [Danieltoraji/dsh-skin-kamisato](https://github.com/Danieltoraji/dsh-skin-kamisato) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Danieltoraji/dsh-skin-kamisato/blob/HEAD/package.json)

### [dsh-skin-kit](https://github.com/mysn777/dsh-skin-kit)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-kit&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-kit preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-kit&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness (DSH) skin toolbox: ten built-in wallpaper skins, a live tuning panel inside DSH settings, and a DIY generator that turns your own image or video into a skin.

```sh
dsh plugin --profile web add github:mysn777/dsh-skin-kit
```

**Repo:** [mysn777/dsh-skin-kit](https://github.com/mysn777/dsh-skin-kit) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/mysn777/dsh-skin-kit/blob/HEAD/package.json)

### [dsh-skin-koi-pond](https://github.com/Kogisune/dsh-skin-koi-pond)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-koi-pond&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-koi-pond preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-koi-pond&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

锦鲤池塘 — Koi Pond theme for the DeepSeek Harness web GUI (Canvas koi pond animation, component-split CSS)

```sh
dsh plugin --profile web add github:Kogisune/dsh-skin-koi-pond
```

**Repo:** [Kogisune/dsh-skin-koi-pond](https://github.com/Kogisune/dsh-skin-koi-pond) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/Kogisune/dsh-skin-koi-pond/blob/HEAD/package.json)

### [dsh-skin-leg](https://github.com/lovetpy/dsh-skin-leg)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-leg&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-leg preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-leg&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Hot-pluggable custom skin for the dsh web GUI: 2K full-viewport backdrop with a live theme scrim and translucent panes.

```sh
dsh plugin --profile web add github:lovetpy/dsh-skin-leg
```

**Repo:** [lovetpy/dsh-skin-leg](https://github.com/lovetpy/dsh-skin-leg) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/lovetpy/dsh-skin-leg/blob/HEAD/package.json)

### [dsh-skin-manager](https://github.com/xiaoyangcheng84-svg/dsh-skin-manager)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-manager&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-manager preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-manager&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Dynamic skin manager for the dsh web GUI: discovers every installed skin (packages with skin.json), lets you toggle the active skin from a dedicated Settings page, mutually exclusive, hot-reloaded without restart

```sh
dsh plugin --profile web add github:xiaoyangcheng84-svg/dsh-skin-manager
```

**Repo:** [xiaoyangcheng84-svg/dsh-skin-manager](https://github.com/xiaoyangcheng84-svg/dsh-skin-manager) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/xiaoyangcheng84-svg/dsh-skin-manager/blob/HEAD/package.json)

### [dsh-skin-manuspurs](https://github.com/ManuSpurs/dsh-skin20260814)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-manuspurs&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-manuspurs preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-manuspurs&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Skin switcher + custom wallpaper for DeepSeek Harness: curated --dsw-alias-* palettes, translucent wallpaper with opacity/blur controls, and durable per-user persistence (like Codex themes)

```sh
dsh plugin --profile web add github:ManuSpurs/dsh-skin20260814
```

**Repo:** [ManuSpurs/dsh-skin20260814](https://github.com/ManuSpurs/dsh-skin20260814) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/ManuSpurs/dsh-skin20260814/blob/HEAD/package.json)

### [dsh-skin-mari](https://github.com/unpain/dsh-skin-mari)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-mari&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-mari preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-mari&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

A Unit-08 optical test-lab interface in magenta, smoked plum, acid green, and warm ivory.

```sh
dsh plugin --profile web add github:unpain/dsh-skin-mari
```

**Repo:** [unpain/dsh-skin-mari](https://github.com/unpain/dsh-skin-mari) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/unpain/dsh-skin-mari/blob/HEAD/package.json)

### [dsh-skin-market](https://github.com/kingOfSoySauce/dsh-skin-market)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-market&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-market preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-market&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Native skin marketplace and lifecycle manager for DeepSeek Harness

```sh
dsh plugin --profile web add github:kingOfSoySauce/dsh-skin-market
```

**Repo:** [kingOfSoySauce/dsh-skin-market](https://github.com/kingOfSoySauce/dsh-skin-market) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/kingOfSoySauce/dsh-skin-market/blob/HEAD/package.json)

### [dsh-skin-market-kemanai](https://github.com/keman-ai/dsh-skin-market)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-market-kemanai&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-market-kemanai preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-market-kemanai&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Skin marketplace inside DSH: search and one-click install community skins from dsh.a2hmarket.ai

```sh
dsh plugin --profile web add github:keman-ai/dsh-skin-market
```

**Repo:** [keman-ai/dsh-skin-market](https://github.com/keman-ai/dsh-skin-market) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/keman-ai/dsh-skin-market/blob/HEAD/package.json)

### [dsh-skin-nebula](https://github.com/lyq3/dsh-skin-nebula)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-nebula&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-nebula preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-nebula&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Nebula skin for DeepSeek Harness Web UI — deep-space neon theme with HD generated backgrounds. · DSH 深空霓虹皮肤，自带高清星云背景。

```sh
dsh plugin --profile web add github:lyq3/dsh-skin-nebula
```

**Repo:** [lyq3/dsh-skin-nebula](https://github.com/lyq3/dsh-skin-nebula) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/lyq3/dsh-skin-nebula/blob/HEAD/package.json)

### [dsh-skin-pack-kemanai](https://github.com/keman-ai/dsh-skin-pack/tree/HEAD/packages/dsh-ai-work-slogan)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-pack-kemanai&scheme=dark"><img src="https://raw.githubusercontent.com/keman-ai/dsh-skin-pack/HEAD/packages/dsh-niulai/preview/dark.webp" width="360" alt="dsh-skin-pack-kemanai preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-pack-kemanai&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

A full set of skins for DeepSeek Harness — one repository, each theme installable on its own

```sh
dsh plugin --profile web add github:keman-ai/dsh-skin-pack
```

**Repo:** [keman-ai/dsh-skin-pack](https://github.com/keman-ai/dsh-skin-pack/tree/HEAD/packages/dsh-ai-work-slogan) · **dsh:** 0.1.1-rc.2 · **Proof:** [packages/dsh-ai-work-slogan/package.json#dsh.bundle](https://github.com/keman-ai/dsh-skin-pack/blob/HEAD/packages/dsh-ai-work-slogan/package.json)

### [dsh-skin-picker](https://github.com/Lzh-12/dsh-skin-picker)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-picker&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-picker preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-picker&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH 换肤插件：10 套预设皮肤 + 自然语言换肤 + 自定义背景图片 + 界面控件联动 + 恢复默认，设置 → 通用 →「皮肤」行内切换，settings.yaml 跨设备同步。

```sh
dsh plugin --profile web add github:Lzh-12/dsh-skin-picker
```

**Repo:** [Lzh-12/dsh-skin-picker](https://github.com/Lzh-12/dsh-skin-picker) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Lzh-12/dsh-skin-picker/blob/HEAD/package.json)

### [dsh-skin-prts](https://github.com/Entity-Him/dsh-skin-prts)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-prts&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-prts preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-prts&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Arknights PRTS terminal skin for dsh Web UI — 深色工业终端 / 航空控制台，直角面板 + 硬阴影 + 青强调色

```sh
dsh plugin --profile web add github:Entity-Him/dsh-skin-prts
```

**Repo:** [Entity-Him/dsh-skin-prts](https://github.com/Entity-Him/dsh-skin-prts) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/Entity-Him/dsh-skin-prts/blob/HEAD/package.json)

### [dsh-skin-prts-qinpanwa](https://github.com/QinpanWan/dsh-skin-prts)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-prts-qinpanwa&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-prts-qinpanwa preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-prts-qinpanwa&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Arknights PRTS terminal skin for dsh Web UI — 深色工业终端 / 航空控制台，直角面板 + 硬阴影 + 青强调色

```sh
dsh plugin --profile web add github:QinpanWan/dsh-skin-prts
```

**Repo:** [QinpanWan/dsh-skin-prts](https://github.com/QinpanWan/dsh-skin-prts) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/QinpanWan/dsh-skin-prts/blob/HEAD/package.json)

### [dsh-skin-schierke](https://github.com/unpain/dsh-skin-schierke)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-schierke&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-schierke preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-schierke&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Schierke living field-folio interface skin for the DSH Web UI

```sh
dsh plugin --profile web add github:unpain/dsh-skin-schierke
```

**Repo:** [unpain/dsh-skin-schierke](https://github.com/unpain/dsh-skin-schierke) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/unpain/dsh-skin-schierke/blob/HEAD/package.json)

### [dsh-skin-studio-dabogebe](https://github.com/daboge-beach/dsh-skin-studio/tree/HEAD/packages/gallery)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-studio-dabogebe&scheme=dark"><img src="https://raw.githubusercontent.com/daboge-beach/dsh-skin-studio/HEAD/packages/skins/yasuo-gale/preview.png" width="360" alt="dsh-skin-studio-dabogebe preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-studio-dabogebe&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness 皮肤工作室 — 内置精选皮肤 + 用户上传皮肤中心

```sh
dsh plugin --profile web add github:daboge-beach/dsh-skin-studio
```

**Repo:** [daboge-beach/dsh-skin-studio](https://github.com/daboge-beach/dsh-skin-studio/tree/HEAD/packages/gallery) · **dsh:** 0.1.0-rc.6 · **Proof:** [packages/gallery/package.json#dsh.bundle](https://github.com/daboge-beach/dsh-skin-studio/blob/HEAD/packages/gallery/package.json)

### [DSH-Skin-Studio-tobewin](https://github.com/ToBeWin/DSH-Skin-Studio)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=DSH-Skin-Studio-tobewin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="DSH-Skin-Studio-tobewin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=DSH-Skin-Studio-tobewin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Vibrant, switchable application skins for DeepSeek Harness

```sh
dsh plugin --profile web add github:ToBeWin/DSH-Skin-Studio
```

**Repo:** [ToBeWin/DSH-Skin-Studio](https://github.com/ToBeWin/DSH-Skin-Studio) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/ToBeWin/DSH-Skin-Studio/blob/HEAD/package.json)

### [dsh-skin-study](https://github.com/linzhuoliSOC/dsh-skin-study)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-study&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-study preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-study&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness 3D 书房。Cozy Study skin for DSH web.

```sh
dsh plugin --profile web add github:linzhuoliSOC/dsh-skin-study
```

**Repo:** [linzhuoliSOC/dsh-skin-study](https://github.com/linzhuoliSOC/dsh-skin-study) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/linzhuoliSOC/dsh-skin-study/blob/HEAD/package.json)

### [dsh-skin-switcher-aminuosi](https://github.com/aminuosi/dsh-skin-switcher)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-switcher-aminuosi&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-switcher-aminuosi preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-switcher-aminuosi&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Settings skin switcher for the dsh web GUI: lists installed skins (bundles shipping skin.json), lets the user pick one, and applies it on the next page refresh through the profile patch layer's live reload

```sh
dsh plugin --profile web add github:aminuosi/dsh-skin-switcher
```

**Repo:** [aminuosi/dsh-skin-switcher](https://github.com/aminuosi/dsh-skin-switcher) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/aminuosi/dsh-skin-switcher/blob/HEAD/package.json)

### [dsh-skin-switcher-tsdfy](https://github.com/tsdfy/dsh-skin-switcher)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-switcher-tsdfy&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-switcher-tsdfy preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-switcher-tsdfy&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Skin switcher for DeepSeek Harness web UI: one-click theme switching with auto-discovery of community skins

```sh
dsh plugin --profile web add github:tsdfy/dsh-skin-switcher
```

**Repo:** [tsdfy/dsh-skin-switcher](https://github.com/tsdfy/dsh-skin-switcher) · **dsh:** 0.1.0-rc.7 · **Proof:** [package.json#dsh.bundle](https://github.com/tsdfy/dsh-skin-switcher/blob/HEAD/package.json)

### [dsh-skin-Tlipoca](https://github.com/znnVSNOOU/dsh-skin-Tlipoca)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-Tlipoca&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-Tlipoca preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-Tlipoca&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

《犹格索托斯的庭院》特莉波卡 (Tlipoca) GAL 视觉小说沉浸式皮肤插件 for DeepSeek Harness

```sh
dsh plugin --profile web add github:znnVSNOOU/dsh-skin-Tlipoca
```

**Repo:** [znnVSNOOU/dsh-skin-Tlipoca](https://github.com/znnVSNOOU/dsh-skin-Tlipoca) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/znnVSNOOU/dsh-skin-Tlipoca/blob/HEAD/package.json)

### [dsh-skin-toggle](https://github.com/tiantyu/dsh-skin-toggle)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-toggle&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-toggle preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-toggle&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Skin manager for the DeepSeek Harness (DSH) web GUI: a floating button — left-click restores the default look, right-click lists every installed skin and switches between them (mutually exclusive). Pure client-side presentation utility.

```sh
dsh plugin --profile web add github:tiantyu/dsh-skin-toggle
```

**Repo:** [tiantyu/dsh-skin-toggle](https://github.com/tiantyu/dsh-skin-toggle) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/tiantyu/dsh-skin-toggle/blob/HEAD/package.json)

### [dsh-skin-type](https://github.com/uckkk/dsh-skin-type)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-type&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skin-type preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-type&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

skintype：肤质判断：按参数返回明确建议。

```sh
dsh plugin --profile web add github:uckkk/dsh-skin-type
```

**Repo:** [uckkk/dsh-skin-type](https://github.com/uckkk/dsh-skin-type) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/uckkk/dsh-skin-type/blob/HEAD/package.json)

### [dsh-skin-wei80620](https://github.com/wei-806206088/dsh-skin/tree/HEAD/packages/dsh-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-wei80620&scheme=dark"><img src="https://raw.githubusercontent.com/wei-806206088/dsh-skin/HEAD/images/preview-static.jpg" width="360" alt="dsh-skin-wei80620 preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-wei80620&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

内置极简主题、主色、文字色、区域文字色、图片 / GIF / 视频换肤、每个背景独立不透明度、可保存的命名预设。所有设置自动持久化，重启后自加载

```sh
dsh plugin --profile web add github:wei-806206088/dsh-skin
```

**Repo:** [wei-806206088/dsh-skin](https://github.com/wei-806206088/dsh-skin/tree/HEAD/packages/dsh-skin) · **dsh:** 0.1.0-rc.6 · **Proof:** [packages/dsh-skin/package.json#dsh.client](https://github.com/wei-806206088/dsh-skin/blob/HEAD/packages/dsh-skin/package.json)

### [dsh-skinctl](https://github.com/lovetpy/dsh-skinctl)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skinctl&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-skinctl preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skinctl&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Lightweight skin manager for the dsh web GUI: scans installed skins at runtime (no hardcoded list) and switches the active one via profile patch + config HMR.

```sh
dsh plugin --profile web add github:lovetpy/dsh-skinctl
```

**Repo:** [lovetpy/dsh-skinctl](https://github.com/lovetpy/dsh-skinctl) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/lovetpy/dsh-skinctl/blob/HEAD/package.json)

### [dsh-skins](https://github.com/abab-team/dsh-skins/tree/HEAD/skins/RemielleDan)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skins&scheme=dark"><img src="https://raw.githubusercontent.com/abab-team/dsh-skins/HEAD/imgs/RemielleDan.png" width="360" alt="dsh-skins preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skins&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Remielle Dan skin for the DeepSeek Harness web interface: a sakura-pink palette pair with the character art rendered as the app background wallpaper, plus a picker row in Settings.

```sh
dsh plugin --profile web add github:abab-team/dsh-skins
```

**Repo:** [abab-team/dsh-skins](https://github.com/abab-team/dsh-skins/tree/HEAD/skins/RemielleDan) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [skins/RemielleDan/package.json#dsh.client](https://github.com/abab-team/dsh-skins/blob/HEAD/skins/RemielleDan/package.json)

### [dsh-sky-skin](https://github.com/Entity-Him/dsh-sky-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-sky-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-sky-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-sky-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

光遇·遇境 (Sky: Children of the Light — Home Arena) 主题皮肤 — 星盘上的光之子、烛光与六门星图

```sh
dsh plugin --profile web add github:Entity-Him/dsh-sky-skin
```

**Repo:** [Entity-Him/dsh-sky-skin](https://github.com/Entity-Him/dsh-sky-skin) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/Entity-Him/dsh-sky-skin/blob/HEAD/package.json)

### [dsh-sky-skin-qinpanwa](https://github.com/QinpanWan/dsh-sky-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-sky-skin-qinpanwa&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-sky-skin-qinpanwa preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-sky-skin-qinpanwa&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

光遇·遇境 (Sky: Children of the Light) 主题皮肤 — 七大地图主题(遇境/晨岛/云野/雨林/霞谷/暮土/禁阁)随心切换,设置页一键热切换

```sh
dsh plugin --profile web add github:QinpanWan/dsh-sky-skin
```

**Repo:** [QinpanWan/dsh-sky-skin](https://github.com/QinpanWan/dsh-sky-skin) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/QinpanWan/dsh-sky-skin/blob/HEAD/package.json)

### [dsh-theme-aurum](https://github.com/fengb3/dsh-theme-aurum)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-aurum&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-aurum preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-aurum&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH 鎏金主题插件:oklch 金粉配色 + 点阵画布 + 浮动卡片侧栏 + 会话栏/会话流/输入坞/工具卡全量接管(未知工具官方图标兜底),图标一律 DSH 官方原版,theme.overrideTokens 常驻 {light,dark} 双色层,零构建 loader 格式

```sh
dsh plugin --profile web add github:fengb3/dsh-theme-aurum
```

**Repo:** [fengb3/dsh-theme-aurum](https://github.com/fengb3/dsh-theme-aurum) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/fengb3/dsh-theme-aurum/blob/HEAD/package.json)

### [dsh-theme-background-center](https://github.com/syOPV/dsh-theme-background-center)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-background-center&scheme=dark"><img src="https://raw.githubusercontent.com/syOPV/dsh-theme-background-center/HEAD/assets/screenshot.jpg" width="360" alt="dsh-theme-background-center preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-background-center&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Theme and background center for DeepSeek Harness: presets, gradient or custom image, frosted glass.

```sh
dsh plugin --profile web add github:syOPV/dsh-theme-background-center
```

**Repo:** [syOPV/dsh-theme-background-center](https://github.com/syOPV/dsh-theme-background-center) · **License:** MIT · **Package:** [`dsh-theme-background-center`](https://www.npmjs.com/package/dsh-theme-background-center) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/syOPV/dsh-theme-background-center/blob/HEAD/package.json)

### [dsh-theme-bgimage](https://github.com/yuyedaidao/dsh-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-bgimage&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-bgimage preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-bgimage&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Web UI background-image plugin: paste a URL or pick a local image under Settings, with sharpness and overlay-opacity controls.

```sh
dsh plugin --profile web add github:yuyedaidao/dsh-theme
```

**Repo:** [yuyedaidao/dsh-theme](https://github.com/yuyedaidao/dsh-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/yuyedaidao/dsh-theme/blob/HEAD/package.json)

### [dsh-theme-blackhole](https://github.com/jiangwangyang/dsh-theme-blackhole)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-blackhole&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-blackhole preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-blackhole&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Black hole theme plugin for the DeepSeek Harness Web UI: WebGL Schwarzschild black hole background with deep-space glass panels, switchable from Settings > General > 主题-黑洞. Install into a web profile: dsh plugin --profile web add <path-to-this-package>

```sh
dsh plugin --profile web add github:jiangwangyang/dsh-theme-blackhole
```

**Repo:** [jiangwangyang/dsh-theme-blackhole](https://github.com/jiangwangyang/dsh-theme-blackhole) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/jiangwangyang/dsh-theme-blackhole/blob/HEAD/package.json)

### [dsh-theme-center](https://github.com/dac114514/dsh-theme-center)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-center&scheme=dark"><img src="https://raw.githubusercontent.com/dac114514/dsh-theme-center/HEAD/docs/screenshots/theme.png" width="360" alt="dsh-theme-center preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-center&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness 主题中心 · Theme Center for dsh web UI：精选主题画廊（浅色/深色分组）、一键切换、自定义壁纸、dsh-theme 导入导出

```sh
dsh plugin --profile web add github:dac114514/dsh-theme-center
```

**Repo:** [dac114514/dsh-theme-center](https://github.com/dac114514/dsh-theme-center) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/dac114514/dsh-theme-center/blob/HEAD/package.json)

### [dsh-theme-colorizer](https://github.com/RealHacker/dsh-theme-colorizer)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-colorizer&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-colorizer preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-colorizer&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH plugin: adds customizable color themes to the DeepSeek Web UI, selectable in the Settings page

```sh
dsh plugin --profile web add github:RealHacker/dsh-theme-colorizer
```

**Repo:** [RealHacker/dsh-theme-colorizer](https://github.com/RealHacker/dsh-theme-colorizer) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/RealHacker/dsh-theme-colorizer/blob/HEAD/package.json)

### [dsh-theme-customizer](https://github.com/lxxz1918/dsh-theme-customizer)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-customizer&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-customizer preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-customizer&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness (DSH) Web 界面自定义主题插件：七区域背景（主界面/侧边栏/输入区/设置界面/浮窗/Cordis，纯色/图片/选区裁剪/透明度）、文字颜色 5 类、框线颜色、标志调色、对话区细节定制、输入区统计条接管、浮动主题面板、预设导入导出（.tczp 含图）、localStorage 持久化。

```sh
dsh plugin --profile web add github:lxxz1918/dsh-theme-customizer
```

**Repo:** [lxxz1918/dsh-theme-customizer](https://github.com/lxxz1918/dsh-theme-customizer) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/lxxz1918/dsh-theme-customizer/blob/HEAD/package.json)

### [dsh-theme-cyberpunk2077](https://github.com/Tommy00748/dsh-theme-cyberpunk2077)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-cyberpunk2077&scheme=dark"><img src="https://raw.githubusercontent.com/Tommy00748/dsh-theme-cyberpunk2077/HEAD/assets/screenshot.png" width="360" alt="dsh-theme-cyberpunk2077 preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-cyberpunk2077&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Cyberpunk 2077 / Night City theme for the DeepSeek Harness Web UI — NC yellow × neon cyan identity, CRT scanlines, Kiroshi hover lock-on, combat-state HUD, synthesized typewriter & message SFX, boot

```sh
dsh plugin --profile web add github:Tommy00748/dsh-theme-cyberpunk2077
```

**Repo:** [Tommy00748/dsh-theme-cyberpunk2077](https://github.com/Tommy00748/dsh-theme-cyberpunk2077) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Tommy00748/dsh-theme-cyberpunk2077/blob/HEAD/package.json)

### [dsh-theme-cyberpunk2077-custom](https://github.com/Gewuji/dsh-theme-cyberpunk2077-custom)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-cyberpunk2077-custom&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-cyberpunk2077-custom preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-cyberpunk2077-custom&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Cyberpunk 2077 / Night City theme for the DeepSeek Harness Web UI — NC yellow × neon cyan identity, CRT scanlines, Kiroshi hover lock-on, combat-state HUD, synthesized typewriter & message SFX, boot glitch, Relic interference, slang chips, and hidden easter eggs (try sending: relic / johnny).

```sh
dsh plugin --profile web add github:Gewuji/dsh-theme-cyberpunk2077-custom
```

**Repo:** [Gewuji/dsh-theme-cyberpunk2077-custom](https://github.com/Gewuji/dsh-theme-cyberpunk2077-custom) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Gewuji/dsh-theme-cyberpunk2077-custom/blob/HEAD/package.json)

### [dsh-theme-dodger-17](https://github.com/caisiyang123/dsh-theme-dodger-17)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-dodger-17&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-dodger-17 preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-dodger-17&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Dodger-blue ballpark theme for the DeepSeek Harness web UI — a day and a night palette in LA Dodger blue with baseball-stitch red accents and a nod to #17, plus a settings switcher that remembers your pick.

```sh
dsh plugin --profile web add github:caisiyang123/dsh-theme-dodger-17
```

**Repo:** [caisiyang123/dsh-theme-dodger-17](https://github.com/caisiyang123/dsh-theme-dodger-17) · **dsh:** 0.1.0-rc.7 · **Proof:** [package.json#dsh.bundle](https://github.com/caisiyang123/dsh-theme-dodger-17/blob/HEAD/package.json)

### [dsh-theme-eink-retro](https://github.com/exoticknight/dsh-theme-eink-retro)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-eink-retro&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-eink-retro preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-eink-retro&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

A paper-and-ink client-side theme for DeepSeek Harness with Balanced and Immersive modes.

```sh
dsh plugin --profile web add github:exoticknight/dsh-theme-eink-retro
```

**Repo:** [exoticknight/dsh-theme-eink-retro](https://github.com/exoticknight/dsh-theme-eink-retro) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/exoticknight/dsh-theme-eink-retro/blob/HEAD/package.json)

### [dsh-theme-endfield](https://github.com/ymh0000123/dsh-theme-endfield)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-endfield&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-endfield preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-endfield&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness web theme: the industrial editorial look of the Arknights: Endfield official site — cream paper, ink text, signal-yellow accents, zero radius.

```sh
dsh plugin --profile web add github:ymh0000123/dsh-theme-endfield
```

**Repo:** [ymh0000123/dsh-theme-endfield](https://github.com/ymh0000123/dsh-theme-endfield) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/ymh0000123/dsh-theme-endfield/blob/HEAD/package.json)

### [dsh-theme-eternaln](https://github.com/EternalNight996/dsh-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-eternaln&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-eternaln preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-eternaln&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness 主题皮肤插件：给 DSH Web GUI 换背景（内置主题 / 静态图片 / 动态视频环绕跟随帧），设置页与侧边栏底部一键切换。

```sh
dsh plugin --profile web add github:EternalNight996/dsh-theme
```

**Repo:** [EternalNight996/dsh-theme](https://github.com/EternalNight996/dsh-theme) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/EternalNight996/dsh-theme/blob/HEAD/package.json)

### [dsh-theme-factory](https://github.com/satan9394/dsh-theme-factory)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-factory&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-factory preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-factory&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

SQL 优化模式：EXPLAIN 分析、索引策略、N+1 解决、查询改写。受 wshobson/agents（38k MIT）启发。

```sh
dsh plugin --profile web add github:satan9394/dsh-theme-factory
```

**Repo:** [satan9394/dsh-theme-factory](https://github.com/satan9394/dsh-theme-factory) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/satan9394/dsh-theme-factory/blob/HEAD/package.json)

### [dsh-theme-firefly](https://github.com/Liu-ZA-81/dsh-theme-firefly)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-firefly&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-firefly preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-firefly&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

崩坏：星穹铁道 · 流萤主题 —— 立绘壁纸背景 + 萤火绿霓虹配色 + 开屏变身动画

```sh
dsh plugin --profile web add github:Liu-ZA-81/dsh-theme-firefly
```

**Repo:** [Liu-ZA-81/dsh-theme-firefly](https://github.com/Liu-ZA-81/dsh-theme-firefly) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Liu-ZA-81/dsh-theme-firefly/blob/HEAD/package.json)

### [dsh-theme-hacker-terminal](https://github.com/XiaoluoFoxington/dsh-theme-hacker-terminal)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-hacker-terminal&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-hacker-terminal preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-hacker-terminal&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Hacker-terminal skin for the dsh web GUI: pure black background, high-contrast green, right-angle geometry, monospace font, full-width conversation, OLED-safe, scrollbars on Gecko/Blink/WebKit.

```sh
dsh plugin --profile web add github:XiaoluoFoxington/dsh-theme-hacker-terminal
```

**Repo:** [XiaoluoFoxington/dsh-theme-hacker-terminal](https://github.com/XiaoluoFoxington/dsh-theme-hacker-terminal) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/XiaoluoFoxington/dsh-theme-hacker-terminal/blob/HEAD/package.json)

### [dsh-theme-huluwa](https://github.com/Jayliu2025-vip/dsh-theme-huluwa)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-huluwa&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-huluwa preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-huluwa&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

葫芦娃（Calabash Brothers）主题 for the DeepSeek Harness Web UI — 七兄弟七彩配色、葫芦宝匣控制台、山中时钟、修炼中状态、蛇精/宝葫芦彩蛋，暖色宣纸底，全部音效 Web Audio 实时合成。

```sh
dsh plugin --profile web add github:Jayliu2025-vip/dsh-theme-huluwa
```

**Repo:** [Jayliu2025-vip/dsh-theme-huluwa](https://github.com/Jayliu2025-vip/dsh-theme-huluwa) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/Jayliu2025-vip/dsh-theme-huluwa/blob/HEAD/package.json)

### [dsh-theme-lab](https://github.com/Ultronen/dsh-theme-lab)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-lab&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-lab preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-lab&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness 液态玻璃：点一下，整个界面通透起来。透明度随心调，背景图自由换——让你的 Agent 住进风景里。Liquid glass for DeepSeek Harness: one toggle to turn the whole shell translucent, with a live opacity slider and a custom full-page

```sh
dsh plugin --profile web add github:Ultronen/dsh-theme-lab
```

**Repo:** [Ultronen/dsh-theme-lab](https://github.com/Ultronen/dsh-theme-lab) · **License:** MIT · **dsh:** 0.1.0-rc.6

*repository returns 404 as of 2026-08-19*

### [dsh-theme-lab-slymaste](https://github.com/Slymaster/dsh-theme-lab)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-lab-slymaste&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-lab-slymaste preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-lab-slymaste&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Unofficial modular theme collection and starter kit for DeepSeek Harness.

```sh
dsh plugin --profile web add github:Slymaster/dsh-theme-lab
```

**Repo:** [Slymaster/dsh-theme-lab](https://github.com/Slymaster/dsh-theme-lab) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/Slymaster/dsh-theme-lab/blob/HEAD/package.json)

### [dsh-theme-machine](https://github.com/yuqisun/dsh-theme-machine)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-machine&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-machine preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-machine&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Person-of-Interest skin for DeepSeek Harness: THE MACHINE surveillance-HUD theme (dark, cyan-on-black). Token override layer + HUD chrome + live telemetry panel for the dsh web UI.

```sh
dsh plugin --profile web add github:yuqisun/dsh-theme-machine
```

**Repo:** [yuqisun/dsh-theme-machine](https://github.com/yuqisun/dsh-theme-machine) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/yuqisun/dsh-theme-machine/blob/HEAD/package.json)

### [dsh-theme-mux9056b](https://github.com/mux9056-bot/dsh-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-mux9056b&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-mux9056b preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-mux9056b&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

30-theme pack for the DeepSeek Harness web UI — a zero-dependency DSH client plugin plus drop-in CSS themes.

```sh
dsh plugin --profile web add github:mux9056-bot/dsh-theme
```

**Repo:** [mux9056-bot/dsh-theme](https://github.com/mux9056-bot/dsh-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/mux9056-bot/dsh-theme/blob/HEAD/package.json)

### [dsh-theme-paper](https://github.com/WuWL-98/dsh-theme-paper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-paper&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-paper preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-paper&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

纸质主题 — a warm paper-texture appearance for DeepSeek Harness, inspired by Claude Code (cream paper, ink text, terracotta accents).

```sh
dsh plugin --profile web add github:WuWL-98/dsh-theme-paper
```

**Repo:** [WuWL-98/dsh-theme-paper](https://github.com/WuWL-98/dsh-theme-paper) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/WuWL-98/dsh-theme-paper/blob/HEAD/package.json)

### [dsh-theme-picker](https://github.com/yhPrime/dsh-theme-picker)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-picker&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-picker preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-picker&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Theme picker settings section: switch app themes and manage installed theme plugins through the dsh-market API.

```sh
dsh plugin --profile web add github:yhPrime/dsh-theme-picker
```

**Repo:** [yhPrime/dsh-theme-picker](https://github.com/yhPrime/dsh-theme-picker) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/yhPrime/dsh-theme-picker/blob/HEAD/package.json)

### [dsh-theme-rheostat](https://github.com/nineandnine-9/dsh-theme-rheostat)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-rheostat&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-rheostat preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-rheostat&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Sliding-rheostat theme: model + reasoning-effort driven accent, glow and gear dock for the dsh web GUI

```sh
dsh plugin --profile web add github:nineandnine-9/dsh-theme-rheostat
```

**Repo:** [nineandnine-9/dsh-theme-rheostat](https://github.com/nineandnine-9/dsh-theme-rheostat) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/nineandnine-9/dsh-theme-rheostat/blob/HEAD/package.json)

### [dsh-theme-stardew](https://github.com/jungeer/dsh-theme-stardew)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-stardew&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-stardew preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-stardew&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

A Stardew Valley themed client plugin for the DeepSeek Harness web surface. Non-commercial fan theme.

```sh
dsh plugin --profile web add github:jungeer/dsh-theme-stardew
```

**Repo:** [jungeer/dsh-theme-stardew](https://github.com/jungeer/dsh-theme-stardew) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/jungeer/dsh-theme-stardew/blob/HEAD/package.json)

### [dsh-theme-switch](https://github.com/kinmat-A/dsh-theme-switch)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-switch&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-switch preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-switch&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH 主题切换：自动检测已安装皮肤，官方风格 UI 一键互斥切换，全部禁用时回退官方皮肤

```sh
dsh plugin --profile web add github:kinmat-A/dsh-theme-switch
```

**Repo:** [kinmat-A/dsh-theme-switch](https://github.com/kinmat-A/dsh-theme-switch) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/kinmat-A/dsh-theme-switch/blob/HEAD/package.json)

### [dsh-theme-switcher-wenjin](https://github.com/Wenjin-111/dsh-theme-switcher)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-switcher-wenjin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-switcher-wenjin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-switcher-wenjin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Theme switcher for the Web UI: glass and retro-paper styles, color presets, light/dark mode, and custom image backgrounds.

```sh
dsh plugin --profile web add github:Wenjin-111/dsh-theme-switcher
```

**Repo:** [Wenjin-111/dsh-theme-switcher](https://github.com/Wenjin-111/dsh-theme-switcher) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Wenjin-111/dsh-theme-switcher/blob/HEAD/package.json)

### [dsh-theme-synthwave](https://github.com/1MLightyears/dsh-theme-synthwave)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-synthwave&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-synthwave preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-synthwave&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH Synthwave theme plugin: neon glow hover/focus, translucent panels over image/video background, configurable blur, fontScale root font-size.

```sh
dsh plugin --profile web add github:1MLightyears/dsh-theme-synthwave
```

**Repo:** [1MLightyears/dsh-theme-synthwave](https://github.com/1MLightyears/dsh-theme-synthwave) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/1MLightyears/dsh-theme-synthwave/blob/HEAD/package.json)

### [dsh-theme-taffy](https://github.com/Misaki14987/dsh-theme-taffy)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-taffy&scheme=dark"><img src="https://raw.githubusercontent.com/Misaki14987/dsh-theme-taffy/main/assets/art-light.jpg" width="360" alt="dsh-theme-taffy preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-taffy&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Taffy-themed skin for the dsh Web UI (我不是雏草姬).

```sh
dsh plugin --profile web add github:Misaki14987/dsh-theme-taffy
```

**Repo:** [Misaki14987/dsh-theme-taffy](https://github.com/Misaki14987/dsh-theme-taffy) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/Misaki14987/dsh-theme-taffy/blob/HEAD/package.json)

### [dsh-theme-whalegirl](https://github.com/ZHOUcourier/dsh-theme-whalegirl)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-whalegirl&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-whalegirl preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-whalegirl&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek-鲸鱼娘 (Whale Girl) theme for the DeepSeek Harness web GUI — ported from the DreamSkin skin package: full --dsw-* token remap on the native theme runtime, ambient whale-girl wallpaper behind a lightly frosted rose/periwinkle UI with user-adjustable glass strength, coffee-accent composer focus and soft pill

```sh
dsh plugin --profile web add github:ZHOUcourier/dsh-theme-whalegirl
```

**Repo:** [ZHOUcourier/dsh-theme-whalegirl](https://github.com/ZHOUcourier/dsh-theme-whalegirl) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/ZHOUcourier/dsh-theme-whalegirl/blob/HEAD/package.json)

### [dsh-theme-yanami-sky](https://github.com/lgYanami/dsh-theme-yanami-sky/tree/HEAD/package)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-yanami-sky&scheme=dark"><img src="https://raw.githubusercontent.com/lgYanami/dsh-theme-yanami-sky/HEAD/assets/rooftop.jpg" width="360" alt="dsh-theme-yanami-sky preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-yanami-sky&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Yanami Sky theme skin for the DeepSeek Harness Web GUI: rooftop backdrop, sky-blue light palette, and a faded Anna corner figure

```sh
dsh plugin --profile web add github:lgYanami/dsh-theme-yanami-sky
```

**Repo:** [lgYanami/dsh-theme-yanami-sky](https://github.com/lgYanami/dsh-theme-yanami-sky/tree/HEAD/package) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package/package.json#dsh.client](https://github.com/lgYanami/dsh-theme-yanami-sky/blob/HEAD/package/package.json)

### [dsh-theme-yangatc](https://github.com/YangAtC/dsh-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-yangatc&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-yangatc preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-yangatc&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH 主题自定义插件：上传背景图（拉伸/适应/居中）+ 各界面层透明度调节，开箱即用（内置默认预设），设置持久化重启保留。Durable profile plugin for DeepSeek Harness.

```sh
dsh plugin --profile web add github:YangAtC/dsh-theme
```

**Repo:** [YangAtC/dsh-theme](https://github.com/YangAtC/dsh-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/YangAtC/dsh-theme/blob/HEAD/package.json)

### [dsh-theme-yourname](https://github.com/elfin1z/dsh-theme-yourname)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-yourname&scheme=dark"><img src="https://raw.githubusercontent.com/elfin1z/dsh-theme-yourname/HEAD/assets/sidebar.png" width="360" alt="dsh-theme-yourname preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-yourname&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Your Name starry-sky Web theme: plum palette, full-page starfield wallpaper, and floating stardust.

```sh
dsh plugin --profile web add github:elfin1z/dsh-theme-yourname
```

**Repo:** [elfin1z/dsh-theme-yourname](https://github.com/elfin1z/dsh-theme-yourname) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/elfin1z/dsh-theme-yourname/blob/HEAD/package.json)

### [dsh-themes-guillaum](https://github.com/guillaumemeyer/dsh-themes)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-themes-guillaum&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-themes-guillaum preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-themes-guillaum&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Selectable DSH theme palettes (Tokyo Night, Catppuccin, Dracula, Gruvbox, Nord, One Dark) with live previews, applied from the General settings page.

```sh
dsh plugin --profile web add github:guillaumemeyer/dsh-themes
```

**Repo:** [guillaumemeyer/dsh-themes](https://github.com/guillaumemeyer/dsh-themes) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.client](https://github.com/guillaumemeyer/dsh-themes/blob/HEAD/package.json)

### [dsh-themes-naniwet](https://github.com/naniwet/dsh-themes)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-themes-naniwet&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-themes-naniwet preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-themes-naniwet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Configurable skin for the DeepSeek Harness web UI

```sh
dsh plugin --profile web add github:naniwet/dsh-themes
```

**Repo:** [naniwet/dsh-themes](https://github.com/naniwet/dsh-themes) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/naniwet/dsh-themes/blob/HEAD/package.json)

### [dsh-themes-people-ai](https://github.com/95384/DSH-themes-people-ai)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-themes-people-ai&scheme=dark"><img src="https://raw.githubusercontent.com/95384/DSH-themes-people-ai/HEAD/assets/background.jpg" width="360" alt="dsh-themes-people-ai preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-themes-people-ai&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

People AI wallpaper theme for the DeepSeek Harness Web GUI.

```sh
dsh plugin --profile web add github:95384/DSH-themes-people-ai
```

**Repo:** [95384/DSH-themes-people-ai](https://github.com/95384/DSH-themes-people-ai) · **License:** MIT · **Package:** [`people-ai`](https://www.npmjs.com/package/people-ai) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/95384/DSH-themes-people-ai/blob/HEAD/package.json)

### [dsh-thinking-status-customizer](https://github.com/Dbi-Eshuh/dsh-thinking-status-customizer)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-thinking-status-customizer&scheme=dark"><img src="https://raw.githubusercontent.com/Dbi-Eshuh/dsh-thinking-status-customizer/HEAD/assets/settings-preview.png" width="360" alt="dsh-thinking-status-customizer preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-thinking-status-customizer&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Lifecycle-safe CSS customizer for the visible DeepSeek Harness Web thinking status.

```sh
dsh plugin --profile web add github:Dbi-Eshuh/dsh-thinking-status-customizer
```

**Repo:** [Dbi-Eshuh/dsh-thinking-status-customizer](https://github.com/Dbi-Eshuh/dsh-thinking-status-customizer) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Dbi-Eshuh/dsh-thinking-status-customizer/blob/HEAD/package.json)

### [dsh-thirteen-bg](https://github.com/feng78-boop/dsh-thirteen-bg)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-thirteen-bg&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-thirteen-bg preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-thirteen-bg&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Animated and video live wallpaper for the DeepSeek Harness Web GUI — GIF, animated WebP/APNG images plus MP4/WebM video backgrounds, with auto format detection, a dim slider, and UI chrome tone matching.

```sh
dsh plugin --profile web add github:feng78-boop/dsh-thirteen-bg
```

**Repo:** [feng78-boop/dsh-thirteen-bg](https://github.com/feng78-boop/dsh-thirteen-bg) · **dsh:** 0.1.0-rc.7 · **Proof:** [package.json#dsh.bundle](https://github.com/feng78-boop/dsh-thirteen-bg/blob/HEAD/package.json)

### [dsh-tp7-skin](https://github.com/adamwdff/dsh-tp7-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-tp7-skin&scheme=dark"><img src="https://raw.githubusercontent.com/adamwdff/dsh-tp7-skin/master/docs/preview.png" width="360" alt="dsh-tp7-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-tp7-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Turbo Pascal 7.0 blue-screen skin for the dsh Web GUI.

```sh
dsh plugin --profile web add github:adamwdff/dsh-tp7-skin
```

**Repo:** [adamwdff/dsh-tp7-skin](https://github.com/adamwdff/dsh-tp7-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/adamwdff/dsh-tp7-skin/blob/HEAD/package.json)

### [dsh-ui-background](https://github.com/ropz12138/dsh-ui-background)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ui-background&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-ui-background preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ui-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Conversation-column wallpaper: upload a raster, paint it behind the chat with a readable wash, and float the composer as an island.

```sh
dsh plugin --profile web add github:ropz12138/dsh-ui-background
```

**Repo:** [ropz12138/dsh-ui-background](https://github.com/ropz12138/dsh-ui-background) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/ropz12138/dsh-ui-background/blob/HEAD/package.json)

### [dsh-ui-beautify](https://github.com/Junt184/dsh-ui-beautify)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ui-beautify&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-ui-beautify preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ui-beautify&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Apple-style appearance suite: wallpaper carousel with Ken Burns, glass blur, font presets, and particle backgrounds.

```sh
dsh plugin --profile web add github:Junt184/dsh-ui-beautify
```

**Repo:** [Junt184/dsh-ui-beautify](https://github.com/Junt184/dsh-ui-beautify) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Junt184/dsh-ui-beautify/blob/HEAD/package.json)

### [dsh-ui-beautify-zalpha](https://github.com/Zalpha263/dsh-ui-beautify)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ui-beautify-zalpha&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-ui-beautify-zalpha preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ui-beautify-zalpha&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Web UI beautify client plugin with color presets for the main area, sidebar, message bubbles, and send button.

```sh
dsh plugin --profile web add github:Zalpha263/dsh-ui-beautify
```

**Repo:** [Zalpha263/dsh-ui-beautify](https://github.com/Zalpha263/dsh-ui-beautify) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Zalpha263/dsh-ui-beautify/blob/HEAD/package.json)

### [dsh-ui-liteglass](https://github.com/mumuer1024/dsh-ui-liteglass)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ui-liteglass&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-ui-liteglass preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ui-liteglass&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

A lightweight appearance plugin for DeepSeek Harness: custom wallpaper, glass-like panel transparency, and accent color. Ships a host half plus a web client half in one npm package.

```sh
dsh plugin --profile web add github:mumuer1024/dsh-ui-liteglass
```

**Repo:** [mumuer1024/dsh-ui-liteglass](https://github.com/mumuer1024/dsh-ui-liteglass) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/mumuer1024/dsh-ui-liteglass/blob/HEAD/package.json)

### [dsh-ui-skin](https://github.com/huabai-flowerwhite/dsh-ui-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ui-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-ui-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ui-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

dsh ui skin — DeepSeek Harness UI 皮肤插件（静态壁纸 + 动态背景）

```sh
dsh plugin --profile web add github:huabai-flowerwhite/dsh-ui-skin
```

**Repo:** [huabai-flowerwhite/dsh-ui-skin](https://github.com/huabai-flowerwhite/dsh-ui-skin) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/huabai-flowerwhite/dsh-ui-skin/blob/HEAD/package.json)

### [dsh-uiskin-theme](https://github.com/chouxiaohuai/dsh-uiskin-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-uiskin-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-uiskin-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-uiskin-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Blue Glass Theme (ocean fantasy) for DeepSeek Harness Web — a static profile bundle. 海洋幻想主题：海洋背景、玻璃气泡、海洋侧边栏、鲸鱼设置按钮、炫彩模型文字。

```sh
dsh plugin --profile web add github:chouxiaohuai/dsh-uiskin-theme
```

**Repo:** [chouxiaohuai/dsh-uiskin-theme](https://github.com/chouxiaohuai/dsh-uiskin-theme) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/chouxiaohuai/dsh-uiskin-theme/blob/HEAD/package.json)

### [dsh-unknown-theme](https://github.com/ycqaq233/dsh-unknown-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-unknown-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-unknown-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-unknown-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek 官网视觉主题：官网流体渐变背景 + 交互网格 + 粒子鱼 LOGO + 标题聚光灯 + 官网质感磨砂玻璃（双模式）

```sh
dsh plugin --profile web add github:ycqaq233/dsh-unknown-theme
```

**Repo:** [ycqaq233/dsh-unknown-theme](https://github.com/ycqaq233/dsh-unknown-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/ycqaq233/dsh-unknown-theme/blob/HEAD/package.json)

### [dsh-uplink-skin](https://github.com/cavaljames/dsh-uplink-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-uplink-skin&scheme=dark"><img src="https://raw.githubusercontent.com/cavaljames/dsh-uplink-skin/master/preview/dark.svg" width="360" alt="dsh-uplink-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-uplink-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Uplink cyberpunk Web skin: indigo night, neon cyan/magenta, CRT scanlines, glass panels, and a terminal-style composer placeholder.

```sh
dsh plugin --profile web add github:cavaljames/dsh-uplink-skin
```

**Repo:** [cavaljames/dsh-uplink-skin](https://github.com/cavaljames/dsh-uplink-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/cavaljames/dsh-uplink-skin/blob/HEAD/package.json)

### [dsh-use-wallpaper](https://github.com/yu502950715yang/dsh-use-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-use-wallpaper&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-use-wallpaper preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-use-wallpaper&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

为 DSH（DeepSeek Harness）Web GUI 提供 Wallpaper Engine 壁纸背景：Scene 壁纸由 Three.js / WebGPU（wasm）在浏览器实时渲染，视频壁纸直接播放、Web 壁纸加载，其余回退 preview 图 + Ken Burns。

```sh
dsh plugin --profile web add github:yu502950715yang/dsh-use-wallpaper
```

**Repo:** [yu502950715yang/dsh-use-wallpaper](https://github.com/yu502950715yang/dsh-use-wallpaper) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/yu502950715yang/dsh-use-wallpaper/blob/HEAD/package.json)

### [dsh-valley-pixel-skin](https://github.com/EachSheep/dsh-valley-pixel-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-valley-pixel-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-valley-pixel-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-valley-pixel-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

An original cozy farm pixel skin for the DeepSeek Harness Web UI.

```sh
dsh plugin --profile web add github:EachSheep/dsh-valley-pixel-skin
```

**Repo:** [EachSheep/dsh-valley-pixel-skin](https://github.com/EachSheep/dsh-valley-pixel-skin) · **dsh:** 0.1.0-rc.7 · **Proof:** [package.json#dsh.bundle](https://github.com/EachSheep/dsh-valley-pixel-skin/blob/HEAD/package.json)

### [dsh-visual-skin](https://github.com/HuggingFries/dsh-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-visual-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-visual-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-visual-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Visual customization for the Web UI: localized wallpapers, theme management, and conversation readability controls.

```sh
dsh plugin --profile web add github:HuggingFries/dsh-skin
```

**Repo:** [HuggingFries/dsh-skin](https://github.com/HuggingFries/dsh-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/HuggingFries/dsh-skin/blob/HEAD/package.json)

### [dsh-visual-skin-trrrrrry](https://github.com/trrrrrryg/dsh-visual-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-visual-skin-trrrrrry&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-visual-skin-trrrrrry preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-visual-skin-trrrrrry&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness Skin Studio — 为 DeepSeek Harness (DSH) 打造的一键可视化换肤工具：Agent Skill + MCP Server + DSH 插件，图片即皮肤，隔离预览、人工确认后安全应用。A visual skin studio for DeepSeek Harness: design, preview and safely apply

```sh
dsh plugin --profile web add github:trrrrrryg/dsh-visual-skin
```

**Repo:** [trrrrrryg/dsh-visual-skin](https://github.com/trrrrrryg/dsh-visual-skin) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#devDependencies.@deepseek-ai/dsh](https://github.com/trrrrrryg/dsh-visual-skin/blob/HEAD/package.json)

### [dsh-vscode-theme](https://github.com/Sim-xia/dsh-vscode-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-vscode-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-vscode-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-vscode-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Import VS Code .vsix themes into DeepSeek Harness Web

```sh
dsh plugin --profile web add github:Sim-xia/dsh-vscode-theme
```

**Repo:** [Sim-xia/dsh-vscode-theme](https://github.com/Sim-xia/dsh-vscode-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Sim-xia/dsh-vscode-theme/blob/HEAD/package.json)

### [dsh-wallpaper](https://github.com/Gao-Yee/dsh-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper&scheme=dark"><img src="https://raw.githubusercontent.com/Gao-Yee/dsh-wallpaper/HEAD/screenshots/screenshot-2.jpg" width="360" alt="dsh-wallpaper preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Custom wallpaper background for the dsh web GUI (light theme only): fixed cover image under translucent liquid-glass surfaces, with an in-page control panel.

```sh
dsh plugin --profile web add github:Gao-Yee/dsh-wallpaper
```

**Repo:** [Gao-Yee/dsh-wallpaper](https://github.com/Gao-Yee/dsh-wallpaper) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/Gao-Yee/dsh-wallpaper/blob/HEAD/package.json)

### [dsh-wallpaper_share](https://github.com/YRN-playmaker/dsh-wallpaper_share)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper_share&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper_share preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper_share&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Wallpaper Engine ↔ DeepSeek Harness wallpaper sync (display-only): the page background follows the current Wallpaper Engine wallpaper, with a wallpaper_share conversation-view tab (monitor selector, power toggle, focus mode, render-mode toggle, transparency/blur/shadow sliders)

```sh
dsh plugin --profile web add github:YRN-playmaker/dsh-wallpaper_share
```

**Repo:** [YRN-playmaker/dsh-wallpaper_share](https://github.com/YRN-playmaker/dsh-wallpaper_share) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/YRN-playmaker/dsh-wallpaper_share/blob/HEAD/package.json)

### [dsh-wallpaper-bg](https://github.com/nishuoyang/dsh-wallpaper-bg)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-bg&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-bg preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-bg&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness 网页界面独立壁纸背景插件：内置壁纸 / 自定义上传 / Wallpaper Engine 壁纸库（只读）三种来源，支持图片、视频、场景预览渲染与遮罩·模糊·亮度·安全放大调节。

```sh
dsh plugin --profile web add github:nishuoyang/dsh-wallpaper-bg
```

**Repo:** [nishuoyang/dsh-wallpaper-bg](https://github.com/nishuoyang/dsh-wallpaper-bg) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/nishuoyang/dsh-wallpaper-bg/blob/HEAD/package.json)

### [dsh-wallpaper-chinarxq](https://github.com/chinaRXQ/dsh-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-chinarxq&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-chinarxq preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-chinarxq&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Wallpaper skin for the DeepSeek Harness web UI: image background with opacity, mask, and blur controls.

```sh
dsh plugin --profile web add github:chinaRXQ/dsh-wallpaper
```

**Repo:** [chinaRXQ/dsh-wallpaper](https://github.com/chinaRXQ/dsh-wallpaper) · **License:** MIT · **Package:** [`dsh-wallpaper`](https://www.npmjs.com/package/dsh-wallpaper) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/chinaRXQ/dsh-wallpaper/blob/HEAD/package.json)

### [dsh-wallpaper-codemonk](https://github.com/codeMonkey-Pine/dsh-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-codemonk&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-codemonk preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-codemonk&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Wallpaper Engine integration for the dsh web GUI: scan the local Wallpaper Engine library (Steam workshop 431960 + local projects), use its wallpapers as the page background (image / video / web / scene-preview), and control them from a right-side '婢逛胶鐒婄拋鎹愵吀' panel (opacity, scope, fill, blur, vignette, fps, parallax

```sh
dsh plugin --profile web add github:codeMonkey-Pine/dsh-wallpaper
```

**Repo:** [codeMonkey-Pine/dsh-wallpaper](https://github.com/codeMonkey-Pine/dsh-wallpaper) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/codeMonkey-Pine/dsh-wallpaper/blob/HEAD/package.json)

### [dsh-wallpaper-engine](https://github.com/drmi5446/dsh-wallpaper-engine)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-engine&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-engine preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-engine&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Wallpaper Engine backgrounds for the DSH web GUI: render your local Wallpaper Engine Video/Web wallpapers behind the chat, with iOS-style liquid glass, adjustable scrim/border/blur.

```sh
dsh plugin --profile web add github:drmi5446/dsh-wallpaper-engine
```

**Repo:** [drmi5446/dsh-wallpaper-engine](https://github.com/drmi5446/dsh-wallpaper-engine) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/drmi5446/dsh-wallpaper-engine/blob/HEAD/package.json)

### [dsh-wallpaper-engine-elysia39](https://github.com/elysia395/dsh-wallpaper-engine)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-engine-elysia39&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-engine-elysia39 preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-engine-elysia39&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Wallpaper Engine backgrounds for the DSH web GUI: render your local Wallpaper Engine Video/Web wallpapers behind the chat, with iOS-style liquid glass, adjustable scrim/border/blur.

```sh
dsh plugin --profile web add github:elysia395/dsh-wallpaper-engine
```

**Repo:** [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/elysia395/dsh-wallpaper-engine/blob/HEAD/package.json)

### [dsh-wallpaper-engine-marlonla](https://github.com/marlonLau/dsh-wallpaper-engine)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-engine-marlonla&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-engine-marlonla preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-engine-marlonla&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

One-click DSH background switcher backed by local Wallpaper Engine images/videos (WE Web API first, Steam workshop/myprojects directory scan fallback)

```sh
dsh plugin --profile web add github:marlonLau/dsh-wallpaper-engine
```

**Repo:** [marlonLau/dsh-wallpaper-engine](https://github.com/marlonLau/dsh-wallpaper-engine) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/marlonLau/dsh-wallpaper-engine/blob/HEAD/package.json)

### [DSH-Wallpaper-Engine-mhwww](https://github.com/mhwww/DSH-Wallpaper-Engine)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=DSH-Wallpaper-Engine-mhwww&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="DSH-Wallpaper-Engine-mhwww preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=DSH-Wallpaper-Engine-mhwww&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Custom background image for the DeepSeek Harness web UI (theme token overlay + settings card)

```sh
dsh plugin --profile web add github:mhwww/DSH-Wallpaper-Engine
```

**Repo:** [mhwww/DSH-Wallpaper-Engine](https://github.com/mhwww/DSH-Wallpaper-Engine) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/mhwww/DSH-Wallpaper-Engine/blob/HEAD/package.json)

### [dsh-wallpaper-engine-sakuraaa](https://github.com/sakuraaa667/dsh-wallpaper-engine)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-engine-sakuraaa&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-engine-sakuraaa preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-engine-sakuraaa&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Use wallpapers downloaded in Wallpaper Engine as the DeepSeek Harness web background. 将 Wallpaper Engine 中已下载的壁纸用作 DeepSeek Harness 的背景。

```sh
dsh plugin --profile web add github:sakuraaa667/dsh-wallpaper-engine
```

**Repo:** [sakuraaa667/dsh-wallpaper-engine](https://github.com/sakuraaa667/dsh-wallpaper-engine) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/sakuraaa667/dsh-wallpaper-engine/blob/HEAD/package.json)

### [dsh-wallpaper-engine-tianyada](https://github.com/TianYa-DAO/dsh-wallpaper-engine/tree/HEAD/packages/dsh-wallpaper-engine)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-engine-tianyada&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-engine-tianyada preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-engine-tianyada&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Monorepo for dsh-wallpaper-engine: the installable DSH plugin and the DSH Windows desktop shell

```sh
dsh plugin --profile web add github:TianYa-DAO/dsh-wallpaper-engine
```

**Repo:** [TianYa-DAO/dsh-wallpaper-engine](https://github.com/TianYa-DAO/dsh-wallpaper-engine/tree/HEAD/packages/dsh-wallpaper-engine) · **dsh:** 0.1.0-rc.6 · **Proof:** [packages/dsh-wallpaper-engine/package.json#dsh.bundle](https://github.com/TianYa-DAO/dsh-wallpaper-engine/blob/HEAD/packages/dsh-wallpaper-engine/package.json)

### [dsh-wallpaper-flyingpe](https://github.com/flyingpetals520/dsh-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-flyingpe&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-flyingpe preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-flyingpe&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH web client plugin: semi-transparent wallpaper background (image URL or local file, opacity/blur adjustable)

```sh
dsh plugin --profile web add github:flyingpetals520/dsh-wallpaper
```

**Repo:** [flyingpetals520/dsh-wallpaper](https://github.com/flyingpetals520/dsh-wallpaper) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.client](https://github.com/flyingpetals520/dsh-wallpaper/blob/HEAD/package.json)

### [dsh-wallpaper-keke050](https://github.com/keke050/dsh-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-keke050&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-keke050 preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-keke050&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Set a custom background wallpaper for the DeepSeek Harness desktop app — presets, image URL, upload, and an opacity slider

```sh
dsh plugin --profile web add github:keke050/dsh-wallpaper
```

**Repo:** [keke050/dsh-wallpaper](https://github.com/keke050/dsh-wallpaper) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/keke050/dsh-wallpaper/blob/HEAD/package.json)

### [dsh-wallpaper-lueb386l](https://github.com/lueb386-lgtm/dsh-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-lueb386l&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-lueb386l preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-lueb386l&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness wallpaper plugin (static dual-face package): host half serves /wallpaper/bing, client half provides the wallpaper settings page and rendering.

```sh
dsh plugin --profile web add github:lueb386-lgtm/dsh-wallpaper
```

**Repo:** [lueb386-lgtm/dsh-wallpaper](https://github.com/lueb386-lgtm/dsh-wallpaper) · **dsh:** 0.1.0-rc.7 · **Proof:** [package.json#dsh.client](https://github.com/lueb386-lgtm/dsh-wallpaper/blob/HEAD/package.json)

### [dsh-wallpaper-rexcue](https://github.com/RexCue/dsh-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-rexcue&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-rexcue preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-rexcue&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Wallpaper skin for the DeepSeek Harness web UI: image background with opacity, mask and blur controls.

```sh
dsh plugin --profile web add github:RexCue/dsh-wallpaper
```

**Repo:** [RexCue/dsh-wallpaper](https://github.com/RexCue/dsh-wallpaper) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/RexCue/dsh-wallpaper/blob/HEAD/package.json)

### [dsh-wallpaper-rnlao](https://github.com/RNlao/dsh-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-rnlao&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-rnlao preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-rnlao&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Choose an image or gradient as the DeepSeek Harness web background.

```sh
dsh plugin --profile web add github:RNlao/dsh-wallpaper
```

**Repo:** [RNlao/dsh-wallpaper](https://github.com/RNlao/dsh-wallpaper) · **License:** MIT · **Package:** [`dsh-wallpaper`](https://www.npmjs.com/package/dsh-wallpaper) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/RNlao/dsh-wallpaper/blob/HEAD/package.json)

### [dsh-wallpaper-rotator](https://github.com/liceses/dsh-wallpaper-rotator/tree/HEAD/wallpaper-rotator)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-rotator&scheme=dark"><img src="https://raw.githubusercontent.com/liceses/dsh-wallpaper-rotator/HEAD/demo-wallpapers/anima_base_v1_0-yoneyama_mai-whale_festival_v5_s3_steps_a_00001_.png" width="360" alt="dsh-wallpaper-rotator preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-rotator&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH 壁纸轮换插件：定时轮换应用背景壁纸（交叉淡化动效），内置 SVG 壁纸集，毛玻璃/压暗/文字阴影/背景不透明度等可读性调节，设置页可配置。

```sh
dsh plugin --profile web add github:liceses/dsh-wallpaper-rotator
```

**Repo:** [liceses/dsh-wallpaper-rotator](https://github.com/liceses/dsh-wallpaper-rotator/tree/HEAD/wallpaper-rotator) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [wallpaper-rotator/package.json#dsh.bundle](https://github.com/liceses/dsh-wallpaper-rotator/blob/HEAD/wallpaper-rotator/package.json)

### [dsh-wallpaper-rotator-enhanced](https://github.com/Jieice/dsh-wallpaper-rotator-enhanced)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-rotator-enhanced&scheme=dark"><img src="https://raw.githubusercontent.com/Jieice/dsh-wallpaper-rotator-enhanced/HEAD/docs/preview-1.png" width="360" alt="dsh-wallpaper-rotator-enhanced preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-rotator-enhanced&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH 壁纸轮换插件：定时轮换应用背景壁纸（交叉淡化动效），内置 SVG 壁纸集，毛玻璃/压暗/文字阴影/背景不透明度等可读性调节，设置页可配置。

```sh
dsh plugin --profile web add github:Jieice/dsh-wallpaper-rotator-enhanced
```

**Repo:** [Jieice/dsh-wallpaper-rotator-enhanced](https://github.com/Jieice/dsh-wallpaper-rotator-enhanced) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Jieice/dsh-wallpaper-rotator-enhanced/blob/HEAD/package.json)

### [dsh-wallpaper-scigeoli](https://github.com/SciGeoLight/dsh-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-scigeoli&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-scigeoli preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-scigeoli&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness 客户端插件：在「设置」里上传壁纸，并调整磨砂玻璃（透明度 / 模糊 / 饱和度）。

```sh
dsh plugin --profile web add github:SciGeoLight/dsh-wallpaper
```

**Repo:** [SciGeoLight/dsh-wallpaper](https://github.com/SciGeoLight/dsh-wallpaper) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/SciGeoLight/dsh-wallpaper/blob/HEAD/package.json)

### [dsh-wallpaper-skin](https://github.com/ddbj-hub/dsh-wallpaper-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Persistent wallpaper skin: static image or muted looping video background with translucent panels, path editable live from Settings Plugins.

```sh
dsh plugin --profile web add github:ddbj-hub/dsh-wallpaper-skin
```

**Repo:** [ddbj-hub/dsh-wallpaper-skin](https://github.com/ddbj-hub/dsh-wallpaper-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/ddbj-hub/dsh-wallpaper-skin/blob/HEAD/package.json)

### [dsh-wallpaper-zypchloe](https://github.com/zypchloe-del/dsh-wallpaper)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-zypchloe&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wallpaper-zypchloe preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wallpaper-zypchloe&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness (DSH) web GUI 换壁纸插件：上传自定义壁纸铺满整个界面背景，本地持久化(IndexedDB)，左下角可拖拽的换壁纸按钮 + 设置面板。

```sh
dsh plugin --profile web add github:zypchloe-del/dsh-wallpaper
```

**Repo:** [zypchloe-del/dsh-wallpaper](https://github.com/zypchloe-del/dsh-wallpaper) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/zypchloe-del/dsh-wallpaper/blob/HEAD/package.json)

### [dsh-we-wallpaper-sync](https://github.com/tiger0012/dsh-we-wallpaper-sync)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-we-wallpaper-sync&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-we-wallpaper-sync preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-we-wallpaper-sync&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

把 Wallpaper Engine（小红车，Steam 431960）创意工坊壁纸浏览、搜索、下载并接入 DSH 皮肤中心的可复用技能。

```sh
dsh plugin --profile web add github:tiger0012/dsh-we-wallpaper-sync
```

**Repo:** [tiger0012/dsh-we-wallpaper-sync](https://github.com/tiger0012/dsh-we-wallpaper-sync) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/tiger0012/dsh-we-wallpaper-sync/blob/HEAD/package.json)

### [dsh-web-skin](https://github.com/SnoWinKK/dsh-web-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-web-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-web-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-web-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Permanent wallpaper skin for the DSH web UI: the host serves any local image over an HTTP route, the client pins it behind the window, makes theme surfaces translucent, and offers a Settings → 背景图 panel to change the image anytime — survives restarts, no re-define needed.

```sh
dsh plugin --profile web add github:SnoWinKK/dsh-web-skin
```

**Repo:** [SnoWinKK/dsh-web-skin](https://github.com/SnoWinKK/dsh-web-skin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/SnoWinKK/dsh-web-skin/blob/HEAD/package.json)

### [dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-web-ui&scheme=dark"><img src="https://raw.githubusercontent.com/zhu1090093659/dsh-web-ui/main/docs/screenshots/13-hero-main.png" width="360" alt="dsh-web-ui preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-web-ui&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Third-party plugin/skin collection for the dsh Web UI. Skin center routes around the theme-persistence gap. Also listed in awesome-dsh-plugins.

```sh
dsh plugin --profile web add github:zhu1090093659/dsh-web-ui
```

**Repo:** [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) · **dsh:** 0.1.0-rc.6 · **Proof:** [packages/dsh-aionui-panel/package.json#dsh.bundle](https://github.com/zhu1090093659/dsh-web-ui/blob/HEAD/packages/dsh-aionui-panel/package.json)

### [dsh-web-ui-skin](https://github.com/crack-time/dsh-web-ui-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-web-ui-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-web-ui-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-web-ui-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Pastoral cottage skin for the DSH web GUI: full-screen wallpaper with frosted-glass panels

```sh
dsh plugin --profile web add github:crack-time/dsh-web-ui-skin
```

**Repo:** [crack-time/dsh-web-ui-skin](https://github.com/crack-time/dsh-web-ui-skin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/crack-time/dsh-web-ui-skin/blob/HEAD/package.json)

### [dsh-webui-background](https://github.com/lx963/dsh-webui-background)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-webui-background&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-webui-background preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-webui-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Standalone DeepSeek Harness plugin for a configurable Web UI background

```sh
dsh plugin --profile web add github:lx963/dsh-webui-background
```

**Repo:** [lx963/dsh-webui-background](https://github.com/lx963/dsh-webui-background) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/lx963/dsh-webui-background/blob/HEAD/package.json)

### [dsh-webUI-Glass-Theme](https://github.com/makuralymi/dsh-webUI-Glass-Theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-webUI-Glass-Theme&scheme=dark"><img src="https://raw.githubusercontent.com/makuralymi/dsh-webUI-Glass-Theme/master/assets/sc.png" width="360" alt="dsh-webUI-Glass-Theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-webUI-Glass-Theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Frosted-glass theme for the dsh Web UI: translucent surfaces and a global backdrop blur.

```sh
dsh plugin --profile web add github:makuralymi/dsh-webUI-Glass-Theme
```

**Repo:** [makuralymi/dsh-webUI-Glass-Theme](https://github.com/makuralymi/dsh-webUI-Glass-Theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/makuralymi/dsh-webUI-Glass-Theme/blob/HEAD/package.json)

### [dsh-wechat-mobile-skin](https://github.com/xdongHo/dsh-wechat-mobile-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wechat-mobile-skin&scheme=dark"><img src="https://raw.githubusercontent.com/xdongHo/dsh-wechat-mobile-skin/HEAD/docs/screenshot-new.png" width="360" alt="dsh-wechat-mobile-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wechat-mobile-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

WeChat-style mobile skin for the DeepSeek Harness Web GUI. Mobile browsers get a WeChat chat-list (sessions as contacts) and a WeChat-style chat page; desktop stays untouched. · DeepSeek Harness 移动端微信风格皮肤：手机浏览器自动切换微信聊天交互，历史会话展示为微信好友样式，解决移动端排版问题；桌面端零改动。

```sh
dsh plugin --profile web add github:xdongHo/dsh-wechat-mobile-skin
```

**Repo:** [xdongHo/dsh-wechat-mobile-skin](https://github.com/xdongHo/dsh-wechat-mobile-skin) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/xdongHo/dsh-wechat-mobile-skin/blob/HEAD/package.json)

### [dsh-weniger-theme](https://github.com/lesliechowsh/dsh-weniger-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-weniger-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-weniger-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-weniger-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Weniger — "less, but better": a Dieter Rams-inspired theme for the DeepSeek Harness Web GUI. Warm paper whites, hairline borders, one signal-orange accent, squared 0-4px geometry, flat surfaces, one Swiss type stack.

```sh
dsh plugin --profile web add github:lesliechowsh/dsh-weniger-theme
```

**Repo:** [lesliechowsh/dsh-weniger-theme](https://github.com/lesliechowsh/dsh-weniger-theme) · **dsh:** 0.1.0-rc.7 · **Proof:** [package.json#dsh.client](https://github.com/lesliechowsh/dsh-weniger-theme/blob/HEAD/package.json)

### [dsh-whale-aqua-theme](https://github.com/dataizu/dsh-whale-aqua-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-whale-aqua-theme&scheme=dark"><img src="https://raw.githubusercontent.com/dataizu/dsh-whale-aqua-theme/HEAD/screenshots/whale-animation.gif" width="360" alt="dsh-whale-aqua-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-whale-aqua-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

「鲸蓝戏水」macOS theme + swimming whale aquarium background for the DeepSeek Harness Web GUI (dsh-plugin)

```sh
dsh plugin --profile web add github:dataizu/dsh-whale-aqua-theme
```

**Repo:** [dataizu/dsh-whale-aqua-theme](https://github.com/dataizu/dsh-whale-aqua-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [dsh-vision/package.json#dsh.client](https://github.com/dataizu/dsh-whale-aqua-theme/blob/HEAD/dsh-vision/package.json)

### [dsh-whale-background](https://github.com/tuogusa/dsh-whale-background)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-whale-background&scheme=dark"><img src="https://raw.githubusercontent.com/tuogusa/dsh-whale-background/HEAD/assets/wallpaper.jpg" width="360" alt="dsh-whale-background preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-whale-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Deep-sea whale-girl wallpaper with a translucent app surface for the DeepSeek Harness web UI.

```sh
dsh plugin --profile web add github:tuogusa/dsh-whale-background
```

**Repo:** [tuogusa/dsh-whale-background](https://github.com/tuogusa/dsh-whale-background) · **License:** MIT · **Package:** [`dsh-whale-background`](https://www.npmjs.com/package/dsh-whale-background) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/tuogusa/dsh-whale-background/blob/HEAD/package.json)

### [dsh-wishadel-theme](https://github.com/cdxDNRF/dsh-wishadel-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wishadel-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-wishadel-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wishadel-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Wishadel demolition-terminal skin + task board, git graph, project panel and settings center for DeepSeek Harness Web GUI

```sh
dsh plugin --profile web add github:cdxDNRF/dsh-wishadel-theme
```

**Repo:** [cdxDNRF/dsh-wishadel-theme](https://github.com/cdxDNRF/dsh-wishadel-theme) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/cdxDNRF/dsh-wishadel-theme/blob/HEAD/package.json)

### [dsh-wx-skin](https://github.com/wangxilhy23/dsh-wx-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wx-skin&scheme=dark"><img src="https://raw.githubusercontent.com/wangxilhy23/dsh-wx-skin/HEAD/assets/demo1.png" width="360" alt="dsh-wx-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-wx-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Full-screen wallpaper skin: local image or URL background with presets, dim, blur, and persistence.

```sh
dsh plugin --profile web add github:wangxilhy23/dsh-wx-skin
```

**Repo:** [wangxilhy23/dsh-wx-skin](https://github.com/wangxilhy23/dsh-wx-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/wangxilhy23/dsh-wx-skin/blob/HEAD/package.json)

### [dsh-x9-theme](https://github.com/X9wd09ncc/dsh-x9-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-x9-theme&scheme=dark"><img src="https://raw.githubusercontent.com/X9wd09ncc/dsh-x9-theme/HEAD/assets/screenshots/background.png" width="360" alt="dsh-x9-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-x9-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness WebUI 主题插件：6 种预设风格、背景图片（本地上传/路径/URL）、分区独立样式（毛玻璃/浮雕/霓虹等）、四区透明度、分区自定义 CSS（免 F12 显示当前样式）、字体/阴影/动效等全套外观定制

```sh
dsh plugin --profile web add github:X9wd09ncc/dsh-x9-theme
```

**Repo:** [X9wd09ncc/dsh-x9-theme](https://github.com/X9wd09ncc/dsh-x9-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/X9wd09ncc/dsh-x9-theme/blob/HEAD/package.json)

### [dsh-xiaoxinxin-skin](https://github.com/tinnyxx/dsh-xiaoxinxin-skin/tree/HEAD/maid-atelier)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-xiaoxinxin-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-xiaoxinxin-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-xiaoxinxin-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness WebUI 蜡笔小新主题皮肤（基于 dsh-deep-whale maid-atelier 工程）

```sh
dsh plugin --profile web add github:tinnyxx/dsh-xiaoxinxin-skin
```

**Repo:** [tinnyxx/dsh-xiaoxinxin-skin](https://github.com/tinnyxx/dsh-xiaoxinxin-skin/tree/HEAD/maid-atelier) · **dsh:** 0.1.0-rc.6 · **Proof:** [maid-atelier/package.json#dsh.bundle](https://github.com/tinnyxx/dsh-xiaoxinxin-skin/blob/HEAD/maid-atelier/package.json)

### [dsh-yelan-skin](https://github.com/oevon364-ship-it/dsh-yelan-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-yelan-skin&scheme=dark"><img src="https://raw.githubusercontent.com/oevon364-ship-it/dsh-yelan-skin/HEAD/screenshots/preview-3.png" width="360" alt="dsh-yelan-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-yelan-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

17-theme Yelan skin pack for DeepSeek Harness (dsh) - 夜兰皮肤包

```sh
dsh plugin --profile web add github:oevon364-ship-it/dsh-yelan-skin
```

**Repo:** [oevon364-ship-it/dsh-yelan-skin](https://github.com/oevon364-ship-it/dsh-yelan-skin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [yelan-harness/theme.css#--dsw-tokens](https://github.com/oevon364-ship-it/dsh-yelan-skin/blob/HEAD/yelan-harness/theme.css)

### [dskin](https://github.com/dancingmemory/dskin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dskin&scheme=dark"><img src="https://raw.githubusercontent.com/dancingmemory/dskin/main/preview/dark.png" width="360" alt="dskin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dskin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Cartoon pixel skin for the dsh Web GUI: living pixel pets that stroll, blink, and hop.

```sh
dsh plugin --profile web add github:dancingmemory/dskin
```

**Repo:** [dancingmemory/dskin](https://github.com/dancingmemory/dskin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/dancingmemory/dskin/blob/HEAD/package.json)

### [galgame-skin](https://github.com/Shmilyol/galgame-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=galgame-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="galgame-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=galgame-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Galgame-style Japanese interface skin: dusk curtains, gold corners, falling sakura.

```sh
dsh plugin --profile web add github:Shmilyol/galgame-skin
```

**Repo:** [Shmilyol/galgame-skin](https://github.com/Shmilyol/galgame-skin) · **dsh:** 0.1.0-rc.6

*repository returns 404 as of 2026-08-19*

### [Genshin-odette-skin-dsh](https://github.com/lkdx0220/Genshin-odette-skin-dsh)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=Genshin-odette-skin-dsh&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="Genshin-odette-skin-dsh preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=Genshin-odette-skin-dsh&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Odette 冰雪梦幻主题：深/浅双模式 UI 美化皮肤（背景图 + 主题 token + 毛玻璃）

```sh
dsh plugin --profile web add github:lkdx0220/Genshin-odette-skin-dsh
```

**Repo:** [lkdx0220/Genshin-odette-skin-dsh](https://github.com/lkdx0220/Genshin-odette-skin-dsh) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/lkdx0220/Genshin-odette-skin-dsh/blob/HEAD/package.json)

### [ikun-theme-skin](https://github.com/AKS1st/ikun-theme-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=ikun-theme-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="ikun-theme-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=ikun-theme-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

IKUN 主题皮肤 for DeepSeek Harness — ikun 应援主题（星蓝昼/夜、背带裤黑金三套配色接入系统主题列表）、全屏壁纸轮播、基尼太美音乐盒、发送自动播「你干嘛~哎哟」

```sh
dsh plugin --profile web add github:AKS1st/ikun-theme-skin
```

**Repo:** [AKS1st/ikun-theme-skin](https://github.com/AKS1st/ikun-theme-skin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/AKS1st/ikun-theme-skin/blob/HEAD/package.json)

### [jarvis-skin-publish-dsh-client-ui-skin-jarvis-own](https://github.com/YiCheng-Zzz/jarvis-skin-publish-dsh-client-ui-skin-jarvis-own)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=jarvis-skin-publish-dsh-client-ui-skin-jarvis-own&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="jarvis-skin-publish-dsh-client-ui-skin-jarvis-own preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=jarvis-skin-publish-dsh-client-ui-skin-jarvis-own&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Jarvis blue-tech HUD skin for the DSH web GUI: deep blue-black palette, ice-cyan neon tokens, glass panels, HUD corners, and a breathing J.A.R.V.I.S. watermark that answers FOR YOU, SIR, ALWAYS while the agent thinks.

```sh
dsh plugin --profile web add github:YiCheng-Zzz/jarvis-skin-publish-dsh-client-ui-skin-jarvis-own
```

**Repo:** [YiCheng-Zzz/jarvis-skin-publish-dsh-client-ui-skin-jarvis-own](https://github.com/YiCheng-Zzz/jarvis-skin-publish-dsh-client-ui-skin-jarvis-own) · **dsh:** 0.1.0-rc.7 · **Proof:** [package.json#dsh.bundle](https://github.com/YiCheng-Zzz/jarvis-skin-publish-dsh-client-ui-skin-jarvis-own/blob/HEAD/package.json)

### [kaori-theme](https://github.com/Bonny0430/kaori-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=kaori-theme&scheme=dark"><img src="https://raw.githubusercontent.com/Bonny0430/kaori-theme/HEAD/images/03-mockup-a.png" width="360" alt="kaori-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=kaori-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

kaori theme for DeepSeek Harness.

```sh
dsh plugin --profile web add github:Bonny0430/kaori-theme
```

**Repo:** [Bonny0430/kaori-theme](https://github.com/Bonny0430/kaori-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [kaori-kitten-v3.css#--dsw-tokens](https://github.com/Bonny0430/kaori-theme/blob/HEAD/kaori-kitten-v3.css)

### [majia7-dsh-skin](https://github.com/Carlown/majia7-dsh-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=majia7-dsh-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="majia7-dsh-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=majia7-dsh-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

majia7-skin 四档爆改版：an opt-in adaptive reasoning slider skin for DeepSeek Harness

```sh
dsh plugin --profile web add github:Carlown/majia7-dsh-skin
```

**Repo:** [Carlown/majia7-dsh-skin](https://github.com/Carlown/majia7-dsh-skin) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#dsh.bundle](https://github.com/Carlown/majia7-dsh-skin/blob/HEAD/package.json)

### [my-skin-for-DeepSeek-Harness](https://github.com/fthuu/my-skin-for-DeepSeek-Harness)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=my-skin-for-DeepSeek-Harness&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="my-skin-for-DeepSeek-Harness preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=my-skin-for-DeepSeek-Harness&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness 皮肤扩展插件 Skin plugin

```sh
dsh plugin --profile web add github:fthuu/my-skin-for-DeepSeek-Harness
```

**Repo:** [fthuu/my-skin-for-DeepSeek-Harness](https://github.com/fthuu/my-skin-for-DeepSeek-Harness) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/fthuu/my-skin-for-DeepSeek-Harness/blob/HEAD/package.json)

### [open-sea-skin](https://github.com/d-dev0101/open-sea-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=open-sea-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="open-sea-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=open-sea-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Realtime WebGPU ocean skin for DeepSeek Harness, Chrome, and Edge

```sh
dsh plugin --profile web add github:d-dev0101/open-sea-skin
```

**Repo:** [d-dev0101/open-sea-skin](https://github.com/d-dev0101/open-sea-skin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/d-dev0101/open-sea-skin/blob/HEAD/package.json)

### [particle-background](https://github.com/barucaa908/particle-background/tree/HEAD/plugin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=particle-background&scheme=dark"><img src="https://raw.githubusercontent.com/barucaa908/particle-background/HEAD/release/screenshots/blog-light.png" width="360" alt="particle-background preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=particle-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness Web GUI 粒子背景：星座连线 + 星云光晕 + 鼠标交互，主题自适应

```sh
dsh plugin --profile web add github:barucaa908/particle-background
```

**Repo:** [barucaa908/particle-background](https://github.com/barucaa908/particle-background/tree/HEAD/plugin) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [plugin/package.json#dsh.client](https://github.com/barucaa908/particle-background/blob/HEAD/plugin/package.json)

### [pdf-background-gray-codex-skill](https://github.com/zjsthmjialin/pdf-background-gray-codex-skill/tree/HEAD/dsh-pdf-background-gray)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=pdf-background-gray-codex-skill&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="pdf-background-gray-codex-skill preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=pdf-background-gray-codex-skill&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Codex skill for removing gray backgrounds from scanned PDFs without changing resolution or anti-aliased text.

```sh
dsh plugin --profile web add github:zjsthmjialin/pdf-background-gray-codex-skill
```

**Repo:** [zjsthmjialin/pdf-background-gray-codex-skill](https://github.com/zjsthmjialin/pdf-background-gray-codex-skill/tree/HEAD/dsh-pdf-background-gray) · **dsh:** 0.1.0-rc.8 · **Proof:** [dsh-pdf-background-gray/package.json#dsh.bundle](https://github.com/zjsthmjialin/pdf-background-gray-codex-skill/blob/HEAD/dsh-pdf-background-gray/package.json)

### [pixel-skin](https://github.com/zhuifengqug/pixel-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=pixel-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="pixel-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=pixel-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness Web 的宝可梦风像素皮肤：能力等级面板、推理档位补全、四色主题、像素字体、HP 段与 GBA 窗框。

```sh
dsh plugin --profile web add github:zhuifengqug/pixel-skin
```

**Repo:** [zhuifengqug/pixel-skin](https://github.com/zhuifengqug/pixel-skin) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/zhuifengqug/pixel-skin/blob/HEAD/package.json)

### [shuimo-skin](https://github.com/cnskycn/shuimo-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=shuimo-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="shuimo-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=shuimo-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

水墨国风皮肤 for DeepSeek Harness Web: rice-paper warm palette + ink bamboo / distant mountains / plum blossom / seal decorations + falling bamboo leaves animation

```sh
dsh plugin --profile web add github:cnskycn/shuimo-skin
```

**Repo:** [cnskycn/shuimo-skin](https://github.com/cnskycn/shuimo-skin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/cnskycn/shuimo-skin/blob/HEAD/package.json)

### [touhou-hakurei](https://github.com/xiake595/touhou-hakurei)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=touhou-hakurei&scheme=dark"><img src="https://raw.githubusercontent.com/xiake595/touhou-hakurei/master/preview/dark.webp" width="360" alt="touhou-hakurei preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=touhou-hakurei&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

Touhou Hakurei Shrine skin: day/night shrine wallpapers, Reimu portraits, vermilion-and-paper framed sidebar and composer, gold shrine chrome.

```sh
dsh plugin --profile web add github:xiake595/touhou-hakurei
```

**Repo:** [xiake595/touhou-hakurei](https://github.com/xiake595/touhou-hakurei) · **License:** CC-BY-NC-SA-4.0 · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/xiake595/touhou-hakurei/blob/HEAD/package.json)

### [ui-theme-background-custom](https://github.com/wwxiaoqi/ui-theme-background-custom)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=ui-theme-background-custom&scheme=dark"><img src="https://raw.githubusercontent.com/wwxiaoqi/ui-theme-background-custom/HEAD/PictureExamples.webp" width="360" alt="ui-theme-background-custom preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=ui-theme-background-custom&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness web UI plugin: a local-image page background with per-surface opacity and transparency modes, plus an editable plugin-settings card that works on stock builds via a built-in settings

```sh
dsh plugin --profile web add github:wwxiaoqi/ui-theme-background-custom
```

**Repo:** [wwxiaoqi/ui-theme-background-custom](https://github.com/wwxiaoqi/ui-theme-background-custom) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/wwxiaoqi/ui-theme-background-custom/blob/HEAD/package.json)

### [uiskin-theme](https://github.com/chouxiaohuai/uiskin-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=uiskin-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="uiskin-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=uiskin-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Blue Glass Theme (ocean fantasy) for DeepSeek Harness Web — a static profile bundle. 海洋幻想主题：海洋背景、玻璃气泡、海洋侧边栏、鲸鱼设置按钮、炫彩模型文字。

```sh
dsh plugin --profile web add github:chouxiaohuai/uiskin-theme
```

**Repo:** [chouxiaohuai/uiskin-theme](https://github.com/chouxiaohuai/uiskin-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/chouxiaohuai/uiskin-theme/blob/HEAD/package.json)

### [wallpaper-engine-dsh](https://github.com/Weilv-D/wallpaper-engine-dsh)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=wallpaper-engine-dsh&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="wallpaper-engine-dsh preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=wallpaper-engine-dsh&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Wallpaper Engine library as the DSH web GUI background — video/web/still wallpapers, rotation lists, search, resource monitor, bilingual UI.

```sh
dsh plugin --profile web add github:Weilv-D/wallpaper-engine-dsh
```

**Repo:** [Weilv-D/wallpaper-engine-dsh](https://github.com/Weilv-D/wallpaper-engine-dsh) · **dsh:** 0.1.0-rc.7 · **Proof:** [package.json#dsh.bundle](https://github.com/Weilv-D/wallpaper-engine-dsh/blob/HEAD/package.json)

### [wallpaper-plugin](https://github.com/Ayase34/wallpaper-plugin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=wallpaper-plugin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="wallpaper-plugin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=wallpaper-plugin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH 壁纸插件：预设/主题管理 + 壁纸素材库

```sh
dsh plugin --profile web add github:Ayase34/wallpaper-plugin
```

**Repo:** [Ayase34/wallpaper-plugin](https://github.com/Ayase34/wallpaper-plugin) · **dsh:** 0.1.0-rc.7 · **Proof:** [package.json#dsh.bundle](https://github.com/Ayase34/wallpaper-plugin/blob/HEAD/package.json)

### [web-background](https://github.com/goatbroai/web-background)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=web-background&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="web-background preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=web-background&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness web background settings plugin with solid color, image, and opacity controls.

```sh
dsh plugin --profile web add github:goatbroai/web-background
```

**Repo:** [goatbroai/web-background](https://github.com/goatbroai/web-background) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/goatbroai/web-background/blob/HEAD/package.json)

### [wishadel-theme](https://github.com/cdxDNRF/wishadel-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=wishadel-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="wishadel-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=wishadel-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Wishadel demolition-terminal skin + task board, git graph, project panel and settings center for DeepSeek Harness Web GUI

```sh
dsh plugin --profile web add github:cdxDNRF/wishadel-theme
```

**Repo:** [cdxDNRF/wishadel-theme](https://github.com/cdxDNRF/wishadel-theme) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/cdxDNRF/wishadel-theme/blob/HEAD/package.json)

### [xiao-theme-dsh-ui-plugin](https://github.com/jinxlux/xiao-theme-dsh-ui-plugin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=xiao-theme-dsh-ui-plugin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="xiao-theme-dsh-ui-plugin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=xiao-theme-dsh-ui-plugin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

魈主题 TS 版：青玉配色 + 吉祥物 + 魈式语气（中/英模板 + 自定义提示词）+ 磨砂背景（dsh bundle 插件，pnpm 管理，TypeScript 构建；与 xiao-ui-theme 功能一致）

```sh
dsh plugin --profile web add github:jinxlux/xiao-theme-dsh-ui-plugin
```

**Repo:** [jinxlux/xiao-theme-dsh-ui-plugin](https://github.com/jinxlux/xiao-theme-dsh-ui-plugin) · **dsh:** 0.1.0-rc.8 · **Proof:** [package.json#dsh.bundle](https://github.com/jinxlux/xiao-theme-dsh-ui-plugin/blob/HEAD/package.json)

## Companions

Desktop pets and extras that live beside the UI. Not token skins — still part of the dive.

### [dsh-aemeath-pet](https://github.com/culture-flask/dsh-aemeath-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-aemeath-pet&scheme=dark"><img src="https://raw.githubusercontent.com/culture-flask/dsh-aemeath-pet/HEAD/assets/spritesheet-v2-r2.webp" width="360" alt="dsh-aemeath-pet preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-aemeath-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Aemeath desktop pet for the DeepSeek Harness web GUI: a pixel-art companion that idles, works, waits, and reacts alongside the agent.

```sh
dsh plugin --profile web add github:culture-flask/dsh-aemeath-pet
```

**Repo:** [culture-flask/dsh-aemeath-pet](https://github.com/culture-flask/dsh-aemeath-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/culture-flask/dsh-aemeath-pet/blob/HEAD/package.json)

### [dsh-answer-pet](https://github.com/Nanki-nn/dsh-answer-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-answer-pet&scheme=dark"><img src="https://raw.githubusercontent.com/Nanki-nn/dsh-answer-pet/HEAD/assets/dsh-answer-pet-demo.gif" width="360" alt="dsh-answer-pet preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-answer-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Blue-whale overlay pet that shows per-session answer progress, token rate, tool trace, and elapsed time on live status cards.

```sh
dsh plugin --profile web add github:Nanki-nn/dsh-answer-pet
```

**Repo:** [Nanki-nn/dsh-answer-pet](https://github.com/Nanki-nn/dsh-answer-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Nanki-nn/dsh-answer-pet/blob/HEAD/package.json)

### [dsh-ayaka-theme](https://github.com/l-vM2k/dsh-ayaka-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ayaka-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-ayaka-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ayaka-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Kamisato Ayaka ice-bloom theme + desktop pet for DeepSeek Harness Web Client

```sh
dsh plugin --profile web add github:l-vM2k/dsh-ayaka-theme
```

**Repo:** [l-vM2k/dsh-ayaka-theme](https://github.com/l-vM2k/dsh-ayaka-theme) · **dsh:** 0.1.1-rc.2 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/l-vM2k/dsh-ayaka-theme/blob/HEAD/package.json)

### [dsh-blue-whale-maid](https://github.com/yuxino/dsh-blue-whale-maid)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-blue-whale-maid&scheme=dark"><img src="https://raw.githubusercontent.com/yuxino/dsh-blue-whale-maid/HEAD/assets/spritesheet.webp" width="360" alt="dsh-blue-whale-maid preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-blue-whale-maid&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

A desktop pixel pet for the DeepSeek Harness web GUI.

```sh
dsh plugin --profile web add github:yuxino/dsh-blue-whale-maid
```

**Repo:** [yuxino/dsh-blue-whale-maid](https://github.com/yuxino/dsh-blue-whale-maid) · **License:** MIT · **Package:** [`dsh-blue-whale-maid`](https://www.npmjs.com/package/dsh-blue-whale-maid) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/yuxino/dsh-blue-whale-maid/blob/HEAD/package.json)

### [dsh-client-ui-pet](https://github.com/Vulcan626/dsh-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-pet&scheme=dark"><img src="https://raw.githubusercontent.com/Vulcan626/dsh-pet/main/docs/assets/deepseek-pet-idle.png" width="360" alt="dsh-client-ui-pet preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek whale overlay pet: in-place swim, session-state frames, drag, and a click-open API stats panel.

```sh
dsh plugin --profile web add github:Vulcan626/dsh-pet
```

**Repo:** [Vulcan626/dsh-pet](https://github.com/Vulcan626/dsh-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/Vulcan626/dsh-pet/blob/HEAD/package.json)

### [dsh-client-ui-whale](https://github.com/AllenYu0118/dsh-client-ui-whale)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-whale&scheme=dark"><img src="https://raw.githubusercontent.com/AllenYu0118/dsh-client-ui-whale/main/docs/whale-demo.gif" width="360" alt="dsh-client-ui-whale preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-client-ui-whale&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek-logo whale on the conversation column whose water spout scales with live token consumption.

```sh
dsh plugin --profile web add github:AllenYu0118/dsh-client-ui-whale
```

**Repo:** [AllenYu0118/dsh-client-ui-whale](https://github.com/AllenYu0118/dsh-client-ui-whale) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/AllenYu0118/dsh-client-ui-whale/blob/HEAD/package.json)

### [dsh-codex-pet](https://github.com/minybear/DeepSeek-Harness-Pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-codex-pet&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-codex-pet preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-codex-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Codex-style overlay pet driven by agent running/waiting/error/done states, with a pet.json plus spritesheet pack format.

```sh
dsh plugin --profile web add github:minybear/DeepSeek-Harness-Pet
```

**Repo:** [minybear/DeepSeek-Harness-Pet](https://github.com/minybear/DeepSeek-Harness-Pet) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/minybear/DeepSeek-Harness-Pet/blob/HEAD/package.json)

### [dsh-cyber-girlfriend](https://github.com/zhulin025/LaoA-dshGF)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-cyber-girlfriend&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-cyber-girlfriend preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-cyber-girlfriend&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

State-driven black and white cyber-girlfriend skins for the DeepSeek Harness web GUI.

```sh
dsh plugin --profile web add github:zhulin025/LaoA-dshGF
```

**Repo:** [zhulin025/LaoA-dshGF](https://github.com/zhulin025/LaoA-dshGF) · **License:** MIT · **Package:** [`@laoa-ai/dsh-client-ui-cyber-girlfriend`](https://www.npmjs.com/package/@laoa-ai/dsh-client-ui-cyber-girlfriend) · **dsh:** 0.1.0-rc.6

*repository returns 404 as of 2026-08-19*

### [dsh-dafeiyu](https://github.com/QCYTSN/dsh-dafeiyu)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-dafeiyu&scheme=dark"><img src="https://raw.githubusercontent.com/QCYTSN/dsh-dafeiyu/HEAD/docs/images/dsh-bigfish-settings.png" width="360" alt="dsh-dafeiyu preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-dafeiyu&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Desktop-native BigFish companion driven by DeepSeek Harness session events.

```sh
dsh plugin --profile web add github:QCYTSN/dsh-dafeiyu
```

**Repo:** [QCYTSN/dsh-dafeiyu](https://github.com/QCYTSN/dsh-dafeiyu) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/QCYTSN/dsh-dafeiyu/blob/HEAD/package.json)

### [dsh-deepseek-girl-pet](https://github.com/f0909172434/dsh-deepseek-girl-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-deepseek-girl-pet&scheme=dark"><img src="https://raw.githubusercontent.com/f0909172434/dsh-deepseek-girl-pet/main/assets/deepseek-girl-harness-demo.gif" width="360" alt="dsh-deepseek-girl-pet preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-deepseek-girl-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Animated DeepSeek-girl overlay pet for the dsh Web UI with session-state animations and mouse tracking.

```sh
dsh plugin --profile web add github:f0909172434/dsh-deepseek-girl-pet
```

**Repo:** [f0909172434/dsh-deepseek-girl-pet](https://github.com/f0909172434/dsh-deepseek-girl-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/f0909172434/dsh-deepseek-girl-pet/blob/HEAD/package.json)

### [dsh-desk-pet](https://github.com/anneheartrecord/dsh-desk-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-desk-pet&scheme=dark"><img src="https://raw.githubusercontent.com/anneheartrecord/dsh-desk-pet/HEAD/assets/source/threadcore/sleeping/01.png" width="360" alt="dsh-desk-pet preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-desk-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Always-on-top DeepSeek Harness desktop pet. Default whale, four skins, four silent states. Not an in-page widget.

```sh
dsh plugin --profile web add github:anneheartrecord/dsh-desk-pet
```

**Repo:** [anneheartrecord/dsh-desk-pet](https://github.com/anneheartrecord/dsh-desk-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/anneheartrecord/dsh-desk-pet/blob/HEAD/package.json)

### [dsh-desktop-pet-crabossss](https://github.com/crabossss/dsh-desktop-pet/tree/HEAD/plugin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-desktop-pet-crabossss&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-desktop-pet-crabossss preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-desktop-pet-crabossss&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Desktop pet plugin for DeepSeek Harness with a floating companion client.

```sh
dsh plugin --profile web add github:crabossss/dsh-desktop-pet
```

**Repo:** [crabossss/dsh-desktop-pet](https://github.com/crabossss/dsh-desktop-pet/tree/HEAD/plugin) · **dsh:** 0.1.0-rc.6

### [dsh-desktop-pet-sereinmono](https://github.com/sereinmono/dsh-desktop-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-desktop-pet-sereinmono&scheme=dark"><img src="https://raw.githubusercontent.com/sereinmono/dsh-desktop-pet/HEAD/assets/pets/text/spritesheet.webp" width="360" alt="dsh-desktop-pet-sereinmono preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-desktop-pet-sereinmono&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Animated desktop companion that shows ambient agent status, supporting the Codex pet format.

```sh
dsh plugin --profile web add github:sereinmono/dsh-desktop-pet
```

**Repo:** [sereinmono/dsh-desktop-pet](https://github.com/sereinmono/dsh-desktop-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/sereinmono/dsh-desktop-pet/blob/HEAD/package.json)

### [dsh-furina-desk-pet](https://github.com/fykuang02/furina-desk-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-furina-desk-pet&scheme=dark"><img src="https://raw.githubusercontent.com/fykuang02/furina-desk-pet/HEAD/assets/source/furina-shocked.webp" width="360" alt="dsh-furina-desk-pet preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-furina-desk-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Floating Furina chibi desk pet for the DeepSeek Harness web GUI, with click effects, affinity levels, and drag.

```sh
dsh plugin --profile web add github:fykuang02/furina-desk-pet
```

**Repo:** [fykuang02/furina-desk-pet](https://github.com/fykuang02/furina-desk-pet) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/fykuang02/furina-desk-pet/blob/HEAD/package.json)

### [dsh-galgame](https://github.com/Lanxing6480/dsh-galgame)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-galgame&scheme=dark"><img src="https://raw.githubusercontent.com/Lanxing6480/dsh-galgame/main/assets/characters/deepseek/portraits/neutral.webp" width="360" alt="dsh-galgame preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-galgame&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

GalGame mode for the dsh web GUI: a third conversation view tab (after 轨迹) that renders the real agent session as a visual-novel stage — whale-girl (DeepSeek) portrait with diff switching + draggab...

```sh
dsh plugin --profile web add github:Lanxing6480/dsh-galgame
```

**Repo:** [Lanxing6480/dsh-galgame](https://github.com/Lanxing6480/dsh-galgame) · **License:** MIT · **Package:** [`@lanxing/dsh-galgame`](https://www.npmjs.com/package/@lanxing/dsh-galgame) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Lanxing6480/dsh-galgame/blob/HEAD/package.json)

### [dsh-image-skin](https://github.com/Jack-sun-learner/dsh-image-skin)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-image-skin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-image-skin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-image-skin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

图片皮肤插件：导入 PNG/JPG/WebP 自动生成主题配色（背景/强调色/高亮跟随图片主色调），并可选生成 Q 版宠物（程序化或 AI 生图）

```sh
dsh plugin --profile web add github:Jack-sun-learner/dsh-image-skin
```

**Repo:** [Jack-sun-learner/dsh-image-skin](https://github.com/Jack-sun-learner/dsh-image-skin) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Jack-sun-learner/dsh-image-skin/blob/HEAD/package.json)

### [dsh-kun-like-pet](https://github.com/liyupi/dsh-kun-like-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-kun-like-pet&scheme=dark"><img src="https://raw.githubusercontent.com/liyupi/dsh-kun-like-pet/main/docs/screenshot-working.png" width="360" alt="dsh-kun-like-pet preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-kun-like-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Kun Like desktop pet for the dsh Web UI: a corner companion that switches among 9 animations with the agent work state.

```sh
dsh plugin --profile web add github:liyupi/dsh-kun-like-pet
```

**Repo:** [liyupi/dsh-kun-like-pet](https://github.com/liyupi/dsh-kun-like-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-live2d-pets](https://github.com/cyanfish-x/dsh-live2d-pets)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-live2d-pets&scheme=dark"><img src="https://raw.githubusercontent.com/cyanfish-x/dsh-live2d-pets/HEAD/docs/media/hero.jpg" width="360" alt="dsh-live2d-pets preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-live2d-pets&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Live2D pet plugin for DeepSeek Harness: agent-state mirror plus interactive companionship with curated presets.

```sh
dsh plugin --profile web add github:cyanfish-x/dsh-live2d-pets
```

**Repo:** [cyanfish-x/dsh-live2d-pets](https://github.com/cyanfish-x/dsh-live2d-pets) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/cyanfish-x/dsh-live2d-pets/blob/HEAD/package.json)

### [dsh-maid-pet](https://github.com/PC2005-cloud/dsh-pet/tree/HEAD/dsh-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-maid-pet&scheme=dark"><img src="https://raw.githubusercontent.com/PC2005-cloud/dsh-pet/master/dsh-pet/assets/preview/%E5%BE%85%E6%9C%BA%E5%91%BC%E5%90%B8%E4%BC%91%E9%97%B2.gif" width="360" alt="dsh-maid-pet preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-maid-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Floating maid desktop pet for the dsh Web UI with idle breathing and random actions.

```sh
dsh plugin --profile web add github:PC2005-cloud/dsh-pet
```

**Repo:** [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet/tree/HEAD/dsh-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [dsh-pet/package.json#dsh.bundle](https://github.com/PC2005-cloud/dsh-pet/blob/HEAD/dsh-pet/package.json)

### [dsh-meep](https://github.com/omdsh-dev/dsh-meep)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-meep&scheme=dark"><img src="https://raw.githubusercontent.com/omdsh-dev/dsh-meep/HEAD/pet/expressions/gif/meep/meep.gif" width="360" alt="dsh-meep preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-meep&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Customizable independent-process desktop pet that stays quiet by default and pings at key moments.

```sh
dsh plugin --profile web add github:omdsh-dev/dsh-meep
```

**Repo:** [omdsh-dev/dsh-meep](https://github.com/omdsh-dev/dsh-meep) · **dsh:** 0.1.0-rc.6

### [dsh-nailong-desktop-pet](https://github.com/2002yxy/dsh-nailong-desktop-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-nailong-desktop-pet&scheme=dark"><img src="https://raw.githubusercontent.com/2002yxy/dsh-nailong-desktop-pet/HEAD/native/assets/presets/deepseek-whale-atlas.png" width="360" alt="dsh-nailong-desktop-pet preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-nailong-desktop-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Nailong desktop-pet companion for the DeepSeek Harness Web UI.

```sh
dsh plugin --profile web add github:2002yxy/dsh-nailong-desktop-pet
```

**Repo:** [2002yxy/dsh-nailong-desktop-pet](https://github.com/2002yxy/dsh-nailong-desktop-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/2002yxy/dsh-nailong-desktop-pet/blob/HEAD/package.json)

### [dsh-pet](https://github.com/zealot00/dsh-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pet&scheme=dark"><img src="https://raw.githubusercontent.com/zealot00/dsh-pet/main/docs/screenshot-scene.png" width="360" alt="dsh-pet preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Sprite-sheet desktop pet with agent-state animation, drag, alarm, pomodoro, sticky notes, and a right-click skin picker.

```sh
dsh plugin --profile web add github:zealot00/dsh-pet
```

**Repo:** [zealot00/dsh-pet](https://github.com/zealot00/dsh-pet) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/zealot00/dsh-pet/blob/HEAD/package.json)

### [dsh-pet-corner](https://github.com/omdsh-dev/dsh-pet-corner)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pet-corner&scheme=dark"><img src="https://raw.githubusercontent.com/omdsh-dev/dsh-pet-corner/HEAD/assets/cat_sleep%402x.png" width="360" alt="dsh-pet-corner preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pet-corner&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Pet corner for the dsh Web UI: a draggable cat, proxied pictures, favorites, and plugin-owned settings.

```sh
dsh plugin --profile web add github:omdsh-dev/dsh-pet-corner
```

**Repo:** [omdsh-dev/dsh-pet-corner](https://github.com/omdsh-dev/dsh-pet-corner) · **License:** BSD-3-Clause · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/omdsh-dev/dsh-pet-corner/blob/HEAD/package.json)

### [dsh-pet-flytomayday](https://github.com/FlytoMAYDAY80/dsh-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pet-flytomayday&scheme=dark"><img src="https://raw.githubusercontent.com/FlytoMAYDAY80/dsh-pet/HEAD/pixel-src-hd/preview-contact-sheet.png" width="360" alt="dsh-pet-flytomayday preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pet-flytomayday&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek Harness 桌宠：悬浮在桌面上的小鲸鱼，实时反映会话状态（工作中 / 需要确认 / 任务完成 / 空闲），支持零代码定制素材

```sh
dsh plugin --profile web add github:FlytoMAYDAY80/dsh-pet
```

**Repo:** [FlytoMAYDAY80/dsh-pet](https://github.com/FlytoMAYDAY80/dsh-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-pet-johlin](https://github.com/johlin/dsh-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pet-johlin&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-pet-johlin preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pet-johlin&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Standalone Cordis plugin template for DeepSeek Harness

```sh
dsh plugin --profile web add github:johlin/dsh-pet
```

**Repo:** [johlin/dsh-pet](https://github.com/johlin/dsh-pet) · **License:** BSD-3-Clause · **Package:** [`@your-scope/dsh-plugin-template`](https://www.npmjs.com/package/@your-scope/dsh-plugin-template) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/johlin/dsh-pet/blob/HEAD/package.json)

### [dsh-pet-live2d](https://github.com/YilunLi-999/dsh-pet-live2d)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pet-live2d&scheme=dark"><img src="https://raw.githubusercontent.com/YilunLi-999/dsh-pet-live2d/HEAD/frame-strips/all.png" width="360" alt="dsh-pet-live2d preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pet-live2d&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Desktop-pet companion for the DSH web GUI: hatch Codex-compatible sprite pets from an image, render them in the shell.overlay slot, and react to session state.

```sh
dsh plugin --profile web add github:YilunLi-999/dsh-pet-live2d
```

**Repo:** [YilunLi-999/dsh-pet-live2d](https://github.com/YilunLi-999/dsh-pet-live2d) · **License:** MIT · **Package:** [`dsh-pet`](https://www.npmjs.com/package/dsh-pet) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/YilunLi-999/dsh-pet-live2d/blob/HEAD/package.json)

### [dsh-pet-maid](https://github.com/skylar-fei/dsh-wechat-maid/tree/HEAD/packages/dsh-pet-maid)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pet-maid&scheme=dark"><img src="https://raw.githubusercontent.com/skylar-fei/dsh-wechat-maid/HEAD/docs/screenshots/%E6%A1%8C%E5%AE%A0%E9%9D%A2%E6%9D%BF.png" width="360" alt="dsh-pet-maid preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pet-maid&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH Web 插件合集：微信机器人（连接 + 主动消息/定时推送）+ 深蓝女仆桌宠，两个插件共享构建预设的单仓库。

```sh
dsh plugin --profile web add github:skylar-fei/dsh-wechat-maid
```

**Repo:** [skylar-fei/dsh-wechat-maid](https://github.com/skylar-fei/dsh-wechat-maid/tree/HEAD/packages/dsh-pet-maid) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [packages/dsh-pet-maid/package.json#dsh.bundle](https://github.com/skylar-fei/dsh-wechat-maid/blob/HEAD/packages/dsh-pet-maid/package.json)

### [dsh-pet-mathhyphen](https://github.com/mathhyphen/dsh-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pet-mathhyphen&scheme=dark"><img src="https://raw.githubusercontent.com/mathhyphen/dsh-pet/HEAD/assets/source/ChatGPT%20Image%202026%E5%B9%B48%E6%9C%8814%E6%97%A5%2021_21_29%20(2).png" width="360" alt="dsh-pet-mathhyphen preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pet-mathhyphen&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DeepSeek 桌宠（桌面置顶悬浮窗）：多宠物可切换、随 Harness 状态反应、支持自定义像素素材。A floating desktop pet for DeepSeek Harness with switchable pets and custom sprites.

```sh
dsh plugin --profile web add github:mathhyphen/dsh-pet
```

**Repo:** [mathhyphen/dsh-pet](https://github.com/mathhyphen/dsh-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/mathhyphen/dsh-pet/blob/HEAD/package.json)

### [dsh-pet-shura](https://github.com/brittanistrehlowll-oss/dsh-pet-shura)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pet-shura&scheme=dark"><img src="https://raw.githubusercontent.com/brittanistrehlowll-oss/dsh-pet-shura/HEAD/assets/spritesheet.webp" width="360" alt="dsh-pet-shura preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pet-shura&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Shura tiger desktop pet for the dsh Web UI: v2 spritesheet animation, drag and drop, look-at-mouse, and a settings panel.

```sh
dsh plugin --profile web add github:brittanistrehlowll-oss/dsh-pet-shura
```

**Repo:** [brittanistrehlowll-oss/dsh-pet-shura](https://github.com/brittanistrehlowll-oss/dsh-pet-shura) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/brittanistrehlowll-oss/dsh-pet-shura/blob/HEAD/package.json)

### [dsh-pet-zhuangfangyi](https://github.com/zealot00/dsh-pet-zhuangfangyi)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pet-zhuangfangyi&scheme=dark"><img src="https://raw.githubusercontent.com/zealot00/dsh-pet-zhuangfangyi/HEAD/assets/pet.png" width="360" alt="dsh-pet-zhuangfangyi preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pet-zhuangfangyi&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Chibi desktop pet for the dsh Web UI: idle float animation and click-to-speak bubbles, with a rebuild script to swap the PNG.

```sh
dsh plugin --profile web add github:zealot00/dsh-pet-zhuangfangyi
```

**Repo:** [zealot00/dsh-pet-zhuangfangyi](https://github.com/zealot00/dsh-pet-zhuangfangyi) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/zealot00/dsh-pet-zhuangfangyi/blob/HEAD/package.json)

### [dsh-pets](https://github.com/hellosz/dsh-pets)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pets&scheme=dark"><img src="https://raw.githubusercontent.com/hellosz/dsh-pets/HEAD/docs/pikachu-preview.png" width="360" alt="dsh-pets preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-pets&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Pikachu and Charmander overlay pets driven by agent state, with petdex-compatible sprite packs and a Settings pet section.

```sh
dsh plugin --profile web add github:hellosz/dsh-pets
```

**Repo:** [hellosz/dsh-pets](https://github.com/hellosz/dsh-pets) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/hellosz/dsh-pets/blob/HEAD/package.json)

### [dsh-plugin-pet](https://github.com/c-ling/dsh-plugin-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-pet&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-plugin-pet preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Overlay pet with six built-in SVG skins, custom image upload, and Codex spritesheet import, mood-linked to agent state.

```sh
dsh plugin --profile web add github:c-ling/dsh-plugin-pet
```

**Repo:** [c-ling/dsh-plugin-pet](https://github.com/c-ling/dsh-plugin-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/c-ling/dsh-plugin-pet/blob/HEAD/package.json)

### [dsh-plugin-pet-rs](https://github.com/HuanLinOTO/dsh-plugin-pet-rs)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-pet-rs&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-plugin-pet-rs preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-plugin-pet-rs&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Rust desktop pet: five whale states, dual SSE live push, transparent always-on-top window, and a tray icon.

```sh
dsh plugin --profile web add github:HuanLinOTO/dsh-plugin-pet-rs
```

**Repo:** [HuanLinOTO/dsh-plugin-pet-rs](https://github.com/HuanLinOTO/dsh-plugin-pet-rs) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [dsh-sprite-pet](https://github.com/skr311/dsh-codex-pet/tree/HEAD/packages/dsh-codex-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-sprite-pet&scheme=dark"><img src="https://raw.githubusercontent.com/skr311/dsh-codex-pet/HEAD/docs/assets/screenshot-webui.png" width="360" alt="dsh-sprite-pet preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-sprite-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Sprite-sheet desktop pet for the Web UI: import Codex-style pets, floating overlay render, library, and agent-state linkage.

```sh
dsh plugin --profile web add github:skr311/dsh-codex-pet
```

**Repo:** [skr311/dsh-codex-pet](https://github.com/skr311/dsh-codex-pet/tree/HEAD/packages/dsh-codex-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [packages/dsh-codex-pet/package.json#dsh.bundle](https://github.com/skr311/dsh-codex-pet/blob/HEAD/packages/dsh-codex-pet/package.json)

### [dsh-theme-kit](https://github.com/ink5897/dsh-theme-kit)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-kit&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-theme-kit preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-theme-kit&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

A DeepSeek Harness Web GUI appearance kit: 32 preset themes, custom backgrounds (wallpaper / glass / texture), per-zone text depth, and a keyboard desktop pet.

```sh
dsh plugin --profile web add github:ink5897/dsh-theme-kit
```

**Repo:** [ink5897/dsh-theme-kit](https://github.com/ink5897/dsh-theme-kit) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/ink5897/dsh-theme-kit/blob/HEAD/package.json)

### [dsh-ui-desktop-pet](https://github.com/jmctsh/dsh-ui-desktop-pet/tree/HEAD/ui-desktop-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ui-desktop-pet&scheme=dark"><img src="https://raw.githubusercontent.com/jmctsh/dsh-ui-desktop-pet/HEAD/banner.jpg" width="360" alt="dsh-ui-desktop-pet preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ui-desktop-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Draggable Live2D desktop pet floating in the Web UI overlay, with click speech and agent-state linkage.

```sh
dsh plugin --profile web add github:jmctsh/dsh-ui-desktop-pet
```

**Repo:** [jmctsh/dsh-ui-desktop-pet](https://github.com/jmctsh/dsh-ui-desktop-pet/tree/HEAD/ui-desktop-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [ui-desktop-pet/package.json#dsh.client](https://github.com/jmctsh/dsh-ui-desktop-pet/blob/HEAD/ui-desktop-pet/package.json)

### [dsh-ui-whale](https://github.com/omdsh-dev/dsh-ui-whale)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ui-whale&scheme=dark"><img src="https://raw.githubusercontent.com/omdsh-dev/dsh-ui-whale/main/docs/dsh-ui-whale-demo.gif" width="360" alt="dsh-ui-whale preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ui-whale&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Pixel whale in the session title bar that animates with agent state, spouts on turn complete, and hearts on click.

```sh
dsh plugin --profile web add github:omdsh-dev/dsh-ui-whale
```

**Repo:** [omdsh-dev/dsh-ui-whale](https://github.com/omdsh-dev/dsh-ui-whale) · **License:** BSD-3-Clause · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/omdsh-dev/dsh-ui-whale/blob/HEAD/package.json)

### [dsh-waterball-pet](https://github.com/sundusk/dsh-waterball-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-waterball-pet&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-waterball-pet preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-waterball-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

SVG water-ball companion: halo color and motion follow agent idle/think/tool/done/error, with size and drag in plugin settings.

```sh
dsh plugin --profile web add github:sundusk/dsh-waterball-pet
```

**Repo:** [sundusk/dsh-waterball-pet](https://github.com/sundusk/dsh-waterball-pet) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/sundusk/dsh-waterball-pet/blob/HEAD/package.json)

### [dsh-webUI-pets](https://github.com/pineapple880066/dsh-webUI-pets/tree/HEAD/packages/client/ui-desktop-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-webUI-pets&scheme=dark"><img src="https://raw.githubusercontent.com/pineapple880066/dsh-webUI-pets/main/assets/webui-preview.png" width="360" alt="dsh-webUI-pets preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-webUI-pets&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Four Codex-style overlay pets (Doki, Crimson Flower, Blue Ribbon, Deep Sea): 12-frame sprites, drag, minimize, and cycle.

```sh
dsh plugin --profile web add github:pineapple880066/dsh-webUI-pets
```

**Repo:** [pineapple880066/dsh-webUI-pets](https://github.com/pineapple880066/dsh-webUI-pets/tree/HEAD/packages/client/ui-desktop-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [packages/client/ui-desktop-pet/package.json#dsh.bundle](https://github.com/pineapple880066/dsh-webUI-pets/blob/HEAD/packages/client/ui-desktop-pet/package.json)

### [dsh-whale-girl-pet](https://github.com/Er1c0v0/dsh-whale-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-whale-girl-pet&scheme=dark"><img src="https://raw.githubusercontent.com/Er1c0v0/dsh-whale-pet/main/docs/working-preview.gif" width="360" alt="dsh-whale-girl-pet preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-whale-girl-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Whale-girl overlay pet for the dsh Web UI: idle, working, needs-input, ready, and blocked states, with drag and a clickable status panel.

```sh
dsh plugin --profile web add github:Er1c0v0/dsh-whale-pet
```

**Repo:** [Er1c0v0/dsh-whale-pet](https://github.com/Er1c0v0/dsh-whale-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Er1c0v0/dsh-whale-pet/blob/HEAD/package.json)

### [dsh-whale-pet](https://github.com/lglglglgy/dsh-whale-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-whale-pet&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-whale-pet preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-whale-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Blue whale overlay that swims, tracks the cursor, sprays water on click, and can be dizzy-spun then tapped awake.

```sh
dsh plugin --profile web add github:lglglglgy/dsh-whale-pet
```

**Repo:** [lglglglgy/dsh-whale-pet](https://github.com/lglglglgy/dsh-whale-pet) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/lglglglgy/dsh-whale-pet/blob/HEAD/package.json)

### [dsh-whale-pet-aceice](https://github.com/aceice01/dsh-whale-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-whale-pet-aceice&scheme=dark"><img src="https://raw.githubusercontent.com/aceice01/dsh-whale-pet/HEAD/docs/social-preview.png" width="360" alt="dsh-whale-pet-aceice preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-whale-pet-aceice&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Whale-girl desktop pet plus a Web floating pet, with voice, interaction, and task-done pings.

```sh
dsh plugin --profile web add github:aceice01/dsh-whale-pet
```

**Repo:** [aceice01/dsh-whale-pet](https://github.com/aceice01/dsh-whale-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/aceice01/dsh-whale-pet/blob/HEAD/package.json)

### [dsh-whale-pet-rongzi5](https://github.com/rongzi5/dsh-whale-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-whale-pet-rongzi5&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-whale-pet-rongzi5 preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-whale-pet-rongzi5&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Frame-wide 3D whale desktop pet with edge habitat, hover reactions, and smooth shape-aware dragging

```sh
dsh plugin --profile web add github:rongzi5/dsh-whale-pet
```

**Repo:** [rongzi5/dsh-whale-pet](https://github.com/rongzi5/dsh-whale-pet) · **License:** MIT · **Package:** [`@deepseek-ai/dsh-client-ui-whale-pet`](https://www.npmjs.com/package/@deepseek-ai/dsh-client-ui-whale-pet) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.client](https://github.com/rongzi5/dsh-whale-pet/blob/HEAD/package.json)

### [emoji-desktop-pet](https://github.com/Gcsimple/Emoji_Desktop_Pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=emoji-desktop-pet&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="emoji-desktop-pet preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=emoji-desktop-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Draggable emoji desktop pet for the Web UI, built as a dynamic Cordis plugin.

```sh
dsh plugin --profile web add github:Gcsimple/Emoji_Desktop_Pet
```

**Repo:** [Gcsimple/Emoji_Desktop_Pet](https://github.com/Gcsimple/Emoji_Desktop_Pet) · **License:** MIT · **dsh:** 0.1.0-rc.6

### [harness-pet](https://github.com/cakeni/harness-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=harness-pet&scheme=dark"><img src="https://raw.githubusercontent.com/cakeni/harness-pet/HEAD/assets/whale/whale-animation-v6.webp" width="360" alt="harness-pet preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=harness-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Pixel whale companion with nine agent states, a live prompt/reply card, drag, and an optional always-on-top picture-in-picture window.

```sh
dsh plugin --profile web add github:cakeni/harness-pet
```

**Repo:** [cakeni/harness-pet](https://github.com/cakeni/harness-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/cakeni/harness-pet/blob/HEAD/package.json)

### [whale-girl](https://github.com/vlln/whale-girl)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=whale-girl&scheme=dark"><img src="https://raw.githubusercontent.com/vlln/whale-girl/main/docs/preview/idle.gif" width="360" alt="whale-girl preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=whale-girl&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

DSH Web GUI desktop-pet plugin (QQ pet form): floating companion. Theme/skin-shaped listing.

```sh
dsh plugin --profile web add github:vlln/whale-girl
```

**Repo:** [vlln/whale-girl](https://github.com/vlln/whale-girl) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/vlln/whale-girl/blob/HEAD/package.json)

### [whale-girl-plus](https://github.com/Henry91200/whale-girl-plus)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=whale-girl-plus&scheme=dark"><img src="https://raw.githubusercontent.com/Henry91200/whale-girl-plus/HEAD/.dsh-plugin/assets/characters/whale-girl-office/idle.png" width="360" alt="whale-girl-plus preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=whale-girl-plus&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Whale-girl desk pet for DeepSeek Harness with extra outfits, idle animations, and configurable work-rhythm behavior.

```sh
dsh plugin --profile web add github:Henry91200/whale-girl-plus
```

**Repo:** [Henry91200/whale-girl-plus](https://github.com/Henry91200/whale-girl-plus) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Henry91200/whale-girl-plus/blob/HEAD/package.json)

### [yuhao-pet](https://github.com/dlpufan/yuhao-pet)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=yuhao-pet&scheme=dark"><img src="https://raw.githubusercontent.com/dlpufan/yuhao-pet/HEAD/assets/full.webp" width="360" alt="yuhao-pet preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=yuhao-pet&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Floating Yuhao desk pet for the DeepSeek Harness web GUI, with drag, feed, play, work, and a token-points shop.

```sh
dsh plugin --profile web add github:dlpufan/yuhao-pet
```

**Repo:** [dlpufan/yuhao-pet](https://github.com/dlpufan/yuhao-pet) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/dlpufan/yuhao-pet/blob/HEAD/package.json)

## Fun / extras

Gags and extras that restyle the whole Web UI for laughs. Not `--dsw-*` token skins — still part of the dive.

### [dafy-whale-theme](https://github.com/DViridescent/dafy-whale-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dafy-whale-theme&scheme=dark"><img src="https://raw.githubusercontent.com/DViridescent/dafy-whale-theme/main/preview.png" width="360" alt="dafy-whale-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dafy-whale-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Ocean-blue DeepSeek Harness skin with swimming fish, rising bubbles, a corner mascot, and token palettes.

```sh
dsh plugin --profile web add github:DViridescent/dafy-whale-theme
```

**Repo:** [DViridescent/dafy-whale-theme](https://github.com/DViridescent/dafy-whale-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/DViridescent/dafy-whale-theme/blob/HEAD/package.json)

### [dsh-ads](https://github.com/Nagi-ovo/dsh-ads)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ads&scheme=dark"><img src="https://raw.githubusercontent.com/Nagi-ovo/dsh-ads/main/assets/screenshot.webp" width="360" alt="dsh-ads preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-ads&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

2005-portal gag plugin that restyles the whole Web UI with fake ads — sidebar banners, in-thread plugs, corner popups. Not a --dsw-* token skin.

```sh
dsh plugin --profile web add github:Nagi-ovo/dsh-ads
```

**Repo:** [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/Nagi-ovo/dsh-ads/blob/HEAD/package.json)

### [dsh-cyber-particle](https://github.com/AKS1st/dsh-cyber-particle)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-cyber-particle&scheme=dark"><img src="https://raw.githubusercontent.com/AKS1st/dsh-cyber-particle/HEAD/assets/image_light.png" width="360" alt="dsh-cyber-particle preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-cyber-particle&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Cyber particle overlay for the DeepSeek Harness web GUI.

```sh
dsh plugin --profile web add github:AKS1st/dsh-cyber-particle
```

**Repo:** [AKS1st/dsh-cyber-particle](https://github.com/AKS1st/dsh-cyber-particle) · **License:** MIT · **Package:** [`cyber-particle`](https://www.npmjs.com/package/cyber-particle) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/AKS1st/dsh-cyber-particle/blob/HEAD/package.json)

### [dsh-hanami-theme](https://github.com/wangjacks/dsh-hanami-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-hanami-theme&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-hanami-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-hanami-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Hanami 花見: six anime colour presets over the 13 official theme tokens, falling-petal ambience, and a Live2D companion with outfit and model switching.

```sh
In a cordis-preset session: cordis_define with code.client = theme.client.js, then cordis_run the returned pluginId
```

**Repo:** [wangjacks/dsh-hanami-theme](https://github.com/wangjacks/dsh-hanami-theme) · **License:** GPL-3.0 · **dsh:** 0.1.0-rc.6

*Dynamic Cordis plugin: installed with cordis_define/cordis_run from a 创造模式 (cordis preset) session, not `dsh plugin add`. Session-scoped — a page refresh drops it.*

### [dsh-lulu-theme](https://github.com/shaoqing404/dsh-lulu-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-lulu-theme&scheme=dark"><img src="https://raw.githubusercontent.com/shaoqing404/dsh-lulu-theme/main/assets/lulu-compact-sheet.png" width="360" alt="dsh-lulu-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-lulu-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Capybara Lulu skin for the dsh web UI: cream-coffee light and warm-night dark token palettes, plus a corner pet with wave and sway animations.

```sh
dsh plugin --profile web add github:shaoqing404/dsh-lulu-theme
```

**Repo:** [shaoqing404/dsh-lulu-theme](https://github.com/shaoqing404/dsh-lulu-theme) · **dsh:** 0.1.0-rc.6

### [dsh-meow-cat](https://github.com/dsh-pub/dsh-meow-cat)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-meow-cat&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-meow-cat preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-meow-cat&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

A cat runs across the bottom of the DeepSeek Harness web UI with a synthesized meow when a conversation turn ends.

```sh
dsh plugin --profile web add github:dsh-pub/dsh-meow-cat
```

**Repo:** [dsh-pub/dsh-meow-cat](https://github.com/dsh-pub/dsh-meow-cat) · **License:** MIT · **Package:** [`dsh-meow-cat`](https://www.npmjs.com/package/dsh-meow-cat) · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/dsh-pub/dsh-meow-cat/blob/HEAD/package.json)

### [dsh-skin-mojing](https://github.com/Gyanano/dsh-skin-mojing)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-mojing&scheme=dark"><img src="https://raw.githubusercontent.com/Gyanano/dsh-skin-mojing/HEAD/docs/screenshots/home-dawn.jpg" width="360" alt="dsh-skin-mojing preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-skin-mojing&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Oil-painted whale-girl skin for the DeepSeek Harness web UI.

```sh
dsh plugin --profile web add github:Gyanano/dsh-skin-mojing
```

**Repo:** [Gyanano/dsh-skin-mojing](https://github.com/Gyanano/dsh-skin-mojing) · **License:** MIT · **dsh:** 0.1.0-rc.6

*repository returns 404 as of 2026-08-19*

### [dsh-whale-bg](https://github.com/gooosie/dsh-whale-bg)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-whale-bg&scheme=dark"><img src="docs/assets/whale-mark.svg" width="360" alt="dsh-whale-bg preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=dsh-whale-bg&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens).

Particle-whale Web UI background with cursor lighting, idle swimming, and scroll-aware fade.

```sh
dsh plugin --profile web add github:gooosie/dsh-whale-bg
```

**Repo:** [gooosie/dsh-whale-bg](https://github.com/gooosie/dsh-whale-bg) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#dsh.bundle](https://github.com/gooosie/dsh-whale-bg/blob/HEAD/package.json)

### [liuli-theme](https://github.com/LilycleHeart/liuli-theme)

<a href="https://dsh.works/awesome-dsh-themes/preview.html?theme=liuli-theme&scheme=dark"><img src="https://raw.githubusercontent.com/LilycleHeart/liuli-theme/HEAD/docs/preview-color-light.png" width="360" alt="liuli-theme preview"></a>

**[Live preview](https://dsh.works/awesome-dsh-themes/preview.html?theme=liuli-theme&scheme=dark)** — full-page dsh web chrome (0.1.0-rc.6 hashed classes + `--dsw-*` tokens) plus this skin's override sheet.

DenpaPush-style glass theme for the DeepSeek Harness web UI, with M3 dynamic color, wallpaper material, and day/night palettes.

```sh
dsh plugin --profile web add github:LilycleHeart/liuli-theme
```

**Repo:** [LilycleHeart/liuli-theme](https://github.com/LilycleHeart/liuli-theme) · **License:** MIT · **dsh:** 0.1.0-rc.6 · **Proof:** [package.json#peerDependencies.@deepseek-ai/dsh-client-ui-theme](https://github.com/LilycleHeart/liuli-theme/blob/HEAD/package.json)

## Live gallery

The [deep-seek-universe gallery](https://dsh.works/awesome-dsh-themes/) lives on GitHub Pages (`/docs`). Same entries. More water. Search the trench, filter by category / live / verified, sort by Fresh catch, Live first, or A–Z. Cards show a real source-repo shot when we have one, or a drawn whale if we do not. Themes with a `previewCss` sheet get a **live** badge — Dive opens that skin in a floating window on the gallery (Open full still goes to the full-page preview). The ocean backdrop is a random screenshot from the registry itself, credited bottom-right; "Dive again" rerolls it. GitHub strips iframes, so the README uses thumbnails and links.

## Roadmap

Shorter install is a [plan](ROADMAP.md), not a fake CLI. Today the real command is already `dsh plugin --profile web add github:owner/repo`.

## Add a theme

Open a PR against [`data/themes.json`](data/themes.json) only; the README and `docs/themes.json` are regenerated. See [CONTRIBUTING.md](CONTRIBUTING.md). A theme here is a ThemeRuntime, a `--dsw-*` override set, a skin that actually restyles the dsh Web UI, a companion that lives beside it, or a fun extra. The ThemeRuntime package is an extension point, not a store, and this list is not one either. A real preview image helps a lot. If you ship a CSS override sheet, add `previewCss` so the live window can wear it. Optional `install` overrides the derived one-liner; see [ROADMAP.md](ROADMAP.md).

## License

MIT. **Not affiliated with DeepSeek.**

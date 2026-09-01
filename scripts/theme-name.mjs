// The name gate, in one place because two scripts disagreed about who owned it.
//
// discover.mjs is deliberately name-first: a launcher and a token-balance HUD
// both embed the web UI and both ship `--dsw-*` CSS, so stylesheet contents
// alone are not evidence of a skin. The repo has to say what it is.
//
// triage.mjs then leaned on that: it admits a bare `package.json#dsh.bundle`
// on the grounds that "the repo already passed the name gate". But routed rows
// -- the ones the plugins registry hands over -- skip the gate on purpose
// (discover.mjs: "the routing IS the gate"), so that sentence was false for a
// whole lane, and a `dsh.bundle` with no stylesheet anywhere admitted plugins.
//
// Both scripts import this now, so the gate can only be one thing.

export const THEME_NAME = /theme|skin|wallpaper|background|palette|colou?rscheme|配色|主题|皮肤|壁纸|背景|换肤|(^|[-_])bg([-_]|$)/i;
export const THEME_TEXT = /\b(theme|skin|colou?r ?scheme|palette|wallpaper|dark mode|light mode)\b|主题|皮肤|配色|壁纸|换肤/i;

// Homonyms. `palette` is the one that bites: a command palette is a launcher,
// not a colour palette, and `dsh-command-palette` passed both regexes above on
// the strength of the word alone. Checked against the text, not the name, so a
// skin that happens to mention a command palette in passing is unaffected.
const NOT_A_THEME = /\bcommand[\s-]?palette\b|命令面板/i;

// `text` is everything the repo says about itself that we have: repo name,
// plus whatever description the discovery lane carried.
export function looksLikeATheme(name, text) {
  if (NOT_A_THEME.test(text)) return false;
  return THEME_NAME.test(name) && THEME_TEXT.test(text);
}

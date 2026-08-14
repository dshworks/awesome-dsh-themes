const NACHONEKO = "https://raw.githubusercontent.com/TheMyceliumOfAntan/dsh-nachoneko-theme/main/assets/screenshot.png";
const SCENES = ["glow", "abyss", "nachoneko"];
const CAT_LABEL = { runtime: "runtime", tokens: "tokens", skin: "skins", companion: "companions", fun: "fun" };

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

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

function liveHref(t, scheme) {
  const params = new URLSearchParams({ theme: t.name, scheme });
  return `preview.html?${params}`;
}

function installCmd(t) {
  if (t.install) return t.install;
  if (t.official || t.kind === "runtime") return null;
  return `dsh plugin --profile web add github:${t.repo}`;
}

function badge(cls, text) {
  return `<span class="badge ${cls}">${esc(text)}</span>`;
}

function whalePlaceholder() {
  return `<div class="ph" aria-hidden="true">
    <svg class="ph-whale" viewBox="0 0 240 80">
      <path d="M8 48c14-18 46-28 86-22 28 4 56 2 80-8 16-6 32-4 40 8 4 6 2 12-6 14-16-4-32 2-48 12-20 14-52 18-84 14C50 64 24 68 8 48z"/>
      <path d="M214 26c16-16 36-20 56-16-8 12-6 20 4 28-18-4-34 4-50 8-2-8-4-14-10-20z"/>
      <path d="M70 52c4 12 16 18 32 16-12-8-18-14-20-20z"/>
      <circle cx="36" cy="42" r="2.2" class="eye"/>
    </svg>
    <small>shot coming later</small>
  </div>`;
}

function card(t, scheme) {
  const cat = categoryOf(t);
  const live = liveHref(t, scheme);
  const license = t.license ? ` · ${esc(t.license)}` : "";
  const cmd = installCmd(t);
  const thumb = t.preview
    ? `<img src="${esc(t.preview)}" alt="${esc(t.name)} preview" loading="lazy">`
    : whalePlaceholder();
  const install = cmd
    ? `<p class="install"><code>${esc(cmd)}</code><button type="button" class="copy" data-copy="${esc(cmd)}">Copy</button></p>`
    : "";
  return `<article class="card" data-category="${esc(cat)}">
    <a class="thumb" href="${esc(live)}" aria-label="Live preview of ${esc(t.name)}">${thumb}</a>
    <div class="body">
      <div class="badges">${badge("cat", CAT_LABEL[cat] || cat)}</div>
      <h2><a href="${esc(repoUrl(t))}" rel="noopener">${esc(t.name)}</a></h2>
      <p>${esc(t.description)}</p>
      ${install}
      <p class="meta"><a class="dive" href="${esc(live)}">Dive</a> · ${esc(t.verifiedAgainst)}${license}</p>
    </div>
  </article>`;
}

function render(themes, filter, scheme) {
  const root = document.getElementById("gallery");
  const rows = themes.filter((t) => filter === "all" || categoryOf(t) === filter);
  if (!rows.length) {
    root.innerHTML = `<p class="empty">Nothing in this trench yet. The sea is young.</p>`;
    return;
  }
  root.innerHTML = rows.map((t) => card(t, scheme)).join("");
}

function currentScheme() {
  return document.body.dataset.scheme === "light" ? "light" : "dark";
}

function setScheme(scheme, themes, filter) {
  document.body.dataset.scheme = scheme;
  document.querySelectorAll("[data-scheme]").forEach((el) => {
    const on = el.dataset.scheme === scheme;
    el.classList.toggle("is-on", on);
    el.setAttribute("aria-pressed", on ? "true" : "false");
  });
  render(themes, filter, scheme);
}

function setFilter(btn, themes) {
  document.querySelectorAll(".chip[data-filter]").forEach((el) => {
    const on = el === btn;
    el.classList.toggle("is-on", on);
    el.setAttribute("aria-pressed", on ? "true" : "false");
  });
  render(themes, btn.dataset.filter, currentScheme());
}

function setScene(name) {
  document.body.dataset.scene = name;
  const photo = document.getElementById("photo");
  photo.style.backgroundImage = name === "nachoneko" ? `url("${NACHONEKO}")` : "";
}

function diveAgain() {
  const cur = document.body.dataset.scene;
  const rest = SCENES.filter((s) => s !== cur);
  setScene(rest[Math.floor(Math.random() * rest.length)]);
}

function bubbles() {
  const host = document.getElementById("bubbles");
  host.innerHTML = "";
  for (let i = 0; i < 18; i++) {
    const s = document.createElement("span");
    s.style.setProperty("--x", `${Math.random() * 100}%`);
    s.style.setProperty("--s", `${6 + Math.random() * 10}px`);
    s.style.setProperty("--t", `${10 + Math.random() * 14}s`);
    s.style.setProperty("--d", `${Math.random() * 10}s`);
    host.appendChild(s);
  }
}

function heart(x, y) {
  const el = document.createElement("div");
  el.className = "heart";
  el.textContent = "❤️";
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1100);
}

async function copyText(text, btn) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  if (btn) {
    btn.classList.add("is-copied");
    btn.textContent = "Copied";
    setTimeout(() => {
      btn.classList.remove("is-copied");
      btn.textContent = "Copy";
    }, 1400);
  }
}

async function loadThemes() {
  if (window.__THEMES__?.themes) return window.__THEMES__;
  const res = await fetch("./themes.json");
  if (!res.ok) throw new Error("themes.json missing");
  return res.json();
}

async function boot() {
  bubbles();
  setScene(SCENES[Math.floor(Math.random() * SCENES.length)]);
  document.body.dataset.scheme = "dark";
  const data = await loadThemes();
  const themes = data.themes || [];
  let filter = "all";
  render(themes, filter, "dark");
  const chips = [...document.querySelectorAll(".chip[data-filter]")];
  chips.forEach((btn) => btn.addEventListener("click", () => {
    filter = btn.dataset.filter;
    setFilter(btn, themes);
  }));
  document.querySelector(".filters").addEventListener("keydown", (ev) => {
    if (ev.key !== "ArrowRight" && ev.key !== "ArrowLeft") return;
    const i = chips.indexOf(document.activeElement);
    if (i < 0) return;
    ev.preventDefault();
    const next = chips[(i + (ev.key === "ArrowRight" ? 1 : chips.length - 1)) % chips.length];
    next.focus();
    filter = next.dataset.filter;
    setFilter(next, themes);
  });
  document.querySelectorAll("[data-scheme]").forEach((btn) => {
    btn.addEventListener("click", () => setScheme(btn.dataset.scheme, themes, filter));
  });
  document.getElementById("dive").addEventListener("click", diveAgain);
  document.getElementById("whale").addEventListener("click", (ev) => {
    heart(ev.clientX, ev.clientY);
  });
  document.getElementById("gallery").addEventListener("click", (ev) => {
    const btn = ev.target.closest(".copy");
    if (!btn) return;
    ev.preventDefault();
    copyText(btn.dataset.copy || "", btn);
  });
}

boot().catch((err) => {
  document.getElementById("gallery").innerHTML = `<p class="empty">The current dragged us off course. ${esc(err.message)}</p>`;
});

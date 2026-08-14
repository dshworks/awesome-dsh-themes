const NACHONEKO = "https://raw.githubusercontent.com/TheMyceliumOfAntan/dsh-nachoneko-theme/main/assets/screenshot.png";
const SCENES = ["glow", "abyss", "nachoneko"];
const CAT_LABEL = { runtime: "runtime", tokens: "tokens", skin: "skins", companion: "companions" };

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

function previewSrc(t, scheme) {
  const params = new URLSearchParams({ scheme });
  if (t.previewCss) params.set("css", t.previewCss);
  return `preview.html?${params}`;
}

function badge(cls, text) {
  return `<span class="badge ${cls}">${text}</span>`;
}

function card(t, scheme) {
  const cat = categoryOf(t);
  const src = previewSrc(t, scheme);
  const license = t.license ? ` · ${t.license}` : "";
  const shot = t.preview
    ? `<a class="shot" href="${t.preview}" rel="noopener">photo</a>`
    : "";
  return `<article class="card" data-category="${cat}">
    <div class="thumb">
      <iframe class="live-preview" title="${t.name} live preview" src="${src}" sandbox="allow-scripts allow-same-origin" loading="lazy"></iframe>
    </div>
    <div class="body">
      <div class="badges">${badge("cat", CAT_LABEL[cat] || cat)}</div>
      <h2><a href="${repoUrl(t)}" rel="noopener">${t.name}</a></h2>
      <p>${t.description}</p>
      <p class="meta"><a href="${src}" rel="noopener">Live preview</a> · ${t.verifiedAgainst}${license}${shot ? " · " + shot : ""}</p>
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
  const frames = [...document.querySelectorAll("iframe.live-preview")];
  if (!frames.length) {
    render(themes, filter, scheme);
    return;
  }
  frames.forEach((iframe) => {
    try { iframe.contentWindow.postMessage({ scheme }, "*"); } catch {}
    const url = new URL(iframe.getAttribute("src"), location.href);
    url.searchParams.set("scheme", scheme);
    iframe.setAttribute("src", url.pathname + url.search);
  });
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
}

boot().catch((err) => {
  document.getElementById("gallery").innerHTML = `<p class="empty">The current dragged us off course. ${err.message}</p>`;
});

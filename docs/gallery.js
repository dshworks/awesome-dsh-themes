const NACHONEKO = "https://raw.githubusercontent.com/TheMyceliumOfAntan/dsh-nachoneko-theme/main/assets/screenshot.png";
const SCENES = ["glow", "abyss", "nachoneko"];

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

function hash(s) {
  let h = 0;
  for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h;
}

async function loadThemes() {
  if (window.__THEMES__?.themes) return window.__THEMES__;
  const res = await fetch("./themes.json");
  if (!res.ok) throw new Error("themes.json missing");
  return res.json();
}

function placeholder(t) {
  const h = hash(t.name);
  const a = 190 + (h % 40);
  const b = 200 + ((h >> 5) % 40);
  const label = t.official ? "official runtime" : (categoryOf(t) === "companion" ? "companion" : "no screenshot yet");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400" role="img" aria-label="Drawn placeholder for ${t.name}">
    <defs>
      <linearGradient id="bg${h}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="hsl(${a},45%,16%)"/>
        <stop offset="100%" stop-color="hsl(${b},40%,8%)"/>
      </linearGradient>
    </defs>
    <rect width="640" height="400" fill="url(#bg${h})"/>
    <circle cx="480" cy="90" r="70" fill="#7ef0ff" opacity=".12"/>
    <path fill="#071018" opacity=".88" d="M90 230c40-40 130-58 230-42 70 10 140 4 200-16 30-10 60-6 74 16-40-4-78 16-120 34-70 30-170 40-260 28-60-8-110 2-150 12-16 4-24-8-14-32z"/>
    <path fill="#071018" opacity=".88" d="M594 188c28-28 62-34 96-26-10 20-8 32 8 46-30-6-58 8-84 16-4-12-8-22-20-36z"/>
    <circle cx="160" cy="210" r="5" fill="#7ef0ff" opacity=".7"/>
    <text x="40" y="350" fill="#d6f6ff" font-size="28" font-family="Syne, Trebuchet MS, sans-serif" font-weight="800">${t.name}</text>
    <text x="40" y="378" fill="#9bb8c6" font-size="16" font-family="Nunito, sans-serif">${label}</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function badge(cls, text) {
  return `<span class="badge ${cls}">${text}</span>`;
}

function card(t) {
  const cat = categoryOf(t);
  const official = t.official ? badge("official", "official") : badge("unofficial", "unofficial");
  const status = badge(t.status || "unverified", t.status || "unverified");
  const catBadge = badge("cat", cat);
  const src = t.preview || placeholder(t);
  const alt = t.preview ? `${t.name} preview` : `Drawn whale placeholder for ${t.name}`;
  const license = t.license ? ` · ${t.license}` : "";
  return `<article class="card" data-category="${cat}">
    <a class="thumb" href="${repoUrl(t)}" rel="noopener">
      <img src="${src}" alt="${alt}" width="640" height="400" loading="lazy">
    </a>
    <div class="body">
      <div class="badges">${official}${status}${catBadge}</div>
      <h2><a href="${repoUrl(t)}" rel="noopener">${t.name}</a></h2>
      <p>${t.description}</p>
      <p class="meta">${t.status === "verified" ? t.verifiedAgainst : "unverified (" + t.verifiedAgainst + ")"}${license}</p>
    </div>
  </article>`;
}

function render(themes, filter) {
  const root = document.getElementById("gallery");
  const rows = themes.filter((t) => filter === "all" || categoryOf(t) === filter);
  if (!rows.length) {
    root.innerHTML = `<p class="empty">Nothing in this trench yet. The sea is young.</p>`;
    return;
  }
  root.innerHTML = rows.map(card).join("");
}

function setFilter(btn, themes) {
  document.querySelectorAll(".chip").forEach((el) => {
    const on = el === btn;
    el.classList.toggle("is-on", on);
    el.setAttribute("aria-pressed", on ? "true" : "false");
  });
  render(themes, btn.dataset.filter);
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

async function boot() {
  bubbles();
  setScene(SCENES[Math.floor(Math.random() * SCENES.length)]);
  const data = await loadThemes();
  const themes = data.themes || [];
  render(themes, "all");
  const chips = [...document.querySelectorAll(".chip")];
  chips.forEach((btn) => btn.addEventListener("click", () => setFilter(btn, themes)));
  document.querySelector(".filters").addEventListener("keydown", (ev) => {
    if (ev.key !== "ArrowRight" && ev.key !== "ArrowLeft") return;
    const i = chips.indexOf(document.activeElement);
    if (i < 0) return;
    ev.preventDefault();
    const next = chips[(i + (ev.key === "ArrowRight" ? 1 : chips.length - 1)) % chips.length];
    next.focus();
    setFilter(next, themes);
  });
  document.getElementById("dive").addEventListener("click", diveAgain);
  document.getElementById("whale").addEventListener("click", (ev) => {
    heart(ev.clientX, ev.clientY);
  });
}

boot().catch((err) => {
  document.getElementById("gallery").innerHTML = `<p class="empty">The current dragged us off course. ${err.message}</p>`;
});

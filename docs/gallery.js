const GRADIENT_SCENES = ["glow", "abyss"];
const CAT_LABEL = { runtime: "runtime", tokens: "tokens", skin: "skins", companion: "companions", fun: "fun" };

const state = {
  filter: "all",
  query: "",
  sort: "newest",
  liveOnly: false,
  verifiedOnly: false,
  themes: [],
  scene: null,
};

const porthole = {
  root: null,
  win: null,
  frame: null,
  title: null,
  full: null,
  opener: null,
  theme: null,
};

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

function hasLive(t) {
  return Boolean(t.previewCss);
}

function liveHref(t, scheme, embed) {
  const params = new URLSearchParams({ theme: t.name, scheme });
  if (embed) params.set("embed", "1");
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
  const live = hasLive(t);
  const license = t.license ? ` · ${esc(t.license)}` : "";
  const cmd = installCmd(t);
  const shot = t.preview
    ? `<img src="${esc(t.preview)}" alt="${esc(t.name)} preview" loading="lazy">`
    : whalePlaceholder();
  const install = cmd
    ? `<p class="install"><code>${esc(cmd)}</code><button type="button" class="copy" data-copy="${esc(cmd)}">Copy</button></p>`
    : "";
  const badges = [badge("cat", CAT_LABEL[cat] || cat)];
  if (live) badges.push(badge("live", "live"));
  if (t.status === "verified") badges.push(badge("verified", "verified"));
  const thumb = live
    ? `<a class="thumb" href="${esc(liveHref(t, scheme))}" aria-label="Live preview of ${esc(t.name)}">${shot}</a>`
    : `<div class="thumb">${shot}</div>`;
  const dive = live
    ? `<a class="dive" href="${esc(liveHref(t, scheme))}">Dive</a> · `
    : "";
  return `<article class="card" data-category="${esc(cat)}" data-theme="${esc(t.name)}"${live ? ' data-live="1"' : ""}>
    ${thumb}
    <div class="body">
      <div class="badges">${badges.join("")}</div>
      <h2><a href="${esc(repoUrl(t))}" rel="noopener">${esc(t.name)}</a></h2>
      <p>${esc(t.description)}</p>
      ${install}
      <p class="meta">${dive}${esc(t.verifiedAgainst)}${license}</p>
    </div>
  </article>`;
}

const SORTS = {
  newest: (a, b) => String(b.added || "").localeCompare(String(a.added || "")) || a.name.localeCompare(b.name),
  name: (a, b) => a.name.localeCompare(b.name),
  live: (a, b) => (hasLive(b) - hasLive(a)) || SORTS.newest(a, b),
};

function applyView() {
  const q = state.query.trim().toLowerCase();
  const rows = state.themes.filter((t) => {
    if (state.filter !== "all" && categoryOf(t) !== state.filter) return false;
    if (state.liveOnly && !hasLive(t)) return false;
    if (state.verifiedOnly && t.status !== "verified") return false;
    if (q) {
      const hay = `${t.name} ${t.description || ""} ${t.repo || ""}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
  rows.sort(SORTS[state.sort] || SORTS.newest);
  return rows;
}

function renderStats(shown) {
  const el = document.getElementById("stats");
  if (!el) return;
  const all = state.themes;
  const filtered = shown.length !== all.length;
  el.textContent = filtered
    ? `${shown.length} of ${all.length} lanterns`
    : `${all.length} lanterns · ${all.filter(hasLive).length} live · ${all.filter((t) => t.status === "verified").length} verified`;
}

function render() {
  const root = document.getElementById("gallery");
  const rows = applyView();
  renderStats(rows);
  if (!rows.length) {
    root.innerHTML = `<p class="empty">Nothing in this trench yet. The sea is young.</p>`;
    return;
  }
  const scheme = currentScheme();
  root.innerHTML = rows.map((t) => card(t, scheme)).join("");
}

function currentScheme() {
  return document.body.dataset.scheme === "light" ? "light" : "dark";
}

function applySchemeChips(scheme) {
  document.body.dataset.scheme = scheme;
  document.querySelectorAll("[data-scheme]").forEach((el) => {
    const on = el.dataset.scheme === scheme;
    el.classList.toggle("is-on", on);
    el.setAttribute("aria-pressed", on ? "true" : "false");
  });
}

function setScheme(scheme) {
  applySchemeChips(scheme);
  render();
  if (porthole.theme) syncPorthole(scheme);
}

function scenePool() {
  // Gradient moods plus every theme in the registry that ships a screenshot:
  // the backdrop is always something real from the sea floor.
  const shots = state.themes.filter((t) => t.preview);
  return [...GRADIENT_SCENES.map((g) => ({ kind: "gradient", key: g })),
          ...shots.map((t) => ({ kind: "shot", key: `shot:${t.name}`, theme: t }))];
}

function setScene(scene) {
  state.scene = scene;
  const photo = document.getElementById("photo");
  const credit = document.getElementById("backdrop-credit");
  if (scene.kind === "shot") {
    document.body.dataset.scene = "shot";
    photo.style.backgroundImage = `url("${scene.theme.preview}")`;
    credit.textContent = `🌊 backdrop: ${scene.theme.name}`;
    credit.href = repoUrl(scene.theme);
    credit.hidden = false;
  } else {
    document.body.dataset.scene = scene.key;
    photo.style.backgroundImage = "";
    credit.hidden = true;
  }
}

function diveAgain() {
  const pool = scenePool().filter((s) => s.key !== state.scene?.key);
  if (!pool.length) return;
  setScene(pool[Math.floor(Math.random() * pool.length)]);
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

function syncPorthole(scheme) {
  const theme = porthole.theme;
  if (!theme) return;
  porthole.title.textContent = theme.name;
  porthole.full.href = liveHref(theme, scheme);
  porthole.frame.title = `Live theme preview — ${theme.name}`;
  porthole.frame.src = liveHref(theme, scheme, true);
}

function resetPortholePos() {
  const win = porthole.win;
  win.style.left = "";
  win.style.top = "";
  win.style.right = "";
  win.style.bottom = "";
  win.style.transform = "";
}

function openPorthole(theme, opener) {
  porthole.theme = theme;
  porthole.opener = opener;
  resetPortholePos();
  syncPorthole(currentScheme());
  porthole.root.hidden = false;
  document.body.classList.add("porthole-open");
  porthole.win.focus();
}

function closePorthole() {
  if (!porthole.root || porthole.root.hidden) return;
  const opener = porthole.opener;
  const name = porthole.theme?.name;
  porthole.root.hidden = true;
  porthole.frame.src = "";
  porthole.theme = null;
  porthole.opener = null;
  document.body.classList.remove("porthole-open");
  let target = opener && document.contains(opener) ? opener : null;
  if (!target && name) {
    target = document.querySelector(`[data-theme="${CSS.escape(name)}"] .dive, [data-theme="${CSS.escape(name)}"] a.thumb`);
  }
  if (target) target.focus();
}

function bindPortholeDrag() {
  const bar = porthole.root.querySelector(".porthole-titlebar");
  const win = porthole.win;
  let dragging = false;
  let startX = 0;
  let startY = 0;
  let startLeft = 0;
  let startTop = 0;

  function narrow() {
    return window.matchMedia("(max-width: 720px)").matches;
  }

  bar.addEventListener("pointerdown", (ev) => {
    if (ev.button !== 0) return;
    if (ev.target.closest("button, a")) return;
    if (narrow()) return;
    const rect = win.getBoundingClientRect();
    win.style.left = `${rect.left}px`;
    win.style.top = `${rect.top}px`;
    win.style.right = "auto";
    win.style.bottom = "auto";
    win.style.transform = "none";
    startX = ev.clientX;
    startY = ev.clientY;
    startLeft = rect.left;
    startTop = rect.top;
    dragging = true;
    porthole.frame.style.pointerEvents = "none";
    bar.classList.add("is-dragging");
    bar.setPointerCapture(ev.pointerId);
  });

  bar.addEventListener("pointermove", (ev) => {
    if (!dragging) return;
    const w = win.offsetWidth;
    const h = win.offsetHeight;
    const left = Math.min(Math.max(0, startLeft + ev.clientX - startX), Math.max(0, window.innerWidth - w));
    const top = Math.min(Math.max(0, startTop + ev.clientY - startY), Math.max(0, window.innerHeight - h));
    win.style.left = `${left}px`;
    win.style.top = `${top}px`;
  });

  function endDrag() {
    if (!dragging) return;
    dragging = false;
    porthole.frame.style.pointerEvents = "";
    bar.classList.remove("is-dragging");
  }

  bar.addEventListener("pointerup", endDrag);
  bar.addEventListener("pointercancel", endDrag);
}

function bindPorthole() {
  porthole.root = document.getElementById("porthole");
  porthole.win = porthole.root.querySelector(".porthole-window");
  porthole.frame = document.getElementById("porthole-frame");
  porthole.title = document.getElementById("porthole-title");
  porthole.full = document.getElementById("porthole-full");

  porthole.root.addEventListener("click", (ev) => {
    if (ev.target.closest("[data-close]")) {
      closePorthole();
      return;
    }
    const schemeBtn = ev.target.closest("[data-scheme]");
    if (schemeBtn) {
      applySchemeChips(schemeBtn.dataset.scheme);
      syncPorthole(schemeBtn.dataset.scheme);
    }
  });

  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape") closePorthole();
  });

  bindPortholeDrag();
}

function markPressed(group, btn) {
  group.forEach((el) => {
    const on = el === btn;
    el.classList.toggle("is-on", on);
    el.setAttribute("aria-pressed", on ? "true" : "false");
  });
}

function toggleChip(btn) {
  const on = btn.getAttribute("aria-pressed") !== "true";
  btn.classList.toggle("is-on", on);
  btn.setAttribute("aria-pressed", on ? "true" : "false");
  return on;
}

async function boot() {
  bubbles();
  document.body.dataset.scheme = "dark";
  const data = await loadThemes();
  state.themes = data.themes || [];
  diveAgain();
  render();
  bindPorthole();

  const chips = [...document.querySelectorAll(".chip[data-filter]")];
  chips.forEach((btn) => btn.addEventListener("click", () => {
    state.filter = btn.dataset.filter;
    markPressed(chips, btn);
    render();
  }));
  document.querySelector(".filters").addEventListener("keydown", (ev) => {
    if (ev.key !== "ArrowRight" && ev.key !== "ArrowLeft") return;
    const i = chips.indexOf(document.activeElement);
    if (i < 0) return;
    ev.preventDefault();
    const next = chips[(i + (ev.key === "ArrowRight" ? 1 : chips.length - 1)) % chips.length];
    next.focus();
    state.filter = next.dataset.filter;
    markPressed(chips, next);
    render();
  });

  const sorts = [...document.querySelectorAll(".chip[data-sort]")];
  sorts.forEach((btn) => btn.addEventListener("click", () => {
    state.sort = btn.dataset.sort;
    markPressed(sorts, btn);
    render();
  }));

  document.getElementById("only-live").addEventListener("click", (ev) => {
    state.liveOnly = toggleChip(ev.currentTarget);
    render();
  });
  document.getElementById("only-verified").addEventListener("click", (ev) => {
    state.verifiedOnly = toggleChip(ev.currentTarget);
    render();
  });

  const search = document.getElementById("search");
  let searchTimer = 0;
  search.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.query = search.value;
      render();
    }, 120);
  });

  document.querySelectorAll(".filters [data-scheme]").forEach((btn) => {
    btn.addEventListener("click", () => setScheme(btn.dataset.scheme));
  });
  document.getElementById("dive").addEventListener("click", diveAgain);
  document.getElementById("whale").addEventListener("click", (ev) => {
    heart(ev.clientX, ev.clientY);
  });
  document.getElementById("gallery").addEventListener("click", (ev) => {
    const btn = ev.target.closest(".copy");
    if (btn) {
      ev.preventDefault();
      copyText(btn.dataset.copy || "", btn);
      return;
    }
    const link = ev.target.closest(".dive, a.thumb");
    if (!link) return;
    const cardEl = link.closest(".card");
    if (!cardEl || cardEl.dataset.live !== "1") return;
    if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;
    ev.preventDefault();
    const theme = state.themes.find((t) => t.name === cardEl.dataset.theme);
    if (!theme || !hasLive(theme)) return;
    openPorthole(theme, link);
  });
}

boot().catch((err) => {
  document.getElementById("gallery").innerHTML = `<p class="empty">The current dragged us off course. ${esc(err.message)}</p>`;
});

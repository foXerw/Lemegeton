/* LEMEGETON — 交互逻辑：五部书与 72 魔渲染、位阶筛选、搜索、详情弹窗 */
(function () {
  "use strict";

  const { DEMONS, BOOKS } = window.LEMEGETON_DATA;

  const RANK_ZH = {
    King: "王", Duke: "公爵", Prince: "亲王", Marquis: "侯爵",
    Earl: "伯爵", Knight: "骑士", President: "统领"
  };

  const booksEl = document.getElementById("books");
  const gridEl = document.getElementById("demon-grid");
  const filtersEl = document.getElementById("rank-filters");
  const searchEl = document.getElementById("demon-search");
  const modalEl = document.getElementById("demon-modal");

  let activeRank = "All";
  let query = "";

  /* ── 确定性伪随机 ─────────────────────────── */
  function mulberry32(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /* ── 封印生成（风格化演绎） ────────────────── */
  function generateSigil(no, size = 96, extraClass = "") {
    const rnd = mulberry32(no * 7919);
    const c = size / 2, R = size / 2 - 4;
    const points = 5 + Math.floor(rnd() * 4);      // 5–8 角星
    const spokes = 8 + Math.floor(rnd() * 5);      // 环布字符 8–12
    const star = [];
    for (let i = 0; i < points * 2; i++) {
      const rr = (i % 2 === 0) ? R * 0.9 : R * 0.42;
      const a = (Math.PI / points) * i - Math.PI / 2;
      star.push((c + rr * Math.cos(a)).toFixed(1) + "," + (c + rr * Math.sin(a)).toFixed(1));
    }
    let glyphs = "";
    const alphabet = "ABCDEFGHIKLMNOPQRSTVXYZ";
    for (let i = 0; i < spokes; i++) {
      const a = (Math.PI * 2 * i) / spokes + rnd() * 0.4;
      const x = c + (R * 0.86) * Math.cos(a);
      const y = c + (R * 0.86) * Math.sin(a);
      const rot = (a * 180) / Math.PI + 90;
      glyphs += `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" font-size="${(R * 0.16).toFixed(1)}" fill="currentColor" text-anchor="middle" dominant-baseline="central" transform="rotate(${rot.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})">${alphabet[Math.floor(rnd() * alphabet.length)]}</text>`;
    }
    return `<svg viewBox="0 0 ${size} ${size}" class="sigil ${extraClass}" role="img" aria-label="封印（风格化演绎）">
      <circle cx="${c}" cy="${c}" r="${R}" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <circle cx="${c}" cy="${c}" r="${R * 0.72}" fill="none" stroke="currentColor" stroke-width="1"/>
      <polygon points="${star.join(" ")}" fill="none" stroke="currentColor" stroke-width="1.2"/>
      ${glyphs}
    </svg>`;
  }

  /* ── 五部书 ───────────────────────────────── */
  function renderBooks() {
    booksEl.innerHTML = BOOKS.map((b) => `
      <details class="book-card">
        <summary>
          <span class="book-en">${b.titleEn}</span>
          <span class="book-zh">${b.titleZh}</span>
          <span class="book-mark">＋</span>
        </summary>
        <div class="book-body">
          <p class="zh">${b.summary}</p>
          <p class="en">${b.summaryEn}</p>
        </div>
      </details>
    `).join("");
  }

  /* ── 图鉴渲染 ─────────────────────────────── */
  function renderDemons(list) {
    if (!list.length) {
      gridEl.innerHTML = '<p class="note" style="grid-column:1/-1">未寻得此名讳。</p>';
      return;
    }
    gridEl.innerHTML = list.map((d) => {
      const rankClass = "rank-" + d.rankEn[0];
      return `
        <article class="demon-card" data-no="${d.no}" role="button" tabindex="0" aria-label="${d.name}（${d.zhName}）">
          <span class="demon-no">${String(d.no).padStart(2, "0")}</span>
          ${generateSigil(d.no, 96)}
          <div><span class="rank-badge ${rankClass}">${d.rankEn.join(" & ")}</span></div>
          <p class="demon-name">${d.name}</p>
          <p class="demon-zh">${d.zhName}</p>
        </article>
      `;
    }).join("");
  }

  /* ── 位阶筛选 ─────────────────────────────── */
  function buildFilters() {
    const ranks = ["All", ...new Set(DEMONS.flatMap((d) => d.rankEn))];
    filtersEl.innerHTML = ranks.map((r) => {
      const label = r === "All" ? "全部" : `${RANK_ZH[r]} ${r}`;
      return `<button class="rank-filter${r === "All" ? " active" : ""}" data-rank="${r}">${label}</button>`;
    }).join("");
    filtersEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".rank-filter");
      if (!btn) return;
      activeRank = btn.dataset.rank;
      filtersEl.querySelectorAll(".rank-filter").forEach((b) => b.classList.toggle("active", b === btn));
      applyFilters();
    });
  }

  /* ── 筛选 + 搜索 ──────────────────────────── */
  function applyFilters() {
    const q = query.trim().toLowerCase();
    const list = DEMONS.filter((d) => {
      const matchRank = activeRank === "All" || d.rankEn.includes(activeRank);
      const matchQuery = !q ||
        d.name.toLowerCase().includes(q) ||
        d.zhName.includes(q) ||
        d.altNames.some((a) => a.toLowerCase().includes(q));
      return matchRank && matchQuery;
    });
    renderDemons(list);
  }

  /* ── 详情弹窗 ─────────────────────────────── */
  function openDemon(demon) {
    modalEl.innerHTML = `
      <div class="modal-backdrop" data-close></div>
      <div class="modal-panel" role="dialog" aria-modal="true" aria-label="${demon.name}（${demon.zhName}）">
        <button class="modal-close" data-close aria-label="关闭">✕</button>
        <div class="modal-head">
          ${generateSigil(demon.no, 120, "modal-sigil")}
          <h3 class="modal-name">${demon.name}</h3>
          <p class="modal-zh">${demon.zhName}</p>
          <p class="modal-rank">${demon.rankEn.map((r, i) => `<span class="rank-badge rank-${r}">${r} · ${demon.rankZh[i]}</span>`).join("")}</p>
        </div>
        <p class="modal-powers"><span>${demon.powers}</span><span class="en">${demon.powersEn}</span></p>
        <div class="modal-desc">
          <p class="zh">${demon.desc}</p>
          <p class="en">${demon.descEn}</p>
        </div>
      </div>
    `;
    modalEl.hidden = false;
    modalEl.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalEl.hidden = true;
    modalEl.setAttribute("aria-hidden", "true");
    modalEl.innerHTML = "";
    document.body.style.overflow = "";
  }

  /* ── 事件绑定 ─────────────────────────────── */
  gridEl.addEventListener("click", (e) => {
    const card = e.target.closest(".demon-card");
    if (!card) return;
    const demon = DEMONS.find((d) => d.no === Number(card.dataset.no));
    if (demon) openDemon(demon);
  });

  gridEl.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".demon-card");
    if (!card) return;
    e.preventDefault();
    const demon = DEMONS.find((d) => d.no === Number(card.dataset.no));
    if (demon) openDemon(demon);
  });

  searchEl.addEventListener("input", (e) => {
    query = e.target.value;
    applyFilters();
  });

  modalEl.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modalEl.hidden) closeModal();
  });

  /* ── 滚动淡入 ─────────────────────────────── */
  const revealEls = document.querySelectorAll(".reveal");
  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("visible"); revealIO.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => revealIO.observe(el));

  /* ── 导航高亮当前区块 ─────────────────────── */
  const navLinks = document.querySelectorAll(".nav-links a");
  const navSections = [...navLinks]
    .map((a) => document.getElementById(a.getAttribute("href").slice(1)))
    .filter(Boolean);
  const navIO = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  navSections.forEach((s) => navIO.observe(s));

  /* ── 初始化与对外接口 ─────────────────────── */
  renderBooks();
  buildFilters();
  applyFilters();

  window.LEMEGETON = { renderDemons, renderBooks, generateSigil, openDemon, closeModal };
})();

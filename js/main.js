/* LEMEGETON — 交互逻辑：共享导航/页脚、图鉴（真实封印）、天使对照表 */
(function () {
  "use strict";

  const { DEMONS, BOOKS, ANGELS, HEBREW } = window.LEMEGETON_DATA;

  const RANK_ZH = {
    King: "王", Duke: "公爵", Prince: "亲王", Marquis: "侯爵",
    Earl: "伯爵", Knight: "骑士", President: "统领"
  };

  const SIGNS = ["白羊座", "金牛座", "双子座", "巨蟹座", "狮子座", "处女座",
    "天秤座", "天蝎座", "射手座", "摩羯座", "水瓶座", "双鱼座"];

  const NAV = [
    ["index.html", "首页"],
    ["legend.html", "传说"],
    ["clavicula.html", "大钥匙"],
    ["lemegeton.html", "五部"],
    ["goetia.html", "七十二柱"],
    ["ritual.html", "召唤阵"],
    ["kabbalah.html", "天使"],
    ["legacy.html", "衍生"],
    ["sources.html", "参考"]
  ];

  const currentPage = (location.pathname.split("/").pop() || "index.html");

  /* ── 封印文件名 ───────────────────────────── */
  function sigilFile(no) {
    const ext = (no <= 3 || (no >= 50 && no <= 52)) ? "png" : "jpg";
    return "assets/sigils/" + String(no).padStart(2, "0") + "." + ext;
  }

  /* ── 共享导航 ─────────────────────────────── */
  function renderNav() {
    const el = document.getElementById("site-nav");
    if (!el) return;
    const links = NAV.map(([href, label]) =>
      `<a href="${href}" class="${href === currentPage ? "active" : ""}">${label}</a>`
    ).join("");
    el.innerHTML = `<header class="site-nav"><a class="brand" href="index.html">LEMEGETON</a><nav class="nav-links">${links}</nav></header>`;
  }

  /* ── 共享页脚 ─────────────────────────────── */
  const ORN_SNAKE = `<svg class="orn-snake" viewBox="0 0 300 30" aria-hidden="true"><path d="M8 15c28-13 56 13 84 0s56-13 84 0 56 13 84 0" fill="none" stroke="currentColor" stroke-width="2"/><path d="M288 15l12-6-3 10z" fill="currentColor"/></svg>`;
  const ORN_SKULL = `<svg viewBox="0 0 60 70" aria-hidden="true"><path d="M30 4C15 4 6 15 6 28c0 8 4 14 9 18v10h9v8h4v-8h4v8h4v-8h9V46c5-4 9-10 9-18C54 15 45 4 30 4z" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="21" cy="28" r="5" fill="currentColor"/><circle cx="39" cy="28" r="5" fill="currentColor"/><path d="M30 34l-4 8h8z" fill="currentColor"/></svg>`;
  const ORN_KEY = `<svg viewBox="0 0 100 40" aria-hidden="true"><circle cx="18" cy="20" r="11" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="18" cy="20" r="4.5" fill="none" stroke="currentColor" stroke-width="2"/><line x1="29" y1="20" x2="88" y2="20" stroke="currentColor" stroke-width="3"/><path d="M72 20v10M84 20v14" stroke="currentColor" stroke-width="3"/></svg>`;

  function renderFooter() {
    const el = document.getElementById("site-footer");
    if (!el) return;
    el.innerHTML = `<footer class="site-footer"><div class="foot-ornaments">${ORN_SKULL}${ORN_SNAKE}${ORN_KEY}</div><p class="foot-brand">LEMEGETON · 所罗门大小钥匙 · 档案</p><p>内容仅供历史与文化学习 · 封印图源 esotericarchives.com（公共领域）</p></footer>`;
  }

  /* ── 希伯来页边注（宽屏装饰） ─────────────── */
  function renderMarginalia() {
    if (document.querySelector(".marginalia")) return;
    const text = "יהוה אלהים אגלא טטרגרמטון שהמפורש ";
    const left = document.createElement("div");
    left.className = "marginalia left";
    left.setAttribute("aria-hidden", "true");
    left.textContent = text.repeat(3);
    const right = document.createElement("div");
    right.className = "marginalia right";
    right.setAttribute("aria-hidden", "true");
    right.textContent = text.repeat(3);
    document.body.appendChild(left);
    document.body.appendChild(right);
  }

  /* ── 图鉴页 ───────────────────────────────── */
  function initGoetia() {
    const gridEl = document.getElementById("demon-grid");
    if (!gridEl) return;
    const filtersEl = document.getElementById("rank-filters");
    const searchEl = document.getElementById("demon-search");
    const modalEl = document.getElementById("demon-modal");

    let activeRank = "All";
    let query = "";

    function renderDemons(list) {
      if (!list.length) {
        gridEl.innerHTML = '<p class="note" style="grid-column:1/-1">未寻得此名讳。</p>';
        return;
      }
      gridEl.innerHTML = list.map((d) => `
        <article class="demon-card" data-no="${d.no}" role="button" tabindex="0" aria-label="${d.name}（${d.zhName}）">
          <span class="demon-no">${String(d.no).padStart(2, "0")}</span>
          <img class="sigil" src="${sigilFile(d.no)}" alt="${d.name} 封印（风格化来源图）" loading="lazy">
          <div><span class="rank-badge">${d.rankEn.join(" & ")}</span></div>
          <p class="demon-name">${d.name}</p>
          <p class="demon-zh">${d.zhName}</p>
        </article>
      `).join("");
    }

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
        apply();
      });
    }

    function apply() {
      const q = query.trim().toLowerCase();
      const list = DEMONS.filter((d) => {
        const okRank = activeRank === "All" || d.rankEn.includes(activeRank);
        const okQuery = !q || d.name.toLowerCase().includes(q) || d.zhName.includes(q) ||
          d.altNames.some((a) => a.toLowerCase().includes(q));
        return okRank && okQuery;
      });
      renderDemons(list);
    }

    function openDemon(demon) {
      const alt = demon.altNames.length ? `<p class="modal-alt">别名 ${demon.altNames.join(" · ")}</p>` : "";
      modalEl.innerHTML = `
        <div class="modal-backdrop" data-close></div>
        <div class="modal-panel" role="dialog" aria-modal="true" aria-label="${demon.name}（${demon.zhName}）">
          <button class="modal-close" data-close aria-label="关闭">✕</button>
          <div class="modal-head">
            <img class="modal-sigil" src="${sigilFile(demon.no)}" alt="${demon.name} 封印">
            <h3 class="modal-name">${demon.name}</h3>
            <p class="modal-zh">${demon.zhName}${alt}</p>
            <p class="modal-rank">${demon.rankEn.map((r, i) => `<span class="rank-badge">${r} · ${demon.rankZh[i]}</span>`).join("")}</p>
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
    searchEl.addEventListener("input", (e) => { query = e.target.value; apply(); });
    modalEl.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeModal(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modalEl.hidden) closeModal(); });

    buildFilters();
    apply();
  }

  /* ── 天使图鉴 ─────────────────────────────── */
  function initAngels() {
    const gridEl = document.getElementById("angel-grid");
    if (!gridEl) return;
    const filtersEl = document.getElementById("angel-filters");
    const searchEl = document.getElementById("angel-search");

    let activeSign = "All";
    let query = "";

    function signOf(no) { return SIGNS[Math.floor(((no - 1) * 5) / 30)]; }
    function degreeOf(no) {
      const start = (no - 1) * 5;
      return `${SIGNS[Math.floor(start / 30)]} ${start % 30}°–${(start % 30) + 5}°`;
    }

    function renderAngels(list) {
      if (!list.length) {
        gridEl.innerHTML = '<p class="note" style="grid-column:1/-1">未寻得此天使。</p>';
        return;
      }
      gridEl.innerHTML = list.map((a) => {
        const he = HEBREW[a.no - 1];
        const d = DEMONS[a.no - 1];
        return `
          <article class="angel-card" data-no="${a.no}">
            <p class="angel-he" lang="he" dir="rtl">${he}</p>
            <p class="angel-name">${a.name}</p>
            <p class="angel-zh">${a.zhName}</p>
            <p class="angel-attr">${a.attribute}</p>
            <p class="angel-degree">${degreeOf(a.no)}</p>
            <p class="angel-demon">对应 ${d.no}. ${d.name} ${d.zhName}</p>
          </article>
        `;
      }).join("");
    }

    function buildFilters() {
      const signs = ["All", ...SIGNS];
      filtersEl.innerHTML = signs.map((s) => {
        const label = s === "All" ? "全部" : s;
        return `<button class="rank-filter${s === "All" ? " active" : ""}" data-sign="${s}">${label}</button>`;
      }).join("");
      filtersEl.addEventListener("click", (e) => {
        const btn = e.target.closest(".rank-filter");
        if (!btn) return;
        activeSign = btn.dataset.sign;
        filtersEl.querySelectorAll(".rank-filter").forEach((b) => b.classList.toggle("active", b === btn));
        apply();
      });
    }

    function apply() {
      const q = query.trim().toLowerCase();
      const list = ANGELS.filter((a) => {
        const okSign = activeSign === "All" || signOf(a.no) === activeSign;
        const okQuery = !q || a.name.toLowerCase().includes(q) || a.zhName.includes(q) || HEBREW[a.no - 1].includes(q);
        return okSign && okQuery;
      });
      renderAngels(list);
    }

    searchEl.addEventListener("input", (e) => { query = e.target.value; apply(); });

    buildFilters();
    apply();
  }

  /* ── 卷轴首页滚动淡入 ─────────────────────── */
  function initScrollReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!els.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.1 });
    els.forEach((el) => io.observe(el));
  }

  /* ── 初始化 ───────────────────────────────── */
  renderNav();
  renderFooter();
  renderMarginalia();
  initGoetia();
  initAngels();
  initScrollReveal();

  window.LEMEGETON = { sigilFile };
})();

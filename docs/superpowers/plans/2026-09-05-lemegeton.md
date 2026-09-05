# Lemegeton 实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 构建一个纯静态、零依赖、古典魔典暗黑风的单页网站，介绍所罗门大小钥匙及其传统延伸，含完整 72 魔图鉴。

**Architecture:** 单页 HTML（8 个 `<section>`），叙事区块为静态内容，72 魔图鉴由 `js/data.js`（UMD 数据模块）+ `js/main.js` 动态渲染。无构建步骤。

**Tech Stack:** 原生 HTML5 / CSS3（CSS 变量 + Grid + Flexbox + IntersectionObserver）/ 原生 JS（ES2019+）/ Google Fonts CDN / Node v24（仅用于数据校验，非运行时依赖）。

**Spec:** `docs/superpowers/specs/2026-09-05-lemegeton-design.md` —— 本计划从 spec 推导，两者一起阅读。

## Global Constraints

- 语言：中英双语并列，中文为主。
- 位阶英文集：`King, Duke, Prince, Marquis, Earl, Knight, President`；对应中文：`王, 公爵, 亲王, 侯爵, 伯爵, 骑士, 统领`。
- 恶魔数量必须恰好 72，`no` 从 1 到 72 且唯一。
- 封印一律用按 `no` 确定性生成的 SVG，禁止引入真实扫描图。
- 站名固定 `LEMEGETON`，副题固定「所罗门大小钥匙 · 档案」。
- 文件仅 `index.html`、`css/style.css`、`js/data.js`、`js/main.js`、`README.md`；`scripts/validate-data.js` 仅作校验，不参与运行。

---

### Task 1: 脚手架与 README

**Files:**
- Create: `README.md`
- Create: `.gitignore`

**Interfaces:**
- Produces: 项目根说明文件与忽略规则（后续任务不依赖）。

- [ ] **Step 1: 创建 .gitignore**

```gitignore
.DS_Store
Thumbs.db
node_modules/
*.log
```

- [ ] **Step 2: 创建 README.md**

```markdown
# LEMEGETON — 所罗门大小钥匙 · 档案

暗黑古典魔典风格的静态网站，介绍西方仪式魔法传统中的《所罗门之钥》
（Clavicula Salomonis）与《所罗门的小钥匙》（Lemegeton）及其传统延伸
（卡巴拉、黄金黎明、流行文化）。

- 纯静态、零依赖、无构建步骤
- 双击 `index.html` 即可打开
- 中英双语并列，定位为历史/文化学习

## 结构

- `index.html` — 页面结构（单页 8 区块）
- `css/style.css` — 样式
- `js/data.js` — 内容数据（72 魔 + 五部书）
- `js/main.js` — 交互（渲染、筛选、搜索、弹窗、滚动动效）
- `scripts/validate-data.js` — 数据校验（Node）

## 校验

    node scripts/validate-data.js
```

- [ ] **Step 3: 提交**

```bash
git add README.md .gitignore
git commit -m "docs: add README and gitignore"
```

---

### Task 2: 数据模块 `js/data.js`

**Files:**
- Create: `js/data.js`
- Create: `scripts/validate-data.js`

**Interfaces:**
- Produces: `LEMEGETON_DATA`（浏览器全局）/ CommonJS 导出（Node），形状为 `{ DEMONS, BOOKS }`。
  - `DEMONS[i]`：`{ no, name, altNames, zhName, rankEn, rankZh, powers, powersEn, desc, descEn }`
  - `BOOKS[i]`：`{ key, titleEn, titleZh, summary, summaryEn }`

- [ ] **Step 1: 编写 UMD 外壳与数据校验脚本**

`js/data.js`（外壳，先写结构与 schema，恶魔数据在 Step 3 填全）：

```js
(function (root, factory) {
  const data = factory();
  if (typeof module === "object" && module.exports) module.exports = data;
  else root.LEMEGETON_DATA = data;
})(typeof self !== "undefined" ? self : this, function () {

  const DEMONS = [
    // { no, name, altNames, zhName, rankEn, rankZh, powers, powersEn, desc, descEn }
  ];

  const BOOKS = [
    { key: "goetia", titleEn: "Ars Goetia", titleZh: "召唤术", summary: "…", summaryEn: "…" },
    { key: "theurgia", titleEn: "Ars Theurgia-Goetia", titleZh: "神术召唤", summary: "…", summaryEn: "…" },
    { key: "paulina", titleEn: "Ars Paulina", titleZh: "保罗术", summary: "…", summaryEn: "…" },
    { key: "almadel", titleEn: "Ars Almadel", titleZh: "阿尔马德尔", summary: "…", summaryEn: "…" },
    { key: "notoria", titleEn: "Ars Notoria", titleZh: "诺托里亚", summary: "…", summaryEn: "…" }
  ];

  return { DEMONS, BOOKS };
});
```

`scripts/validate-data.js`：

```js
const assert = require("node:assert");
const data = require("../js/data.js");

const RANKS = new Set(["King", "Duke", "Prince", "Marquis", "Earl", "Knight", "President"]);

assert.ok(Array.isArray(data.DEMONS), "DEMONS must be an array");
assert.strictEqual(data.DEMONS.length, 72, "must contain exactly 72 demons");

const seen = new Set();
for (const d of data.DEMONS) {
  assert.ok(Number.isInteger(d.no) && d.no >= 1 && d.no <= 72, `no out of range: ${d.no}`);
  assert.ok(!seen.has(d.no), `duplicate no: ${d.no}`);
  seen.add(d.no);
  for (const key of ["name", "zhName", "powers", "powersEn", "desc", "descEn"]) {
    assert.strictEqual(typeof d[key], "string", `field ${key} must be string (no ${d.no})`);
    assert.ok(d[key].trim().length > 0, `field ${key} must be non-empty (no ${d.no})`);
  }
  assert.ok(Array.isArray(d.altNames), `altNames must be array (no ${d.no})`);
  assert.ok(Array.isArray(d.rankEn) && d.rankEn.length >= 1, `rankEn must be non-empty array (no ${d.no})`);
  assert.ok(Array.isArray(d.rankZh) && d.rankZh.length === d.rankEn.length, `rankZh must align with rankEn (no ${d.no})`);
  for (const r of d.rankEn) assert.ok(RANKS.has(r), `invalid rank ${r} (no ${d.no})`);
}

for (const b of data.BOOKS) {
  for (const key of ["key", "titleEn", "titleZh", "summary", "summaryEn"]) {
    assert.strictEqual(typeof b[key], "string", `book field ${key} must be string`);
    assert.ok(b[key].trim().length > 0, `book field ${key} must be non-empty`);
  }
}

console.log("OK: 72 demons + 5 books validated");
```

- [ ] **Step 2: 运行校验（此刻应失败，DEMONS 为空）**

Run: `node scripts/validate-data.js`
Expected: FAIL，报 "must contain exactly 72 demons"。

- [ ] **Step 3: 填全 DEMONS 数据**

以 spec §6 的 72 名单为准（no/name/位阶）；中文名与别名按通行译法（如 1 Bael/巴尔、9 Paimon/派蒙、32 Asmodeus/阿斯摩德、68 Belial/彼列）。每条需含 `powers/powersEn`（一两句权能摘要）与 `desc/descEn`（完整条目，约 60–120 字 / 对应英文）。**完整示例（Bael）：**

```js
{
  no: 1,
  name: "Bael",
  altNames: ["Baal", "Baell"],
  zhName: "巴尔",
  rankEn: ["King"],
  rankZh: ["王"],
  powers: "使人隐身，并赋予统御与智慧。",
  powersEn: "Grants invisibility, and bestows wisdom and dominion.",
  desc: "七十二柱魔神之首，位列东方的王。传说可化形为猫、蟾蜍或人身，有时三者合一，以沙哑之声发言。他赋予召唤者隐匿之能与超越凡俗的智慧。",
  descEn: "The first and principal of the seventy-two. A king ruling in the East, he appears as a cat, a toad, or a man — sometimes all at once — and speaks with a hoarse voice. He bestows invisibility and wisdom beyond the common kind."
}
```

以相同结构完成 1–72。altNames 可为空数组。

- [ ] **Step 4: 运行校验（此刻应通过）**

Run: `node scripts/validate-data.js`
Expected: PASS，输出 "OK: 72 demons + 5 books validated"。

- [ ] **Step 5: 提交**

```bash
git add js/data.js scripts/validate-data.js
git commit -m "feat: add 72-demon and five-books data with validation"
```

---

### Task 3: 页面结构 `index.html`

**Files:**
- Create: `index.html`

**Interfaces:**
- Produces: 8 个 `<section>`（id 依次 `hero`、`legend`、`clavicula`、`lemegeton`、`compendium`、`kabbalah`、`legacy`、`coda`）；容器 `#books`（五部）、`#demon-grid`（图鉴）、控件 `#rank-filters`、`#demon-search`、弹窗 `#demon-modal`；引入 `css/style.css`、`js/data.js`、`js/main.js`（顺序：style → data → main，均在 `</body>` 前）。

- [ ] **Step 1: 编写 HTML 骨架（含静态叙事内容）**

`<head>` 引入 Google Fonts：

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=UnifrakturMaguntia&family=Noto+Serif+SC:wght@400;600;700&display=swap" rel="stylesheet">
```

页面骨架（语义化，导航锚点指向各 section）：

```html
<body>
  <header class="site-nav">
    <span class="brand">LEMEGETON</span>
    <nav>
      <a href="#legend">传说</a>
      <a href="#clavicula">大钥匙</a>
      <a href="#lemegeton">五部</a>
      <a href="#compendium">七十二柱</a>
      <a href="#kabbalah">卡巴拉</a>
      <a href="#legacy">衍生</a>
    </nav>
  </header>

  <section id="hero">
    <div class="seal hero-seal" data-seal="hero" aria-label="所罗门封印（风格化演绎）"></div>
    <h1>LEMEGETON</h1>
    <p class="subtitle">所罗门大小钥匙 · 档案</p>
    <a class="scroll-hint" href="#legend">向下进入</a>
  </section>

  <section id="legend">  <!-- 传说：所罗门指环 / 铜瓶 / 圣殿，中英双语静态文本 --> </section>
  <section id="clavicula">  <!-- 大钥匙：行星魔法 + 五芒星护符概述 --> </section>
  <section id="lemegeton">
    <h2>小钥匙五部</h2>
    <div id="books"></div>  <!-- 由 main.js 依 BOOKS 渲染 -->
  </section>

  <section id="compendium">
    <h2>七十二柱魔神图鉴</h2>
    <div class="controls">
      <div id="rank-filters" role="group" aria-label="按位阶筛选"></div>
      <input id="demon-search" type="search" placeholder="搜索名讳…" aria-label="搜索恶魔">
    </div>
    <p class="note">封印均为风格化演绎。</p>
    <div id="demon-grid" class="demon-grid"></div>
  </section>

  <section id="kabbalah">  <!-- 卡巴拉 72 字名 / 黄金黎明 / 克劳利 --> </section>
  <section id="legacy">  <!-- 流行文化衍生 --> </section>
  <section id="coda">  <!-- 学习声明 + 参考文献 --> </section>

  <div id="demon-modal" class="modal" hidden aria-hidden="true"></div>

  <script src="js/data.js"></script>
  <script src="js/main.js"></script>
</body>
```

- [ ] **Step 2: 填充各叙事 section 的双语正文**（legend/clavicula/kabbalah/legacy/coda 为静态文本；`#lemegeton` 只需空的 `#books` 容器，五部内容由 main.js 渲染。每节 `<h2>` 中文主标题 + 英文斜体副题 + 若干段落。内容与 spec §4 对应，中文为主、英文并排）。

- [ ] **Step 3: 浏览器打开确认无控制台报错（此时 JS 尚未写，仅静态）**

- [ ] **Step 4: 提交**

```bash
git add index.html
git commit -m "feat: add single-page structure and narrative sections"
```

---

### Task 4: 视觉系统 `css/style.css`

**Files:**
- Create: `css/style.css`

**Interfaces:**
- Consumes: 无。
- Produces: 类名约定供 `main.js` 与 `index.html` 使用：`.demon-grid`、`.demon-card`、`.rank-badge`、`.sigil`、`.modal`、`.filters .active`、`.reveal`、`.site-nav`、`.hero-seal`。

- [ ] **Step 1: 设计令牌（CSS 变量）与字体**

```css
:root {
  --bg: #120d08;
  --parchment: #1a1410;
  --parchment-2: #221a12;
  --ink: #e8dcc0;
  --ink-dim: #b9a98a;
  --gold: #b8912f;
  --gold-bright: #d9b96a;
  --crimson: #7a1f1f;
  --line: rgba(184, 145, 47, .25);
  --serif: "Cormorant Garamond", "Noto Serif SC", serif;
  --display: "Cinzel", "Noto Serif SC", serif;
  --blackletter: "UnifrakturMaguntia", serif;
}
body {
  margin: 0; background: var(--bg); color: var(--ink);
  font-family: var(--serif); line-height: 1.7;
  background-image: radial-gradient(ellipse at 50% 0%, rgba(184,145,47,.06), transparent 60%);
}
```

- [ ] **Step 2: 羊皮纸噪点与暗角**（`body::before` 铺 SVG feTurbulence 噪点，`body::after` 用 radial-gradient 做暗角，均 `pointer-events:none`）。

- [ ] **Step 3: 导航、Hero、区块标题、金色分隔线、`.reveal` 淡入初始态**。

- [ ] **Step 4: 图鉴网格与卡片**（`.demon-grid` 用 `grid-template-columns: repeat(auto-fill, minmax(170px, 1fr))`；卡片含 `.sigil`、`.rank-badge`、名称；移动断点 `@media (max-width: 640px)` 降为 2 列）。

- [ ] **Step 5: 筛选/搜索控件与弹窗样式**（`.modal[hidden]{display:none}`、遮罩、面板、关闭按钮；`.rank-badge` 按位阶着色，King 用金、President 用暗红、其余用暗铜）。

- [ ] **Step 6: 浏览器检查视觉与响应式（桌面/移动宽度无横向滚动）**

- [ ] **Step 7: 提交**

```bash
git add css/style.css
git commit -m "feat: add classical grimoire visual system"
```

---

### Task 5: 图鉴交互 `js/main.js`（渲染 + 筛选 + 搜索 + 弹窗）

**Files:**
- Create: `js/main.js`

**Interfaces:**
- Consumes: `LEMEGETON_DATA.DEMONS`、`LEMEGETON_DATA.BOOKS`（Task 2）、DOM 节点 `#demon-grid`、`#rank-filters`、`#demon-search`、`#demon-modal`、`#books`（Task 3）、类名（Task 4）。
- Produces: 全局函数 `renderDemons(list)`、`renderBooks()`、`generateSigil(no, size)`、`openDemon(demon)`；`window.LEMEGETON` 挂载状态（当前筛选 + 搜索词）。

- [ ] **Step 1: 确定性封印生成器**（以 `no` 为种子的伪随机，生成同心圆 + 星形 + 环布字符的 SVG）

```js
function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function generateSigil(no, size = 96) {
  const rnd = mulberry32(no * 7919);
  const c = size / 2, R = size / 2 - 4;
  const points = 5 + Math.floor(rnd() * 4);            // 5–8 角星
  const spokes = 8 + Math.floor(rnd() * 5);            // 环布字符 8–12
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
    glyphs += `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" font-size="${(R * 0.16).toFixed(1)}" text-anchor="middle" dominant-baseline="middle" transform="rotate(${((a * 180) / Math.PI + 90).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})">${alphabet[Math.floor(rnd() * alphabet.length)]}</text>`;
  }
  return `<svg viewBox="0 0 ${size} ${size}" class="sigil" role="img" aria-label="封印（风格化演绎）">
    <circle cx="${c}" cy="${c}" r="${R}" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="${c}" cy="${c}" r="${R * 0.72}" fill="none" stroke="currentColor" stroke-width="1"/>
    <polygon points="${star.join(" ")}" fill="none" stroke="currentColor" stroke-width="1.2"/>
    ${glyphs}
  </svg>`;
}
```

- [ ] **Step 2: 渲染五部书与图鉴卡片**（`renderBooks()` 遍历 `BOOKS`，向 `#books` 生成可展开的 `.book-card`（用 `<details>` 实现展开/收起），内含 `titleEn`/`titleZh` 与 `summary`/`summaryEn`；`renderDemons(list)` 遍历传入列表，生成 `.demon-card`，内含封印 SVG、序号、`rankEn.join(" & ")` 徽章、英文名 + `zhName`；卡片 `data-no` 绑定序号并挂点击开弹窗）。

- [ ] **Step 3: 位阶筛选**（从 DEMONS 汇总出现的 `rankEn`，渲染到 `#rank-filters` 为按钮；点击切换 `.active`，重建结果集并重渲染）。

- [ ] **Step 4: 搜索**（`#demon-search` 的 `input` 事件：以 `name/altNames/zhName` 小写匹配过滤）。

- [ ] **Step 5: 详情弹窗**（`openDemon` 填充 `#demon-modal` 内容并显示；点遮罩或关闭按钮关闭；`hidden` 切换 + `aria-hidden` 同步）。

- [ ] **Step 6: 浏览器验证**：72 卡全部渲染、筛选/搜索/弹窗可用、控制台无报错。

- [ ] **Step 7: 提交**

```bash
git add js/main.js
git commit -m "feat: add compendium render, filter, search, and modal"
```

---

### Task 6: 滚动动效与导航 polish

**Files:**
- Modify: `js/main.js`
- Modify: `index.html`（如需）

**Interfaces:**
- Consumes: `.reveal`（Task 4 已定义初始态）、`.hero-seal`（Task 3）。

- [ ] **Step 1: IntersectionObserver 滚动淡入**（对所有 `.reveal` 元素加观察器，进入视口加 `.visible` 触发过渡）。

- [ ] **Step 2: Hero 封印缓慢旋转**（`.hero-seal` 加 CSS `animation: spin 60s linear infinite`；在 `css/style.css` 补 `@keyframes spin`）。

- [ ] **Step 3: 导航高亮当前区块**（可选：观察各 section，给 `site-nav` 对应链接加 `.active`）。

- [ ] **Step 4: 浏览器验证动效与锚点跳转顺畅**

- [ ] **Step 5: 提交**

```bash
git add js/main.js css/style.css
git commit -m "feat: add scroll reveal, seal animation, and nav polish"
```

---

### Task 7: 终验与发布

**Files:**
- Modify: `README.md`（如需补充说明）

- [ ] **Step 1: 全量校验** Run: `node scripts/validate-data.js`（应 PASS）；浏览器全站走查：8 区块完整、72 卡、筛选/搜索/弹窗/动效、移动端自适应、无横向滚动、无控制台报错。

- [ ] **Step 2: 提交并推送**

```bash
git add -A
git commit -m "chore: final verification pass"
git push -u origin main
```

- [ ] **Step 3: 报告结果**（若 push 需凭据，向用户说明并请求其在本会话用 `! git push` 或配置凭据）。

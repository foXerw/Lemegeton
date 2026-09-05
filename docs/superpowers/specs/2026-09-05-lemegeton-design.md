# Lemegeton — 所罗门大小钥匙 · 档案（设计规格）

- 日期：2026-09-05
- 状态：已批准（待实现）
- 仓库：https://github.com/foXerw/Lemegeton.git

## 1. 目标与定位

一个**单页滚动叙事**的暗黑古典魔典风格静态网站，介绍西方仪式魔法传统中"所罗门的大小钥匙"（《所罗门之钥》Clavicula Salomonis 与《所罗门的小钥匙》Lemegeton）及其更广泛的传统延伸（卡巴拉、黄金黎明、流行文化）。面向对神秘学/历史文化好奇的中文读者，定位为**学习与考据**，非宣扬迷信。

- 调性：拉丁魔典原名 —— 站名 **LEMEGETON**
- 语言：中英双语并列（中文为主，英文/拉丁术语并排）
- 内容范围：更广的传统（含卡巴拉、黄金黎明、克劳利、流行文化衍生）

## 2. 技术方案

纯静态、零依赖、无构建步骤：

- `index.html` —— 页面结构（单页多区块）
- `css/style.css` —— 全部样式
- `js/data.js` —— 内容数据（72 魔 + 五部书 + 图鉴元数据）
- `js/main.js` —— 交互逻辑（渲染、筛选、搜索、弹窗、滚动动效、导航）
- 字体：Google Fonts CDN（标题 Cinzel / UnifrakturMaguntia，正文 Cormorant Garamond，中文 Noto Serif SC）
- 无框架、无打包器，双击 `index.html` 即可本地打开

## 3. 文件结构

```
deval/
  index.html
  css/style.css
  js/data.js
  js/main.js
  README.md
  docs/superpowers/specs/2026-09-05-lemegeton-design.md
```

## 4. 页面结构（自上而下单页滚动）

1. **序章 Hero** —— 大字 `LEMEGETON` + 副题「所罗门大小钥匙 · 档案」，中央所罗门封印 SVG 徽记，向下滚动提示。
2. **传说** —— 所罗门指环、铜瓶封印恶魔、圣殿传说，中英双语。
3. **大钥匙 Clavicula Salomonis** —— 行星魔法、五芒星护符概述。
4. **小钥匙五部** —— Ars Goetia / Ars Theurgia-Goetia / Ars Paulina / Ars Almadel / Ars Notoria，五张卡可展开。
5. **七十二柱魔神图鉴（Ars Goetia）** —— 可筛选网格，72 魔。
6. **卡巴拉与黄金黎明** —— 72 字名（Shem HaMephorash）对应、黄金黎明会、克劳利注本。
7. **流行文化衍生** —— ACG / 影视 / 游戏中的所罗门七十二柱。
8. **尾章 Coda** —— 历史/文化学习声明 + 参考文献。

## 5. 数据模型（`js/data.js`）

```js
// 单个恶魔条目
{
  no: 1,                    // 序号 1..72
  name: "Bael",             // 英文名
  altNames: ["Baal"],       // 别名
  zhName: "巴尔",            // 中文名
  rank: "King",             // 位阶
  rankZh: "王",             // 位阶中文
  sigil: "bael",            // 生成符文的种子（与 no 绑定）
  powers: "…",              // 权能摘要（中文）
  powersEn: "…",            // 权能摘要（英文）
  desc: "…",                // 完整条目（中文）
  descEn: "…"               // 完整条目（英文）
}
```

位阶集合：King（王）、Duke（公爵）、Prince（亲王）、Marquis（侯爵）、Earl（伯爵）、Knight（骑士）、President（统领）。部分恶魔多阶，如 "King & Earl"。

另有 `BOOKS`（五部书）与 `SECTIONS`（区块导航元数据）常量。

## 6. 七十二魔收录（Ars Goetia 正典 72）

完整收录 1–72。名单（序号 · 名 · 位阶）：

1 Bael—King, 2 Agares—Duke, 3 Vassago—Prince, 4 Samigina—Marquis, 5 Marbas—President, 6 Valefor—Duke, 7 Amon—Marquis, 8 Barbatos—Duke, 9 Paimon—King, 10 Buer—President, 11 Gusion—Duke, 12 Sitri—Prince, 13 Beleth—King, 14 Leraje—Marquis, 15 Eligos—Duke, 16 Zepar—Duke, 17 Botis—President/Earl, 18 Bathin—Duke, 19 Sallos—Duke, 20 Purson—King, 21 Morax—Earl/President, 22 Ipos—Earl/Prince, 23 Aim—Duke, 24 Naberius—Marquis, 25 Glasya-Labolas—President/Earl, 26 Bune—Duke, 27 Ronové—Marquis/Earl, 28 Berith—Duke, 29 Astaroth—Duke, 30 Forneus—Marquis, 31 Foras—President, 32 Asmodeus—King, 33 Gäap—President/Prince, 34 Furfur—Earl, 35 Marchosias—Marquis, 36 Stolas—Prince, 37 Phenex—Marquis, 38 Halphas—Earl, 39 Malphas—President, 40 Räum—Earl, 41 Focalor—Duke, 42 Vepar—Duke, 43 Sabnock—Marquis, 44 Shax—Marquis, 45 Viné—King/Earl, 46 Bifrons—Earl, 47 Uvall—Duke, 48 Haagenti—President, 49 Crocell—Duke, 50 Furcas—Knight, 51 Balam—King, 52 Alloces—Duke, 53 Caim—President, 54 Murmur—Duke/Earl, 55 Orobas—Prince, 56 Gremory—Duke, 57 Ose—President, 58 Amy—President, 59 Orias—Marquis, 60 Vapula—Duke, 61 Zagan—King/President, 62 Valac—President, 63 Andras—Marquis, 64 Flauros—Duke, 65 Andrealphus—Marquis, 66 Cimeies—Marquis, 67 Amdusias—Duke, 68 Belial—King, 69 Decarabia—Marquis, 70 Seere—Prince, 71 Dantalion—Duke, 72 Andromalius—Earl.

## 7. 视觉系统（古典魔典）

- **色彩**：暗羊皮纸底（深褐 #1a1410 系 / 墨黑），正文墨黑 #e8dcc0（旧纸米色），点缀金 #b8912f 与暗红 #7a1f1f。整体低饱和、高对比。
- **字体**：拉丁标题 Cinzel（大写，宽字距）；装饰性黑体字 UnifrakturMaguntia（章节首字/徽章）；正文 Cormorant Garamond；中文 Noto Serif SC（衬线）。
- **质感**：CSS 噪点/颗粒纹理、暗角（vignette）、金色细线分隔、卷草纹/几何封印装饰。
- **布局**：单栏宽屏阅读列，区块间以封印分隔符衔接；图鉴网格响应式（桌面 4–5 列 → 平板 3 列 → 手机 2 列）。

## 8. 封印符号（Sigil）方案

72 魔的真实封印为特定线描图，无法保证考古级逐张复刻。采用**按序号确定性生成的 SVG 符文**：以恶魔序号为随机种子，程序生成每魔独一无二的对称"符印"（同心圆 + 星形 + 环布字符）。全站统一标注「封印为风格化演绎」。若后续需要真实封印，可替换为扫描图源。

## 9. 交互

- **图鉴筛选**：按位阶（全部/王/公爵/亲王/侯爵/伯爵/骑士/统领）过滤。
- **搜索**：按英文名/中文名/别名实时过滤。
- **详情弹窗**：点击卡片弹出完整条目（序号、位阶、双语名、生成符文、权能、描述）。
- **滚动动效**：区块淡入（IntersectionObserver）。
- **顶部导航**：锚点跳转各区块；Hero 中央封印缓慢旋转。

## 10. 响应式与无障碍

- 移动端断点，网格降列、弹窗全屏化。
- 语义化标签（`<header>/<nav>/<section>/<article>`），图片/图形带 `aria-label`，颜色对比达标。

## 11. 内容声明与参考文献

尾章 Coda 明确：本站内容为**历史/文化/文学学习**用途，不宣扬也不指导任何仪式实践。参考文献列举：Clavicula Salomonis、《The Lesser Key of Solomon》（S.L. MacGregor Mathers / Aleister Crowley 注本）、Johann Weyer《Pseudomonarchia Daemonum》、Agrippa《隐秘哲学》、Golden Dawn 文献等。

## 12. 验证方式

1. 本地打开 `index.html`，控制台无报错。
2. 图鉴 72 卡全部渲染；位阶筛选、搜索、弹窗均可用。
3. 桌面与移动端宽度下布局正常、无横向滚动。

## 13. 范围外（Out of Scope）

- 真实封印扫描图（如需要，另行接入）。
- 交互式占卜/仪式模拟、音频、用户账号。
- 后端、CMS、构建流程。

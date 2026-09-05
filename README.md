# LEMEGETON — 所罗门大小钥匙 · 档案

暗黑现代风格的静态网站，介绍西方仪式魔法传统中的《所罗门之钥》
（Clavicula Salomonis）与《所罗门的小钥匙》（Lemegeton）及其传统延伸
（卡巴拉七十二天使、黄金黎明、流行文化）。

- 纯静态、零依赖、无构建步骤
- 双击 `index.html` 即可打开
- 中英双语并列，定位为历史/文化学习
- 极简暗黑视觉，含 72 魔真实封印图鉴与 72 天使对照表

## 结构

- `index.html` — 落地页（各主题入口）
- `legend.html` — 所罗门传说
- `clavicula.html` — 大钥匙
- `lemegeton.html` — 小钥匙五部书
- `goetia.html` — 七十二柱魔神图鉴（真实封印 + 筛选/搜索/弹窗）
- `kabbalah.html` — 卡巴拉与七十二天使对照表
- `legacy.html` — 流行文化衍生
- `sources.html` — 参考文献与声明
- `css/style.css` — 样式
- `js/data.js` — 内容数据（72 魔 + 5 书 + 72 天使）
- `js/main.js` — 共享导航/页脚 + 图鉴与天使表渲染
- `assets/sigils/` — 72 魔真实封印图（esotericarchives.com，公共领域）
- `scripts/validate-data.js` — 数据校验（Node）

## 校验

    node scripts/validate-data.js

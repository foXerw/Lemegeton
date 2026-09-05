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

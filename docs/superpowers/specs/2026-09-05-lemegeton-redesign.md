# Lemegeton 重设计规格（v2）

- 日期：2026-09-05
- 状态：已批准
- 仓库：https://github.com/foXerw/Lemegeton.git

## 1. 变更概述

在 v1 基础上重做视觉与结构：

1. 视觉：古典魔典 → **极简暗黑**（近黑底 + 暖白正文 + 单一金色点缀，大留白、细边框、无衬线正文 + 衬线标题）。
2. 结构：单页滚动 → **每主题独立页**（8 页，共享导航）。
3. 封印：生成符文 → **真实封印图**（esotericarchives.com，Joseph Peterson 校订，公共领域；CSS 反相融入暗色）。
4. 内容：新增 **卡巴拉 72 天使（Shem HaMephorash）对照表**；叙事页大幅扩充。
5. 不开启 GitHub Pages。

## 2. 页面结构（8 页）

| 文件 | 内容 |
|---|---|
| `index.html` | 落地页：标题、简介、各主题入口卡 |
| `legend.html` | 所罗门传说 |
| `clavicula.html` | 大钥匙：行星魔法、五芒星护符 |
| `lemegeton.html` | 小钥匙五部书详解 |
| `goetia.html` | 七十二柱魔神图鉴（真实封印 + 筛选/搜索/弹窗） |
| `kabbalah.html` | 卡巴拉与天使（72 天使对照表 + 黄金黎明/克劳利） |
| `legacy.html` | 流行文化衍生 |
| `sources.html` | 参考文献 + 学习声明 |

共享：`css/style.css`、`js/data.js`、`js/main.js`（注入导航/页脚 + goetia 交互）、`assets/sigils/NN.{png,jpg}`。

## 3. 视觉系统（极简暗黑）

- 背景 `#0b0b0d`，正文 `#e8e8ea`，次要 `#9a9aa0`，点缀金 `#c9a86a`，分隔线 `rgba(255,255,255,.08)`。
- 字体：正文无衬线（Inter，fallback 系统无衬线），标题衬线（Fraunces，fallback 系统衬线）。
- 封印图：`filter: invert(1)` 使白底黑线 → 黑底白线，融入暗色。

## 4. 数据模型（`js/data.js`）

```js
// 恶魔（沿用 v1 字段，desc 扩充）
{ no, name, altNames, zhName, rankEn, rankZh, powers, powersEn, desc, descEn }

// 天使（新增）
{ no, name, zhName, attribute, attributeEn }   // 度数由 no 计算：5°×(no-1)~5°×no

// 五部书（沿用）
BOOKS: { key, titleEn, titleZh, summary, summaryEn }
```

导出 `{ DEMONS, BOOKS, ANGELS }`。

## 5. 天使对照表口径

- 72 天使（Shem HaMephorash，源自《出埃及记》14:19–21 三节各 72 字母）为卡巴拉正典，名字/度数有据。
- **恶魔↔天使的逐位对应为现代阐释**（按序号 1↔1 … 72↔72），非古代正典。站内明确标注。

## 6. 图源署名

真实封印来自 esotericarchives.com（Joseph Peterson 校订的 Lemegeton/Goetia，公共领域）。`sources.html` 署名致谢。

## 7. 验证

- `node scripts/validate-data.js` 通过（72 魔 + 5 书 + 72 天使）。
- `node --check` 语法检查；HTML/JS/图片引用交叉检查。
- 浏览器走查：8 页导航、goetia 筛选/搜索/弹窗、封印图反相显示、移动端。

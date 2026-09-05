# Lemegeton 重设计实现计划

> **For agentic workers:** Use superpowers:executing-plans (inline) to implement task-by-task.

**Goal:** 将 v1 古典魔典单页站重做为极简暗黑 8 页站，接入真实封印与 72 天使对照表，扩充内容。

**Architecture:** 纯静态多页；共享 `css/style.css` + `js/data.js`（数据）+ `js/main.js`（注入导航/页脚 + goetia 交互）；真实封印图为 `assets/sigils/`。

**Spec:** `docs/superpowers/specs/2026-09-05-lemegeton-redesign.md`

## Global Constraints
- 视觉：极简暗黑（bg `#0b0b0d`、点缀金 `#c9a86a`、Inter + Fraunces）。
- 封印图用 `<img src="assets/sigils/NN.ext">` + CSS `filter: invert(1)`，不再生成 SVG。
- 天使↔恶魔对应标注「现代阐释」。
- 8 页共用导航；数据 72 魔 + 5 书 + 72 天使均须通过 `node scripts/validate-data.js`。

## Tasks

1. **扩充数据**：`js/data.js` 增 `ANGELS`（72），导出 `{ DEMONS, BOOKS, ANGELS }`；`scripts/validate-data.js` 增 ANGELS 校验（72 条、no 1..72 唯一、name/zhName/attribute/attributeEn 非空）。
2. **视觉重写**：`css/style.css` 全量重写为极简暗黑（含 `.sigil{filter:invert(1)}`、导航、卡片、表格、弹窗、响应式）。
3. **交互重写**：`js/main.js` 重写——注入共享导航/页脚、goetia 页渲染（真实封印 `<img>`、筛选、搜索、弹窗）、kabbalah 页天使表渲染（度数由 no 计算）。
4. **落地页**：`index.html`（标题 + 简介 + 各主题入口卡）。
5. **叙事页**：`legend.html`、`clavicula.html`、`lemegeton.html`、`legacy.html`、`sources.html`（双语正文，扩充）。
6. **图鉴页 + 天使页**：`goetia.html`（筛选/搜索/网格容器）、`kabbalah.html`（天使表容器 + 黄金黎明/克劳利正文）。
7. **终验 + 提交 + 推送**：校验脚本、`node --check`、交叉引用检查、commit、push。

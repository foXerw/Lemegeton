# LEMEGETON UI 重设计:「青金与羊皮纸 · 时祷书」

日期:2026-11-17 · 状态:已实施(用户睡前授权全权设计,醒来可推翻)

> 2026-11-17 补记:第二轮「内容完善」在此视觉体系上新增 worldview.html(世界观,页码 III r),首页活页扩为九章(I..IX),各内容页页码顺延(legend=II r ... sources=X r);扩充 legend/clavicula/lemegeton/sources/legacy 正文;恶魔弹窗增加显现形态/统御军团字段,天使卡增加点击弹窗(金黎明对应)。

## 意图与理由

用户认为旧「棕金手抄本」风格太平、无记忆点,要求彻底推翻,以"第一眼让人惊呼"为成功标准。
用户明确表示由我全权创意,不再逐题确认。

## 目标 / 非目标 / 反目标

- 目标:强烈的第一视觉冲击;成体系、可辨识的美术语言;所有 9 页一致应用;真实封印原貌呈现。
- 非目标:不改内容、数据、信息架构;不引入框架/构建工具;不加外部依赖。
- 反目标:不要"又一个暗黑游戏宣发页";不要满屏噪点滤镜;不要每卡都有的圆角阴影(SaaS 味)。

## 方案取舍

1. **青金与羊皮纸(选定)**:中世纪泥金手抄本的三种真实颜料——青金石、朱砂、金箔——构成色彩系统;扉页=青金石夜,正文=羊皮纸活页;天使界用青金石板金字,与恶魔界(纸上墨与朱)互为镜像。历史准确、色彩罕见、与旧方案完全对立。
2. 星盘黄铜(弃):纯黑底+金细线+旋转星盘。仍是"暗底金属"家族,与旧方案断裂不够。
3. 解剖图谱(弃):白底+巨字+出血红。冲击力强但与主题的历史感脱节,易流于通用编辑风。

## 设计令牌

- 色彩:`--lapis-void #0a1128` `--lapis #16224e` `--vellum #e9dfc2` `--ink #241e10` `--rubric #9c2a1c` `--gold-bright #c8a544` `--gold-leaf #e8cd7d`(纸上小字用暗金 `--gold-ink #7d621f` 保证对比度)
- 字体:UnifrakturMaguntia(品牌/扉页书名)、Cinzel(标题/编号/拉丁)、Cormorant Garamond + Noto Serif SC(正文)——沿用现有四族,零新增加载。
- 版式:hero 青金全屏+旋转金圆(神名 textPath 环);首页八章=非对称活页(左巨朱砂罗马数字/中文本/右拉丁边注);内容页=手稿页框+页码 `f. II r`+朱批 kicker+¶ 段落符+首段朱砂首字下沉;图鉴=封印 `mix-blend-mode: multiply` 直接落纸(去反相)+罗马数字条目号;天使卡=青金石底金字。
- 原则:浓墨重彩只花在 hero 一处;装饰皆承担文献学含义(页码/朱批/边注=书的结构);非交互动效仅圆环慢旋与一次性 reveal;`prefers-reduced-motion` 全关。

## 改动清单

- `css/style.css`:整体重写(~570 行)。
- `index.html`:hero 重构(魔法圆 SVG 替换蜡烛/星座),八章改为 folio 活页并加锚点 id。
- `js/main.js`:新增 `roman()` 条目编号;其余逻辑不变。
- 8 个内容页:`page-head` 加 `data-folio` 页码;goetia 说明文案改为"原貌落纸"。

## 验证

Edge headless 截图:桌面首屏、Goetia 图鉴、天使青金区、仪式图版页、正文页、移动端 hero/图鉴;`node --check` 通过;`scripts/validate-data.js` 通过。

## 内容数据补记(2026-11-17 第二轮)

- 恶魔 `legions/form/formZh`:逐条取自 Mathers 1904《小钥匙》全文(Global Grey 公共领域 PDF),与 Peterson 校勘交叉核对;Marax 30/Volac 38/Belial 50/Vine 36 等四处为 Mathers 原文特性,Bael 从原文作 66 军团。Vassago 原文无兽形,form 留空。
- 天使 `psalm/governs/governsZh`:取自可核实的金黎明公开对照文献(SRICF 2015 第二阶讲义 Burkle 表 6/7,tarrdaniel 镜像互核);71/72 有诗篇(#70 召词为创世记 1:1)、51/72 有职司;品级/瑟菲拉因无单一可核实五列表而留空,弹窗自动降级。kabbalah 页已注明编号混用 KJV/武加大及印本讹误。

## 留给后续的决定

- 若嫌 hero 圆环转速太慢/太快,改 `.ring-*` 的 animation-duration 即可。
- 旧方案残留的 `.entry-grid` 样式已删(本就无页面引用)。

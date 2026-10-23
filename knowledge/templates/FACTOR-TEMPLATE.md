# 因素卡模板（FACTOR-TEMPLATE）

> 使用方式：复制本文件到 `knowledge/factors/`，按注释逐项替换占位值；字段约束以 `schema/factor.schema.json` 为准。**纪律：不核验不写入**——`refs.standards` 的每条标准引用须已在 `registry/standards.yaml` 注册并附官方来源。

```yaml
---
id: WHO-F-000            # ← <维度码>-F-<三位序号>；合规基线用 RUL-<三位序号>；ID 一经分配永不复用
name: 因素中文名
name_en: Factor English Name
slug: factor-english-name   # ← kebab-case，与文件名 <ID>-<slug>.md 一致
dimension: WHO              # ← WHO|WHERE|WHEN|WHAT|WHICH|WHY|HOW|RUL
type: ability               # ← ability(能力)|preference(偏好)|constraint(约束)|context(情境)|baseline(合规基线)
response: alternative       # ← alternative(提供替代方案)|choice-space(提供选择空间)|both
weights: { coverage: medium, frequency: medium, effort: medium }   # 人群覆盖率/场景出现率/设计响应难度（仅框架层排序用，不进边界文档）
evidence: C                 # ← A(标准条款)|B(研究文献)|C(专家共识)|D(推理假设)
evidence_note: "证据判定依据：引用了哪条标准条款/哪篇文献；若为 C/D 级须说明理由与适用边界"
rules: []                   # ← 规则 ID：ACT-001 / DEP-001 / MOD-001 / CNF-001 / CMP-001（见 registry/rules.yaml）
metrics: []                 # ← 关联指标 ID：M-<本因素ID>-01（见 registry/metrics.yaml）
guides: []                  # ← 关联指南 ID：G-<本因素ID>
refs:
  standards: []             # ← 如 STD-W3C-WCAG22:1.4.3（条款号+要点+官方链接；不抄标准全文）
  research: []              # ← DOI / URL / 题名（附访问日期）
abstract_dimensions: []     # ← 仅 WHICH 维度必填，如 information-richness、guidance-autonomy
status: draft               # ← draft|review|approved
version: "3.0"
---
```

## 正文推荐结构

```markdown
# 因素中文名（Factor English Name）

## 基本定义
<!-- 一段话说清该因素是什么、测量对象是谁 -->

## 为什么重要
<!-- 被忽视时排斥谁；与任务完成/放弃的关系 -->

## 设计响应
<!-- ability → 替代方案（功能等效、默认支持）；preference → 选择空间（平权档位、无惩罚切换） -->

## 跨领域表现
<!-- digital / industrial / architecture / fashion / service 各一行 -->

## 相关标准与文献
<!-- 条款号 + 要点 + 官方链接 -->
```

> 双链：正式卡在正文中用 `[[<ID>-<slug>]]` 关联指标卡、指南卡与案例卡；模板内不加双链。

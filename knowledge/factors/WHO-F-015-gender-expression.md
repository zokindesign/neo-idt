---
id: WHO-F-015
name: 性别与性别表达
name_en: Gender & Gender Expression
slug: gender-expression
dimension: WHO
type: context
response: both
weights:
  coverage: medium
  frequency: medium
  effort: low
evidence: B
evidence_note: "C2 核验文献挂接（2026-10-07）：Haimson et al. 2016/2023（CHI）跨性别数字身份研究；空间层部分仍为 C"
rules: []
metrics: [M-WHO-F-015-01]
guides: [G-WHO-F-015]
refs:
  standards: []
  research: ["Haimson O.L., Brubaker J.R., Dombrowski L. & Hayes G.R. (2016). Digital footprints and changing networks during online identity transitions. Proceedings of CHI 2016, 2895-2907. https://doi.org/10.1145/2858036.2858136", "Haimson O.L. et al. (2023). How transgender people and communities were involved in trans technology design processes. Proceedings of CHI 2023. https://doi.org/10.1145/3544548.3580972"]
status: draft
version: "3.1"
---

# 性别与性别表达 (Gender & Gender Expression)

## 定义

用户在系统、产品或空间中被识别、称谓与呈现的性别维度差异，包括：

- **生理性别**（sex）：出生时的生理属性，影响尺寸、生理需求（如卫生设施）
- **性别认同**（gender identity）：自我认同的性别，可能与出生指派性别不同（跨性别、非二元性别等）
- **性别表达**（gender expression）：外显的性别呈现（着装、发型、举止），可能与认同不一致
- **性别中立需求**：不认同二元性别分类的用户

**与其他因素的区分**：WHO-F-002（人口统计学）仅承载统计属性（年龄/地区分布），本因素承载性别在交互与呈现层面的具体差异。

## 为什么重要

- 表单中的强制二元性别字段（男/女单选）对非二元用户构成直接排除
- 称谓系统（先生/女士）假设性别可由姓名或外观推断
- 卫生间、试衣间、尺码系统的二元划分造成空间性排除
- 历史数据（如医保、票务）中的性别记录可能与当前认同不符

## 设计响应（both：替代方案 + 选择空间）

### 能力/约束成分 → 提供替代方案
- 性别字段提供"不愿透露/X/自定义"选项（许多司法辖区已是合规要求）
- 称谓字段设为可选，或提供性别中立称谓

### 偏好成分 → 提供选择空间
- 个人资料中性别可见度可配置（公开/仅自己/对特定人可见）
- 尊重用户设定的代词（pronouns）并在 UI 中一致使用

## 跨领域映射

| 领域 | 排除示例 | 包容示例 |
|------|----------|----------|
| 数字产品 | 强制二元性别注册字段 | 可选性别字段 + 自定义输入 + 代词字段 |
| 工业设计 | 工具按"男性手型"设计的握把 | 可调节握把；中性尺寸区间 |
| 建筑设计 | 仅男/女卫生间 | 至少一处全性别/家庭卫生间（许多建筑规范已要求） |
| 服装设计 | 尺码表按性别二元划分 | 按身体测量（胸围/腰围）而非性别的尺码体系 |

## 测量维度

- 表单性别字段的选项完备性（是否有非二元/不愿透露选项）
- 称谓/代词的可配置性
- 空间设施的性别中立选项可用性

## 相关标准与参考

- UD7 补充原则 P8（Community）与 P10（Gender）
- WHO ICF 个人因素
- 部分辖区合规要求（如阿根廷性别认同法、部分企业 ESG 报告要求）→ 待 WP-C 挂接具体条款

## B1 交叉对照说明

本因素由 INCL-XREF-001 GAP-1 判定新增：5 个基准框架中仅 UD7 补充原则隐式提及，无一结构化为因素。

---

#标签 #WHO维度 #性别包容 #B1新增

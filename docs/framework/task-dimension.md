# 任务维度因子（归档）

**研究编号**：INCL-TASK-001  
**所属体系**：包容性设计因素体系（覆盖率导向 v3.0）  
**版本**：v1.1  
**状态**：🟢 归档（规则已合并至统一注册表）  
**记录时间**：2026-10-07  
**关联文档**：`docs/framework/framework-v3.md`、`registry/rules.yaml`、`registry/factors.yaml`

> **注意**：本文档原包含的 ACT-006~009、DEP-006~007、MOD-006~007、CNF-006~007 等规则已迁移至 `registry/rules.yaml` 统一注册表，并采用全局 ID 化引用（如 WHAT-F-002 而非"维3"）。本文档保留作为历史参考，不再作为规则权威源。

---

## 一、任务维度概述

任务维度（WHAT）聚焦于**任务本身的特性**，而非用户能力或环境条件。这些因素独立于具体用户群体，但在与用户能力、环境、技术等维度交互时会产生复合影响。

### 核心价值

任务维度的识别帮助我们：
- 在需求分析阶段系统性地拆解任务复杂度
- 识别潜在的用户挫败点（高负荷、高压力、易出错环节）
- 为能力/偏好设计提供情境化依据（如"高认知负荷任务需要更强引导"）
- 与商业维度的时间约束关联，进行权衡决策

---

## 二、任务能力因素（因素卡片见 knowledge/01_Factors/WHAT-F-*.md）

| 因素 ID | 名称 | 类型 | 响应 | 权重(覆盖/频率/成本) | 证据 |
|---------|------|------|------|---------------------|------|
| WHAT-F-001 | 任务复杂度 | constraint | alternative | high/high/medium | A/B |
| WHAT-F-002 | 认知负荷 | ability | alternative | high/high/high | B |
| WHAT-F-003 | 容错性需求 | constraint | alternative | high/medium/low | A |
| WHAT-F-004 | 任务持久性要求 | constraint | both | medium/medium/low | C |
| WHAT-F-005 | 任务协作性 | context | both | medium/medium/medium | C |
| WHAT-F-006 | 任务中断容忍度 | preference | choice-space | medium/medium/low | D |

> 详细定义、测量维度、设计响应、跨领域表现、规则引用（ACT/DEP/MOD/CNF/CMP）请查阅对应因素卡片。

---

## 三、任务因素量化指标

详见 `registry/metrics.yaml` 与 `03_量化指标/metrics/`：
- M-WHAT-F-002-01: 认知负荷测量指标 (NASA-TLX)
- M-WHAT-F-002-02: 任务完成时间百分位
- 其余因素指标待 WP-D 补全（状态：placeholder）

---

## 四、任务因素卡片模板

每个任务因素卡片遵循统一 Schema（`schema/factor.schema.json`），包含：

```markdown
---
id: WHAT-F-XXX
name: [因素名称]
name_en: [English Name]
slug: [kebab-case-slug]
dimension: WHAT
type: ability | preference | constraint | context
response: alternative | choice-space | both
weights: {coverage: high|medium|low, frequency: high|medium|low, effort: high|medium|low}
evidence: A|B|C|D
evidence_note: [判定依据]
rules: [ACT-XXX, DEP-XXX, ...]
metrics: [M-WHAT-F-XXX-XX]
guides: [G-WHAT-F-XXX]
refs:
  standards: [STD-XXX:条款]
  research: []
status: draft
version: 3.0
---

# [因素名称]

## 定义
...

## 测量维度
...

## 设计响应
...

## 跨领域表现
...

## 相关标准与参考
...
```

---

## 五、已合并的交互规则（现存于 registry/rules.yaml）

本文档原有规则已全部迁移，此处仅列出映射：

| 原规则 ID | 新规则 ID | 类型 | 说明 |
|-----------|-----------|------|------|
| ACT-006 | ACT-006 | activate | 数据录入激活容错性 |
| ACT-007 | ACT-007 | activate | 步骤>10 激活认知负荷/复杂度 |
| ACT-008 | ACT-008 | activate | 截止时间紧激活时间压力 |
| ACT-009 | ACT-009 | activate | 支付环节激活增强容错性 |
| DEP-006 | DEP-006 | depend | 自动化偏好依赖重复性 |
| DEP-007 | DEP-007 | depend | 反馈密度偏好依赖时间压力 |
| MOD-006 | MOD-006 | moderate | 复杂度放大引导需求 |
| MOD-007 | MOD-007 | moderate | 容错性放大确认强度 |
| CNF-006 | CNF-006 | conflict | 时间压力 vs 容错性 |
| CNF-007 | CNF-007 | conflict | 复杂度 vs 控制感偏好 |

---

## 标签

#任务维度 #归档 #规则已合并 #INCL-TASK-001


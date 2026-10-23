---
id: M-WHAT-F-001-01
factor_id: WHAT-F-001
name: "任务步骤复杂度"
name_en: "Task Step Complexity"
category: audit
description: "核心任务的步骤数、决策点数与分支数评级，判断任务结构复杂度是否匹配用户能力"
measurement_method: "任务分析→步骤/决策点/分支计数→复杂度分级（低/中/高）"
data_source:
  - 任务分析
  - 专家评级
thresholds:
    minimum: "核心任务 ≤ 7±2 步且决策点 ≤ 3（米勒定律共识值）"
    good: "提供分步引导与进度提示"
    excellent: "提供专家快捷路径（并行高级操作）"
unit: "步骤数 / 决策点数"
applicable_domains:
  - universal
limitations: "7±2 为认知心理学共识值而非强制标准；复杂任务应配合认知负荷量表"
related_standards:
  - "STD-ISO-9241-110:5.1"
status: draft
evidence_grade: C
---
# 任务步骤复杂度

> 指标 ID：`M-WHAT-F-001-01` · 分类：**人工审计** · 证据等级：**C** · 状态：draft

**英文名**：Task Step Complexity

关联因素：[[WHAT-F-001-task-complexity|WHAT-F-001]]（任务复杂度）

## 定义

核心任务的步骤数、决策点数与分支数评级，判断任务结构复杂度是否匹配用户能力

## 测量方法

任务分析→步骤/决策点/分支计数→复杂度分级（低/中/高）

## 数据来源

- 任务分析
- 专家评级

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 核心任务 ≤ 7±2 步且决策点 ≤ 3（米勒定律共识值） |
| 良好 | 提供分步引导与进度提示 |
| 优秀 | 提供专家快捷路径（并行高级操作） |

**单位**：步骤数 / 决策点数

## 适用领域

- universal

## 局限与适用条件

7±2 为认知心理学共识值而非强制标准；复杂任务应配合认知负荷量表

## 关联标准条款

- `STD-ISO-9241-110:5.1`

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。


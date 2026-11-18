---
id: M-WHAT-F-001-02
factor_id: WHAT-F-001
name: "核心任务操作步数"
name_en: "Core Task Step Count"
category: audit
description: "核心任务主流程的操作步数与决策点计数——ISO 9241-11 效率测度的结构化代理（步数越多，认知与操作负荷越高）"
measurement_method: "任务分析拆解主流程 → 计数操作步（页面/表单提交/关键决策）→ 识别可合并或省略的步骤"
data_source:
  - 任务分析
  - 流程走查
thresholds:
    minimum: "主流程 ≤10 步"
    good: "≤7 步"
    excellent: "≤5 步且无返工回路"
unit: 步数
applicable_domains:
  - universal
limitations: "步数颗粒度（击键/页面/决策）须统一定义后再比较"
related_standards:
  - STD-ISO-9241-11
status: draft
evidence_grade: B
---
# 核心任务操作步数

> 指标 ID：`M-WHAT-F-001-02` · 分类：**人工审计** · 证据等级：**B** · 状态：draft

**英文名**：Core Task Step Count

关联因素：[[WHAT-F-001-task-complexity|WHAT-F-001]]（任务复杂度）

## 定义

核心任务主流程的操作步数与决策点计数——ISO 9241-11 效率测度的结构化代理（步数越多，认知与操作负荷越高）

## 测量方法

任务分析拆解主流程 → 计数操作步（页面/表单提交/关键决策）→ 识别可合并或省略的步骤

## 数据来源

- 任务分析
- 流程走查

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 主流程 ≤10 步 |
| 良好 | ≤7 步 |
| 优秀 | ≤5 步且无返工回路 |

**单位**：步数

## 适用领域

- universal

## 局限与适用条件

步数颗粒度（击键/页面/决策）须统一定义后再比较

## 关联标准条款

- `STD-ISO-9241-11`

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。


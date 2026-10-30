---
id: M-WHICH-F-002-01
factor_id: WHICH-F-002
name: "探索深度分级支持"
name_en: "Exploration Depth Tiers"
category: audit
description: "审计渐进式披露层级（基础/进阶/专家）与'危险操作保护'的分级设计"
measurement_method: "功能清单按层级归类审计 + 新手/专家双视角走查"
data_source:
  - 信息架构审计
  - 双视角走查
thresholds:
    minimum: "核心路径无强制探索（最少点击直达）"
    good: "提供'简单/详细'双模式或分层入口"
    excellent: "用户自选探索深度并记忆偏好"
unit: "层级覆盖率 %"
applicable_domains:
  - digital
  - industrial
limitations: ""
related_standards:
  - "STD-ISO-9241-110:5.5"
status: draft
evidence_grade: C
---
# 探索深度分级支持

> 指标 ID：`M-WHICH-F-002-01` · 分类：**人工审计** · 证据等级：**C** · 状态：draft

**英文名**：Exploration Depth Tiers

关联因素：[[WHICH-F-002-exploration-depth-preference|WHICH-F-002]]（探索深度偏好）

## 定义

审计渐进式披露层级（基础/进阶/专家）与'危险操作保护'的分级设计

## 测量方法

功能清单按层级归类审计 + 新手/专家双视角走查

## 数据来源

- 信息架构审计
- 双视角走查

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 核心路径无强制探索（最少点击直达） |
| 良好 | 提供'简单/详细'双模式或分层入口 |
| 优秀 | 用户自选探索深度并记忆偏好 |

**单位**：层级覆盖率 %

## 适用领域

- digital
- industrial

## 关联标准条款

- `STD-ISO-9241-110:5.5`

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。


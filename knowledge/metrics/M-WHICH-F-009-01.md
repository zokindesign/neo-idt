---
id: M-WHICH-F-009-01
factor_id: WHICH-F-009
name: "通知可控性"
name_en: "Notification Controllability"
category: audit
description: "通知的粒度控制（逐类开关/免打扰/批量静默）与紧急通知穿透策略审计"
measurement_method: "通知类型×控制粒度矩阵审计 + 免打扰实测（紧急类是否可穿透）"
data_source:
  - 功能审计
  - 系统设置检查
thresholds:
    minimum: "通知可逐类开关且提供全局静音"
    good: "免打扰时段/场景规则（含紧急例外）"
    excellent: "通知摘要合并与优先级用户自定义"
unit: 控制粒度档位
applicable_domains:
  - digital
limitations: "自主需求-打扰冲突的 SDT 理论支撑见 WHICH-F-009 卡片文献；阈值为设计共识"
related_standards:
  - "STD-ISO-9241-110:5.5"
status: draft
evidence_grade: C
---
# 通知可控性

> 指标 ID：`M-WHICH-F-009-01` · 分类：**人工审计** · 证据等级：**C** · 状态：draft

**英文名**：Notification Controllability

关联因素：[[WHICH-F-009-notification-preference|WHICH-F-009]]（通知偏好）

## 定义

通知的粒度控制（逐类开关/免打扰/批量静默）与紧急通知穿透策略审计

## 测量方法

通知类型×控制粒度矩阵审计 + 免打扰实测（紧急类是否可穿透）

## 数据来源

- 功能审计
- 系统设置检查

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 通知可逐类开关且提供全局静音 |
| 良好 | 免打扰时段/场景规则（含紧急例外） |
| 优秀 | 通知摘要合并与优先级用户自定义 |

**单位**：控制粒度档位

## 适用领域

- digital

## 局限与适用条件

自主需求-打扰冲突的 SDT 理论支撑见 WHICH-F-009 卡片文献；阈值为设计共识

## 关联标准条款

- `STD-ISO-9241-110:5.5`

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。


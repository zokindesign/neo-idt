---
id: M-WHEN-F-004-01
factor_id: WHEN-F-004
name: "时限可调性"
name_en: "Time-Limit Adjustability"
category: audit
description: "盘点产品内全部时限，逐项核对可关闭/可调整/可延长；本质例外需论证记录"
measurement_method: "时限清单→逐项按 WCAG 2.2.1 核对（关闭/调整/延长）→本质例外论证记录"
data_source:
  - 时限盘点
  - 代码/流程审计
thresholds:
    minimum: "非本质时限 100% 可调整（WCAG 2.2.1 A 级）"
    good: "剩余时间可视化与进度提示"
    excellent: "默认无时限（仅本质需要时设置并留论证）"
unit: "时限达标率 %"
applicable_domains:
  - digital
  - service
limitations: "WCAG 2.2.1 允许本质时限例外（如竞价）；例外须逐项记录依据"
related_standards:
  - "STD-W3C-WCAG22:2.2.1"
  - "STD-W3C-WCAG22:2.2.2"
status: draft
evidence_grade: B
---
# 时限可调性

> 指标 ID：`M-WHEN-F-004-01` · 分类：**人工审计** · 证据等级：**B** · 状态：draft

**英文名**：Time-Limit Adjustability

关联因素：[[WHEN-F-004-time-pressure|WHEN-F-004]]（时间压力）

## 定义

盘点产品内全部时限，逐项核对可关闭/可调整/可延长；本质例外需论证记录

## 测量方法

时限清单→逐项按 WCAG 2.2.1 核对（关闭/调整/延长）→本质例外论证记录

## 数据来源

- 时限盘点
- 代码/流程审计

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 非本质时限 100% 可调整（WCAG 2.2.1 A 级） |
| 良好 | 剩余时间可视化与进度提示 |
| 优秀 | 默认无时限（仅本质需要时设置并留论证） |

**单位**：时限达标率 %

## 适用领域

- digital
- service

## 局限与适用条件

WCAG 2.2.1 允许本质时限例外（如竞价）；例外须逐项记录依据

## 关联标准条款

- `STD-W3C-WCAG22:2.2.1`
- `STD-W3C-WCAG22:2.2.2`

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。


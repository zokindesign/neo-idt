---
id: M-WHERE-F-008-01
factor_id: WHERE-F-008
name: "共享使用隔离度"
name_en: "Shared-Use Isolation"
category: audit
description: "审计多用户场景的会话隔离、数据清除、可清洁性与无人监督耐久性"
measurement_method: "共享场景清单（公共终端/家庭共用/多人围观）×隔离与卫生特性审计"
data_source:
  - 场景审计
  - 实测
thresholds:
    minimum: "共享场景有会话隔离与用后数据清除"
    good: "快速用户切换与访客模式"
    excellent: "多人围观自适应布局与卫生材质规范"
unit: "特性通过率 %"
applicable_domains:
  - digital
  - industrial
  - service
limitations: "为 B1 新增因素（WHERE-F-008）配套新建指标"
related_standards:
status: draft
evidence_grade: C
---
# 共享使用隔离度

> 指标 ID：`M-WHERE-F-008-01` · 分类：**人工审计** · 证据等级：**C** · 状态：draft

**英文名**：Shared-Use Isolation

关联因素：[[WHERE-F-008-shared-public-use|WHERE-F-008]]（共享与公共使用情境）

## 定义

审计多用户场景的会话隔离、数据清除、可清洁性与无人监督耐久性

## 测量方法

共享场景清单（公共终端/家庭共用/多人围观）×隔离与卫生特性审计

## 数据来源

- 场景审计
- 实测

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 共享场景有会话隔离与用后数据清除 |
| 良好 | 快速用户切换与访客模式 |
| 优秀 | 多人围观自适应布局与卫生材质规范 |

**单位**：特性通过率 %

## 适用领域

- digital
- industrial
- service

## 局限与适用条件

为 B1 新增因素（WHERE-F-008）配套新建指标

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。


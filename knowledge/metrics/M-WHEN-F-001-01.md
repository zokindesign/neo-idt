---
id: M-WHEN-F-001-01
factor_id: WHEN-F-001
name: "全时段可用性"
name_en: "24-Hour Adaptability"
category: audit
description: "核对核心功能全时段可用与夜间适配（暗色模式/亮度/免打扰）"
measurement_method: "时段特性清单审计 + 夜间场景实测"
data_source:
  - 特性审计
  - 实测
thresholds:
    minimum: "核心功能 24h 可用且有暗色模式"
    good: "夜间免打扰与延迟处理选项"
    excellent: "光照/时段自适应界面"
unit: "特性覆盖率 %"
applicable_domains:
  - digital
  - service
limitations: ""
related_standards:
status: draft
evidence_grade: C
---
# 全时段可用性

> 指标 ID：`M-WHEN-F-001-01` · 分类：**人工审计** · 证据等级：**C** · 状态：draft

**英文名**：24-Hour Adaptability

关联因素：[[WHEN-F-001-usage-time-period|WHEN-F-001]]（使用时段）

## 定义

核对核心功能全时段可用与夜间适配（暗色模式/亮度/免打扰）

## 测量方法

时段特性清单审计 + 夜间场景实测

## 数据来源

- 特性审计
- 实测

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 核心功能 24h 可用且有暗色模式 |
| 良好 | 夜间免打扰与延迟处理选项 |
| 优秀 | 光照/时段自适应界面 |

**单位**：特性覆盖率 %

## 适用领域

- digital
- service

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。


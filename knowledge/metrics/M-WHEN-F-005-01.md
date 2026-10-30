---
id: M-WHEN-F-005-01
factor_id: WHEN-F-005
name: "断点续接支持"
name_en: "Resumption Support"
category: audit
description: "对长任务审计自动保存、续接入口、时长预估与分步计划特性"
measurement_method: "长任务清单→中断注入测试（数据保存率/恢复成功率统计）"
data_source:
  - 任务审计
  - 中断测试
thresholds:
    minimum: "长任务自动保存（间隔 ≤ 30s 或实时）且有续接入口"
    good: "任务时长预估与分步计划展示"
    excellent: "跨设备无缝续接（状态同步）"
unit: "任务支持率 %"
applicable_domains:
  - digital
  - service
limitations: "保存间隔阈值为共识值，可按任务风险等级收紧"
related_standards:
status: draft
evidence_grade: C
---
# 断点续接支持

> 指标 ID：`M-WHEN-F-005-01` · 分类：**人工审计** · 证据等级：**C** · 状态：draft

**英文名**：Resumption Support

关联因素：[[WHEN-F-005-time-availability|WHEN-F-005]]（时间可用性）

## 定义

对长任务审计自动保存、续接入口、时长预估与分步计划特性

## 测量方法

长任务清单→中断注入测试（数据保存率/恢复成功率统计）

## 数据来源

- 任务审计
- 中断测试

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 长任务自动保存（间隔 ≤ 30s 或实时）且有续接入口 |
| 良好 | 任务时长预估与分步计划展示 |
| 优秀 | 跨设备无缝续接（状态同步） |

**单位**：任务支持率 %

## 适用领域

- digital
- service

## 局限与适用条件

保存间隔阈值为共识值，可按任务风险等级收紧

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。


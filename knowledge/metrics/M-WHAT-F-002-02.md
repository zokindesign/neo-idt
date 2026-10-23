---
id: M-WHAT-F-002-02
factor_id: WHAT-F-002
name: "任务完成时间百分位"
name_en: "Task Completion Time Percentiles"
category: user-test
description: "收集足够样本量下的任务完成时间，计算 P5/P50/P95"
measurement_method: "P95 完成时间 / 期望完成时间"
data_source:
  - 可用性测试
  - "生产环境日志（脱敏）"
thresholds:
    minimum: "P95 ≤ 期望时间 × 2"
    good: "P95 ≤ 期望时间 × 1.5"
    excellent: "P95 ≤ 期望时间 × 1.2"
unit: "秒 / 倍率"
applicable_domains:
limitations: ""
related_standards:
status: draft
evidence_grade: B
---
# 任务完成时间百分位

> 指标 ID：`M-WHAT-F-002-02` · 分类：**用户测试** · 证据等级：**B** · 状态：draft

**英文名**：Task Completion Time Percentiles

关联因素：[[WHAT-F-002-cognitive-load|WHAT-F-002]]（认知负荷）

## 定义

收集足够样本量下的任务完成时间，计算 P5/P50/P95

## 测量方法

P95 完成时间 / 期望完成时间

## 数据来源

- 可用性测试
- 生产环境日志（脱敏）

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | P95 ≤ 期望时间 × 2 |
| 良好 | P95 ≤ 期望时间 × 1.5 |
| 优秀 | P95 ≤ 期望时间 × 1.2 |

**单位**：秒 / 倍率

## 适用领域


> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。


---
id: M-WHEN-F-004-02
factor_id: WHEN-F-004
name: "时间负荷评分"
name_en: "Temporal Demand Score (NASA-TLX)"
category: user-test
description: "以 NASA-TLX 时间需求（Temporal Demand）子维度度量任务时间压力的主观负荷——该量表六维度含 Temporal Demand，0-20 分（Hart & Staveland 1988）"
measurement_method: "改版前后各邀请 ≥8 名代表性用户完成同一核心任务并填写 NASA-TLX，取 Temporal Demand 维度均值对比"
data_source:
  - "NASA-TLX 问卷"
  - 任务完成记录
thresholds:
    minimum: "时间需求均值 ≤15/20"
    good: "≤10/20"
    excellent: "≤6/20 且改版降幅 ≥30%"
unit: "TLX 时间需求分（0-20）"
applicable_domains:
  - universal
limitations: "主观量表受个体差异影响；小样本须报告离散度而非仅均值"
related_standards:
  - STD-NASA-TLX
status: draft
evidence_grade: B
---
# 时间负荷评分

> 指标 ID：`M-WHEN-F-004-02` · 分类：**用户测试** · 证据等级：**B** · 状态：draft

**英文名**：Temporal Demand Score (NASA-TLX)

关联因素：[[WHEN-F-004-time-pressure|WHEN-F-004]]（时间压力）

## 定义

以 NASA-TLX 时间需求（Temporal Demand）子维度度量任务时间压力的主观负荷——该量表六维度含 Temporal Demand，0-20 分（Hart & Staveland 1988）

## 测量方法

改版前后各邀请 ≥8 名代表性用户完成同一核心任务并填写 NASA-TLX，取 Temporal Demand 维度均值对比

## 数据来源

- NASA-TLX 问卷
- 任务完成记录

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 时间需求均值 ≤15/20 |
| 良好 | ≤10/20 |
| 优秀 | ≤6/20 且改版降幅 ≥30% |

**单位**：TLX 时间需求分（0-20）

## 适用领域

- universal

## 局限与适用条件

主观量表受个体差异影响；小样本须报告离散度而非仅均值

## 关联标准条款

- `STD-NASA-TLX`

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。


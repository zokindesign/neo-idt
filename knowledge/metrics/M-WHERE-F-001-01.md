---
id: M-WHERE-F-001-01
factor_id: WHERE-F-001
name: "环境包络适应性"
name_en: "Environmental Envelope Adaptation"
category: audit
description: "定义使用环境包络（照度/噪声/天气/手部条件），逐项测试功能在包络边缘的保持度"
measurement_method: "环境包络×功能矩阵实测或估算（照明与声学参照 ISO 21542:2021 cl.5.4/5.7）"
data_source:
  - 场景定义
  - 实地/实验室测试
thresholds:
    minimum: "标称环境（如常规室内照明）全功能可用"
    good: "强光/低光与高噪声下核心功能可用"
    excellent: "全场景自动适应（亮度/对比/触觉反馈切换）"
unit: "环境项通过率 %"
applicable_domains:
  - digital
  - industrial
  - architecture
limitations: "建筑空间类项目须按 ISO 21542 照明/声学条款实测"
related_standards:
  - "STD-ISO-21542:5.4"
  - "STD-ISO-21542:5.7"
status: draft
evidence_grade: C
---
# 环境包络适应性

> 指标 ID：`M-WHERE-F-001-01` · 分类：**人工审计** · 证据等级：**C** · 状态：draft

**英文名**：Environmental Envelope Adaptation

关联因素：[[WHERE-F-001-physical-environment|WHERE-F-001]]（物理环境）

## 定义

定义使用环境包络（照度/噪声/天气/手部条件），逐项测试功能在包络边缘的保持度

## 测量方法

环境包络×功能矩阵实测或估算（照明与声学参照 ISO 21542:2021 cl.5.4/5.7）

## 数据来源

- 场景定义
- 实地/实验室测试

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 标称环境（如常规室内照明）全功能可用 |
| 良好 | 强光/低光与高噪声下核心功能可用 |
| 优秀 | 全场景自动适应（亮度/对比/触觉反馈切换） |

**单位**：环境项通过率 %

## 适用领域

- digital
- industrial
- architecture

## 局限与适用条件

建筑空间类项目须按 ISO 21542 照明/声学条款实测

## 关联标准条款

- `STD-ISO-21542:5.4`
- `STD-ISO-21542:5.7`

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。


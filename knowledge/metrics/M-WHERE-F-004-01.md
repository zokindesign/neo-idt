---
id: M-WHERE-F-004-01
factor_id: WHERE-F-004
name: "资源缺失韧性"
name_en: "Resource-Loss Resilience"
category: audit
description: "枚举外部资源依赖（电力/网络/人力/耗材），在单点缺失下测试核心功能保持度"
measurement_method: "资源×功能矩阵 + 断供演练（断电/离线/无协助）"
data_source:
  - 依赖清单
  - 故障演练
thresholds:
    minimum: "任一单点资源缺失时核心功能可用（降级模式）"
    good: "降级状态明确提示且自动恢复"
    excellent: "离线优先/自给架构"
unit: "韧性项通过率 %"
applicable_domains:
  - digital
  - industrial
  - service
limitations: ""
related_standards:
  - "STD-ISO-21542:10.1"
  - "STD-ISO-21542:10.5"
status: draft
evidence_grade: C
---
# 资源缺失韧性

> 指标 ID：`M-WHERE-F-004-01` · 分类：**人工审计** · 证据等级：**C** · 状态：draft

**英文名**：Resource-Loss Resilience

关联因素：[[WHERE-F-004-resource-availability|WHERE-F-004]]（资源可用性）

## 定义

枚举外部资源依赖（电力/网络/人力/耗材），在单点缺失下测试核心功能保持度

## 测量方法

资源×功能矩阵 + 断供演练（断电/离线/无协助）

## 数据来源

- 依赖清单
- 故障演练

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 任一单点资源缺失时核心功能可用（降级模式） |
| 良好 | 降级状态明确提示且自动恢复 |
| 优秀 | 离线优先/自给架构 |

**单位**：韧性项通过率 %

## 适用领域

- digital
- industrial
- service

## 关联标准条款

- `STD-ISO-21542:10.1`
- `STD-ISO-21542:10.5`

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。


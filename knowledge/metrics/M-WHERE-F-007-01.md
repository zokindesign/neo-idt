---
id: M-WHERE-F-007-01
factor_id: WHERE-F-007
name: "情境覆盖矩阵"
name_en: "Context Coverage Matrix"
category: audit
description: "按 ISO 9241-210 使用情境要素（用户/目标/环境）建立情境×功能矩阵并核对实测覆盖"
measurement_method: "情境清单分级（P0/P1/P2）→设计覆盖核对→实测记录"
data_source:
  - 情境分析
  - 可用性测试
thresholds:
    minimum: "P0 情境 100% 定义并有设计覆盖"
    good: "P0 全部实测 + P1 桌面走查"
    excellent: "极端/并行情境（打扰、多任务）实测覆盖"
unit: "情境覆盖率 %"
applicable_domains:
  - universal
limitations: ""
related_standards:
  - "STD-ISO-9241-210:5.2"
status: draft
evidence_grade: C
---
# 情境覆盖矩阵

> 指标 ID：`M-WHERE-F-007-01` · 分类：**人工审计** · 证据等级：**C** · 状态：draft

**英文名**：Context Coverage Matrix

关联因素：[[WHERE-F-007-usage-context|WHERE-F-007]]（使用情境）

## 定义

按 ISO 9241-210 使用情境要素（用户/目标/环境）建立情境×功能矩阵并核对实测覆盖

## 测量方法

情境清单分级（P0/P1/P2）→设计覆盖核对→实测记录

## 数据来源

- 情境分析
- 可用性测试

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | P0 情境 100% 定义并有设计覆盖 |
| 良好 | P0 全部实测 + P1 桌面走查 |
| 优秀 | 极端/并行情境（打扰、多任务）实测覆盖 |

**单位**：情境覆盖率 %

## 适用领域

- universal

## 关联标准条款

- `STD-ISO-9241-210:5.2`

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。


---
id: M-WHICH-F-003-01
factor_id: WHICH-F-003
name: "自动化分级可调"
name_en: "Automation Level Adjustability"
category: user-test
description: "按 Parasuraman 2000 十级自动化模型审计自动化等级可选择性，并测量用户对各级的信任与干预频率"
measurement_method: "自动化功能×等级矩阵审计 + 用户实测（手动干预率/撤销使用率/接受度量表）"
data_source:
  - 功能审计
  - 用户测试
thresholds:
    minimum: "所有自动化决策可撤销或覆盖（对应 ISO 9241-110 5.5 可控性）"
    good: "自动化等级用户可选（全自动/半自动/手动分档）"
    excellent: "系统能力公示 + 用户自选干预粒度（逐项/批量）"
unit: "等级档位数 / 干预成功率"
applicable_domains:
  - digital
  - industrial
limitations: "Parasuraman 2000 为模型框架，用户实测需按自动化功能类型定制任务"
related_standards:
  - "STD-ISO-9241-110:5.5"
  - "STD-W3C-WCAG22:3.2.6"
status: draft
evidence_grade: B
---
# 自动化分级可调

> 指标 ID：`M-WHICH-F-003-01` · 分类：**用户测试** · 证据等级：**B** · 状态：draft

**英文名**：Automation Level Adjustability

关联因素：[[WHICH-F-003-control-preference|WHICH-F-003]]（控制感偏好）

## 定义

按 Parasuraman 2000 十级自动化模型审计自动化等级可选择性，并测量用户对各级的信任与干预频率

## 测量方法

自动化功能×等级矩阵审计 + 用户实测（手动干预率/撤销使用率/接受度量表）

## 数据来源

- 功能审计
- 用户测试

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 所有自动化决策可撤销或覆盖（对应 ISO 9241-110 5.5 可控性） |
| 良好 | 自动化等级用户可选（全自动/半自动/手动分档） |
| 优秀 | 系统能力公示 + 用户自选干预粒度（逐项/批量） |

**单位**：等级档位数 / 干预成功率

## 适用领域

- digital
- industrial

## 局限与适用条件

Parasuraman 2000 为模型框架，用户实测需按自动化功能类型定制任务

## 关联标准条款

- `STD-ISO-9241-110:5.5`
- `STD-W3C-WCAG22:3.2.6`

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。


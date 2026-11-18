---
id: M-WHICH-F-003-02
factor_id: WHICH-F-003
name: "自动化可控覆盖率"
name_en: "Automation Controllability Coverage"
category: audit
description: "盘点系统自动执行的操作，检查每项是否提供可感知的暂停/撤销/参数调节——对应 ISO 9241-110 对话原则中的可控性（controllability）"
measurement_method: "列出全部自动执行行为（自动提交/自动扣款/自动跳转/自动填充）→ 逐项核对是否具备确认、撤销或参数调节入口"
data_source:
  - 功能盘点
  - 双人背对背评审
thresholds:
    minimum: "100% 自动操作可撤销或有前置确认"
    good: "在 minimum 之上，交互节奏与顺序用户可控"
    excellent: "自动化程度可按用户偏好个性化设置"
unit: 可控自动操作百分比
applicable_domains:
  - digital
  - service
limitations: "「可控」判定含主观成分，须双人评审并记录分歧"
related_standards:
  - STD-ISO-9241-110
status: draft
evidence_grade: A
---
# 自动化可控覆盖率

> 指标 ID：`M-WHICH-F-003-02` · 分类：**人工审计** · 证据等级：**A** · 状态：draft

**英文名**：Automation Controllability Coverage

关联因素：[[WHICH-F-003-control-preference|WHICH-F-003]]（控制感偏好）

## 定义

盘点系统自动执行的操作，检查每项是否提供可感知的暂停/撤销/参数调节——对应 ISO 9241-110 对话原则中的可控性（controllability）

## 测量方法

列出全部自动执行行为（自动提交/自动扣款/自动跳转/自动填充）→ 逐项核对是否具备确认、撤销或参数调节入口

## 数据来源

- 功能盘点
- 双人背对背评审

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 100% 自动操作可撤销或有前置确认 |
| 良好 | 在 minimum 之上，交互节奏与顺序用户可控 |
| 优秀 | 自动化程度可按用户偏好个性化设置 |

**单位**：可控自动操作百分比

## 适用领域

- digital
- service

## 局限与适用条件

「可控」判定含主观成分，须双人评审并记录分歧

## 关联标准条款

- `STD-ISO-9241-110`

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。


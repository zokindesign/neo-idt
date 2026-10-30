---
id: M-WHAT-F-003-01
factor_id: WHAT-F-003
name: "容错恢复完备度"
name_en: "Error Tolerance & Recovery"
category: user-test
description: "注入典型操作错误（误触/误删/误提交），测量可恢复性、撤销可用性与损失防护"
measurement_method: "错误注入测试→撤销成功率/数据损失率/恢复步骤数记录"
data_source:
  - 可用性测试
  - 错误注入实验
thresholds:
    minimum: "破坏性操作有确认且可撤销（ISO 9241-110:2020 5.6 Use error robustness 对应）"
    good: "错误消息含恢复指引（WCAG 3.3.1/3.3.3）"
    excellent: "草稿自动保存与回滚历史"
unit: "恢复成功率 %"
applicable_domains:
  - digital
  - industrial
limitations: "WCAG 3.3.1（A 级）适用于 Web 界面；硬件类用 ISO 9241-110 5.6 原则审计"
related_standards:
  - "STD-W3C-WCAG22:3.3.1"
  - "STD-W3C-WCAG22:3.3.3"
  - "STD-ISO-9241-110:5.6"
status: draft
evidence_grade: B
---
# 容错恢复完备度

> 指标 ID：`M-WHAT-F-003-01` · 分类：**用户测试** · 证据等级：**B** · 状态：draft

**英文名**：Error Tolerance & Recovery

关联因素：[[WHAT-F-003-fault-tolerance|WHAT-F-003]]（容错性需求）

## 定义

注入典型操作错误（误触/误删/误提交），测量可恢复性、撤销可用性与损失防护

## 测量方法

错误注入测试→撤销成功率/数据损失率/恢复步骤数记录

## 数据来源

- 可用性测试
- 错误注入实验

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 破坏性操作有确认且可撤销（ISO 9241-110:2020 5.6 Use error robustness 对应） |
| 良好 | 错误消息含恢复指引（WCAG 3.3.1/3.3.3） |
| 优秀 | 草稿自动保存与回滚历史 |

**单位**：恢复成功率 %

## 适用领域

- digital
- industrial

## 局限与适用条件

WCAG 3.3.1（A 级）适用于 Web 界面；硬件类用 ISO 9241-110 5.6 原则审计

## 关联标准条款

- `STD-W3C-WCAG22:3.3.1`
- `STD-W3C-WCAG22:3.3.3`
- `STD-ISO-9241-110:5.6`

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。


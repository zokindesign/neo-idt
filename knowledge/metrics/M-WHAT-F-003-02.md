---
id: M-WHAT-F-003-02
factor_id: WHAT-F-003
name: "错误恢复成功率"
name_en: "Error Recovery Success Rate"
category: user-test
description: "用户在遇到注入错误后不经外部协助恢复任务的比例与耗时——容错性需求的直接测量（ISO 9241-110 容错原则、WCAG 3.3.1 错误标识）"
measurement_method: "注入典型错误（必填缺失/格式错误/网络中断）→ 观察并记录用户无协助恢复比例与平均恢复耗时"
data_source:
  - 可用性测试观察
  - 错误注入脚本
  - 恢复耗时计时
thresholds:
    minimum: "≥70% 错误无协助恢复"
    good: "≥85% 且恢复路径有明确指引（3.3.1 错误以文本描述）"
    excellent: "≥95% 且平均恢复耗时 <30 秒"
unit: 恢复成功率百分比
applicable_domains:
  - digital
  - service
limitations: "错误注入集与任务集需按产品校准；样本量影响稳定性"
related_standards:
  - STD-ISO-9241-110
  - "STD-W3C-WCAG22:3.3.1"
status: draft
evidence_grade: B
---
# 错误恢复成功率

> 指标 ID：`M-WHAT-F-003-02` · 分类：**用户测试** · 证据等级：**B** · 状态：draft

**英文名**：Error Recovery Success Rate

关联因素：[[WHAT-F-003-fault-tolerance|WHAT-F-003]]（容错性需求）

## 定义

用户在遇到注入错误后不经外部协助恢复任务的比例与耗时——容错性需求的直接测量（ISO 9241-110 容错原则、WCAG 3.3.1 错误标识）

## 测量方法

注入典型错误（必填缺失/格式错误/网络中断）→ 观察并记录用户无协助恢复比例与平均恢复耗时

## 数据来源

- 可用性测试观察
- 错误注入脚本
- 恢复耗时计时

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | ≥70% 错误无协助恢复 |
| 良好 | ≥85% 且恢复路径有明确指引（3.3.1 错误以文本描述） |
| 优秀 | ≥95% 且平均恢复耗时 <30 秒 |

**单位**：恢复成功率百分比

## 适用领域

- digital
- service

## 局限与适用条件

错误注入集与任务集需按产品校准；样本量影响稳定性

## 关联标准条款

- `STD-ISO-9241-110`
- `STD-W3C-WCAG22:3.3.1`

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。


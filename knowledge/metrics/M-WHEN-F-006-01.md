---
id: M-WHEN-F-006-01
factor_id: WHEN-F-006
name: "疲劳响应完备度"
name_en: "Fatigue Response Completeness"
category: audit
description: "审计疲劳检测信号（连续错误/操作放缓/会话时长）与响应机制（休息提示/界面简化/断点保存）"
measurement_method: "疲劳信号×响应机制矩阵审计；长会话实测错误率增长曲线（对照 NASA-TLX 量表校验）"
data_source:
  - 功能审计
  - 长会话测试
thresholds:
    minimum: "长会话有暂停与断点保存（数据不因疲劳中断丢失）"
    good: "连续错误/操作放缓触发主动休息提示"
    excellent: "疲劳自适应界面（信息量缩减/关键元素放大）"
unit: "响应机制覆盖率 %"
applicable_domains:
  - digital
  - industrial
limitations: "NASA-TLX 为主观负荷量表，生理疲劳信号需传感器支持；行为代理指标（错误率）为间接测量"
related_standards:
  - "STD-W3C-WCAG22:2.2.6"
status: draft
evidence_grade: B
---
# 疲劳响应完备度

> 指标 ID：`M-WHEN-F-006-01` · 分类：**人工审计** · 证据等级：**B** · 状态：draft

**英文名**：Fatigue Response Completeness

关联因素：[[WHEN-F-006-fatigue-level|WHEN-F-006]]（疲劳度）

## 定义

审计疲劳检测信号（连续错误/操作放缓/会话时长）与响应机制（休息提示/界面简化/断点保存）

## 测量方法

疲劳信号×响应机制矩阵审计；长会话实测错误率增长曲线（对照 NASA-TLX 量表校验）

## 数据来源

- 功能审计
- 长会话测试

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 长会话有暂停与断点保存（数据不因疲劳中断丢失） |
| 良好 | 连续错误/操作放缓触发主动休息提示 |
| 优秀 | 疲劳自适应界面（信息量缩减/关键元素放大） |

**单位**：响应机制覆盖率 %

## 适用领域

- digital
- industrial

## 局限与适用条件

NASA-TLX 为主观负荷量表，生理疲劳信号需传感器支持；行为代理指标（错误率）为间接测量

## 关联标准条款

- `STD-W3C-WCAG22:2.2.6`

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。


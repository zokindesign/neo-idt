---
id: M-WHERE-F-006-01
factor_id: WHERE-F-006
name: "紧急功能可达性"
name_en: "Emergency Function Accessibility"
category: audit
description: "紧急操作（SOS/疏散/中止）步数与多感官告警审计，对照 GB 55019 信息交流与 ISO 21542 消防疏散条款"
measurement_method: "界面状态图遍历测最短步数 + 告警通道核对（视/听/触），建筑类按 GB 55019 ch.4 与 ISO 21542:2021 cl.11 检查表实测"
data_source:
  - 界面状态图
  - 实地测试
thresholds:
    minimum: "紧急操作 ≤ 3 步且告警多感官（适用范围内符合强制规范）"
    good: "免登录/免解锁可用紧急功能"
    excellent: "离线紧急信息与演练模式"
unit: "步数 / 告警通道数"
applicable_domains:
  - digital
  - industrial
  - architecture
limitations: "强制要求仅适用于建筑信息交流设施范围；数字产品为最佳实践"
related_standards:
  - "STD-ISO-21542:11"
  - "STD-GB-55019:4"
status: draft
evidence_grade: B
---
# 紧急功能可达性

> 指标 ID：`M-WHERE-F-006-01` · 分类：**人工审计** · 证据等级：**B** · 状态：draft

**英文名**：Emergency Function Accessibility

关联因素：[[WHERE-F-006-emergency-response|WHERE-F-006]]（紧急情况应对）

## 定义

紧急操作（SOS/疏散/中止）步数与多感官告警审计，对照 GB 55019 信息交流与 ISO 21542 消防疏散条款

## 测量方法

界面状态图遍历测最短步数 + 告警通道核对（视/听/触），建筑类按 GB 55019 ch.4 与 ISO 21542:2021 cl.11 检查表实测

## 数据来源

- 界面状态图
- 实地测试

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 紧急操作 ≤ 3 步且告警多感官（适用范围内符合强制规范） |
| 良好 | 免登录/免解锁可用紧急功能 |
| 优秀 | 离线紧急信息与演练模式 |

**单位**：步数 / 告警通道数

## 适用领域

- digital
- industrial
- architecture

## 局限与适用条件

强制要求仅适用于建筑信息交流设施范围；数字产品为最佳实践

## 关联标准条款

- `STD-ISO-21542:11`
- `STD-GB-55019:4`

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。


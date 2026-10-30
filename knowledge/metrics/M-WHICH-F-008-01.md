---
id: M-WHICH-F-008-01
factor_id: WHICH-F-008
name: "交互模式可选性"
name_en: "Interaction Mode Optionality"
category: audit
description: "审计交互模式清单（直接操作/命令/手势/语音/快捷键）的并存性、默认可选与切换成本"
measurement_method: "模式×任务矩阵审计 + 模式切换步数与再学习成本评估"
data_source:
  - 功能审计
  - 用户测试
thresholds:
    minimum: "核心任务 ≥2 模式可用且默认模式用户可选"
    good: "切换 ≤1 步且无强制模式（触屏保留快捷键等效）"
    excellent: "模式偏好记忆与情境感知推荐（驾驶→语音）"
unit: "模式数 / 切换步数"
applicable_domains:
  - digital
  - industrial
limitations: "ISO 9241-110 5.5.4 个性化推荐为间接支撑；模式清单按产品类别裁剪"
related_standards:
  - "STD-ISO-9241-110:5.5.4"
status: draft
evidence_grade: B
---
# 交互模式可选性

> 指标 ID：`M-WHICH-F-008-01` · 分类：**人工审计** · 证据等级：**B** · 状态：draft

**英文名**：Interaction Mode Optionality

关联因素：[[WHICH-F-008-interaction-mode-preference|WHICH-F-008]]（交互模式偏好）

## 定义

审计交互模式清单（直接操作/命令/手势/语音/快捷键）的并存性、默认可选与切换成本

## 测量方法

模式×任务矩阵审计 + 模式切换步数与再学习成本评估

## 数据来源

- 功能审计
- 用户测试

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 核心任务 ≥2 模式可用且默认模式用户可选 |
| 良好 | 切换 ≤1 步且无强制模式（触屏保留快捷键等效） |
| 优秀 | 模式偏好记忆与情境感知推荐（驾驶→语音） |

**单位**：模式数 / 切换步数

## 适用领域

- digital
- industrial

## 局限与适用条件

ISO 9241-110 5.5.4 个性化推荐为间接支撑；模式清单按产品类别裁剪

## 关联标准条款

- `STD-ISO-9241-110:5.5.4`

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。


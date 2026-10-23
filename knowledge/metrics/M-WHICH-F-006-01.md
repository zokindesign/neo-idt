---
id: M-WHICH-F-006-01
factor_id: WHICH-F-006
name: "输入模态冗余度"
name_en: "Input Modality Redundancy"
category: audit
description: "核心操作的输入模态计数（触控/键盘/语音/手势/物理按钮），单一模态失效时是否有替代路径"
measurement_method: "核心操作×模态矩阵审计；按 WCAG 2.5.1 指针手势与 2.1.1 键盘核查替代路径"
data_source:
  - 功能审计
  - "AT 兼容测试"
thresholds:
    minimum: "核心操作 ≥ 2 种模态（含键盘等效，WCAG 2.1.1 A 级）"
    good: "≥ 3 种模态且含无精细动作模态（语音/大按钮）"
    excellent: "模态自由切换且偏好记忆"
unit: "模态数 / 操作"
applicable_domains:
  - digital
  - industrial
limitations: "WCAG 2.1.1 键盘为 Web 强制基线；硬件产品按 ISO 9241-110 5.5 灵活性原则审计"
related_standards:
  - "STD-W3C-WCAG22:2.1.1"
  - "STD-W3C-WCAG22:2.5.1"
  - "STD-ISO-9241-110:5.5"
status: draft
evidence_grade: B
---
# 输入模态冗余度

> 指标 ID：`M-WHICH-F-006-01` · 分类：**人工审计** · 证据等级：**B** · 状态：draft

**英文名**：Input Modality Redundancy

关联因素：[[WHICH-F-006-input-method-preference|WHICH-F-006]]（输入方式偏好）

## 定义

核心操作的输入模态计数（触控/键盘/语音/手势/物理按钮），单一模态失效时是否有替代路径

## 测量方法

核心操作×模态矩阵审计；按 WCAG 2.5.1 指针手势与 2.1.1 键盘核查替代路径

## 数据来源

- 功能审计
- AT 兼容测试

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 核心操作 ≥ 2 种模态（含键盘等效，WCAG 2.1.1 A 级） |
| 良好 | ≥ 3 种模态且含无精细动作模态（语音/大按钮） |
| 优秀 | 模态自由切换且偏好记忆 |

**单位**：模态数 / 操作

## 适用领域

- digital
- industrial

## 局限与适用条件

WCAG 2.1.1 键盘为 Web 强制基线；硬件产品按 ISO 9241-110 5.5 灵活性原则审计

## 关联标准条款

- `STD-W3C-WCAG22:2.1.1`
- `STD-W3C-WCAG22:2.5.1`
- `STD-ISO-9241-110:5.5`

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。


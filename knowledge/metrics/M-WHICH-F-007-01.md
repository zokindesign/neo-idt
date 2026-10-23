---
id: M-WHICH-F-007-01
factor_id: WHICH-F-007
name: "反馈多通道冗余"
name_en: "Feedback Channel Redundancy"
category: audit
description: "关键反馈（成功/失败/进度/警告）的多感官通道冗余审计（视觉+听觉+触觉至少双通道）"
measurement_method: "反馈事件×通道矩阵审计；WCAG 4.1.3 状态消息（AA）核对屏幕阅读器播报"
data_source:
  - 功能审计
  - "AT 测试"
thresholds:
    minimum: "关键反馈不依赖单一感官通道（WCAG 1.4.2 音频控制相关 + ISO 9241-110 5.2 自描述性）"
    good: "双通道反馈且用户可选偏好通道"
    excellent: "三通道冗余与感官替代（闪光→振动）"
unit: "通道冗余率 %"
applicable_domains:
  - digital
  - industrial
limitations: "WCAG 4.1.3 适用范围：不改变焦点的状态更新，AA 级"
related_standards:
  - "STD-W3C-WCAG22:4.1.3"
  - "STD-ISO-9241-110:5.2"
status: draft
evidence_grade: B
---
# 反馈多通道冗余

> 指标 ID：`M-WHICH-F-007-01` · 分类：**人工审计** · 证据等级：**B** · 状态：draft

**英文名**：Feedback Channel Redundancy

关联因素：[[WHICH-F-007-feedback-preference|WHICH-F-007]]（反馈偏好）

## 定义

关键反馈（成功/失败/进度/警告）的多感官通道冗余审计（视觉+听觉+触觉至少双通道）

## 测量方法

反馈事件×通道矩阵审计；WCAG 4.1.3 状态消息（AA）核对屏幕阅读器播报

## 数据来源

- 功能审计
- AT 测试

## 三档阈值

| 档位 | 阈值 |
|------|------|
| 最低合规 | 关键反馈不依赖单一感官通道（WCAG 1.4.2 音频控制相关 + ISO 9241-110 5.2 自描述性） |
| 良好 | 双通道反馈且用户可选偏好通道 |
| 优秀 | 三通道冗余与感官替代（闪光→振动） |

**单位**：通道冗余率 %

## 适用领域

- digital
- industrial

## 局限与适用条件

WCAG 4.1.3 适用范围：不改变焦点的状态更新，AA 级

## 关联标准条款

- `STD-W3C-WCAG22:4.1.3`
- `STD-ISO-9241-110:5.2`

> 权威源：`registry/metrics.yaml`（本卡为导航视图，字段以注册表为准）。


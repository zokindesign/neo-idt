---
abstract_dimensions: []
dimension: WHICH
evidence: C
evidence_note: "有标准条款（GDPR 第 25 条数据保护设计、PIPL 第 16 条），间接支撑；维持 C 级"
guides: [G-WHICH-F-004]
id: WHICH-F-004
merge_candidate: false
metrics: [M-WHICH-F-004-01]
name: 社交可见性偏好
name_en: Social Visibility Preference
ownership_review: false
refs:
  standards: ["STD-GDPR:25", "STD-PIPL:16"]
  research: []
response: choice-space
rules: []
slug: social-visibility-preference
split_candidate: false
status: draft
type: preference
version: '3.0'
weights:
  coverage: high
  effort: medium
  frequency: high
---

## 基本定义
用户在社交互动中对个人信息、活动状态、在线状态的暴露程度偏好。

## 为什么重要
- 隐私担忧是主要排斥因素之一
- 社交可见性设置不当可能导致用户流失
- 强制社交功能（如真实姓名）可能排斥匿名偏好用户

## 量化标准
- **测量方法**: 隐私设置使用率调查、可见性选项选择率
- **指标**: 用户修改默认隐私设置的比例
- **敏感度分级**: 对个人信息、位置、活动、好友列表等不同敏感度

## 设计指南
- 提供精细化的可见性控制（每条信息、每个功能独立设置）
- 默认设置为最严格的隐私选项
- 明确提示当前可见性状态
- 场景化预设（如“仅好友”、“仅工作伙伴”）

## 跨领域表现
- **社交应用**: 谁可以看到我的帖子、在线状态
- **穿戴设备**: 运动成就是否分享到社交网络
- **智能家居**: 家庭活动日志是否共享给访客
- **服装设计**: 显露度选择（遮体程度、紧身 vs 宽松）

## 相关标准
- GDPR、CCPA 等隐私法规要求
- ISO/IEC 27701: 隐私信息管理体系

---
*因素权重评估: ⭐⭐⭐⭐⭐ (隐私保护核心)*
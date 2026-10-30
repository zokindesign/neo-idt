---
abstract_dimensions: []
dimension: HOW
evidence: C
evidence_note: "有标准条款（WCAG 2.2 目标尺寸等），设备能力的间接标准支撑；维持 C 级"
guides: [G-HOW-F-002]
id: HOW-F-002
merge_candidate: false
metrics: [M-HOW-F-002-01]
name: 设备能力
name_en: Device Capability
ownership_review: false
refs:
  standards: ["STD-EN-301549:8", "STD-GB-T-45122:6.4"]
  research: []
response: alternative
rules: []
slug: device-capability
split_candidate: false
status: draft
type: constraint
version: '3.0'
weights:
  coverage: high
  effort: medium
  frequency: medium
---

## 基本定义
用户设备在计算能力、存储空间、传感器、电池等方面的硬件限制。

## 为什么重要
- 旧设备或低端设备用户占相当比例
- 电池续航限制了用户的使用时长和场景
- 传感器缺失影响功能可用性（如无陀螺仪不能玩某些游戏）

## 量化标准
- **处理能力**: CPU速度、核心数、GPU性能
- **RAM**: 可用内存大小
- **存储**: 剩余空间
- **传感器**: 是否具备GPS、摄像头、指纹、NFC等
- **电池**: 续航时间、充电条件

## 设计指南
- 检测设备能力，动态调整为轻量功能
- 避免强制使用高端硬件才能运行功能
- 提供“省电模式”选项
- 允许外部设备替代（如外接键盘）

## 相关标准
- Progressive Web Apps (PWA) 能力检测

---
*因素权重评估: ⭐⭐⭐⭐☆ (在新兴市场尤其重要)*
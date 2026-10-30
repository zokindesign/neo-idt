---
abstract_dimensions: []
dimension: HOW
evidence: C
evidence_note: "有标准条款（WCAG 2.2 SC 4.1 兼容、EN 301 549 clause 11 AT 兼容），间接支撑；维持 C 级"
guides: [G-HOW-F-006]
id: HOW-F-006
merge_candidate: false
metrics: [M-HOW-F-006-01]
name: 辅助技术兼容性
name_en: Assistive Technology Compatibility
ownership_review: false
refs:
  standards: ["STD-EN-301549:9.4", "STD-W3C-WCAG22:4.1"]
  research: []
response: alternative
rules: []
slug: assistive-tech-compatibility
split_candidate: false
status: draft
type: constraint
version: '3.0'
weights:
  coverage: high
  effort: medium
  frequency: high
---

## 基本定义
产品或服务与辅助技术（AT）的互操作性，包括屏幕阅读器、放大软件、语音识别、眼动仪、切换设备、盲文显示器等。

## 为什么重要
- AT是残障人士使用数字产品的桥梁，不兼容意味着完全不可用
- 法规要求（如WCAG、Section 508）强制部分产品满足AT兼容
- AT生态碎片化，需覆盖主流组合

## 量化标准
- **支持列表**: 通过测试的AT清单（浏览器+OS+AT组合）
- **兼容功能覆盖率**: 产品功能在AT下的可用功能比例
- **测试通过率**: 通过标准AT测试用例的百分比
- **用户测试**: 真实AT用户完成任务的成功率

## 设计指南
- 遵循标准无障碍API（ARIA, AT-SPI, UIAutomation）
- 确保焦点管理正确，阅读顺序合理
- 提供文本替代、键盘操作支持
- 测试主流AT：NVDA+Firefox, JAWS+Chrome, VoiceOver, TalkBack

## 跨领域表现
| 平台/领域 | AT示例 |
|-----------|--------|
| **Web** | 屏幕阅读器、语音控制、键盘导航 |
| **桌面应用** | UI Automation、Linux Orca |
| **移动端** | TalkBack (Android), VoiceOver (iOS) |
| **硬件设备** | 切换输入、眼动仪、头控设备 |

## 相关标准
- WCAG 2.x 的成功标准直接支持AT
- Section 508 (US), EN 301 549 (EU)

---
*因素权重评估: ⭐⭐⭐⭐⭐ (无障碍合规核心)*
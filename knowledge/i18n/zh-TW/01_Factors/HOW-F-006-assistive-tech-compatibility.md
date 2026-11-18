---
id: HOW-F-006
lang: zh-TW
name: 輔助科技相容性
name_en: Assistive Technology Compatibility
source: ../../../factors/HOW-F-006-assistive-tech-compatibility.md
refs:
  standards:
  - STD-EN-301549:9.4
  - STD-W3C-WCAG22:4.1
  research: []
---


## 基本定義
產品或服務與輔助科技（AT）的互操作性，包括螢幕閱讀器、放大軟體、語音識別、眼動儀、切換裝置、盲文顯示器等。

## 為什麼重要
- AT是殘障人士使用數字產品的橋樑，不相容意味著完全不可用
- 法規要求（如WCAG、Section 508）強制部分產品滿足AT相容
- AT生態碎片化，需覆蓋主流組合

## 量化標準
- **支援列表**: 透過測試的AT清單（瀏覽器+OS+AT組合）
- **相容功能覆蓋率**: 產品功能在AT下的可用功能比例
- **測試透過率**: 透過標準AT測試用例的百分比
- **使用者測試**: 真實AT使用者完成任務的成功率

## 設計指南
- 遵循標準無障礙API（ARIA, AT-SPI, UIAutomation）
- 確保焦點管理正確，閱讀順序合理
- 提供文字替代、鍵盤操作支援
- 測試主流AT：NVDA+Firefox, JAWS+Chrome, VoiceOver, TalkBack

## 跨領域表現
| 平臺/領域 | AT示例 |
|-----------|--------|
| **Web** | 螢幕閱讀器、語音控制、鍵盤導航 |
| **桌面應用** | UI Automation、Linux Orca |
| **行動端** | TalkBack (Android), VoiceOver (iOS) |
| **硬體裝置** | 切換輸入、眼動儀、頭控裝置 |

## 相關標準
- WCAG 2.x 的成功標準直接支援AT
- Section 508 (US), EN 301 549 (EU)

---
*因素權重評估: ⭐⭐⭐⭐⭐ (無障礙遵循核心)*

---
id: HOW-F-004
lang: zh-TW
name: 相容性要求
name_en: Compatibility Requirements
source: ../../../factors/HOW-F-004-compatibility-requirements.md
refs:
  standards:
  - STD-EN-301549:6
  research: []
---


## 基本定義
系統需要在不同平臺、瀏覽器版本、作業系統或輔助科技間正常工作的能力。

## 為什麼重要
- 使用者使用環境碎片化嚴重
- 企業環境往往使用舊版瀏覽器或系統
- 輔助科技（螢幕閱讀器、眼動儀）需要專門適配

## 量化標準
- **支援矩陣**: 需要支援的最高/最低版本範圍
- **市場覆蓋率**: 目標使用者群使用的平臺分佈
- **輔助科技適配**: 是否透過主流AT測試（JAWS, NVDA, VoiceOver）

## 設計指南
- 採用漸進增強策略
- 使用標準化Web API避免過時外掛
- 定期測試主流輔助科技
- 提供polyfill或備選實現

## 相關標準
- WCAG 遵循要求
- 平臺特定相容性列表（如Android碎片化）

---
*因素權重評估: ⭐⭐⭐⭐☆ (企業級產品必須重視)*

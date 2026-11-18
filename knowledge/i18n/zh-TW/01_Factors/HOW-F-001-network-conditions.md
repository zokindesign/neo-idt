---
id: HOW-F-001
lang: zh-TW
name: 網路條件
name_en: Network Conditions
source: ../../../factors/HOW-F-001-network-conditions.md
refs:
  standards:
  - STD-W3C-WCAG22:1.4.10
  - STD-EN-301549:9
  research: []
---


## 基本定義
使用者的網路接入質量，包括頻寬、延遲、穩定性和成本。

## 為什麼重要
- 網路可用性直接影響產品可訪問性
- 低收入地區或移動場景下網路條件受限
- 影響功能可用性和使用者體驗

## 量化標準
- **頻寬**: 可用資料傳輸速率（Kbps/Mbps）
- **延遲**: 往返時間 RTT (ms)
- **穩定性**: 丟包率、連線中斷頻率
- **成本**: 單位流量費用（影響使用意願）

## 設計指南
- 離線功能優先核心功能
- 自適應媒體質量（根據頻寬調整）
- 快取策略減少重複請求
- 優雅降級：網路不可用時提供基本功能
- 明確告知當前網路狀態和預期等待時間

## 相關標準
- None specific; use performance best practices

---
*因素權重評估: ⭐⭐⭐⭐⭐ (全球仍有大量使用者網路受限)*

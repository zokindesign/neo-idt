---
id: HOW-F-003
lang: en
name: "Power & Battery Life"
name_en: "Power & Battery Life"
source: ../../../factors/HOW-F-003-power-battery-life.md
refs:
  standards: []
  research: ["Rahmati A. & Zhong L. (2009). Human-battery interaction on mobile phones. Pervasive and Mobile Computing, 5(5), 465-477. [Journal extension of the MobileHCI'07 study]"]
---

## Definition
The constraints that a device's battery endurance, ease of charging, and power-management capabilities place on how users can use it.

## Why It Matters
- Insufficient endurance limits mobile usage scenarios and forces users to cut back usage or hunt for a charger
- Difficult charging (proprietary connectors, few charging stations) affects usability
- Some users cannot charge frequently (e.g., outdoor workers, older adults)

## Quantitative Criteria
- **Battery life**: battery endurance under typical usage (hours)
- **Charging time**: time required to charge from 0 to 100%
- **Power threshold**: power draw under different loads (W)
- **Power adapter**: whether universal charging is supported (USB-C PD, wireless charging)

## Design Guidelines
- Provide a power-saving mode (reduce performance, disable non-essential features)
- Optimize code and hardware power consumption (low-power algorithms, sleep strategies)
- Let users view the battery level and an estimate of remaining use time
- Support multiple charging methods (wired, wireless, external battery)

## Cross-Domain Manifestations
| Device Type | Endurance Considerations |
|----------|----------|
| **Smartphones** | Moderate daily use, fast charging, wireless charging |
| **Laptops** | 8 hours of office work, USB-C charging, external battery |
| **Wearables** | 7+ days on standby, magnetic charging, low-power sensors |
| **Medical devices** | Extended monitoring, backup battery, emergency charging |

## Related Standards
- No mandatory standard; relies on energy-efficiency certification (e.g., Energy Star)

---
*Factor weight assessment: ⭐⭐⭐⭐☆ (critical for mobile devices)*


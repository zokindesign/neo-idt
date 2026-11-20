---
id: WHEN-F-006
lang: en
name: Fatigue Level
name_en: Fatigue Level
source: ../../../factors/WHEN-F-006-fatigue-level.md
refs:
  standards: ["STD-W3C-WCAG22:2.2.6", "STD-NASA-TLX"]
  research: ["Hart S.G. & Staveland L.E. (1988). Development of NASA-TLX (Task Load Index): Results of empirical and theoretical research. In Advances in Psychology (Vol. 52, pp. 139-183). https://doi.org/10.1016/S0166-4115(08)62386-9"]
---

## Definition
The degree to which a user's cognitive and physiological abilities decline after continuous use or during specific time periods, manifesting as distractibility, rising error rates, and slower operation.

## Why It Matters
- Operating under fatigue increases risk (e.g., in medical and driving scenarios)
- Fatigue leads to user abandonment and degraded experience
- Detecting and responding to fatigue improves safety and sustained use

## Quantification Criteria
- **Session length vs error rate**: the error growth curve over time in use
- **Pupillometry / blink rate**: physiological fatigue signals (when sensors are available)
- **Self-reported fatigue**: the level of fatigue the user reports periodically
- **Reaction time**: increasing delay in operational responses

## Design Guidelines
- Detect and act on fatigue signals (e.g., consecutive errors, slower operation)
- Prompt rest proactively (micro-breaks, eye exercises)
- Simplify the interface under fatigue (reduce information, enlarge key elements)
- Support pausing and checkpoint saving

## Cross-Domain Manifestations
| Domain | Fatigue response |
|------|----------|
| **Driving systems** | Fatigue monitoring, rest reminders, lane-keeping assistance |
| **Office software** | Scheduled break reminders, eye-care mode, document summarization |
| **Industrial control** | Rest scheduling between work periods, fatigue early-warning systems |
| **Learning platforms** | Learning-pace regulation, attention detection, chunked content |

## Related Standards
- ISO 9241-410: fatigue considerations in human factors engineering
- Industry safety regulations (e.g., aviation, healthcare)

---
*Factor weight assessment: ⭐⭐⭐⭐☆ (Key for safety- and health-related design)*


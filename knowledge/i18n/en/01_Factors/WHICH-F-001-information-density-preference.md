---
id: WHICH-F-001
lang: en
name: Information Density Preference
name_en: Information Density Preference
source: ../../../factors/WHICH-F-001-information-density-preference.md
refs:
  standards: ["STD-W3C-WCAG22:1.4.4", "STD-ISO-9241-110:5.5.4"]
  research: []
---

## Definition
The user's degree of preference for, and tolerance range of, the amount of information and level of detail presented at once.

## Why It Matters
- Information overload → cognitive load ↑, anxiety ↑
- Too little information → efficiency ↓, distrust ↑
- Needs differ greatly across scenarios (e.g., data analysts vs. ordinary users)

## Quantification Criteria
- **Measurement methods**: eye tracking (fixation duration, saccade paths), user self-assessment (preference scales)
- **Metrics**: on-screen element density, text line-height density, data-point density
- **Reference thresholds**: general web pages are advised to keep font size ≥ 16px and line spacing ≥ 1.5

## Design Guidelines
- Provide a "compact mode" / "detailed mode" toggle
- Layer information: summary → detail (collapse/expand)
- Let users customize their dashboard (control over what is displayed)
- Default density set to "medium", with an entry point for adjustment

## Cross-Domain Manifestations
| Domain | Low-density preference | High-density preference |
|------|------------|------------|
| **Digital products** | Minimalist, generous whitespace, less is more | Data-dense, everything at a glance, multi-panel |
| **Industrial design** | Simplified interfaces, key controls highlighted | Multifunction panels, parameters displayed centrally |
| **Architectural design** | Open space, minimalist decoration | Multifunction composite, compact space |
| **Fashion design** | Clean styles, minimal ornamentation | Layered combinations, abundant accessories |

## Related Standards
- WCAG 1.4.4: Resize Text (without breaking layout)
- Nielsen Norman Group: balancing information density and readability

---
*Factor weight assessment: ⭐⭐⭐⭐⭐ (An extremely common preference difference)*


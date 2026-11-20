---
id: WHICH-F-008
lang: en
name: "Interaction Mode Preference"
name_en: "Interaction Mode Preference"
source: ../../../factors/WHICH-F-008-interaction-mode-preference.md
refs:
  standards: ["STD-ISO-9241-110:5.5.4"]
  research: ["Parasuraman R., Sheridan T.B. & Wickens C.D. (2000). A model for types and levels of human interaction with automation. IEEE Transactions on SMC-A, 30(3), 286-297. https://doi.org/10.1109/3468.844354"]
---

## Basic Definition
The interaction styles users prefer when working with a system — direct manipulation (clicking, dragging) vs. command-based (typing instructions), gestures, voice, keyboard shortcuts, and so on.

## Why It Matters
- Users differ widely in proficiency and comfort across interaction modes
- Task context also shapes the best mode (e.g., voice suits driving)
- Offering multiple interaction modes improves both efficiency and accessibility

## Quantification Criteria
- **Usage frequency**: actual share of use of each mode
- **Error rate**: operational error rate within a mode
- **Task completion time**: average time to complete the same task in different modes
- **Learning curve**: time needed to master a new mode

## Design Guidelines
- Support multiple interaction modes at once (mouse, touch, keyboard, voice)
- Let users set a default interaction mode
- Do not force mode switches (e.g., keep right-click menus on touch devices)
- Provide shortcuts for switching modes

## Cross-Domain Manifestations
| Domain | Mode examples |
|------|----------|
| **Desktop software** | menu navigation, keyboard shortcuts, command line, drag and drop |
| **Mobile apps** | touch gestures, voice input, physical buttons |
| **Smart home** | app control, voice assistants, physical switches, automation scenes |
| **Gaming** | keyboard + mouse, gamepads, motion controls, touchscreens |

## Related Standards
- No unified standard; follow platform conventions (iOS HIG, Material Design)

---
*Factor weight assessment: ⭐⭐⭐⭐☆ (multimodal interaction products)*


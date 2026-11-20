---
id: WHICH-F-006
lang: en
name: "Input Method Preference"
name_en: "Input Method Preference"
source: ../../../factors/WHICH-F-006-input-method-preference.md
refs:
  standards: ["STD-W3C-WCAG22:2.1.1", "STD-W3C-WCAG22:2.5.7"]
  research: []
---

## Basic Definition
The input modalities users prefer for interacting with a system — keyboard, mouse, touch, voice, gesture, eye tracking, switch devices, and so on — as well as the strength of these preferences and how the modalities are combined.

## Why It Matters
- Users differ widely in familiarity, comfort, and efficiency across input methods
- Physical conditions can rule out certain inputs (e.g., one-handed operation, fine motor control)
- Context also affects the best input (voice while driving; keyboard and mouse in the office)
- Offering input switching improves accessibility and user satisfaction

## Quantification Criteria
- **Input method usage frequency**: share of each modality across tasks
- **Switching frequency**: how often users switch input methods within a single session
- **Error rate**: operational error rate per input method
- **Satisfaction ratings**: comfort and efficiency ratings per input method

## Design Guidelines
- Support multiple input devices simultaneously without mandating a single method (e.g., keep keyboard shortcuts)
- Let users set default input method / device priority
- Provide a quick entry point for switching input methods
- Support input remapping (e.g., key remapping, custom gestures)
- Context awareness: automatically suggest a suitable input (e.g., voice while on the move)

## Cross-Domain Manifestations
| Domain | Input method examples |
|------|--------------|
| **Desktop software** | mouse, keyboard, trackpad, stylus, voice commands |
| **Mobile apps** | touch, gestures, external keyboards, voice input |
| **Game devices** | gamepads, keyboard + mouse, motion controls, VR controllers, steering wheels |
| **Industrial/medical** | switches, foot pedals, head control, eye tracking, breath control |

## Related Standards
- Platform accessibility frameworks (e.g., UI Automation, AT-SPI)
- Standards for alternative input devices (e.g., USB HID)
- IEEE 11064: human-computer interaction design principles

---
*Factor weight assessment: ⭐⭐⭐⭐☆ (essential for hardware-interaction products)*


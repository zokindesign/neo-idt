---
id: WHICH-F-007
lang: en
name: "Feedback Preference"
name_en: "Feedback Preference"
source: ../../../factors/WHICH-F-007-feedback-preference.md
refs:
  standards: ["STD-W3C-WCAG22:4.1.3", "STD-ISO-9241-110:5.2.3"]
  research: []
---

## Basic Definition
Users' subjective preferences for the form, intensity, duration, and sensory channel (visual, auditory, tactile) of the system's responses to their actions.

## Why It Matters
- Feedback is the foundation of interaction; poorly tuned feedback distracts or gets missed
- Needs differ by context (quiet in the office, prominent outdoors)
- Users with photosensitive epilepsy or autism need to avoid certain feedback forms

## Quantification Criteria
- **Feedback intensity**: alert volume, animation duration, and vibration strength users can accept
- **Channel preference**: ratio of visual / auditory / haptic usage
- **Interruption tolerance**: ratings of how intrusive non-task-related alerts feel
- **Information density**: desired level of feedback detail (confirmation only vs. detailed status)

## Design Guidelines
- Let users adjust the intensity of each channel or turn specific channels off
- Provide silent mode and do-not-disturb mode
- Use strong multi-channel feedback for urgent or high-risk states (but keep it configurable)
- Design for photosensitivity, sound sensitivity, and other special needs

## Cross-Domain Manifestations
| Domain | Feedback forms |
|------|----------|
| **Mobile apps** | alert tones, vibration, visual toasts, status-bar updates |
| **Desktop software** | sound cues, taskbar flashing, balloon notifications |
| **Industrial control** | indicator lights, buzzers, haptic feedback (force-feedback controllers) |
| **Wearables** | vibration patterns, lights, voice feedback |

## Related Standards
- WCAG 2.2 SC 2.2.1: Timing Adjustable
- Flicker and sound requirements in accessibility guidelines

---
*Factor weight assessment: ⭐⭐⭐⭐☆ (broad impact across interactive products)*


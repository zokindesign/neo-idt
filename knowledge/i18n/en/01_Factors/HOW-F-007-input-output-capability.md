---
id: HOW-F-007
lang: en
name: Input Output Capability
name_en: Input Output Capability
source: ../../../factors/HOW-F-007-input-output-capability.md
refs:
  standards: ["STD-EN-301549:11.5.2", "STD-W3C-WCAG22:4.1.2"]
  research: []
---

## Definition
The diversity, precision, and compatibility of the input methods a device supports (touch, keys, voice, gamepads, eye tracking) and the output methods it provides (screen, speaker, vibration, Braille).

## Why It Matters
- Users may lack a certain input capability (e.g., one-handed operation, visual impairment) or prefer another
- Insufficient output channels exclude users with limited sensory perception
- Environmental factors may restrict certain I/O (e.g., a noisy environment requires visual output)

## Quantitative Criteria
- **Number of input channels**: the variety of supported input methods (≥3 is preferable)
- **Precision requirements**: touch target size, key travel, speech recognition accuracy
- **Number of output channels**: supported output modalities (audio, visual, haptic)
- **Degree of customization**: whether users can adjust I/O mappings (key remapping, vibration intensity)

## Design Guidelines
- Support multiple input and output channels
- Allow users to remap or disable individual channels
- Avoid depending on a single channel (e.g., touch-only or sound-only)
- Provide standard APIs so custom input devices can be attached

## Cross-Domain Manifestations
| Domain | I/O Examples |
|------|--------|
| **Mobile apps** | touch, voice, Bluetooth keyboard, vibration, screen reading |
| **Gaming devices** | gamepads, motion sensing, VR controllers, steering wheels |
| **Industrial control** | physical buttons, knobs, foot pedals, indicator lights, buzzers |
| **Wearables** | buttons, touchpads, voice, vibration, small display |

## Related Standards
- Platform accessibility guides (iOS VoiceOver, Android TalkBack)
- Gaming accessibility standards (Xbox Adaptive Controller)

---
*Factor weight assessment: ⭐⭐⭐⭐☆ (hardware-dependent products)*


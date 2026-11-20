---
id: HOW-F-002
lang: en
name: Device Capability
name_en: Device Capability
source: ../../../factors/HOW-F-002-device-capability.md
refs:
  standards: ["STD-EN-301549:8", "STD-GB-T-45122:6.4"]
  research: []
---

## Definition
The hardware limitations of the user's device in terms of computing power, storage space, sensors, battery, and so on.

## Why It Matters
- Users of older or low-end devices account for a considerable share
- Battery life limits how long users can use the product and in which situations
- Missing sensors affect feature availability (e.g., games requiring a gyroscope are unplayable without one)

## Quantitative Criteria
- **Processing capability**: CPU speed, core count, GPU performance
- **RAM**: available memory size
- **Storage**: remaining space
- **Sensors**: whether GPS, camera, fingerprint, NFC, etc. are present
- **Battery**: endurance, charging conditions

## Design Guidelines
- Detect device capability and dynamically scale down to lightweight functionality
- Avoid requiring high-end hardware for a feature to run
- Provide a "power-saving mode" option
- Allow external devices as substitutes (e.g., an external keyboard)

## Related Standards
- Progressive Web Apps (PWA) capability detection

---
*Factor weight assessment: ⭐⭐⭐⭐☆ (especially important in emerging markets)*


---
id: WHERE-F-006
lang: en
name: Emergency Response
name_en: Emergency Response
source: ../../../factors/WHERE-F-006-emergency-response.md
refs:
  standards: ["STD-ISO-21542:11", "STD-GB-55019:4"]
  research: []
---

## Definition
Users' ability to use a product or service — and their special needs — during emergencies (e.g., medical crises, fires, natural disasters, safety threats).

## Why It Matters
- In emergencies users' cognitive load surges, time is critical, and operating ability is impaired
- Routine interaction flows may not meet rapid-response needs
- Inclusive design must consider accessibility in vulnerable states

## Quantification Criteria
- **Activation time**: the time window from recognizing the emergency to initiating a call for help
- **Operation complexity**: the minimum number of actions an emergency call requires (ideally 1 step)
- **Accessibility features**: whether it can be triggered by voice, a button press, or automatically by environmental sensors
- **Fault tolerance**: the ability to cancel or undo after a false trigger (so accidental activation doesn't delay real help)

## Design Guidelines
- Provide a one-touch SOS feature, always accessible (even from the lock screen)
- Drastically simplify the emergency flow, avoiding multi-step confirmations (while still offering mis-tap cancellation)
- Support multi-channel triggering (voice, gesture, button, automatic detection)
- Provide clear emergency-state confirmation and feedback (help called, location shared)
- Assume users may be in a panic; design foolproof

## Cross-Domain Manifestations
| Domain | Emergency feature examples |
|------|--------------|
| **Mobile devices** | Lock-screen emergency call, fall detection with automatic SOS |
| **Automotive** | Emergency braking, one-touch rescue call |
| **Smart home** | Automatic fire/gas alarms with notification of emergency contacts |
| **Wearables** | Medical emergency button, abnormal heart-rate alerts |

## Related Standards
- Local emergency call service standards (e.g., 110/120/911)
- Emergency-communication requirements in international accessibility standards (e.g., TIA-603)
- Product safety certification requirements

---
*Factor weight assessment: ⭐⭐⭐⭐☆ (Life-safety related)*


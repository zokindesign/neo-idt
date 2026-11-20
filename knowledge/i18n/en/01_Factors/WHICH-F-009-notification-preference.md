---
id: WHICH-F-009
lang: en
name: "Notification Preference"
name_en: "Notification Preference"
source: ../../../factors/WHICH-F-009-notification-preference.md
refs:
  standards: ["STD-W3C-WCAG22:2.2.3"]
  research: ["Ryan R.M. & Deci E.L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. American Psychologist, 55(1), 68-78. https://doi.org/10.1037/0003-066X.55.1.68 [need for autonomy and notification interruption]"]
---

## Basic Definition
Users' need for control over which messages a system pushes to them, when, through which channels, and at what importance. Notifications are a potential source of interruption, and preferences vary enormously.

## Why It Matters
- Ill-judged pushes cause anxiety, loss of focus, and uninstalls
- Some users need real-time notifications (e.g., executives, support staff) while others need to concentrate
- Notification fatigue lowers response rates to important messages

## Quantification Criteria
- **Notification frequency**: how many notifications per day / per hour users want to receive
- **Time windows**: periods during which pushes are allowed (e.g., work hours only)
- **Channel choice**: preferred push channels (push, email, SMS, in-app messages)
- **Priority threshold**: only high-priority messages may interrupt strongly

## Design Guidelines
- Provide fine-grained controls (by type, sender, urgency)
- Default to conservative settings (critical notifications only)
- Let users pause all notifications (focus mode)
- Respect time zones and daily-rhythm differences

## Cross-Domain Manifestations
| Domain | Notification scenarios |
|------|----------|
| **Social apps** | mentions, direct messages, event reminders |
| **Productivity tools** | task deadlines, schedule changes, collaboration requests |
| **E-commerce** | order status, price drops, promotions |
| **Smart home** | security alarms, device faults, energy-saving reminders |

## Related Standards
- Platform notification policies (e.g., iOS notification grouping, Android Do Not Disturb)
- GDPR restrictions on marketing communications

---
*Factor weight assessment: ⭐⭐⭐⭐⭐ (key to retention for UGC/social products)*


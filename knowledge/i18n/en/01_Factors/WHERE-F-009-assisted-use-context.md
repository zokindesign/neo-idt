---
id: WHERE-F-009
lang: en
name: Assisted Use Context
name_en: Assisted Use Context
source: ../../../factors/WHERE-F-009-assisted-use-context.md
refs:
  standards: ["STD-WHO-ICF:e3"]
  research: ["Clarkson J., Coleman R., Keates S. & Lebbon C. (eds.) (2003). Inclusive Design: Design for the Whole Population. Springer-Verlag, London. ISBN 978-1-85233-700-1 [Cambridge EDC methodology, assisted-use-context chapter]"]
---

# Assisted Use Context

## Definition

Situations in which, while the user operates a product/space, a **third-party assistant** (caregiver, family member, professional care worker, sign-language interpreter, translator, guide dog, etc.) is present, collaborates, or operates on the user's behalf. Core dimensions include:

- **Type of assistance**:
  - Physical assistance (pushing a wheelchair, operating equipment on the user's behalf, physical transfers)
  - Sensory assistance (sign-language interpretation, visual guidance, reading screen content aloud)
  - Cognitive assistance (decision support, process guidance, memory prompts, emotional reassurance)
  - Technical assistance (configuring accounts on the user's behalf, operating complex settings, troubleshooting)
- **Assistance relationship**:
  - Professional care workers / agency services (trained, with defined responsibility boundaries)
  - Informal caregivers (family/friends: complex emotional relationships, ambiguous permissions)
  - Community volunteers / peer support
  - Assistance animals / smart assistive devices

**Distinguishing it from other factors**:
- WHO-F-001/003/009: the user's own ability state
- WHERE-F-007/008: the objective environment / shared settings
- This factor focuses on the interaction-design needs arising from **a third party actively intervening in the usage process** (three-way interaction: user–assistant–system)

## Why It Matters

- When a caregiver operates a screen reader on the user's behalf, the UI must support an "observer's view" (high contrast, large font, clear status indication)
- When family members configure a smart home, it needs "delegated permission management" (tiered authorization, audit logs)
- When a nurse operates medical equipment, it needs dual "professional mode / home mode" interfaces
- When a sign-language interpreter joins a video meeting, it needs a "multi-window layout" (presenter/interpreter/captions on one screen)
- When a guardian manages a child's or elder's device, it needs a "guardian dashboard" (usage time, content filtering, location tracking)

## Design Response (both: alternatives + choice space)

### Constraint/ability components → provide alternatives
- **Proxy-operation interface**: a separate entry point for the assistant (web admin console, mobile control app)
- **Three-way synchronized view**: state sync between the main user interface and the assistant's interface (without leaking privacy)
- **Tiered permissions**: read-only / assisted operation / full delegation / emergency takeover, revocable by the user at any time

### Preference/relationship components → provide choice space
- **Autonomy-preservation mechanism**: the user can set "request help only when I cannot complete it" vs "assistant always leads"
- **Privacy-boundary configuration**: what the assistant can see is configurable (task progress only / full content / anomaly alerts only)
- **Relationship-mode presets**: professional care-worker mode (strict permissions/auditing) vs family mode (loose/emotion-first)

## Cross-Domain Mapping

| Domain | Exclusion example | Inclusion example |
|------|----------|----------|
| Digital products | No delegated permissions; the assistant can only share the account password | Tiered delegated permissions, assistant-only dashboard, operation audit logs |
| Industrial design | Medical equipment with professional mode only; family cannot assist | Professional/home dual modes, physical keys coexisting with digital authorization |
| Architectural design | No companion space; no caregiver position in restrooms | Companion beds, caregiver-accessible restrooms, companion areas in waiting rooms |
| Fashion design | Cannot dress/undress independently; assisted dressing is difficult | Magnetic closures/Velcro, wide-opening designs, assisted-dressing labels |

## Measurement Dimensions

- Tiering completeness of the delegated-permission system
- Usability and latency of the three-way synchronized view
- Configurability of privacy boundaries
- Assistant onboarding time / error rate

## Related Standards and References

- WHO ICF e3 support and relationships (human assistance)
- Pending WP-C linkage: IEC 60601 usability of medical electrical equipment, ISO 21542 built-environment accessibility (companion spaces)

## B1 Cross-Reference Note

This factor was added by the INCL-XREF-001 GAP-5 determination: ICF e3 explicitly lists "human assistance", while the other 4 benchmarks have no such structured factor.

---

#tags #WHERE-dimension #assisted-use #three-way-interaction #B1-new


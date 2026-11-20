---
lang: en
id: M-WHICH-F-007-01
factor_id: WHICH-F-007
name: "Feedback Channel Redundancy"
category: audit
description: "Audit multisensory channel redundancy for critical feedback (success/failure/progress/warning) (at least dual-channel among visual + auditory + tactile)"
measurement_method: "Feedback event × channel matrix audit; WCAG 4.1.3 status messages (AA) verification of screen-reader announcement"
data_source:
  - "Functionality audit"
  - "AT testing"
thresholds:
    minimum: "Critical feedback does not rely on a single sensory channel (WCAG 1.4.2 audio control relevant + ISO 9241-110 5.2 self-descriptiveness)"
    good: "Dual-channel feedback with a user-selectable preferred channel"
    excellent: "Three-channel redundancy and sensory substitution (flash → vibration)"
unit: "Channel redundancy %"
applicable_domains:
  - digital
  - industrial
limitations: "WCAG 4.1.3 scope: status updates that do not change focus; Level AA."
related_standards:
  - "STD-W3C-WCAG22:4.1.3"
  - "STD-ISO-9241-110:5.2"
status: draft
evidence_grade: B
---

# Feedback Channel Redundancy

> Metric ID: `M-WHICH-F-007-01` · Category: **Manual audit** · Evidence grade: **B — verified research** · Status: draft

Related factor: WHICH-F-007 — Feedback Preference

## Definition

Audit multisensory channel redundancy for critical feedback (success/failure/progress/warning) (at least dual-channel among visual + auditory + tactile)

## Measurement

Feedback event × channel matrix audit; WCAG 4.1.3 status messages (AA) verification of screen-reader announcement

## Data sources

- Functionality audit
- AT testing

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | Critical feedback does not rely on a single sensory channel (WCAG 1.4.2 audio control relevant + ISO 9241-110 5.2 self-descriptiveness) |
| Good | Dual-channel feedback with a user-selectable preferred channel |
| Excellent | Three-channel redundancy and sensory substitution (flash → vibration) |

**Unit**: Channel redundancy %

## Applicable domains

- digital
- industrial

## Limitations

WCAG 4.1.3 scope: status updates that do not change focus; Level AA.

## Related standard clauses

- `STD-W3C-WCAG22:4.1.3`
- `STD-ISO-9241-110:5.2`

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).


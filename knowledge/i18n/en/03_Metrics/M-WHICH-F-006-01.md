---
lang: en
id: M-WHICH-F-006-01
factor_id: WHICH-F-006
name: "Input Modality Redundancy"
category: audit
description: "Count the input modalities for core operations (touch/keyboard/voice/gesture/physical buttons) and check whether alternative paths exist when a single modality fails"
measurement_method: "Core operation × modality matrix audit; alternative paths checked per WCAG 2.5.1 pointer gestures and 2.1.1 keyboard"
data_source:
  - "Functionality audit"
  - "AT compatibility testing"
thresholds:
    minimum: "Core operations support ≥ 2 modalities (including keyboard equivalence, WCAG 2.1.1 Level A)"
    good: "≥ 3 modalities including one not requiring fine motor control (voice/large buttons)"
    excellent: "Free modality switching with preference memory"
unit: "Modality count / operation"
applicable_domains:
  - digital
  - industrial
limitations: "WCAG 2.1.1 Keyboard is a mandatory web baseline; hardware products are audited against ISO 9241-110 5.5 flexibility principles."
related_standards:
  - "STD-W3C-WCAG22:2.1.1"
  - "STD-W3C-WCAG22:2.5.1"
  - "STD-ISO-9241-110:5.5"
status: draft
evidence_grade: B
---

# Input Modality Redundancy

> Metric ID: `M-WHICH-F-006-01` · Category: **Manual audit** · Evidence grade: **B — verified research** · Status: draft

Related factor: WHICH-F-006 — Input Method Preference

## Definition

Count the input modalities for core operations (touch/keyboard/voice/gesture/physical buttons) and check whether alternative paths exist when a single modality fails

## Measurement

Core operation × modality matrix audit; alternative paths checked per WCAG 2.5.1 pointer gestures and 2.1.1 keyboard

## Data sources

- Functionality audit
- AT compatibility testing

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | Core operations support ≥ 2 modalities (including keyboard equivalence, WCAG 2.1.1 Level A) |
| Good | ≥ 3 modalities including one not requiring fine motor control (voice/large buttons) |
| Excellent | Free modality switching with preference memory |

**Unit**: Modality count / operation

## Applicable domains

- digital
- industrial

## Limitations

WCAG 2.1.1 Keyboard is a mandatory web baseline; hardware products are audited against ISO 9241-110 5.5 flexibility principles.

## Related standard clauses

- `STD-W3C-WCAG22:2.1.1`
- `STD-W3C-WCAG22:2.5.1`
- `STD-ISO-9241-110:5.5`

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).


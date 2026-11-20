---
lang: en
id: M-WHAT-F-003-01
factor_id: WHAT-F-003
name: "Error Tolerance & Recovery"
category: user-test
description: "Inject typical operation errors (mis-taps / accidental deletion / accidental submission) and measure recoverability, undo availability, and loss prevention"
measurement_method: "Error injection testing → undo success rate/data loss rate/recovery step count recorded"
data_source:
  - "Usability testing"
  - "Error-injection experiments"
thresholds:
    minimum: "Destructive actions have confirmation and are undoable (corresponds to ISO 9241-110:2020 5.6 Use error robustness)"
    good: "Error messages include recovery guidance (WCAG 3.3.1/3.3.3)"
    excellent: "Automatic draft saving and rollback history"
unit: "Recovery success rate %"
applicable_domains:
  - digital
  - industrial
limitations: "WCAG 3.3.1 (Level A) applies to web interfaces; hardware categories are audited against ISO 9241-110 5.6 principles."
related_standards:
  - "STD-W3C-WCAG22:3.3.1"
  - "STD-W3C-WCAG22:3.3.3"
  - "STD-ISO-9241-110:5.6"
status: draft
evidence_grade: B
---

# Error Tolerance & Recovery

> Metric ID: `M-WHAT-F-003-01` · Category: **User testing** · Evidence grade: **B — verified research** · Status: draft

Related factor: WHAT-F-003 — Fault Tolerance Requirement

## Definition

Inject typical operation errors (mis-taps / accidental deletion / accidental submission) and measure recoverability, undo availability, and loss prevention

## Measurement

Error injection testing → undo success rate/data loss rate/recovery step count recorded

## Data sources

- Usability testing
- Error-injection experiments

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | Destructive actions have confirmation and are undoable (corresponds to ISO 9241-110:2020 5.6 Use error robustness) |
| Good | Error messages include recovery guidance (WCAG 3.3.1/3.3.3) |
| Excellent | Automatic draft saving and rollback history |

**Unit**: Recovery success rate %

## Applicable domains

- digital
- industrial

## Limitations

WCAG 3.3.1 (Level A) applies to web interfaces; hardware categories are audited against ISO 9241-110 5.6 principles.

## Related standard clauses

- `STD-W3C-WCAG22:3.3.1`
- `STD-W3C-WCAG22:3.3.3`
- `STD-ISO-9241-110:5.6`

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).


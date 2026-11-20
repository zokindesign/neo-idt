---
lang: en
id: M-WHICH-F-003-02
factor_id: WHICH-F-003
name: "Automation Controllability Coverage"
category: audit
description: "Inventory the operations the system performs automatically and check whether each provides a perceivable pause/undo/parameter adjustment — corresponding to controllability in the ISO 9241-110 dialogue principles"
measurement_method: "List all automatic behaviors (auto-submit/auto-charge/auto-redirect/auto-fill) → check item by item whether confirmation, undo or parameter-adjustment entry points exist"
data_source:
  - "Functionality inventory"
  - "Two-person back-to-back review"
thresholds:
    minimum: "100% of automatic operations are undoable or have prior confirmation"
    good: "Above minimum, interaction pacing and order are user-controllable"
    excellent: "The degree of automation can be personalized to user preference"
unit: "Controllable automated-operation percentage"
applicable_domains:
  - digital
  - service
limitations: "The judgment of \"controllable\" involves subjectivity; two-person review is required and disagreements must be recorded."
related_standards:
  - STD-ISO-9241-110
status: draft
evidence_grade: A
---

# Automation Controllability Coverage

> Metric ID: `M-WHICH-F-003-02` · Category: **Manual audit** · Evidence grade: **A — mandatory standard clause** · Status: draft

Related factor: WHICH-F-003 — Control Preference

## Definition

Inventory the operations the system performs automatically and check whether each provides a perceivable pause/undo/parameter adjustment — corresponding to controllability in the ISO 9241-110 dialogue principles

## Measurement

List all automatic behaviors (auto-submit/auto-charge/auto-redirect/auto-fill) → check item by item whether confirmation, undo or parameter-adjustment entry points exist

## Data sources

- Functionality inventory
- Two-person back-to-back review

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | 100% of automatic operations are undoable or have prior confirmation |
| Good | Above minimum, interaction pacing and order are user-controllable |
| Excellent | The degree of automation can be personalized to user preference |

**Unit**: Controllable automated-operation percentage

## Applicable domains

- digital
- service

## Limitations

The judgment of "controllable" involves subjectivity; two-person review is required and disagreements must be recorded.

## Related standard clauses

- `STD-ISO-9241-110`

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).


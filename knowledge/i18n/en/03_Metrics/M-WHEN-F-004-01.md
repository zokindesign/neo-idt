---
lang: en
id: M-WHEN-F-004-01
factor_id: WHEN-F-004
name: "Time-Limit Adjustability"
category: audit
description: "Inventory all time limits in the product and verify item by item whether they can be turned off/adjusted/extended; essential exceptions must be justified and documented"
measurement_method: "Time-limit inventory → item-by-item WCAG 2.2.1 check (turn off/adjust/extend) → documented justification for essential exceptions"
data_source:
  - "Time-limit inventory"
  - "Code/process audit"
thresholds:
    minimum: "100% of non-essential time limits adjustable (WCAG 2.2.1 Level A)"
    good: "Remaining-time visualization and progress prompts"
    excellent: "No time limits by default (set only when essentially required, with documented justification)"
unit: "Time-limit compliance rate %"
applicable_domains:
  - digital
  - service
limitations: "WCAG 2.2.1 allows exceptions for essential time limits (e.g. bidding); each exception's rationale must be recorded item by item."
related_standards:
  - "STD-W3C-WCAG22:2.2.1"
  - "STD-W3C-WCAG22:2.2.2"
status: draft
evidence_grade: B
---

# Time-Limit Adjustability

> Metric ID: `M-WHEN-F-004-01` · Category: **Manual audit** · Evidence grade: **B — verified research** · Status: draft

Related factor: WHEN-F-004 — Time Pressure

## Definition

Inventory all time limits in the product and verify item by item whether they can be turned off/adjusted/extended; essential exceptions must be justified and documented

## Measurement

Time-limit inventory → item-by-item WCAG 2.2.1 check (turn off/adjust/extend) → documented justification for essential exceptions

## Data sources

- Time-limit inventory
- Code/process audit

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | 100% of non-essential time limits adjustable (WCAG 2.2.1 Level A) |
| Good | Remaining-time visualization and progress prompts |
| Excellent | No time limits by default (set only when essentially required, with documented justification) |

**Unit**: Time-limit compliance rate %

## Applicable domains

- digital
- service

## Limitations

WCAG 2.2.1 allows exceptions for essential time limits (e.g. bidding); each exception's rationale must be recorded item by item.

## Related standard clauses

- `STD-W3C-WCAG22:2.2.1`
- `STD-W3C-WCAG22:2.2.2`

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).


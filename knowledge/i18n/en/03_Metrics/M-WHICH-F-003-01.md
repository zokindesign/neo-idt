---
lang: en
id: M-WHICH-F-003-01
factor_id: WHICH-F-003
name: "Automation Level Adjustability"
category: user-test
description: "Audit the selectability of automation levels based on the Parasuraman 2000 ten-level automation model, and measure users' trust and intervention frequency at each level"
measurement_method: "Automation feature × level matrix audit + user testing (manual intervention rate/undo usage rate/acceptance scale)"
data_source:
  - "Functionality audit"
  - "User testing"
thresholds:
    minimum: "All automated decisions can be undone or overridden (corresponding to ISO 9241-110 5.5 controllability)"
    good: "Automation level user-selectable (fully automatic/semi-automatic/manual tiers)"
    excellent: "System capability disclosure + user-chosen intervention granularity (per item/batch)"
unit: "Level-tier count / intervention success rate"
applicable_domains:
  - digital
  - industrial
limitations: "Parasuraman 2000 is a model framework; user testing requires tasks tailored to the type of automation function."
related_standards:
  - "STD-ISO-9241-110:5.5"
  - "STD-W3C-WCAG22:3.2.6"
status: draft
evidence_grade: B
---

# Automation Level Adjustability

> Metric ID: `M-WHICH-F-003-01` · Category: **User testing** · Evidence grade: **B — verified research** · Status: draft

Related factor: WHICH-F-003 — Control Preference

## Definition

Audit the selectability of automation levels based on the Parasuraman 2000 ten-level automation model, and measure users' trust and intervention frequency at each level

## Measurement

Automation feature × level matrix audit + user testing (manual intervention rate/undo usage rate/acceptance scale)

## Data sources

- Functionality audit
- User testing

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | All automated decisions can be undone or overridden (corresponding to ISO 9241-110 5.5 controllability) |
| Good | Automation level user-selectable (fully automatic/semi-automatic/manual tiers) |
| Excellent | System capability disclosure + user-chosen intervention granularity (per item/batch) |

**Unit**: Level-tier count / intervention success rate

## Applicable domains

- digital
- industrial

## Limitations

Parasuraman 2000 is a model framework; user testing requires tasks tailored to the type of automation function.

## Related standard clauses

- `STD-ISO-9241-110:5.5`
- `STD-W3C-WCAG22:3.2.6`

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).


---
lang: en
id: M-WHICH-F-009-01
factor_id: WHICH-F-009
name: "Notification Controllability"
category: audit
description: "Audit the granularity of notification control (per-category toggles/do-not-disturb/batch silencing) and the urgent-notification breakthrough strategy"
measurement_method: "Notification type × control granularity matrix audit + do-not-disturb field testing (whether urgent categories can break through)"
data_source:
  - "Functionality audit"
  - "System-settings check"
thresholds:
    minimum: "Notifications toggleable per category with a global mute"
    good: "Do-not-disturb schedules/scenario rules (with urgent exceptions)"
    excellent: "Notification digest consolidation and user-defined priorities"
unit: "Control-granularity tiers"
applicable_domains:
  - digital
limitations: "For SDT-based support of the autonomy-interruption conflict, see the references on the WHICH-F-009 card; thresholds are design consensus."
related_standards:
  - "STD-ISO-9241-110:5.5"
status: draft
evidence_grade: C
---

# Notification Controllability

> Metric ID: `M-WHICH-F-009-01` · Category: **Manual audit** · Evidence grade: **C — expert consensus** · Status: draft

Related factor: WHICH-F-009 — Notification Preference

## Definition

Audit the granularity of notification control (per-category toggles/do-not-disturb/batch silencing) and the urgent-notification breakthrough strategy

## Measurement

Notification type × control granularity matrix audit + do-not-disturb field testing (whether urgent categories can break through)

## Data sources

- Functionality audit
- System-settings check

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | Notifications toggleable per category with a global mute |
| Good | Do-not-disturb schedules/scenario rules (with urgent exceptions) |
| Excellent | Notification digest consolidation and user-defined priorities |

**Unit**: Control-granularity tiers

## Applicable domains

- digital

## Limitations

For SDT-based support of the autonomy-interruption conflict, see the references on the WHICH-F-009 card; thresholds are design consensus.

## Related standard clauses

- `STD-ISO-9241-110:5.5`

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).


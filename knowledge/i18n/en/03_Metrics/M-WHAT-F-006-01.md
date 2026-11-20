---
lang: en
id: M-WHAT-F-006-01
factor_id: WHAT-F-006
name: "Interruption Tolerance Test"
category: user-test
description: "Inject interruptions at critical task points (incoming call / notification / human interruption) and measure task-resumption rate and cognitive restart cost"
measurement_method: "Interruption injection experiment → recovery success rate/restart time/repeated-operation count statistics"
data_source:
  - "Usability testing"
  - "Interruption experiments"
thresholds:
    minimum: "State preserved after interruption; recovery requires no restart from scratch"
    good: "Resume-point prompt ('continue what you were doing')"
    excellent: "Interrupted content auto-cached with contextual prompt recovery"
unit: "Recovery success rate %"
applicable_domains:
  - digital
  - industrial
limitations: "Interruption injection must be performed in a controlled environment to avoid production-data risk."
related_standards:
status: draft
evidence_grade: C
---

# Interruption Tolerance Test

> Metric ID: `M-WHAT-F-006-01` · Category: **User testing** · Evidence grade: **C — expert consensus** · Status: draft

Related factor: WHAT-F-006 — Task Interruption Tolerance

## Definition

Inject interruptions at critical task points (incoming call / notification / human interruption) and measure task-resumption rate and cognitive restart cost

## Measurement

Interruption injection experiment → recovery success rate/restart time/repeated-operation count statistics

## Data sources

- Usability testing
- Interruption experiments

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | State preserved after interruption; recovery requires no restart from scratch |
| Good | Resume-point prompt ('continue what you were doing') |
| Excellent | Interrupted content auto-cached with contextual prompt recovery |

**Unit**: Recovery success rate %

## Applicable domains

- digital
- industrial

## Limitations

Interruption injection must be performed in a controlled environment to avoid production-data risk.

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).


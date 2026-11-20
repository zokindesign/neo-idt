---
lang: en
id: M-WHAT-F-001-02
factor_id: WHAT-F-001
name: "Core Task Step Count"
category: audit
description: "A count of the operation steps and decision points in the main flow of a core task — a structured proxy for the ISO 9241-11 efficiency measure (the more steps, the higher the cognitive and operational load)"
measurement_method: "Task analysis decomposes the main flow → count operation steps (pages/form submissions/key decisions) → identify steps that can be merged or omitted"
data_source:
  - "Task analysis"
  - "Process walkthrough"
thresholds:
    minimum: "Main flow ≤10 steps"
    good: "≤7 steps"
    excellent: "≤5 steps and no rework loops"
unit: "Step count"
applicable_domains:
  - universal
limitations: "Step-count granularity (keystrokes/pages/decisions) must be defined consistently before comparing."
related_standards:
  - STD-ISO-9241-11
status: draft
evidence_grade: B
---

# Core Task Step Count

> Metric ID: `M-WHAT-F-001-02` · Category: **Manual audit** · Evidence grade: **B — verified research** · Status: draft

Related factor: WHAT-F-001 — Task Complexity

## Definition

A count of the operation steps and decision points in the main flow of a core task — a structured proxy for the ISO 9241-11 efficiency measure (the more steps, the higher the cognitive and operational load)

## Measurement

Task analysis decomposes the main flow → count operation steps (pages/form submissions/key decisions) → identify steps that can be merged or omitted

## Data sources

- Task analysis
- Process walkthrough

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | Main flow ≤10 steps |
| Good | ≤7 steps |
| Excellent | ≤5 steps and no rework loops |

**Unit**: Step count

## Applicable domains

- universal

## Limitations

Step-count granularity (keystrokes/pages/decisions) must be defined consistently before comparing.

## Related standard clauses

- `STD-ISO-9241-11`

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).


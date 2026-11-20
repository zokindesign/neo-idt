---
lang: en
id: M-WHAT-F-001-01
factor_id: WHAT-F-001
name: "Task Step Complexity"
category: audit
description: "Rate core tasks by number of steps, decision points, and branches to determine whether task-structure complexity matches user capability"
measurement_method: "Task analysis → step/decision-point/branch count → complexity grading (low/medium/high)"
data_source:
  - "Task analysis"
  - "Expert rating"
thresholds:
    minimum: "Core task ≤ 7±2 steps and ≤ 3 decision points (Miller's law consensus value)"
    good: "Step-by-step guidance and progress prompts provided"
    excellent: "Expert shortcut paths provided (parallel advanced operations)"
unit: "Step count / decision-point count"
applicable_domains:
  - universal
limitations: "7±2 is a cognitive-psychology consensus value, not a mandatory standard; complex tasks should be paired with a cognitive-load scale."
related_standards:
  - "STD-ISO-9241-110:5.1"
status: draft
evidence_grade: C
---

# Task Step Complexity

> Metric ID: `M-WHAT-F-001-01` · Category: **Manual audit** · Evidence grade: **C — expert consensus** · Status: draft

Related factor: WHAT-F-001 — Task Complexity

## Definition

Rate core tasks by number of steps, decision points, and branches to determine whether task-structure complexity matches user capability

## Measurement

Task analysis → step/decision-point/branch count → complexity grading (low/medium/high)

## Data sources

- Task analysis
- Expert rating

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | Core task ≤ 7±2 steps and ≤ 3 decision points (Miller's law consensus value) |
| Good | Step-by-step guidance and progress prompts provided |
| Excellent | Expert shortcut paths provided (parallel advanced operations) |

**Unit**: Step count / decision-point count

## Applicable domains

- universal

## Limitations

7±2 is a cognitive-psychology consensus value, not a mandatory standard; complex tasks should be paired with a cognitive-load scale.

## Related standard clauses

- `STD-ISO-9241-110:5.1`

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).


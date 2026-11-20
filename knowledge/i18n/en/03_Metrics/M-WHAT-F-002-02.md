---
lang: en
id: M-WHAT-F-002-02
factor_id: WHAT-F-002
name: "Task Completion Time Percentiles"
category: user-test
description: "Collect task completion times at a sufficient sample size and compute P5/P50/P95"
measurement_method: "P95 completion time / expected completion time"
data_source:
  - "Usability testing"
  - "Production-environment logs (de-identified)"
thresholds:
    minimum: "P95 ≤ expected time × 2"
    good: "P95 ≤ expected time × 1.5"
    excellent: "P95 ≤ expected time × 1.2"
unit: "s / ratio"
applicable_domains:
related_standards:
status: draft
evidence_grade: B
---

# Task Completion Time Percentiles

> Metric ID: `M-WHAT-F-002-02` · Category: **User testing** · Evidence grade: **B — verified research** · Status: draft

Related factor: WHAT-F-002 — Cognitive Load

## Definition

Collect task completion times at a sufficient sample size and compute P5/P50/P95

## Measurement

P95 completion time / expected completion time

## Data sources

- Usability testing
- Production-environment logs (de-identified)

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | P95 ≤ expected time × 2 |
| Good | P95 ≤ expected time × 1.5 |
| Excellent | P95 ≤ expected time × 1.2 |

**Unit**: s / ratio

## Applicable domains


> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).


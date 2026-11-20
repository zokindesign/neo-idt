---
lang: en
id: M-WHERE-F-007-01
factor_id: WHERE-F-007
name: "Context Coverage Matrix"
category: audit
description: "Build a context × function matrix based on the ISO 9241-210 context-of-use elements (user/task/environment) and verify measured coverage"
measurement_method: "Context inventory tiering (P0/P1/P2) → design coverage verification → on-site test records"
data_source:
  - "Contextual analysis"
  - "Usability testing"
thresholds:
    minimum: "P0 contexts 100% defined with design coverage"
    good: "All P0 contexts field-tested + P1 desk walkthrough"
    excellent: "Field-test coverage of extreme/parallel contexts (interruptions, multitasking)"
unit: "Context coverage %"
applicable_domains:
  - universal
related_standards:
  - "STD-ISO-9241-210:5.2"
status: draft
evidence_grade: C
---

# Context Coverage Matrix

> Metric ID: `M-WHERE-F-007-01` · Category: **Manual audit** · Evidence grade: **C — expert consensus** · Status: draft

Related factor: WHERE-F-007 — Usage Context

## Definition

Build a context × function matrix based on the ISO 9241-210 context-of-use elements (user/task/environment) and verify measured coverage

## Measurement

Context inventory tiering (P0/P1/P2) → design coverage verification → on-site test records

## Data sources

- Contextual analysis
- Usability testing

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | P0 contexts 100% defined with design coverage |
| Good | All P0 contexts field-tested + P1 desk walkthrough |
| Excellent | Field-test coverage of extreme/parallel contexts (interruptions, multitasking) |

**Unit**: Context coverage %

## Applicable domains

- universal

## Related standard clauses

- `STD-ISO-9241-210:5.2`

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).


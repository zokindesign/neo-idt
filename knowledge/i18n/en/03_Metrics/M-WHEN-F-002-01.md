---
lang: en
id: M-WHEN-F-002-01
factor_id: WHEN-F-002
name: "Frequency-Tier Adaptation"
category: audit
description: "Audit differentiated design by high-frequency/low-frequency user segments (high-frequency: efficiency features; low-frequency: memory aids, recent records, simplified interface)"
measurement_method: "Frequency tier definition (DAU/MAU ratio or session interval distribution) → tiered feature matrix audit; habit formation referencing the Lally et al. 2010 asymptotic model"
data_source:
  - "Usage analytics"
  - "Feature audit"
thresholds:
    minimum: "Low-frequency paths have memory aids (recently used/default prefill)"
    good: "High-frequency paths have batch/shortcut actions; low-frequency paths have usage guidance"
    excellent: "Difficulty and interface density adaptive to individual usage patterns"
unit: "Tiered coverage %"
applicable_domains:
  - digital
  - service
limitations: "DAU/MAU and session intervals are operational metrics; the low-frequency-user definition must be calibrated by product category."
related_standards:
status: draft
evidence_grade: B
---

# Frequency-Tier Adaptation

> Metric ID: `M-WHEN-F-002-01` · Category: **Manual audit** · Evidence grade: **B — verified research** · Status: draft

Related factor: WHEN-F-002 — Usage Frequency

## Definition

Audit differentiated design by high-frequency/low-frequency user segments (high-frequency: efficiency features; low-frequency: memory aids, recent records, simplified interface)

## Measurement

Frequency tier definition (DAU/MAU ratio or session interval distribution) → tiered feature matrix audit; habit formation referencing the Lally et al. 2010 asymptotic model

## Data sources

- Usage analytics
- Feature audit

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | Low-frequency paths have memory aids (recently used/default prefill) |
| Good | High-frequency paths have batch/shortcut actions; low-frequency paths have usage guidance |
| Excellent | Difficulty and interface density adaptive to individual usage patterns |

**Unit**: Tiered coverage %

## Applicable domains

- digital
- service

## Limitations

DAU/MAU and session intervals are operational metrics; the low-frequency-user definition must be calibrated by product category.

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).


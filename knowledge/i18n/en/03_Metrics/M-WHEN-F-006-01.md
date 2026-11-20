---
lang: en
id: M-WHEN-F-006-01
factor_id: WHEN-F-006
name: "Fatigue Response Completeness"
category: audit
description: "Audit fatigue-detection signals (consecutive errors/slowed operation/session duration) and response mechanisms (rest prompts/interface simplification/checkpoint saving)"
measurement_method: "Fatigue-signal × response-mechanism matrix audit; long-session testing of error-rate growth curves (cross-checked against the NASA-TLX scale)"
data_source:
  - "Functionality audit"
  - "Long-session testing"
thresholds:
    minimum: "Long sessions offer pause and checkpoint saving (no data loss from fatigue-related interruption)"
    good: "Continuous errors or slowed operation trigger proactive rest prompts"
    excellent: "Fatigue-adaptive interface (reduced information density / enlarged key elements)"
unit: "Response-mechanism coverage %"
applicable_domains:
  - digital
  - industrial
limitations: "NASA-TLX is a subjective workload scale; physiological fatigue signals require sensor support; behavioral proxy indicators (error rates) are indirect measurements."
related_standards:
  - "STD-W3C-WCAG22:2.2.6"
status: draft
evidence_grade: B
---

# Fatigue Response Completeness

> Metric ID: `M-WHEN-F-006-01` · Category: **Manual audit** · Evidence grade: **B — verified research** · Status: draft

Related factor: WHEN-F-006 — Fatigue Level

## Definition

Audit fatigue-detection signals (consecutive errors/slowed operation/session duration) and response mechanisms (rest prompts/interface simplification/checkpoint saving)

## Measurement

Fatigue-signal × response-mechanism matrix audit; long-session testing of error-rate growth curves (cross-checked against the NASA-TLX scale)

## Data sources

- Functionality audit
- Long-session testing

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | Long sessions offer pause and checkpoint saving (no data loss from fatigue-related interruption) |
| Good | Continuous errors or slowed operation trigger proactive rest prompts |
| Excellent | Fatigue-adaptive interface (reduced information density / enlarged key elements) |

**Unit**: Response-mechanism coverage %

## Applicable domains

- digital
- industrial

## Limitations

NASA-TLX is a subjective workload scale; physiological fatigue signals require sensor support; behavioral proxy indicators (error rates) are indirect measurements.

## Related standard clauses

- `STD-W3C-WCAG22:2.2.6`

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).


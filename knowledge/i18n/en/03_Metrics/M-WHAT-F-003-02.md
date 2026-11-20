---
lang: en
id: M-WHAT-F-003-02
factor_id: WHAT-F-003
name: "Error Recovery Success Rate"
category: user-test
description: "The proportion of users and the time taken to recover the task without external assistance after encountering an injected error — a direct measure of the error-tolerance requirement (ISO 9241-110 error tolerance principle, WCAG 3.3.1 error identification)"
measurement_method: "Inject typical errors (missing required field/format error/network interruption) → observe and record the proportion of users recovering unassisted and the average recovery time"
data_source:
  - "Usability-testing observations"
  - "Error-injection scripts"
  - "Recovery-time measurement"
thresholds:
    minimum: "≥70% of errors recovered unassisted"
    good: "≥85% and the recovery path has clear guidance (3.3.1 errors described in text)"
    excellent: "≥95% and average recovery time <30 seconds"
unit: "Recovery success rate percentage"
applicable_domains:
  - digital
  - service
limitations: "The error-injection set and task set must be calibrated per product; sample size affects stability."
related_standards:
  - STD-ISO-9241-110
  - "STD-W3C-WCAG22:3.3.1"
status: draft
evidence_grade: B
---

# Error Recovery Success Rate

> Metric ID: `M-WHAT-F-003-02` · Category: **User testing** · Evidence grade: **B — verified research** · Status: draft

Related factor: WHAT-F-003 — Fault Tolerance Requirement

## Definition

The proportion of users and the time taken to recover the task without external assistance after encountering an injected error — a direct measure of the error-tolerance requirement (ISO 9241-110 error tolerance principle, WCAG 3.3.1 error identification)

## Measurement

Inject typical errors (missing required field/format error/network interruption) → observe and record the proportion of users recovering unassisted and the average recovery time

## Data sources

- Usability-testing observations
- Error-injection scripts
- Recovery-time measurement

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | ≥70% of errors recovered unassisted |
| Good | ≥85% and the recovery path has clear guidance (3.3.1 errors described in text) |
| Excellent | ≥95% and average recovery time <30 seconds |

**Unit**: Recovery success rate percentage

## Applicable domains

- digital
- service

## Limitations

The error-injection set and task set must be calibrated per product; sample size affects stability.

## Related standard clauses

- `STD-ISO-9241-110`
- `STD-W3C-WCAG22:3.3.1`

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).


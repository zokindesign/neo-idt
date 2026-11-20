---
lang: en
id: M-WHEN-F-005-01
factor_id: WHEN-F-005
name: "Resumption Support"
category: audit
description: "Audit long tasks for autosave, resumption entry points, duration estimation and step-by-step planning features"
measurement_method: "Long-task inventory → interruption injection test (statistics on data save rate and recovery success rate)"
data_source:
  - "Task audit"
  - "Interruption testing"
thresholds:
    minimum: "Long tasks auto-save (interval ≤ 30s or real-time) with a resumption entry point"
    good: "Task duration estimate and step-by-step plan display"
    excellent: "Seamless cross-device resumption (state sync)"
unit: "Task support rate %"
applicable_domains:
  - digital
  - service
limitations: "The save-interval threshold is a consensus value and may be tightened according to task risk level."
related_standards:
status: draft
evidence_grade: C
---

# Resumption Support

> Metric ID: `M-WHEN-F-005-01` · Category: **Manual audit** · Evidence grade: **C — expert consensus** · Status: draft

Related factor: WHEN-F-005 — Time Availability

## Definition

Audit long tasks for autosave, resumption entry points, duration estimation and step-by-step planning features

## Measurement

Long-task inventory → interruption injection test (statistics on data save rate and recovery success rate)

## Data sources

- Task audit
- Interruption testing

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | Long tasks auto-save (interval ≤ 30s or real-time) with a resumption entry point |
| Good | Task duration estimate and step-by-step plan display |
| Excellent | Seamless cross-device resumption (state sync) |

**Unit**: Task support rate %

## Applicable domains

- digital
- service

## Limitations

The save-interval threshold is a consensus value and may be tightened according to task risk level.

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).


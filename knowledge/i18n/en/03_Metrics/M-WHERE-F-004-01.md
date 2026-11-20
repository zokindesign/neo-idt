---
lang: en
id: M-WHERE-F-004-01
factor_id: WHERE-F-004
name: "Resource-Loss Resilience"
category: audit
description: "Enumerate external resource dependencies (power/network/labor/consumables) and test how well core functions are maintained under single-point failure"
measurement_method: "Resource × function matrix + supply-outage drills (power loss/offline/no assistance)"
data_source:
  - "Dependency list"
  - "Failure drills"
thresholds:
    minimum: "Core functions usable when any single-point resource is lost (degraded mode)"
    good: "Degraded state clearly indicated with automatic recovery"
    excellent: "Offline-first / self-sufficient architecture"
unit: "Resilience-item pass rate %"
applicable_domains:
  - digital
  - industrial
  - service
related_standards:
  - "STD-ISO-21542:10.1"
  - "STD-ISO-21542:10.5"
status: draft
evidence_grade: C
---

# Resource-Loss Resilience

> Metric ID: `M-WHERE-F-004-01` · Category: **Manual audit** · Evidence grade: **C — expert consensus** · Status: draft

Related factor: WHERE-F-004 — Resource Availability

## Definition

Enumerate external resource dependencies (power/network/labor/consumables) and test how well core functions are maintained under single-point failure

## Measurement

Resource × function matrix + supply-outage drills (power loss/offline/no assistance)

## Data sources

- Dependency list
- Failure drills

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | Core functions usable when any single-point resource is lost (degraded mode) |
| Good | Degraded state clearly indicated with automatic recovery |
| Excellent | Offline-first / self-sufficient architecture |

**Unit**: Resilience-item pass rate %

## Applicable domains

- digital
- industrial
- service

## Related standard clauses

- `STD-ISO-21542:10.1`
- `STD-ISO-21542:10.5`

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).


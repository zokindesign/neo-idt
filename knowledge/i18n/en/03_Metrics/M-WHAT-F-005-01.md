---
lang: en
id: M-WHAT-F-005-01
factor_id: WHAT-F-005
name: "Collaboration Role Coverage"
category: audit
description: "Audit collaborative tasks for role-based views, permissions, concurrent-edit conflict handling, and compatibility with third-party collaboration aids"
measurement_method: "Role × permission matrix audit + two-person parallel editing test of conflict handling"
data_source:
  - "Functionality audit"
  - "Collaborative testing"
thresholds:
    minimum: "Collaborative tasks support role-based permissions and operation audit trails"
    good: "Parallel editing conflicts have merge/lock strategies"
    excellent: "Assistants/proxies can join seamlessly (corresponds to WHERE-F-009 assisted use)"
unit: "Role coverage %"
applicable_domains:
  - digital
  - service
related_standards:
status: draft
evidence_grade: C
---

# Collaboration Role Coverage

> Metric ID: `M-WHAT-F-005-01` · Category: **Manual audit** · Evidence grade: **C — expert consensus** · Status: draft

Related factor: WHAT-F-005 — Task Collaboration

## Definition

Audit collaborative tasks for role-based views, permissions, concurrent-edit conflict handling, and compatibility with third-party collaboration aids

## Measurement

Role × permission matrix audit + two-person parallel editing test of conflict handling

## Data sources

- Functionality audit
- Collaborative testing

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | Collaborative tasks support role-based permissions and operation audit trails |
| Good | Parallel editing conflicts have merge/lock strategies |
| Excellent | Assistants/proxies can join seamlessly (corresponds to WHERE-F-009 assisted use) |

**Unit**: Role coverage %

## Applicable domains

- digital
- service

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).


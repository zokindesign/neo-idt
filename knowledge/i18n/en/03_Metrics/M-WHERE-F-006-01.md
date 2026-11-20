---
lang: en
id: M-WHERE-F-006-01
factor_id: WHERE-F-006
name: "Emergency Function Accessibility"
category: audit
description: "Audit emergency operation (SOS/evacuation/abort) step counts and multisensory alarms against GB 55019 information and communication clauses and ISO 21542 fire evacuation clauses"
measurement_method: "Interface state-graph traversal to measure the shortest step count + alarm channel verification (visual/auditory/tactile); for architecture, on-site testing against the GB 55019 ch.4 and ISO 21542:2021 cl.11 checklists"
data_source:
  - "UI state diagrams"
  - "Field testing"
thresholds:
    minimum: "Emergency operations ≤ 3 steps with multi-sensory alarms (compliant with mandatory codes within applicable scope)"
    good: "Emergency functions usable without login/unlock"
    excellent: "Offline emergency information and drill mode"
unit: "Step count / alert-channel count"
applicable_domains:
  - digital
  - industrial
  - architecture
limitations: "The mandatory requirement applies only to information and communication facilities in buildings; for digital products it is best practice."
related_standards:
  - "STD-ISO-21542:11"
  - "STD-GB-55019:4"
status: draft
evidence_grade: B
---

# Emergency Function Accessibility

> Metric ID: `M-WHERE-F-006-01` · Category: **Manual audit** · Evidence grade: **B — verified research** · Status: draft

Related factor: WHERE-F-006 — Emergency Response

## Definition

Audit emergency operation (SOS/evacuation/abort) step counts and multisensory alarms against GB 55019 information and communication clauses and ISO 21542 fire evacuation clauses

## Measurement

Interface state-graph traversal to measure the shortest step count + alarm channel verification (visual/auditory/tactile); for architecture, on-site testing against the GB 55019 ch.4 and ISO 21542:2021 cl.11 checklists

## Data sources

- UI state diagrams
- Field testing

## Tiers

| Tier | Threshold |
|------|-----------|
| Minimum compliance | Emergency operations ≤ 3 steps with multi-sensory alarms (compliant with mandatory codes within applicable scope) |
| Good | Emergency functions usable without login/unlock |
| Excellent | Offline emergency information and drill mode |

**Unit**: Step count / alert-channel count

## Applicable domains

- digital
- industrial
- architecture

## Limitations

The mandatory requirement applies only to information and communication facilities in buildings; for digital products it is best practice.

## Related standard clauses

- `STD-ISO-21542:11`
- `STD-GB-55019:4`

> Authoritative source: `registry/metrics.yaml` (this card is a navigation view; fields defer to the registry).


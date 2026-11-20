---
id: HOW-F-001
lang: en
name: Network Conditions
name_en: Network Conditions
source: ../../../factors/HOW-F-001-network-conditions.md
refs:
  standards: ["STD-W3C-WCAG22:1.4.10", "STD-EN-301549:9"]
  research: []
---

## Definition
The quality of a user's network access, including bandwidth, latency, stability, and cost.

## Why It Matters
- Network availability directly affects product accessibility
- Network conditions are constrained in low-income regions or mobile usage scenarios
- Affects feature availability and user experience

## Quantitative Criteria
- **Bandwidth**: available data transfer rate (Kbps/Mbps)
- **Latency**: round-trip time RTT (ms)
- **Stability**: packet loss rate, frequency of connection drops
- **Cost**: cost per unit of data (affects willingness to use)

## Design Guidelines
- Prioritize core functions with offline capability
- Adaptive media quality (adjusted according to bandwidth)
- Caching strategy to reduce repeated requests
- Graceful degradation: provide basic functionality when the network is unavailable
- Clearly communicate the current network state and expected wait times

## Related Standards
- None specific; use performance best practices

---
*Factor weight assessment: ⭐⭐⭐⭐⭐ (a large number of users worldwide still face network constraints)*


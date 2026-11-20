---
id: WHEN-F-005
lang: en
name: Time Availability
name_en: Time Availability
source: ../../../factors/WHEN-F-005-time-availability.md
refs:
  standards: ["STD-W3C-WCAG22:2.2.1"]
  research: []
---

## Definition
The total time and time windows users can allocate to using a product in a day or a week (e.g., only during commuting, lunch breaks, or evenings).

## Why It Matters
- Users' available time directly caps task length and feature complexity
- Fragmented time requires task chunking and quick resumption
- Differences in time availability affect feature prioritization and onboarding strategies

## Quantification Criteria
- **Available minutes per day**: self-reported by users or inferred from usage data
- **Degree of time fragmentation**: number and length of available time blocks (e.g., 3×15 min vs 1×2 h)
- **Regularity**: whether the user is available at fixed times every day
- **Time-conflict frequency**: how often planned tasks are interrupted by other matters

## Design Guidelines
- Support task chunking with resumable breakpoints
- Provide "continue later" and scheduled reminders
- Let users set a daily target duration
- For long tasks, provide estimated completion times and step-by-step plans

## Cross-Domain Manifestations

| Domain | Time Adaptation |
|------|----------|
| **Learning platforms** | Micro-courses, lesson segmentation, study plans |
| **Reading apps** | Chapter paging, reading progress, bookmarks |
| **Online forms** | Auto drafts, step-by-step saving, resume entry point |
| **Project management** | Task breakdown, time estimates, progress reminders |

## Related Standards
- No standard; based on user research and behavioral analytics

---
*Factor weight assessment: ⭐⭐⭐☆☆ (important for fragmented-time use cases)*


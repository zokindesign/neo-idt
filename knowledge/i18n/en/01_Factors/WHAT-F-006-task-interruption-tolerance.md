---
id: WHAT-F-006
lang: en
name: Task Interruption Tolerance
name_en: Task Interruption Tolerance
source: ../../../factors/WHAT-F-006-task-interruption-tolerance.md
refs:
  standards: ["STD-W3C-WCAG22:3.2.3", "STD-ISO-9241-110:5.5.2"]
  research: []
---

## Definition
Whether a task may be paused or interrupted, and how easily it must be resumed afterward. Related to persistence but focused on the user experience "when the interruption happens".

## Why It Matters
- In real environments users are often interrupted by calls, notifications, and other people
- Tasks with low interruption tolerance need interruption-proof design
- Interruptions easily lose state or cause errors (e.g., accidental touches)

## Quantification Criteria
- **Interruption recovery time**: average time for a user to return to the task state after an interruption
- **Interruption cost**: degree of data loss or progress rollback caused by the interruption
- **Do-not-disturb needs**: how often and how strongly users use do-not-disturb modes
- **Asynchronous support**: whether the task supports a "start now, finish later" mode (e.g., booking, queueing)

## Design Guidelines
- Clearly mark "unsaved changes" together with recovery options
- Provide a "handle it later" mechanism (save as a to-do, reminder notifications)
- Let users actively enable a "focus mode" (blocking non-urgent notifications)
- Interruption-point design: chunk the task so that each chunk is relatively self-contained

## Cross-Domain Manifestations

| Domain | Interruption Handling |
|------|----------|
| **Forms/surveys** | Save drafts, allow filling out over multiple sittings |
| **Meetings/livestreams** | Recording playback, notes synced to timestamps |
| **Transaction flows** | Persistent shopping carts, staged orders |
| **Creation tools** | Multi-step undo, snapshots, branched history |

## Related Standards
- Common UX patterns: autosave, drafts, offline queues

---
*Factor weight assessment: ⭐⭐⭐☆☆ (important for focus-intensive task products)*


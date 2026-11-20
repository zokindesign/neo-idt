---
id: WHAT-F-004
lang: en
name: Task Persistence Requirement
name_en: Task Persistence Requirement
source: ../../../factors/WHAT-F-004-task-persistence.md
refs:
  standards: ["STD-W3C-WCAG22:3.2.3", "STD-W3C-WCAG22:3.3.7", "STD-ISO-9241-110:5.5.2"]
  research: []
---

# Task Persistence Requirement

## Definition

Whether a task requires continuity over long spans (across sessions or devices), and how strongly data saving and state restoration are needed.

## Why It Matters

- Users may lose progress to interruptions, leading to frustration and abandonment
- Some tasks inherently take a long time to complete (e.g., filling out long forms, creating content)
- Persistence design improves user completion rates and satisfaction

## Quantification Criteria

- **Average task completion time**: expected duration (minutes/hours/days)
- **Interruption frequency**: average number of times a user is interrupted per hour
- **Resumption cost**: time and cognitive burden needed to restart the task
- **Storage requirements**: amount and types of data that must be saved (drafts, settings, history)

## Private and Sensitive Task Scenarios
> Reinforced by the B1 cross-reference pass (INCL-XREF-001, cross-referenced against WHO ICF d5-d6 self-care and domestic life)

Task persistence carries special requirements in private tasks:
- **Toilet/changing/showering tasks**: waterproofing, slip resistance, easy cleaning, privacy protection, quick completion
- **Medical/medication/monitoring tasks**: privacy, accuracy, reminders, data recording, must not be lost
- **Financial/legal/identity-verification tasks**: security, shoulder-surfing protection, audit trails, revocability
- **Menstrual/incontinence/stoma-care tasks**: discretion, easy access, leak prevention, no embarrassment, quick completion
- **Mental health/counseling tasks**: anonymity, safe exit, local data encryption, no trace left behind

**Design implication**: the "persistence" of private tasks is not just technical saving; it also spans safety dimensions such as privacy boundaries, revocability, and trace-free exit.

## Design Guidelines

- Autosave (input, progress, personalization settings)
- Support multi-device sync (cloud sync, local sync)
- Provide a "continue where you left off" entry point
- Version history and rollback capability
- Resumable transfers (large-file upload/download)
- **Private-task specific**: anonymous mode, locally encrypted storage, one-tap trace clearing, panic exit key

## Cross-Domain Manifestations

| Domain | Persistence Support |
|------|------------|
| **Form filling** | Auto drafts, step-by-step saving |
| **Games** | Save points, cloud saves |
| **Content creation** | Drafts folder, version history, multi-device sync |
| **Learning platforms** | Learning progress records, resume-study reminders |
| **Healthcare/finance** | Local encryption, audit logs, revocability, no-trace mode |

## Related Standards

- No unified standard; best practice depends on the scenario
- Pending WP-C linkage: ISO 27001 information security (data protection for private tasks)

---

*Factor card: Task Persistence Requirement*
*Version: 3.1 (B1 reinforcement: private and sensitive task scenarios)*


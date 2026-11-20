---
id: WHAT-F-003
lang: en
name: Fault Tolerance Requirement
name_en: Fault Tolerance Requirement
source: ../../../factors/WHAT-F-003-fault-tolerance.md
refs:
  standards: ["STD-ISO-9241-110:5.6", "STD-W3C-WCAG22:3.3.4"]
  research: []
---

## Definition
The degree to which a system tolerates user errors and abnormal situations, and its ability to recover from them.

## Why It Matters
- Lowers user anxiety (users know that mistakes will not lead to catastrophic consequences)
- Encourages exploration and learning
- Reduces training costs

## Quantification Criteria
- **Undo depth**: how many steps of undo are supported
- **Confirmation mechanisms**: whether critical operations require confirmation
- **Error prevention**: mechanisms that prevent errors (e.g., disabling dangerous buttons)
- **Recovery time**: time needed to return from an error to a normal state

## Design Guidelines
- Provide clear, useful error messages
- Make actions easy to undo (undo button, Ctrl+Z, history)
- Require secondary confirmation for high-risk operations
- Autosave and version snapshots
- Clear recovery paths

## Cross-Domain Manifestations
- **Digital products**: undo/redo, confirmation dialogs, autosave
- **Physical devices**: emergency stop buttons, safety switches
- **Architectural spaces**: redundant exits, safety-net design
- **Fashion design**: easy on/off design, adjustable parts

## Related Standards
- ISO 9241-110: error tolerance principle

---
*Factor weight assessment: ⭐⭐⭐⭐☆ (safety-related)*


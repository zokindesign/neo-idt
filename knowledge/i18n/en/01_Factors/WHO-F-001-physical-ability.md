---
id: WHO-F-001
lang: en
name: "Physical & Cognitive Ability"
name_en: "Physical & Cognitive Ability"
source: ../../../factors/WHO-F-001-physical-ability.md
refs:
  standards: ["STD-W3C-WCAG22:1.4.3", "STD-W3C-WCAG22:1.4.11", "STD-W3C-WCAG22:2.5.8", "STD-GB-T-37668:5", "STD-GB-T-45122:6", "STD-ISO-7250:5", "STD-ANSUR-II:1"]
  research: ["Microsoft (2016). Inclusive: A Microsoft Design Toolkit. https://inclusive.microsoft.design [permanent/temporary/situational disability spectrum (Persona Spectrum)]", "Clarkson J., Coleman R., Keates S. & Lebbon C. (eds.) (2003). Inclusive Design: Design for the Whole Population. Springer-Verlag, London. ISBN 978-1-85233-700-1"]
---

# Physical & Cognitive Ability
## Definition

Users' physiological and neurological capabilities in perception, motor function, and cognition, including ability levels and limitations across vision, hearing, touch, balance, coordination, strength, endurance, memory, attention, executive function, and more.

## Why It Matters

Variation in physical ability is a core consideration of inclusive design. Ignoring different ability levels makes products or services unusable or hard to use for particular user groups, creating exclusion. Accounting for physical ability leads to more broadly usable solutions — meeting the needs of people with disabilities while improving the experience for everyone (the spillover effect).

## Subtypes and Specific Ability Dimensions

### Visual ability
- Visual acuity (LogMAR/Snellen), visual field, color vision, contrast sensitivity, light sensitivity, dark adaptation

### Auditory ability
- Hearing thresholds (decibels), speech-recognition resolution, sound localization, auditory processing speed

### Touch and proprioception
- Tactile thresholds (monofilament testing), vibration sense, temperature sense, proprioceptive precision

### Speech production
- Articulation clarity, speech-rate control, glottal control, motor control of the articulators
- **Related conditions**: dysarthria, aphasia, post-laryngeal surgery, laryngectomy
- **Design responses**: alternatives to voice input (text/gesture/eye tracking), authentication paths that do not depend on speech

### Motor ability
- Fine motor: finger dexterity, pinch strength, precision of manipulation
- Gross motor: range of motion, strength, endurance, coordination, balance
- **Temporary/situational limitations**: an arm in a cast, holding a baby, operating with gloves on, one-handed use

### Cognition and neurological function
- Attention: sustained, selective, and divided attention
- Memory: working-memory capacity, short-term/long-term memory, prospective memory
- Executive function: planning, inhibitory control, task switching, decision-making
- Processing speed: reaction time, speed of information extraction
- **Neurodiversity**: ADHD, autism spectrum, dyslexia, developmental coordination disorder

## Temporary and Situational Ability Limitations

> B1 cross-contrast reinforcement (INCL-XREF-001, contrasted with Microsoft Inclusive Design)

Ability limitations are not only permanent:
- **Temporary**: bone fractures, eye infections, laryngitis, post-surgical recovery, medication side effects
- **Situational**: bright light/dark environments, noisy/quiet environments, one-handed operation (holding a child/carrying shopping bags), wearing gloves/masks, exercising/driving, stress/fatigue

**Design implication**: permanent, temporary, and situational limitations overlap heavily at the interaction level (one-handed mode, voice control, large touch targets, etc.). Design should cover all three, rather than targeting permanent disability alone.

## Age-Related Combined Decline Across Multiple Abilities

> B1 cross-contrast reinforcement (INCL-XREF-001, contrasted with the Cambridge EDC exclusion calculator)

Aging often brings a **combined, progressive decline** across multiple dimensions of ability:
- declining vision + degraded fine motor control + slower processing + reduced working-memory capacity
- not an accumulation of separate impairments but a systematic rightward shift of capability curves
- design must consider "combinations of abilities" rather than single-dimension thresholds

## Related Standards and References
- WCAG 2.1/2.2: perceivable and operable principles (contrast, keyboard accessibility, sufficient time, etc.)
- ISO 21542: accessibility requirements in the built environment (corridor widths, ramp gradients, handrail heights, etc.)
- ANSI/HFES 100-2007: human factors engineering of computer workstations
- ISO 9999: classification of assistive products
- Human factors databases: ANSUR II, NHANES anthropometric data

## Suggested Quantification Methods
- Perceptual ability: minimum detectable stimulus thresholds (e.g., visual acuity in LogMAR, hearing in decibels), contrast sensitivity
- Motor ability: range of motion (joint angles), strength measurement (newtons), fine motor control (peak velocity, trajectory deviation)
- Cognitive ability: reaction time, working-memory capacity (e.g., digit span), executive-function tests (e.g., the Wisconsin Card Sorting Test)
- Functional assessment: standard scales (e.g., PROMIS, WHODAS 2.0) or task completion rates, error rates, subjective workload (NASA-TLX)
- Data sources: disability statistics (e.g., US CDC, the WHO World Report on Disability), anthropometric percentile data

## Manifestations Across Domains
- **Digital products**: screen reader compatibility, touch target sizes, voice input, adjustable fonts and spacing, reduced-motion options
- **Industrial design**: handle dimensions and shapes, operating-force requirements, display height and angle, misuse prevention
- **Architectural design**: door widths, ramp gradients, handrail heights and extensions, stair riser heights, reachability of elevator buttons
- **Interior design**: adjustable furniture, corridor widths, lighting uniformity and glare control, sound-dampening materials
- **Graphic design**: type size and readability, color contrast, clarity of information hierarchy, avoiding color-only information
- **Fashion design**: ease of dressing (fastener types, opening sizes), cuts that do not restrict movement, sensory-friendly fabrics, ease of care

## Common Misconceptions and Blind Spots
- Considering only extreme disabilities (e.g., blindness, paralysis) and overlooking mild-to-moderate ability variations
- Assuming all older adults lose abilities uniformly, ignoring individual differences
- Focusing only on permanent disability and overlooking temporary or situational ability limitations (holding a baby, vision restricted by bright light)
- Over-relying on visual or auditory feedback with no multi-sensory redundancy
- Designing for an "average user", excluding users at the margins

## Design Recommendation Keywords
Adjustable, multi-sensory feedback, error tolerance, minimal physical effort, reduced cognitive load, consistency, predictability, assistive-technology compatibility

---

*Factor card: Physical Ability*
*Version: 3.1 (B1 reinforcement: speech production / touch / temporary / situational / age-related combined decline)*


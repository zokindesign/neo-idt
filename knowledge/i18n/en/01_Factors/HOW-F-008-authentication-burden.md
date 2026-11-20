---
id: HOW-F-008
lang: en
name: "Authentication & Identity Burden"
name_en: "Authentication & Identity Burden"
source: ../../../factors/HOW-F-008-authentication-burden.md
refs:
  standards: ["STD-W3C-WCAG22:3.3.8"]
  research: ["Haimson O.L., Brubaker J.R., Dombrowski L. & Hayes G.R. (2016). Digital footprints and changing networks during online identity transitions. Proceedings of CHI 2016, 2895-2907. https://doi.org/10.1145/2858036.2858136 [Authentication and footprint management in identity-transition scenarios]"]
---

# Authentication & Identity Burden

## Definition

The multidimensional **cognitive, sensory, motor, and time** burden that users face when completing identity authentication, account management, credential storage, and recovery. The core dimensions include:

- **Diversity of authentication methods**: passwords, biometrics (fingerprint/face/voiceprint), hardware keys (FIDO2/WebAuthn), magic links, OTP, single sign-on (SSO), third-party federated login
- **Burden types**:
  - Cognitive burden: recalling complex passwords, understanding security questions, recognizing phishing
  - Sensory burden: CAPTCHA recognition (visual/auditory), face recognition requires adequate lighting, fingerprint scanning requires clean fingertips
  - Motor burden: typing long passwords, operating hardware keys, completing gesture verification
  - Time burden: waiting for SMS/email, multi-factor authentication flows, account recovery flows
- **Credential management burden**: password manager compatibility, cross-device synchronization, backup and recovery, legacy inheritance
- **Exclusivity risk**: a single authentication method (face only/password only/SMS only) absolutely excludes users with particular capabilities

**How this differs from other factors**:
- WHO-F-001/003/009/010: user capability states
- WHAT-F-002/003: task cognitive load / fault tolerance
- This factor focuses on the multi-channel burden and exclusivity risk of **authentication as a specific technical task**

## Why It Matters

- **Password fatigue**: the average user manages 100+ accounts, and complexity requirements lead to reuse or passwords written on paper
- **Biometric exclusion**: worn or missing fingerprints; face recognition fails for dark-skinned users, users wearing head coverings, and users wearing glasses; voiceprints fail for people who have undergone laryngeal surgery
- **Hardware key barrier**: they must be purchased, carried, plugged in, and protected from loss
- **SMS/email OTP**: depends on network/phone number, adds latency, and carries SIM-swapping risk
- **Account recovery**: security-question answers are vulnerable to social engineering, backup email accounts are lost, manual review cycles are long
- **WCAG 2.2 SC 3.3.8 mandate**: at least one authentication path that does not rely on a test of cognitive function

## Design Response (Alternative)

Provide **at least two independent authentication paths with differing capability requirements**, and let users choose:

| Authentication Path | Cognitive | Visual | Auditory | Motor | Suitable For |
|----------|------|------|------|------|----------|
| Password + password manager autofill | Low | Low | Low | Medium | Most users |
| Biometrics (fingerprint/face) | None | Medium | None | Low | Users with motor or cognitive limitations |
| FIDO2/WebAuthn hardware key | Low | Low | Low | Medium | High-security needs / enterprise users |
| Magic link / email OTP | Low | Medium | None | Low | Infrequent sign-ins / users without a device |
| SMS / voice OTP | Low | None | Medium | Low | Users without a smartphone / users with visual impairments |
| Single sign-on (SSO / federated login) | Low | Low | Low | Low | Enterprise / multi-system users |
| Trusted device / session extension | None | None | None | None | Frequent users / high cognitive load |

**Key principles**:
- Never force a single authentication method (WCAG SC 3.3.8 Level A)
- Users can switch between authentication methods seamlessly, without re-enrolling
- Account recovery must not depend on cognitive tests (such as security questions); use trusted contacts, trusted devices, or hardware keys instead
- Password manager autofill must work flawlessly (no `autocomplete=off` blocking)

## Cross-Domain Mapping

| Domain | Exclusion Example | Inclusion Example |
|------|----------|----------|
| Digital products | Password-only sign-in, CAPTCHA without an audio option, password managers blocked | Optional multi-factor, WebAuthn, magic links, session extension |
| Industrial design | Device pairing requires a complex PIN, control only through a phone app | NFC-tag pairing, physical-button confirmation, web control panel |
| Architecture design | Access control limited to face/fingerprint, visitors must register manually at the front desk | Multimodal access control (card/code/biometric/remote unlock), temporary visitor access codes |
| Fashion design | Smart garments pair only through an app and require re-authentication after washing | Physical-button pairing, NFC tags, basic functions that require no authentication |

## Measurement Dimensions

- Number of authentication methods (≥2 independent paths, WCAG conformance)
- Capability requirements labeled per path (cognitive/visual/auditory/motor)
- Password manager autofill compatibility (pass/fail)
- Account recovery success rate and average elapsed time
- Task abandonment rate caused by authentication failure

## Related Standards and References

- **WCAG 2.2 SC 3.3.8: Accessible Authentication (Minimum)** — Level A mandate
- **EN 301 549 9.3.3.8** — EU procurement standard with the same clause lineage
- **NIST SP 800-63B** — authenticator assurance levels (AAL1/2/3)
- **FIDO2 / WebAuthn** — passwordless authentication standard
- ISO/IEC 29115 entity authentication assurance framework

## B1 Cross-Reference Note

This factor was added by the INCL-XREF-001 GAP-3 determination: WCAG 2.2 SC 3.3.8 provides ready-made Level A evidence and maps directly; the other four benchmarks have no structured factor for "authentication burden."

---

#tags #HOW-dimension #authentication-burden #accessible-authentication #WCAG-3.3.8 #B1-new


---
id: WHICH-F-003
lang: ko
name: 통제감 선호
name_en: Control Preference
source: ../../../factors/WHICH-F-003-control-preference.md
refs:
  standards: ["STD-ISO-9241-110:5.5", "STD-W3C-WCAG22:3.2.6"]
  research: ["Parasuraman R., Sheridan T.B. & Wickens C.D. (2000). A model for types and levels of human interaction with automation. IEEE Transactions on Systems, Man, and Cybernetics—Part A, 30(3), 286-297. https://doi.org/10.1109/3468.844354"]
---

# 통제감 선호 (Control Preference)

## 기본 정의

사용자가 작업을 수행할 때 과정에 대한 자율적 통제 정도와 자동화 정도에 대해 선호하는 바.

## 왜 중요한가

- 통제감 부족 → 무력감, 불신
- 통제 과잉 → 부담 증가, 효율 저하
- 신기술 채택에 영향을 준다(자동화 주행 수용도 등)

## 정량화 기준

- **측정 방법**: 설문 척도(자동화 수용도, 수동 개입 의향)
- **지표**: 사용자가 실제 사용하는 자동화 vs 수동 기능의 빈도
- **허용 한계 임계값**: 일부 작업에서 사용자가 내어놓는 것을 허용하는 통제 비율

## 설계 가이드

- 조절 가능한 자동화 수준을 제공한다('완전 자동', '반자동', '수동' 등)
- 사용자가 시스템 결정을 재정의할 수 있게 한다
- 되돌리기 메커니즘을 제공해 안전감을 높인다
- 현재 시스템 상태와 예상 동작을 명확히 알린다
- **도움말 일관성**: 도움말 입구 위치 고정, 도움말 내용 구조 통일, 문맥 감지 도움말과 전역 도움말 공존, 도움말은 언제든 호출 가능하며 주요 흐름을 방해하지 않음(WCAG 2.2 SC 3.2.6에 해당, 가이드 계층에서 WP-E 시행)

## 영역별 발현

- **디지털 제품**: 자동 완성 제안 수용/거부, 추천 알고리즘 투명성
- **산업 기기**: 수동 override, 반자동 모드, 완전 자동 모드
- **스마트 빌딩**: 환경 자동 조절 + 수동 조절 패널
- **의류**: 조절 가능한 부품(단추, 지퍼, 끈) vs 원클릭 착용

## 관련 표준

- ISO 9241-110: 제어 가능성 원칙
- Parasuraman 등의 신뢰와 자동화 이론
- WCAG 2.2 SC 3.2.6: Consistent Help(도움말 일관성)

---

*요인 카드: 통제감 선호*
*버전: 3.1(B1 보강: 도움말 일관성 가이드 포인트)*


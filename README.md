# Portfolio Main Website

## 1. 프로젝트 소개

- **설명:**  
  코드 없이 누구나 빠르게 프로 수준의 웹사이트를 제작할 수 있는 웹 빌더 서비스 LUMEN의 랜딩 페이지입니다. 직관적인 정보 구조와 명확한 CTA 설계를 통해 사용자가 서비스의 핵심 가치를 빠르게 이해하도록 구성했습니다.

- **진행 기간:** 2026.03.03 ~ 2026.03.06 (3일)
- **개발 인원:** 개인 프로젝트
- **배포 링크:** [Portfolio Main](https://hyojunez99.github.io/lumen/)
- **GitHub:** [Repository Link](https://github.com/hyojunez99/lumen.git)

---

## 2. 사용 기술 스택 (Tech Stack)

- **Frontend:** JavaScript (ES6+), React.js, SCSS
- **Data Handling:** Mock JSON
- **Animation:** GSAP
- **Design Tools:** Figma, Photoshop, Illustrator
- **Version Control & Tools:** Git, GitHub

---

## 3. 기획 및 디자인 (Planning & Design)

- **컨셉:**  
  Modern · Clean · Trustworthy SaaS 제품 특성에 맞는 신뢰감 있는 톤과 직관적인 정보 전달 구조 중심의 UI 설계

- **Tool:** Figma
- **주요 활동:**
  - 랜딩페이지 정보 구조 설계 (Hero → 기능 → 상세 기능 → 요금제 → FAQ → CTA)
  - 사용자 흐름 기반 섹션 구성
  - 디자인 시스템 설계 (컬러 / 타이포 / 간격 규칙)
  - 반응형 레이아웃 설계
  - 컴포넌트 단위 UI 설계

---

## 4. 디렉토리 구조

```text
src
├── assets          # 정적 리소스 관리
│ │
│ ├── images        # 프로젝트 이미지 및 UI 에셋
│ │
│ ├── data          # 화면에 사용되는 JSON 데이터 관리
│ │
│ └── scss          # 전역 스타일 관리 (변수, 믹스인, 폰트 등)
│
├── components      # 재사용 가능한 UI 컴포넌트
│ │
│ ├── common        # 공통 UI 요소
│ │
│ ├── layout        # 페이지 공통 레이아웃
│ │
│ ├── ui            # 작은 단위 UI 컴포넌트
│ │
│ └── sections      # 랜딩 페이지 섹션 단위 컴포넌트
│
├── pages           # 페이지 단위 컴포넌트
│
├── App.jsx         # 애플리케이션 루트 컴포넌트
│                   # 전체 페이지 및 레이아웃 조합
│
└── index.js        # React 앱 진입점

```

---

## 5. 담당 역할

- **기획 및 디자인**
  - 전체 레이아웃 설계
  - UI/UX 구조 설계
  - 사용자 흐름 기반 랜딩페이지 구조 설계
  - 반응형 웹 구조 설계
  - 디자인 시스템 구축
- **개발:**
  - React 컴포넌트 구조 설계
  - 섹션 단위 컴포넌트 분리 및 재사용 구조 설계
  - SCSS 모듈화 및 스타일 아키텍처 설계
  - JSON 데이터 기반 동적 렌더링
  - 조건부 렌더링 (요금제 선택, FAQ 아코디언)
  - 상태 관리 (useState 활용 인터랙션 구현)
  - 앵커 스크롤 기반 원페이지 네비게이션 구현

---

## 6. 주요 기능

- 원페이지 스크롤 랜딩
- 요금제 선택 인터랙션
- FAQ 아코디언
- 재사용 가능한 컴포넌트 구조
- 반응형 레이아웃

---

## 7. 트러블 슈팅

- **문제 1:** height: auto 상태에서는 transition이 적용되지 않아 열고 닫힘 애니메이션이 끊기는 현상 발생.
  - **해결:** max-height 기반 애니메이션으로 변경하고 overflow: hidden을 적용해 자연스럽게 접히도록 개선.

- **문제 2:** img 태그에 background-image를 변경하는 방식을 사용해 hover 이미지가 정상 표시되지 않음.
  - **해결:** hover 이미지를 별도 import 후 상태값으로 src 교체 방식 적용.

- **문제 3:** 전역 SCSS에 작성된 공통 스타일이 다른 영역에 영향을 주며 의도치 않은 UI 깨짐 발생.
  - **해결:** 컴포넌트 단위 스타일 분리 및 네이밍 스코프 구조화.

---

## 8. 인사이트 (Insights)

- 컴포넌트 단위 설계가 유지보수성과 확장성에 큰 영향을 준다는 것을 경험
- 디자인 시스템이 구축되면 UI 일관성과 개발 속도가 크게 향상됨
- 랜딩페이지는 기능 설명보다 가치 전달 구조가 더 중요함을 학습
- 작은 인터랙션(hover, active 상태)이 사용자 경험 완성도를 좌우함

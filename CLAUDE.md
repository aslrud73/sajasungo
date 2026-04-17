# 사자성어 시간여행 — 프로젝트 컨텍스트

## 개요
- **제품:** 사자성어 시간여행 (유아~초등 저학년용 학습만화 웹앱)
- **브랜드:** 꼬마나라 AI 티처랩 (© 2025)
- **GitHub:** https://github.com/aslrud73/sajasungo
- **배포:** https://sajasungo.vercel.app
- **타겟 디바이스:** 스마트폰 · 태블릿 · 전자칠판 (3단계 반응형)
- **톤:** 밝고 귀여운 학습만화 스타일

## 캐릭터
- **찬이** — 치비 남자아이 (학습자 시점)
- **할아버지** — 서당 훈장 (이야기 전달자)

## 50편 구성 (10 Vol × 5편)

| Vol | 테마 | 색상 그라디언트 | 뱃지 | 에피소드 |
|---|---|---|---|---|
| 1 | 노력과 끈기 | `#F5E6C8` → `#E8C87A` | 황금빛 | 우공이산, 형설지공, 작심삼일, 백절불굴, 일취월장 |
| 2 | 우정과 의리 | `#E8F5EC` → `#A8D8B8` | 민트 | 죽마고우, 이심전심, 동고동락, 호형호제, 막역지우 |
| 3 | 지혜와 꾀 | `#E8EEF8` → `#A8C0E8` | 하늘 | 일석이조, 조삼모사, 호가호위, 임기응변, 백문불여일견 |
| 4 | 말과 태도 | `#F8EAF2` → `#E8A8CC` | 핑크 | 마이동풍, 삼인성호, 구밀복검, 언중유골, 역지사지 |
| 5 | 가족과 효도 | `#F8F0E8` → `#E8C0A0` | 살구 | 반포지효, 부전자전, 혈육지정, 동병상련, 천생연분 |
| 6 | 인생의 교훈 | `#EEE8F8` → `#C0A8E8` | 라벤더 | 새옹지마, 전화위복, 고진감래, 호사다마, 인과응보 |
| 7 | 욕심과 절제 | `#EAF5E8` → `#A8D8A0` | 연두 | 소탐대실, 과유불급, 다다익선, 자화자찬, 중용지도 |
| 8 | 성장과 배움 | `#E8F5F8` → `#98CAE0` | 청록 | 청출어람, 온고지신, 교학상장, 괄목상대, 천리마 |
| 9 | 용기와 위기 | `#F8ECEA` → `#E8A898` | 코랄 | 사면초가, 위기일발, 절체절명, 일편단심, 칠전팔기 |
| 10 | 세상과 공정 | `#EEF5E8` → `#B8D898` | 올리브 | 권선징악, 공평무사, 오십보백보, 유유상종, 천고마비 |

**에피소드 번호:** `(Vol - 1) × 5 + 순번` → `ep01 ~ ep50`

## 파일 구조

```
sajasungo/
├─ index.html              메인 (서당 배경, 시작 버튼, 하단 4메뉴)
├─ series.html             시리즈 목록 (10 Vol 카드, 각 5편)
├─ viewer.html             공통 만화 뷰어 (?ep=XX 파라미터)
├─ quiz.html               (미작성) 통합 OX퀴즈
├─ mylearning.html         (미작성) 학습 현황
├─ assets/
│   ├─ bg.webp             메인 배경 (필수)
│   ├─ chan.webp           찬이 (선택, 현재 미사용)
│   └─ grandpa.webp        할아버지 (선택, 현재 미사용)
├─ data/
│   └─ ep01.js ~ ep50.js   에피소드 데이터 (window.EP_DATA 래핑)
└─ images/
    └─ ep01/ ~ ep50/       scene1.webp ~ scene9.webp (편당 9장)
```

## 데이터 포맷 (data/epXX.js)

```js
window.EP_DATA = window.EP_DATA || {};
window.EP_DATA["01"] = {
  id: "ep01",
  vol: 1,
  volTitle: "노력과 끈기",
  volColors: { c1: "#F5E6C8", c2: "#E8C87A" },
  title: "우공이산",
  hanja: "愚公移山",
  hanjaReading: "우 공 이 산",
  meaning: "어리석은 영감이 산을 옮긴다",
  description: "...",
  cover: "images/ep01/cover.webp",
  scenes: [
    { image: "images/ep01/scene1.webp", narration: "", dialogue: null },
    // ... scene9까지
  ],
  lesson: { title: "오늘의 교훈", text: "...\n..." },  // \n으로 줄바꿈
  quiz: [
    { type: "ox",     question: "...", answer: false, explain: "..." },
    { type: "choice", question: "...", options: [...], answer: 1, explain: "..." }
  ]
};
```

- `<script src="data/epXX.js">` 로 동적 로드 → **로컬 파일(file://)에서도 동작**
- `narration`, `dialogue`는 빈 값 허용 (만화 이미지에 대사 포함됨)
- `lesson.text`의 `\n`은 `white-space: pre-line`으로 줄바꿈 처리

## 뷰어 슬라이드 순서
1. **cover** — 한자 + 뜻 + 설명
2. **scene 1~9** — 이미지 풀스크린 (테두리·여백 없음)
3. **lesson** — 오늘의 교훈
4. **quiz 1~3** — OX / 객관식 (상태 유지)
5. **result** — 점수 + 다시보기/시리즈로

## UI 규칙 (엄수)

- **이모지 사용 절대 금지** — 모든 아이콘은 **Lucide SVG 인라인**으로
  - 기준: https://lucide.dev (stroke-width 2, `currentColor`)
  - 자주 쓰는 것: `arrow-left`, `home`, `book-open`, `list-checks`, `library`, `graduation-cap`, `chevron-right`, `lock`, `lightbulb`, `trophy`, `image`
- **이미지 Placeholder 패턴** — 실제 에셋 없이도 레이아웃 유지:
  ```html
  <div class="placeholder">...</div>
  <img src="..." onload="this.previousElementSibling.remove()" onerror="this.remove()">
  ```
  - 배경은 그라디언트 fallback + JS로 로드 성공 시 `.loaded` 클래스
- **텍스트:** Pretendard > Noto Sans KR > Malgun Gothic
- **크기:** `clamp()` + `vmin` 단위 기반 반응형
- **타이틀 색상:** 진한 갈색 `#3D1F0A` + 흰 글로우 text-shadow (배경 대비 보장)
- **Vol 색상 적용:** viewer는 `data.volColors`를 CSS 변수 `--c1`, `--c2`에 주입

## 보안 / 저작권 보호

모든 페이지에 공통 적용:

- **우클릭, 드래그, 텍스트 선택 차단**
- **개발자도구 단축키 차단:** F12, Ctrl+Shift+I/J/C, Ctrl+U/S/P
- **모바일:** 멀티터치·더블탭 확대 차단
- **이미지 드래그 금지:** `-webkit-user-drag: none`
- **인쇄 차단:** `@media print { body { display: none; } }`
- **워터마크 2중:**
  - 우상단 배지 "꼬마나라 AI 티처랩"
  - 대각선 반복 오버레이 (opacity 0.05~0.06)
- **푸터:** `© 2025 꼬마나라 AI 티처랩`

## 진행 상황

- **[완료] ep01 우공이산** — 9씬 (`images/ep01/scene1~9.webp`, `data/ep01.js`)
- **[완료] ep02 형설지공** — 11씬 (`images/ep02/scene1~11.webp`, `data/ep02.js`)
- **[완료] ep03 작심삼일** — 11씬 (`images/ep03/scene1~11.webp`, `data/ep03.js`)
- **[다음] ep04 백절불굴** — Vol.1 4번째 (황금빛 팔레트 유지)
- **[예정] ep05 일취월장** → Vol.2 ~ Vol.10
- **[예정] `quiz.html`, `mylearning.html`** 미작성

## 새 에피소드 추가 절차

1. `data/epNN.js` 생성 — 해당 Vol의 `volColors` 사용, `window.EP_DATA["NN"] = {...}` 래핑
2. `images/epNN/` 폴더에 `scene1.webp ~ scene9.webp` 배치 (9장 기준)
3. `series.html`의 `AVAILABLE_EPS = new Set([...])` 에 `NN` 추가 → 잠금 해제
4. `viewer.html?ep=NN` 로 동작 확인

## 로컬 실행

- **서버 없이:** `viewer.html?ep=01`을 브라우저에서 직접 열기 (file:// OK — script 태그 방식)
- **서버 권장 (개발 중):** 프로젝트 루트에서
  ```bash
  python -m http.server 8000
  ```
  → http://localhost:8000

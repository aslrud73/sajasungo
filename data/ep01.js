/* 사자성어 시간여행 · ep01 우공이산
   viewer.html에서 <script src="data/ep01.js"> 로 동적 로드됩니다.
   로컬 파일(file://)에서도 동작합니다.
   ※ 씬의 narration/dialogue는 비워 둠 — 만화 이미지 자체에 대사가 들어있음. */
window.EP_DATA = window.EP_DATA || {};
window.EP_DATA["01"] = {
  "id": "ep01",
  "vol": 1,
  "volTitle": "노력과 끈기",
  "volColors": { "c1": "#F5E6C8", "c2": "#E8C87A" },
  "title": "우공이산",
  "hanja": "愚公移山",
  "hanjaReading": "우 공 이 산",
  "meaning": "어리석은 영감이 산을 옮긴다",
  "description": "아무리 어려운 일이라도 꾸준히 노력하면 반드시 이루어진다는 뜻이에요.",
  "cover": "images/ep01/cover.webp",
  "scenes": [
    { "image": "images/ep01/scene1.webp", "narration": "", "dialogue": null },
    { "image": "images/ep01/scene2.webp", "narration": "", "dialogue": null },
    { "image": "images/ep01/scene3.webp", "narration": "", "dialogue": null },
    { "image": "images/ep01/scene4.webp", "narration": "", "dialogue": null },
    { "image": "images/ep01/scene5.webp", "narration": "", "dialogue": null },
    { "image": "images/ep01/scene6.webp", "narration": "", "dialogue": null },
    { "image": "images/ep01/scene7.webp", "narration": "", "dialogue": null },
    { "image": "images/ep01/scene8.webp", "narration": "", "dialogue": null },
    { "image": "images/ep01/scene9.webp", "narration": "", "dialogue": null }
  ],
  "lesson": {
    "title": "오늘의 교훈",
    "text": "아무리 크고 어려운 일도 포기하지 않고 꾸준히 하면 반드시 이룰 수 있어요.\n여러분도 매일 조금씩 노력하는 습관을 가져 볼까요?"
  },
  "quiz": [
    {
      "type": "ox",
      "question": "우공 할아버지는 산을 옮기다가 중간에 포기했어요.",
      "answer": false,
      "explain": "우공 할아버지는 끝까지 포기하지 않고 꾸준히 산을 옮겼어요."
    },
    {
      "type": "choice",
      "question": "'우공이산'이 우리에게 알려 주는 교훈은 무엇일까요?",
      "options": [
        "빨리 빨리 서두르면 좋다",
        "꾸준히 노력하면 무엇이든 이룰 수 있다",
        "어려운 일은 피하는 것이 좋다"
      ],
      "answer": 1,
      "explain": "작은 노력이라도 매일매일 쌓이면 큰 산도 옮길 수 있어요."
    },
    {
      "type": "ox",
      "question": "이웃 사람은 우공 할아버지를 따뜻하게 응원했어요.",
      "answer": false,
      "explain": "이웃 사람은 우공 할아버지를 비웃었지만, 할아버지는 개의치 않았어요."
    }
  ]
};

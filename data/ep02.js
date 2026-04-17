/* 사자성어 시간여행 · ep02 형설지공
   viewer.html에서 <script src="data/ep02.js"> 로 동적 로드됩니다.
   로컬 파일(file://)에서도 동작합니다.
   ※ 씬의 narration/dialogue는 비워 둠 — 만화 이미지 자체에 대사가 들어있음. */
window.EP_DATA = window.EP_DATA || {};
window.EP_DATA["02"] = {
  "id": "ep02",
  "vol": 1,
  "volTitle": "노력과 끈기",
  "volColors": { "c1": "#F5E6C8", "c2": "#E8C87A" },
  "title": "형설지공",
  "hanja": "螢雪之功",
  "hanjaReading": "형 설 지 공",
  "meaning": "반딧불과 눈빛으로 이룬 공",
  "description": "가난하고 어려운 환경에서도 반딧불과 눈의 빛으로 공부해 큰 성공을 이룬다는 뜻이에요. 꾸준한 노력은 어떤 상황도 이겨낼 수 있답니다.",
  "cover": "images/ep02/cover.webp",
  "scenes": [
    { "image": "images/ep02/scene1.webp",  "narration": "", "dialogue": null },
    { "image": "images/ep02/scene2.webp",  "narration": "", "dialogue": null },
    { "image": "images/ep02/scene3.webp",  "narration": "", "dialogue": null },
    { "image": "images/ep02/scene4.webp",  "narration": "", "dialogue": null },
    { "image": "images/ep02/scene5.webp",  "narration": "", "dialogue": null },
    { "image": "images/ep02/scene6.webp",  "narration": "", "dialogue": null },
    { "image": "images/ep02/scene7.webp",  "narration": "", "dialogue": null },
    { "image": "images/ep02/scene8.webp",  "narration": "", "dialogue": null },
    { "image": "images/ep02/scene9.webp",  "narration": "", "dialogue": null },
    { "image": "images/ep02/scene10.webp", "narration": "", "dialogue": null },
    { "image": "images/ep02/scene11.webp", "narration": "", "dialogue": null }
  ],
  "lesson": {
    "title": "오늘의 교훈",
    "text": "가난이나 어려운 환경도 꾸준한 노력 앞에서는 큰 벽이 되지 않아요.\n여러분도 힘든 상황에서 포기하지 않고 노력해 볼까요?"
  },
  "quiz": [
    {
      "type": "ox",
      "question": "'형설지공'의 '형(螢)'은 반딧불을 뜻해요.",
      "answer": true,
      "explain": "맞아요! '형(螢)'은 반딧불이, '설(雪)'은 눈을 뜻해요. 차윤은 반딧불로, 손강은 눈빛으로 공부했답니다."
    },
    {
      "type": "choice",
      "question": "손강은 겨울밤에 무엇의 빛으로 책을 읽었을까요?",
      "options": [
        "촛불의 빛",
        "쌓인 눈에 비친 달빛",
        "난로의 불빛"
      ],
      "answer": 1,
      "explain": "손강은 집이 가난해 촛불을 켤 수 없어, 창밖에 쌓인 흰 눈에 비친 달빛으로 책을 읽었답니다."
    },
    {
      "type": "ox",
      "question": "'형설지공'은 부자로 태어난 사람이 성공한다는 뜻이에요.",
      "answer": false,
      "explain": "아니에요. 가난하고 어려운 환경에서도 꾸준히 노력하면 반드시 큰일을 이룰 수 있다는 뜻이랍니다."
    }
  ]
};

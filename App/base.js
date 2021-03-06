const btnStart = document.querySelector("#btn_start");
const btnPause = document.querySelector("#btn_pause");
const btnDemo = document.querySelector("#btn_demo");
const btnBack = document.querySelector("#btn_back");
const btnMenu = document.querySelector("#btn_menu");
const btnQuit = document.querySelector("#btn_quit");
const btnQuitInGame = document.querySelector("#btn_quit1");
const timer = document.querySelector("#countdown");
const pageCover = document.querySelector(".layout");
const pagePause = document.querySelector("#layout2");
const pageEndGame = document.querySelector("#layout1");
const name = document.querySelector("#inputName");
const namePlayer = document.querySelector("#namePlayerUI");
const labelInput = document.querySelector("#name");
const score = document.querySelector("#score");
const healthBar = document.querySelector("#healthBar");
const board = document.querySelector("#board");
const audioFalse = new Audio("./Sound effect/Wrong-answer-sound-effect.mp3");
const audioTrue = new Audio("./Sound effect/Bing-sound.mp3");
const audioClick = new Audio("./Sound effect/Button-click-sound-effect.mp3");
const allButton = document.getElementsByTagName("button");
const yourStage = document.querySelector("#your_stage");
export {
  btnStart,
  btnPause,
  btnDemo,
  btnBack,
  btnMenu,
  btnQuit,
  btnQuitInGame,
  timer,
  pageCover,
  pagePause,
  pageEndGame,
  name,
  namePlayer,
  labelInput,
  score,
  healthBar,
  board,
  audioFalse,
  audioTrue,
  audioClick,
  allButton,
  yourStage
};

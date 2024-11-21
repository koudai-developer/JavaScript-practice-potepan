const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const millisecond = document.getElementById("millisecond");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

// 時間情報の変数
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

// 戻り値のための変数
let time = null;

// スタートボタンのイベント
start.addEventListener("click", () => {
  time = setInterval(updateTime, 100);
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
});

// ストップボタンのイベント
stop.addEventListener("click", () => {
  clearInterval(time);
  start.disabled = false;
  stop.disabled = true;
});

// リセットボタンのイベント
reset.addEventListener("click", () => {
  clearInterval(time);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  hour.innerText = hours;
  minute.innerText = minutes;
  second.innerText = seconds;
  millisecond.innerText = milliseconds;
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
});

// 時間を更新する関数
function updateTime() {
  milliseconds++;
  if (milliseconds === 10) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  hour.innerText = hours;
  minute.innerText = minutes;
  second.innerText = seconds;
  millisecond.innerText = milliseconds;
}
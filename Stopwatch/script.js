let timer;
let seconds = 0;
let isRunning = false;

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTime, 1000);
  }
}

function pauseStopwatch() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
}

function resetStopwatch() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  updateTime();
}

function updateTime() {
  seconds++;
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let remainingSeconds = seconds % 60;

  let formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
  document.getElementById("time").textContent = formattedTime;
}

function pad(value) {
  return value.toString().padStart(2, "0");
}

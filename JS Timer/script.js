let timer;
let totalSeconds = 0;
let secondsRemaining = 0;
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    totalSeconds = calculateTotalSeconds();
    secondsRemaining = totalSeconds;
    updateDisplay();
    timer = setInterval(updateTime, 1000);
    isRunning = true;
  }
}

function pauseTimer() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  }
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  totalSeconds = 0;
  secondsRemaining = 0;
  updateDisplay();
}

function calculateTotalSeconds() {
  const hours = parseInt(document.getElementById("hours").value, 10) || 0;
  const minutes = parseInt(document.getElementById("minutes").value, 10) || 0;
  const seconds = parseInt(document.getElementById("seconds").value, 10) || 0;

  return hours * 3600 + minutes * 60 + seconds;
}

function updateTime() {
  if (secondsRemaining > 0) {
    secondsRemaining--;
    updateDisplay();
  } else {
    clearInterval(timer);
    isRunning = false;
  }
}

function updateDisplay() {
  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const remainingSeconds = secondsRemaining % 60;

  const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(
    remainingSeconds
  )}`;
  document.getElementById("time").textContent = formattedTime;
}

function pad(value) {
  return value.toString().padStart(2, "0");
}

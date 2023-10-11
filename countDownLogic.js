let countdownValue = 5;
let countdownInterval;

function startCountdown() {
  const countdownElement = document.getElementById("countdown");
  const startButton = document.getElementById("startButton");
  const replayButton = document.getElementById("replayButton");

  startButton.disabled = true;

  countdownInterval = setInterval(function () {
    countdownValue--;
    countdownElement.innerText = countdownValue;

    if (countdownValue === 0) {
      countdownElement.innerText = "Go";
      replayButton.disabled = false;
      clearInterval(countdownInterval);
    }
  }, 1000);
}

function restartCountdown() {
  const countdownElement = document.getElementById("countdown");
  const startButton = document.getElementById("startButton");
  const replayButton = document.getElementById("replayButton");

  countdownValue = 5;
  countdownElement.innerText = countdownValue;
  startButton.disabled = false;
  replayButton.disabled = true;
}

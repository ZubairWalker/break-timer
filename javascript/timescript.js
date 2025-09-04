const countdownEl = document.getElementById("countdown");
const resumeButton = document.getElementById("resumeButton");

function updateCountdown() {
  const minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownEl.innerHTML = `${minutes}:${seconds}`;

  if (timeLeft <= 0) {
    clearInterval(timer);
    countdownEl.innerHTML = "00:00";
    resumeButton.classList.remove("hidden");
  } else {
    timeLeft--;
  }
}

// Update the countdown every second
updateCountdown();
const timer = setInterval(updateCountdown, 1000);

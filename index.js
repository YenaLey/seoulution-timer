document.getElementById("title").textContent = CONFIG.TITLE;
document.body.style.backgroundColor = CONFIG.BACKGROUND_COLOR;
document.body.style.color = CONFIG.TEXT_COLOR;

const formatDate = (date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

document.getElementById("date").textContent = formatDate(CONFIG.TARGET_DATE);

function updateCountdown() {
  const now = new Date();
  const target = CONFIG.TARGET_DATE;
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 100);
updateCountdown();

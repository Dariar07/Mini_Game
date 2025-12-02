let nameInput = prompt("Введіть своє ім’я:");

if (!nameInput || nameInput.trim().length < 2) {
  nameInput = "Гравець";
}

document.getElementById("playerName").textContent = nameInput;

function startGame() {
  const playerNum = Math.floor(Math.random() * 10) + 1;
  const pcNum = Math.floor(Math.random() * 10) + 1;

  document.getElementById("playerNum").textContent = playerNum;
  document.getElementById("pcNum").textContent = pcNum;

  const msg = document.getElementById("msg");

  if (playerNum > pcNum) {
    msg.textContent = `${nameInput} виграв раунд!`;
    flashOverlay("green");
  } else if (pcNum > playerNum) {
    msg.textContent = "Комп’ютер виграв раунд!";
    flashOverlay("red");
  } else {
    msg.textContent = "Нічия!";
    flashOverlay("yellow");
  }
}

function flashOverlay(color) {
  const layer = document.getElementById("flashLayer");

  layer.className = "flash-overlay";

  if (color === "green") layer.classList.add("flash-green");
  if (color === "red") layer.classList.add("flash-red");
  if (color === "yellow") layer.classList.add("flash-yellow");

  layer.style.opacity = "1";

  setTimeout(() => {
    layer.style.opacity = "0";
  }, 250);
}

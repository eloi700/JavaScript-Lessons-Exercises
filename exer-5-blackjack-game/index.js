const message = document.querySelector(".message");
const startBtn = document.querySelector(".start-btn");
const newCardBtn = document.querySelector(".newcard-btn");
const total = document.querySelector(".total");
const payout = document.getElementById("player-cashout");

message.textContent = "Wanna play a round?";

startBtn.addEventListener("click", () => {
  const firstCardNumber = getCardNumber();
  const secondCardNumber = getCardNumber();
  document.querySelector(".firstCard").textContent = firstCardNumber;
  document.querySelector(".secondCard").textContent = secondCardNumber;
  document.querySelector(".thirdCard").textContent = "";
  total.textContent = firstCardNumber + secondCardNumber;
  newCardBtn.disabled = false;

  if (+total.textContent <= 20) {
    message.textContent = "Do you want to draw a new card?";
    payout.value = payout.value;
  } else if (+total.textContent === 21) {
    handleWin();
  } else {
    handleLost();
  }

  newCardBtn.addEventListener("click", () => {
    const thirdCardNumber = getCardNumber();
    document.querySelector(".thirdCard").textContent = thirdCardNumber;
    total.textContent = firstCardNumber + secondCardNumber + thirdCardNumber;

    if (+total.textContent === 21) {
      handleWin();
    } else {
      handleLost();
    }
    newCardBtn.disabled = true;
  });
});

function getCardNumber() {
  return Math.floor(Math.random() * 11 - 2 + 1) + 2;
}

function handleWin() {
  message.textContent = "Wohoo! You've got Blackjack!";
  const newCashout = payout.value * 2;
  payout.value = newCashout;
  payout.style.backgroundColor = "#ffd700";
  payout.style.color = "#fff";
}

function handleLost() {
  message.textContent = "You're out of the game!";
  payout.value = 0;
}

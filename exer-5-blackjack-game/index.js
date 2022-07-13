const message = document.querySelector(".message");
const startBtn = document.querySelector(".start-btn");
const newCardBtn = document.querySelector(".newcard-btn");
const total = document.querySelector(".total");
const payout = document.getElementById('player-cashout');

message.textContent = "Wanna play a round?";

document.querySelector(".start-btn").addEventListener("click", () => {
  const message = document.querySelector(".message");
  const firstCardNumber = Math.floor(Math.random() * 11 - 2 + 1) + 2;
  const secondCardNumber = Math.floor(Math.random() * 11 - 2 + 1) + 2;
  document.querySelector(".firstCard").textContent = firstCardNumber;
  document.querySelector(".secondCard").textContent = secondCardNumber;
  document.querySelector(".thirdCard").textContent = "";
  total.textContent = firstCardNumber + secondCardNumber;
  newCardBtn.disabled = false;


  if (+total.textContent <= 20) {
    message.textContent = "Do you want to draw a new card?";
    payout.value = payout.value;
  } else if (+total.textContent === 21) {
    message.textContent = "Wohoo! You've got Blackjack!";
    const newCashout = payout.value * 2;
    payout.value = newCashout;
    payout.style.backgroundColor = "#ffd700";
    payout.style.color = "#fff";

  } else {
    message.textContent = "You're out of the game!";
    payout.value = 0;
  }

  document.querySelector(".newcard-btn").addEventListener("click", () => {
    const message = document.querySelector(".message");
    const thirdCardNumber = Math.floor(Math.random() * 11 - 2 + 1) + 2;
    document.querySelector(".thirdCard").textContent = thirdCardNumber;
    total.textContent = firstCardNumber + secondCardNumber + thirdCardNumber;

    if (+total.textContent === 21) {
        message.textContent = "Wohoo! You've got Blackjack!";
        const newCashout = payout.value * 2;
        payout.value = newCashout;
        payout.style.backgroundColor = "#ffd700";
        payout.style.color = "#fff";
      } else {
        message.textContent = "You're out of the game!";
        payout.value = 0;
      }
      document.querySelector(".newcard-btn").disabled = true;
  });
});


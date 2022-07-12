const scoreBoardHome = document.querySelector(".score-home");
const scoreBoardGuest = document.querySelector(".score-guest");

document.querySelector(".home-points-1")
    .addEventListener("click", () => addPoints(scoreBoardHome, 1));

document.querySelector(".guest-points-1")
    .addEventListener("click", () => addPoints(scoreBoardGuest, 1));

document.querySelector(".home-points-2")
    .addEventListener("click", () => addPoints(scoreBoardHome, 2));

document.querySelector(".guest-points-2")
    .addEventListener("click", () => addPoints(scoreBoardGuest, 2));

document.querySelector(".home-points-3")
    .addEventListener("click", () => addPoints(scoreBoardHome, 3));

document.querySelector(".guest-points-3")
    .addEventListener("click", () => addPoints(scoreBoardGuest, 3));

function addPoints (scoreBoard, points){
    const newScore = +scoreBoard.textContent + points;
    scoreBoard.textContent = newScore;
}

document.querySelector(".reset-btn").addEventListener('click', () =>{
    scoreBoardHome.textContent = 0;
    scoreBoardGuest.textContent = 0;
})






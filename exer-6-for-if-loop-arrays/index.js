// Create a for loop that counts from 10 to 50 in steps of 10.

function theNumber() {
  let tens = '';
  for (let x = 10; x <= 50; x +=10) {
    tens = tens + ' ';
    tens += x;
  }
return tens;
}

//Functions are hoisted all throughout the code.

document.querySelector(".myNumber").textContent = theNumber();

// Logging out an array of text messages.

let messages = [
  "Hey, how's it going?",
  "I'm great, thank you! How about you?",
  "All good.  Been working on my portfolio lately.",
  "Same here!",
  "Great to hear!",
  "Thanks, nice talking with you.",
  "Bye for now!",
];

for (let x = 0; x < messages.length; x++) {
  document.querySelector(".my-messages").innerHTML += messages[x] + "<br>";
}

// Render the sentence in the greetingEl paragraph using a for loop and .textContent. Add also the family name at the end of the sentence.
let sentence = ["Hello,", "my", "name", "is", "Duh"];
let famName = "Dah.";
let greetingEl = document.getElementById("greeting-el");
sentence.push(famName);

for (x = 0; x <= sentence.length - 1; x++) {
  greetingEl.textContent += sentence[x] + " ";
}

// Write a function that returns the total race time;
// Call/invoke the function and store the returned value in a new variable.

let player1Time = 102;
let player2Time = 107;

function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player1Time === player2Time) {
    return player2Time;
  } else {
    return player2Time;
  }
}

function getTotalRaceTime() {
  totalRaceTime = player1Time + player2Time;
  return totalRaceTime;
}

document.querySelector(".race-time").textContent += `  ${getTotalRaceTime()}`;


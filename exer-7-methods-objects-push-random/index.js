// OBJECTS - store data in-depth -composite / complex data type
// key-value pairs

let course = {
  title: "Learn CSS Grid",
  lessons: 16,
  creator: "Harald Borgen",
  length: 63,
  level: 2,
  isFree: true,
  tags: ["html", "css"],
};
// Dot Notation - taking a particular object
console.log(course.title);

// Bracket Notation
console.log(course.tags[1]);

let castle = {
  title: "Live like a King in my Castle",
  castle_details: ["guests", "bedroom", "beds", "baths"],
  castleRating: 4.95,
  costPerNight: 190,
  isSuperHost: true,
  images: ["images/castle.png", "images/castle1.png"],
};

console.log(castle.castleRating);

// METHODS ON OBJECTS
// (Methods attached on Object e.g. - player.name)
// Creating Functions Into an Object
let player = {
  name: "Duh",
  chips: 200,
  sayHello: function () {
    return "Dah";
  },
};
console.log(player.sayHello());

// Create a person object that contains three keys: name, age, and country.
// Create a function logData(), that uses the person object to create a
// string in the following format:
// "Per is 35 years old and lives in Norway"
// Call the logData() function to verify that it works

let person = {
  name: "Eloi",
  age: 35,
  country: "Germany",
};

function logData() {
  return `${person.name} is ${person.age} years old and lives in ${person.country}.`;
}
// logData()
console.log(logData());

// OBJECTS AND FUNCTIONS with IF/ELSE/ELSE IF
let age = 60;
let discount = {
  baby: "free",
  child: "child discount",
  student: "student discount",
  adult: "full price",
  senior: "senior citizen discount",
};

function passenger() {
  if (age < 6) {
    return discount.baby;
  } else if (age <= 17) {
    return discount.child;
  } else if (age <= 26) {
    return discount.student;
  } else if (age <= 59) {
    return discount.adult;
  } else {
    return discount.senior;
  }
}
// passenger();
document.querySelector(".passenger-discount").textContent = passenger();

// LOOP (FOR) & ARRAYS
let largeCountries = [
    "Tuvalu",
    "India",
    "USA",
    "Indonesia",
    "Monaco"
];

// push(), unshift() -----APPEND elements at the END & BEGINNING
// pop(), shift() ------REMOVE elements at the END & BEGINNING

largeCountries.shift(); //----REMOVES the FIRST element w/c is TUVALU
largeCountries.unshift("China"); //---APPEND at the BEGINNING -CHINA)-

largeCountries.pop(); //---REMOVES the LAST element w/c is MONACO
largeCountries.push("Pakistan"); //---APPEND at the END -PAKISTAN

for (let x = 0; x < largeCountries.length; x++){
  document.querySelector(".large-countries").innerHTML += `- ${largeCountries[x]}` + "<br>";
}

// LOGICAL OPERATORS
let dayOfMonth = 18;
let weekday = "Friday";

if(dayOfMonth === 13 && weekday === "Friday"){
  console.log("Oh no! 😱")
} else {
  console.log("Yes, I can walk out 🚶")
}

// RANDOM SELECTION FROM ARRAY - Math.floor(Math.random())
const hands = [
  "rock",
  "paper",
  "scissors"
]

function getHand(hands){
  return hands[Math.floor(Math.random() * hands.length)]; // 1 * 2; 1 * 0;
}
console.log(getHand(hands));

let randomName = [
  "Maria",
  "Liza",
  "Cherry",
  "Antony",
  "Christopher",
  "Stefan",
  "Andrew",
  "Lina"
]

randomName.push("Eloisa");
randomName.unshift("Andi");

function studentApplicant(randomName){
  return randomName[Math.floor(Math.random() * randomName.length)]
}
document.querySelector(".random-name").textContent = studentApplicant(randomName);

// FOR EACH LOOP - PUSH IN EMPTY ARRAY - ODD & EVEN
const fighters = [ "🐒", "🦍", "🦧", "🐕", "🐩","🐺","🦊","🐈","🦁","🐅","🐆","🐄","🐖","🐏","🐐","🐘","🐊","🐍" ];
const evenFighter = [];
const oddFighter = [];

fighters.forEach((fighter, index) =>{
  if(index % 2 === 0){
    evenFighter.push(fighter)
  } else {
    oddFighter.push(fighter);
  }
})
console.log(evenFighter);
console.log(oddFighter);


const items = ['item1', 'item2', 'item3'];
const copyItems1 = [];
const copyItems2 = [];

// FOR LOOP
for (let i = 0; i < items.length; i++) {
  copyItems1.push(items[i])
}
console.log(copyItems1)

// FOR EACH LOOP
items.forEach((item) => {
  copyItems2.push(item)
});
console.log(copyItems2);


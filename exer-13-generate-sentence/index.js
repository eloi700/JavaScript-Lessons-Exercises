const player = "Per"
const opponent = "Nick"
const game = "Amazing Fighter"
let points = 0
let hasWon = false;

points +=100;
hasWon = true;

if (hasWon){
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game.`)
}

//Log out items in an Array
const myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"];

function logCourses(course){
    console.log(course);
}

logCourses(myCourses);

function logItems(arr){
    for(let x=0; x<arr.length; x++){
        console.log(arr[x])
    }
}

logItems(myCourses);

// ADDEVENTLISTENER & OBJECT IN ARRAY
//NOTE - Object is DOT and Array is [ ]
const data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

const janeBtn = document.getElementById('jane-btn');
const frame = document.querySelector('.frame');
janeBtn.addEventListener('click', () =>{
    const score = document.createElement('div');
    score.classList.add('jScore');
    score.textContent = data[0].score;
    frame.append(score);
})

//GENERATE SENTENCE - USING FOR LOOP and TEMPLATE STRING
//The generateSentence(desc, arr) takes 2 parameters: description & array
//It should return a string based upon the description and array

//Example 1: if you pass in "LARGEST countries", and ["China", "India", "USA"], it should return the string: "The 3 LARGEST countries are China, India and USA"

//Example 2: if you pass in "BEST fruits" and ["Apples", "Oranges", "Cherries" ], it should return: "The 2 BEST fruits are Apples and Bananas"

//Use both a FOR LOOP and a TEMPLATE STRING(``) to solve the challenges.

const sentence1 = generateSentence("biggest countries", ["China", "India", "Pakistan", "Australia", "USA"]);
const sentence2 = generateSentence("famous fruits", ["Apples", "Bananas", "Cherries", "Mangoes", "Grapes", "Pears"]);

function generateSentence(desc, arr){
    let baseString = `The ${arr.length} ${desc} are `;
    for (let x=0; x<arr.length; x++){
        if (x === arr.length - 2){
            baseString += arr[x] + " and ";
        } else if(x === arr.length - 1){
            baseString += arr[x] +  ".";
        } else{
            baseString += arr[x] + ", ";
        }
    }
    return baseString
}
document.querySelector('.sentence-result1').textContent = sentence1;
document.querySelector('.sentence-result2').textContent = sentence2;



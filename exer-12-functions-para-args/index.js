// Functions with Parameter
const welcomeEl = document.getElementById('welcome-el');

function greetUser(greeting, name){
    welcomeEl.textContent = `${greeting}, ${name}.`
}

greetUser("Howdy", "Cielo")

// Arguments vs Parameters

function add(num1, num2){ //Functions with Parameters
    return num1 + num2;
}

console.log(add(3,4)); // Arguments - Passing a Value into a Function
// Arguments are created outside of the function

// Arrays as Parameters
const myArr = [1,2,3]
function getFirst(someArr){
    return someArr[0];
}
console.log(getFirst(myArr))

//functions and methods
//ex. functions prompt(), alert() -> can stand alone when you call it
//ex. methods -> it is inside of the class -> name.pop()

function sayHello(firstName, lastName){
    const message = `Hello, ${firstName} ${lastName}`;
    return message;
}
// sayHello();

console.log(sayHello("Eloi", "Tennert"));

//SQUARE A NUMBER
function square(x){
    const result = Math.floor(Math.sqrt(x));
    const desc = `The square root of ${x} is : ${result}`
    return desc;
}

console.log(square(9));

//GET RANDOM INTEGER FUNCTION
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(10)) // -> Result from 0 to 10;
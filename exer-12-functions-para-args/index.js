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
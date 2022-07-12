
let num1 = document.getElementById("num1-el");
let num2 = document.getElementById("num2-el");
let answer = document.getElementById("result-el");

document.querySelector('.add').addEventListener("click", () => {
    // result = +num1.value + +num2.value; OR---
    result = Number(num1.value) + Number(num2.value);
    answer.textContent = "Answer is " + result;
})

document.querySelector('.subtract').addEventListener("click", () => {
    result = num1.value - num2.value;
    answer.textContent = "Answer is " + result;
})

document.querySelector('.multiply').addEventListener("click", () => {
    result = num1.value * num2.value;
    answer.textContent = "Answer is " + result;
})

document.querySelector('.divide').addEventListener("click", () => {
    result = num1.value / num2.value;
    answer.textContent = "Answer is " + result;
})
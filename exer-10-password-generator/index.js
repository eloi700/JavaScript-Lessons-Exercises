//DOM Elements
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const symbolsEl = document.getElementById('symbols');
const numbersEl = document.getElementById('numbers');
const lengthEl = document.getElementById('length');
const clipboardEl = document.getElementById('clipboard');
const generateEl = document.getElementById('generate');

// Generate Functions
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}

function getRandomSymbols(){
    return String.fromCharCode(Math.floor(Math.random()*15) + 33);
}

// function getRandomSymbols(){
//     const symbols = "!@#$%^&*(){}[]=<>/,.";
//     return symbols[Math.floor(Math.random()*symbols.length)];
// }

function getRandomNumbers(){
    return String.fromCharCode(Math.floor(Math.random)*10 + 48);
}


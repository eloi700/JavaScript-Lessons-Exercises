// Functional programming is all about building functions for immutable variables. No side-effects meaning its a pure functions.

// Object-oriented programming is about having a relatively fixed set of functions, and you’re primarily modifying or adding new variables.

// IMPERATIVE APPROACH
const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let result1 = 0;
for (let i = 0; i < numList.length; i++) {
  if (numList[i] % 2 === 0) {
    result1 += numList[i] * 10;
  }
}
console.log("i'm result1", result1);

// FUNCTIONAL PROGRAMMING - Declarative Approach
const result2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
               .filter(n => n % 2 === 0)
               .map(a => a * 10)
               .reduce((a, b) => a + b);

console.log("i'm result2", result2);

// FP REVERSE STRING
function reverseStr(str){
  return str.split('').reverse().join('')
}

console.log(reverseStr("hello how are you?"));
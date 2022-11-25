//  FOR ... IN LOOP
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

// ANOTHER EXAMPLE OF FOR...IN
const triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

const obj = new ColoredTriangle();

for (const prop in obj) {
  if (Object.hasOwn(obj, prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`); //"obj.color = red"
  }
}


// FOR ... OF LOOP
// Statement executes a loop that operates on a sequence of VALUES sourced from an iterable object.

// ITERATING OVER AN ARRAY
const iterable1 = [10, 20, 30];

for (const value of iterable1) {
  console.log(value);
}
// 10
// 20
// 30

// ITERATING OVER A STRING
const iterable2 = "boo";

for (const value of iterable2) {
  console.log(value);
}
// "b"
// "o"
// "o"

// ITERATING OVER A TYPEDARRAY
const iterable3 = new Uint8Array([0x00, 0xff]);

for (const value of iterable3) {
  console.log(value);
}
// 0
// 255

// ITERATING OVER A MAP
const iterable4 = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ]);

  for (const entry of iterable4) {
    console.log(entry);
  }
  // ['a', 1]
  // ['b', 2]
  // ['c', 3]

  for (const [key, value] of iterable4) {
    console.log(value);
  }
  // 1
  // 2
  // 3

// ITERATING OVER A SET
const iterable5 = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable5) {
  console.log(value);
}
// 1
// 2
// 3

// Iterating over the arguments object
// Examining all parameters passed into a function

function foo() {
  for (const value of arguments) {
    console.log(value);
  }
}

foo(1, 2, 3);
// 1
// 2
// 3

// DIFFERENCE BETWEEN FOR...OF AND FOR...IN

// Both for...in and for...of statements iterate over something. The main difference between them is in what they iterate over.

// The for...in statement iterates over the ENUMERABLE STRING properties of an object, while the for...of statement iterates over values that the iterable object defines to be iterated over.

Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

const iterable = [3, 5, 7];
iterable.foo = "hello";

for (const i in iterable) {
  console.log(i);
}
// "0", "1", "2", "foo", "arrCustom", "objCustom"
// The for...in loop logs only enumerable properties of the iterable object because those are not properties — they are values. It logs array indexes.

for (const i in iterable) {
  if (Object.hasOwn(iterable, i)) {
    console.log(i);
  }
}
// "0" "1" "2" "foo"

for (const i of iterable) {
  console.log(i);
}
// 3 5 7
// The for...of loop iterates and logs values that iterable, as an array (which is iterable), defines to be iterated over. The object's elements 3, 5, 7 are shown, but none of the object's properties are.
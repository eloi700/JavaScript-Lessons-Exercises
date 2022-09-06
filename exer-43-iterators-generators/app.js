/*Iterator - advance loops which can be paused
 * Generator - functions can be paused and can return multiple values
 */

//Iterator Example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    //Object with next function
    next: function () {
      return nextIndex < names.length
        ? {
            value: names[nextIndex++],
            done: false,
          }
        : { done: true };
    },
  };
}

//Create an Array of Names
const namesArr = ["Jack", "Jill", "John"];
//Init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next().value); // Jack
console.log(names.next().value); // Jill
console.log(names.next().value); // John
// console.log(names.next().value); // undefined or
// console.log(names.next()); // done: false

/** Generator Example - with * and yield
 * The YIELD KEYWORD  pauses generator function execution and the value of the expression following the yield keyword is returned to the generator's caller
 * The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.
 */
function* sayNames() {
  yield "Jack";
  yield "Jill";
  yield "John";
}

const name = sayNames();

console.log(name.next().value); //Jack
console.log(name.next().value); //Jill
console.log(name.next().value); //John
console.log(name.next().value); //undefined

// Another Generator Example
function* generator(i) {
  yield i; //start of counting
  yield i + 10;
  yield i + 20;
}

const gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);
// expected output: 20

console.log(gen.next().value);
// expected output: 30

// Another Generator Example
function* createIds() {
  let index = 1;

  while (true) {
    yield index++;
  }
}

const generator1 = createIds();

console.log(generator1.next().value); //1
console.log(generator1.next().value); //2
console.log(generator1.next().value); //3
console.log(generator1.next().value); //4
console.log(generator1.next().value); //5

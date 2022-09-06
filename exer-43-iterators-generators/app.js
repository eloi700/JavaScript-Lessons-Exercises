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
            done: false
          }
        : { done: true };
    },
  };
}

//Create an Array of Names
const namesArr = ['Jack', 'Jill', 'John'];
//Init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next().value); // Jack
console.log(names.next().value); // Jill
console.log(names.next().value); // John
// console.log(names.next().value); // undefined or
// console.log(names.next()); // done: false



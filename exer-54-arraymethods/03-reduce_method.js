// EXAMPLE 1 ==============================================================
const girls = [
  { name: 'Elaine', numCats: 4 },
  { name: 'Loren', numCats: 2 },
  { name: 'Emma', numCats: 1 },
  { name: 'Liezl', numCats: 0 },
  { name: 'Edna', numCats: 3 },
];

// SYNTAX:
// reduce(function (accumulator, currentValue) { /* … */ }, initialValue)

const totalCats = girls.reduce(
  (accum, currValue) => accum + currValue.numCats,
  0
);
console.log(totalCats); //10

// EXAMPLE 2 ==============================================================
const array = [15, 16, 17, 18, 19];
// Syntax:
// reduce(function (accumulator, currentValue, currentIndex) { /* … */ })
// OR reduce((accumulator, currentValue, currentIndex) => { /* … */ })

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

array.reduce(reducer);

// accumulator: 15, currentValue: 16, index: 1, returns: 31
// accumulator: 31, currentValue: 17, index: 2, returns: 48
// accumulator: 48, currentValue: 18, index: 3, returns: 66
// accumulator: 66, currentValue: 19, index: 4, returns: 85

// EXAMPLE 3 ==============================================================
// Summing an Array of Numeric Properties
const lineItems = [
  { description: 'Eggs (Dozen)', quantity: 1, price: 3, total: 3 },
  { description: 'Cheese', quantity: 0.5, price: 5, total: 2.5 },
  { description: 'Butter', quantity: 2, price: 6, total: 12 },
];

//callback function
// SYNTAX: reduce(callbackFn, initialValue)

const itemsTotal = lineItems.map((li) => li.total).reduce(sumReducer, '0');

const qtyTotal = lineItems.map((li) => li.quantity).reduce(sumReducer, '0');

function sumReducer(sum, val) {
  return (Math.round((parseFloat(sum) + val) * 100) / 100).toFixed(1);
}
console.log(itemsTotal); // 17.5
console.log(qtyTotal); // 3.5

// EXAMPLE 4 ==============================================================
// Counting Instances of Values in Object
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0; // if first cond is null/undefined ? 0
  return {
    ...allNames,
    [name]: currCount + 1,
  };
}, {});
console.log(countedNames);
//{Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}

// Another Example:
const things = [
  'pen',
  'phone',
  'paper',
  'computer',
  'phone',
  'pen',
  'pen',
  'ball',
];
const countedThings = things.reduce((allThings, thing) => {
  const curNumber = allThings[thing] ?? 0;
  return {
    ...allThings,
    [thing]: curNumber + 1,
  };
}, {});
console.log(countedThings);
// {pen: 3, phone: 2, paper: 1, computer: 1, ball: 1}

// EXAMPLE 5 ==============================================================
// Grouping Object by a Property (Age)
const people = [
  { name: 'Kyle', age: 26 },
  { name: 'Aim', age: 28 },
  { name: 'Bryle', age: 42 },
  { name: 'Chris', age: 28 },
  { name: 'Dennis', age: 26 },
  { name: 'Elsa', age: 28 },
  { name: 'Felly', age: 35 },
  { name: 'George', age: 42 },
  { name: 'Henry' },
];

const groupedPerson = people.reduce((grPeople, person) => {
  const ageKey = person.age;
  const curGroupPerson = grPeople[ageKey] ?? [];
  return {
    ...grPeople,
    [ageKey]: [...curGroupPerson, person],
  };
}, {});
console.log(groupedPerson);
//{26: Array(2), 28: Array(3), 35: Array(1), 42: Array(2), undefined: Array(1)}

// Grouping by Item
const groceryItems = [
  { item: 'brocolli', qty: 2 },
  { item: 'apple', qty: 5 },
  { item: 'orange', qty: 10 },
  { item: 'avocado', qty: 5 },
  { item: 'orange', qty: 1 },
  { item: 'apple', qty: 1 },
];

function groupBy(objArray, property) {
  return objArray.reduce((acc, obj) => {
    const keyItem = obj[property];
    const currentGroup = acc[keyItem] ?? [];
    return {
      ...acc,
      [keyItem]: { ...currentGroup, obj },
      [totalQty]: { totalQty },
    };
  }, {});
}

const groupedItems = groupBy(groceryItems, 'item');
console.log(groupedItems);

// Example: Grouping by Age
const attendant = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    const curGroup = acc[key] ?? [];

    return { ...acc, [key]: [...curGroup, obj] };
  }, {});
}

const groupedPeople = groupBy(attendant, 'age');
console.log(groupedPeople); // {20: Array(2), 21: Array(1)}

// CONCATENATING ARRAYS CONTAINED IN AN ARRAY OF OBJECTS====================
// USING THE SPREAD SYNTAX & INITIAL VALUE

// friends - an array of objects
// where object field "books" is a list of favorite books
const friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
  {
    name: "Elaine",
    books: ["Game of Thrones", "Bullet Train"],
    age: 30,
  },
];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
const allbooks = friends.reduce(
  (accumulator, currentValue) => [...accumulator, ...currentValue.books],
  ["Alphabet"],
);
console.log(allbooks);

// REMOVE DUPLICATE ITEMS IN AN ARRAY ===================================
const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const myArrayWithNoDuplicates = myArray.reduce((strings, string) => {
  if (!strings.includes(string)) {
    return [...strings, string];
  }
  return strings;
}, []);

console.log(myArrayWithNoDuplicates);
//(5) ['a', 'b', 'c', 'e', 'd']

// REPLACE .FILTER().MAP() WITH .REDUCE()
const numbers = [-5, 6, 2, 0];

const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    return [...accumulator, doubled];
  }
  return accumulator;
}, []);

console.log(doubledPositiveNumbers); //(2) [12, 4]

// CALLING REDUCE( ) ON NON-ARRAY OBJECTS ================================
// The reduce( ) method reads the length property of this and then accesses each integer index.
const arrayLike = {
  length: 5,
  0: 2,
  1: 3,
  2: 4,
  3: 8,
  4: 12,
};
console.log(Array.prototype.reduce.call(arrayLike, (x, y) => x + y));



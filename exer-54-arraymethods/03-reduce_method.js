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
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
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
    { description: 'Butter', quantity: 2, price: 6, total: 12 }
  ];

//callback function
// SYNTAX: reduce(callbackFn, initialValue)

const itemsTotal = lineItems.map(li => li.total).reduce(sumReducer, '0');

const qtyTotal = lineItems.map(li => li.quantity).reduce(sumReducer, '0');

function sumReducer(sum, val) {
  return (Math.round((parseFloat(sum) + val) * 100) / 100).toFixed(1);
}
console.log(itemsTotal); // 17.5
console.log(qtyTotal); // 3.5


const letters1 = ['k', 'l', 'a', 'A', 'b', 'R'];
const sortedLetters = letters1.sort();
console.log(sortedLetters);
//  ['A', 'R', 'a', 'b', 'k', 'l']

//=================================================================
// UNDERSTANDING WHY UPPERCASE LETTER / NUMBER COMES FIRST?
const letters2 = ['k', 'l', 'a', 'A', 'b', 'R'];
letters2.forEach((letters2) => {
  console.log(`${letters2} ${letters2.charCodeAt(0)}`); // UTF-16
});
/**
 * k 107
 * l 108
 * a 97
 * A 65 - This will be the first as this has the lowest charCode number
 * b 98
 * R 82 - This will be the next
 */

//=================================================================
const numbers = [2, 4, 5, 98, 100, 12];
console.log(numbers.sort());
// [100, 12, 2, 4, 5, 98]

numbers.forEach((number) => {
  console.log(number, String(number).charCodeAt(0));
});
/**
 *2 50
 *4 52
 *5 53
 *98 57
 *100 49
 *12 49
 * */

//=================================================================
// 3-WAY COMPARISON comparefn(a , b)

const nums = [2, 4, 5, 98, 100, 12];
const sortedNums = nums.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
});
console.log(sortedNums);
// [2, 4, 5, 12, 98, 100]

// SIMILAR AS ABOVE
const nums1 = [2, 4, 5, 98, 100, 12];
const sortedNums1 = nums1.sort((a, b) => {
  return a - b;
});
console.log(sortedNums1);
//[2, 4, 5, 12, 98, 100]

// ====================================================================
// SORTING PROPERTIES OF AN OBJECT
const spiceGirls = [
  { name: 'ginger', age: 37 },
  { name: 'scariey', age: 30 },
  { name: 'baby', age: 19 },
  { name: 'posh', age: 20 },
  { name: 'rainy', age: -3 },
];
// sort by age
spiceGirls.sort((a, b) => a.age - b.age);
console.log(spiceGirls);
// {name: "rainy", age: -3},
// {name: "baby", age: 19},
// {name: "posh", age: 20},
// {name: "scariey", age: 30},
// {name: "ginger", age: 37},

// sort by name length
spiceGirls.sort((a, b) => a.name.length - b.name.length);
console.log(spiceGirls);
// {name: "baby", age: 19},
// {name: "posh", age: 20},
// {name: "rainy", age: -3},
// {name: "ginger", age: 37},
// {name: "scariey", age: 30},

// SORTING WITHOUT MUTATING THE ORIGINAL
const n = [3, 1, 4, 1, 5];
// [...numbers] creates a shallow copy, so sort() does not mutate the original
const sorted = [...n].sort((a, b) => a - b);
sorted[0] = 10;
console.log(sorted); // Copied - [10, 1, 3, 4, 5]
console.log(n[0]); // Original - 3

//  SORTING WITH EMPTY STRING (ON SPARSE ARRAYS)
console.log(['a', 'c', , 'b'].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, 'a', 'b'].sort()); // ["a", "b", undefined, empty]

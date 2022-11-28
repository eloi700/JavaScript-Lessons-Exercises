const letters1 = ["k","l","a", "A", "b", "R"];
const sortedLetters = letters1.sort();
console.log(sortedLetters);
//  ['A', 'R', 'a', 'b', 'k', 'l']

// UNDERSTANDING WHY UPPERCASE LETTER / NUMBER COMES FIRST?
const letters2 = ["k","l","a", "A", "b", "R"];
letters2.forEach((letters2) => {
  console.log(`${letters2} ${letters2.charCodeAt(0)}`) // UTF-16
})
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

numbers.forEach((number)=>{
  console.log(number, String(number).charCodeAt(0));
})
/**
 *2 50
 *4 52
 *5 53
 *98 57
 *100 49
 *12 49
 * */




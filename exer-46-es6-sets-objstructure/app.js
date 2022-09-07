//SETS - Store UNIQUE values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add("I'm a string");
set1.add({name: "Loren"}); // object
set1.add(true);

const set2 = new Set([1, true, 'string']);
console.log(set2);

console.log(set1); // 100 I'm a string Object true

//Get Count - set
console.log(set1.size); // 4

//Check for Values
console.log(set1.has(100)); // true
console.log(set1.has(50 + 50)); // true
console.log(set1.has({name: 'Loren'})); // false - not a primitive value

//Delete from Set
set1.delete(100);
console.log(set1); //100 is gone

//ITERATING THROUGH SETS - SETS are NOT value pair its only SINGLE value
//FOR ...OF
for(let item of set1){
    console.log(item); // I'm a String {name: 'Loren} true
}

for(let item of set1.keys()){
    console.log(item); // same as above
}

for(let item of set1.values()){
    console.log(item); // same as above
}

//FOR ...EACH
set1.forEach((value) => {
    console.log(value); // same as above
})

//CONVERT SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);

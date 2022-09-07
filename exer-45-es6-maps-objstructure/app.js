//MAPS - key value pairs - can use ANY types as a key or value
const map1 = new Map();

//Set Keys
const key1 = "some string",
  key2 = {},
  key3 = function () {};

//Set MAP values by key - set()
map1.set(key1, "Value of key1");
map1.set(key2, "Value of key2");
map1.set(key3, "Value of key3");

//Get MAP values by key - get()
console.log(map1.get(key1), map1.get(key2), map1.get(key3));
// return Value of key1 Value of key2 Value of key3

//Count Values - size
console.log(map1.size); // 3 (value pairs)

//ITERATING MAPS

//Loops using FOR ...OF to GET keys and values
for (let [key, value] of map1) {
  console.log(`${key} = ${value}`);
}

//Iterate keys only
for (let key of map1.keys()) {
  console.log(key);
}

//Iterate values only
for (let value of map1.values()) {
  console.log(value);
}

//Loops using FOR ...EACH to GET keys and values
map1.forEach(function (value, key) {
  console.log(`${key} = ${value}`);
});

//CONVERT SETS TO ARRAYS

//Create an array of the key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

//Create an array of the values
const varArr = Array.from(map1.values());
console.log(varArr);

//Create an array of the keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);
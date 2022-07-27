//Math Object
let val;

val = Math.PI;
val = Math.E;
val = Math.round(2.5);
val = Math.ceil(2.3);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3); //absolute number turns into 3
val = Math.pow(8, 2);
val = Math.min(2, 33, 5, 12, 8, -1, 12, 65); //-1
val = Math.max(2, 33, 5, 12, 8, 1, 12, 65); //65
val = Math.random(); //gives values upto 1
val = Math.random() * 20 + 1; //max is 20 and min is 1
console.log(val);

//String Methods
let firstName = "Sebastian";
let str = "Hello there I'm Cielo";
let tags = "Web Design, Web Programming, Web Development";
val = firstName.indexOf("a"); // turns 3 - the index of first a
val = firstName.lastIndexOf("a"); // turns 7 - the index of last a
val = firstName.charAt(2); // turns the 2nd index which is b
val = firstName.charAt(firstName.length - 1); //turns letter n
val = firstName.substring(0, 4); // starts from index 0 to 4 -> Seba
val = firstName.slice(0, 4); // starts from index 0 to 4 -> Seba
val = firstName.slice(-3); //starts at the end to 3rd -> ian
val = str.split(" "); // separated each other-> ["Hello", "there", "I'm", "Cielo"] -> separating them using the space
val = tags.split(","); // separating using , (comma) -> ["Web Design", "Web Programming", "Web Development"]
val = str.replace("Cielo", "Andreas"); // -> replace the text or value
val = str.includes("there"); //-> turns TRUE

//Arrays & Arrays Methods
//Ways to Create Arrays
const numbers = [52, 45, 12, 35, 58, 65, 34];
const numbers2 = new Array(5, 3, 12, 50, 56, 89);
const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

//Array Length
val = numbers.length; //

//Check if Array
val = Array.isArray(numbers);

//Get Single Value
val = numbers[3]; // showing index 3 which is 35
val = numbers[0]; // turns index 0 which is 52

//Insert into Array
numbers[2] = 100; // 100 has been inserted in 2nd Index

//Find Index of Value
val = numbers.indexOf(58); // shows in Index 4

//MUTATING ARRAYS
numbers.push(96);
numbers.unshift(28);
numbers.pop();
numbers.shift();
numbers2.splice(1, 3); // 3, 12, 50 was removed (from 1st index to 3rd index)
numbers2.reverse(); //-> reverse the order of the array

//OBJECT LITERALS
const person = {
  firstName: "Steve",
  lastName: "Hernandez",
  age: 46,
  email: "steve@gmail.com",
  hobbies: ["music", "sports"],
  address: { city: "Miami", state: "FL" },
  getBirthYear: function () {
    return 2022 - this.age;
  },
};

val = person;
//Get specific value
val = `${person.firstName} ${person.lastName}`;
val = person["firstName"];
val = person.age;
val = person.hobbies[1]; // sports
val = person.address.state; // FL
val = person.getBirthYear(); // 1987

const people = [
  { name: "Peter", age: 35 },
  { name: "Arnold", age: 28 },
  { name: "Paul", age: 25 },
  { name: "Andrew", age: 30 },
  { name: "Bernard", age: 32 },
];

//To Access the Data from the Array
//NOTE - a combination of FILTER() & MAP() - first must be FILTER then MAP
const getNames = people
  .filter((peopleAge) => peopleAge.age <= 30)
  .map((indiv) => indiv.name); // ['Arnold', 'Paul', 'Andrew']
console.log(getNames);

const aveAge = people
.map((ages => ages.age))
.reduce((total, age) => total + age, 0) / people.length;
console.log(`The average age for ${people.length} persons is ${aveAge}`);


//DATES & TIMES
const today = new Date(); // today's date
let birthday = new Date('9-10-1981 11:25:00') // setup
console.log(typeof val); // Object

val = today;
val = today.getMonth() // Month STARTS count is in 0;
val = today.getDate()
val = today.getDay()
val = today.getFullYear()
console.log(val);
val = today.getHours()
val = today.getMinutes()
val = today.getSeconds()
val = today.getMilliseconds()
val = today.getTime()
val = today.getUTCFullYear() //specified year in the specified date according to UNIVERSAL TIME
console.log(val);

birthday.setMonth(2 - 1) // turns Feb
birthday.setDate(12)
birthday.setFullYear(1985)
birthday.setHours(3);
birthday.setMinutes(30)
birthday.setSeconds(25)
console.log(birthday);

//DATE.UTC
//SYNTAX -> Date.UTC(year, month, day, hour, minute, second, millisecond)
const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));
const utcDate3 = new Date(Date.UTC(2022, 2, 8));

console.log(utcDate1.toUTCString());
// expected output: Fri, 02 Feb 1996 03:04:05 GMT
console.log(utcDate2.toUTCString());
// expected output: Sun, 31 Dec 1899 00:00:00 GMT
console.log(utcDate3.toUTCString());
//result -> Tue, 08 Mar 2022 00:00:00 GMT

//FUNCTION EXPRESSIONS --> Hoisting? Closure?
// Anonymous Function
const square = function(x){
    return x*x;
}
console.log(square(8)); // 64

// IIFEs - Immediately Invokable Function Expressions
(function(myParam){
    console.log('IIFE Ran...')
    console.log('my parameter is', myParam)
})('dog');

//PROPERTY METHODS
const todo = {
    add: function(){
        console.log('add to do...')
    },
    edit: function(id){
        console.log(`edit to do...${id}`)
    }
}

todo.delete = function(){
    console.log('delete to do ...')
}
todo.add();
todo.edit(22);
todo.delete();

//LOOPS & ITERATIONS -> GENERAL LOOPS
//FOR LOOP
for (let i=0; i<10; i++){
    if(i === 2){  // On the 2nd Index below will be printed (CONTINUE)
        console.log('2 is my fav number');
        continue;
    }
    if(i === 5){
    console.log('Stop Here!');
    break; // On the 5th Index, LOOP will STOP  although FOR is upto 10
    }
    console.log('Number' + i);
}
//WHILE LOOP - set the variable outside of the Loop then condition in while loop
let i = 0;
while(i < 10){
    console.log('Number' + i);
    i++;
}

//DO WHILE
let x = 0;
do{
    console.log('Number is' + x)
    x++;
}
while(x < 10);

//LOOP THROUGH ARRAY
//FOR EACH with Index & Array
const cars = ["Ford", "Toyota", "Chevrolet", "BMW"]
cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array);
})

//FOR IN LOOP use for OBJECTS ----SHOWS THE INDEX or KEYS
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for (let k in user){
    console.log(`${k} : ${user[k]}`)
    console.log(k); // firstName, lastName, age
}

//WINDOW METHODS / OBJECTS / PROPERTIES

//-----------ALERT
// window.alert('Hello World') // usually window is not shown thus,
// alert('Hello, World')

//-----------PROMPT - similar to Alert but it takes Input
// const input = prompt();
// alert(input);

//----------CONFIRM
// if(confirm('Are you sure?')){
//     console.log('YES')
// }else{
//     console.log('NO')
// }

//Outer/Inner Height and Width of the Window
val = window.outerHeight;
val = window.outerWidth;

val = window.innerHeight; //inside of the scrollBars
val = window.innerWidth;

//Scroll Points
val = window.scrollX;
val = window.scrollY;

//Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;


//Redirect
// val = window.location.href = 'http://google.com';

//Reload
// val = window.location.reload()// -> this will keep the window reloading


//HISTORY OBJECT (Browsing History)
val = window.history.go(-2);

//History Length
val = window.history.length; // takes the number of sites history

//Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

//BLOCK SCOPE & GLOBAL SCOPE USING VAR, LET & CONST
// NOTE - LET & CONST has a block level Scope
// NOTE - VAR has a Global level Scope in a way that the value changes everytime the variable is REUSED.

//Global Scope
var a = 1;
let b = 2;
const c = 3;
console.log('Global Scope: ', a, b, c);
//turn result as Global Scope: 1, 2, 3

//Function Scope
function test(){
var a = 4;
let b = 5;
const c = 6;
console.log('Function Scope: ', a, b, c);
//turn result as Function Scope: 4, 5, 6
}
test()

//Block Scope
if(true){
    var a = 4; //takes the top as a value for a
    let b = 5;
    const c = 6;
    console.log('If Block Scope:', a, b, c);
}
console.log('Global Scope: ', a, b, c);
//Original Output: 1, 2, 3
//New Output after the Block Scope: 4, 2, 3 -> 1 changed into 4


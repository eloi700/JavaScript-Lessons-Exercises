/**
 * SYMBOLS
 */
//Create Symbols (A primitive type)

//Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};
myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

console.log(myObj[KEY1]); // Prop1
console.log(myObj[KEY2]); // Prop2

//Symbols are not enumerable in for .. in
for(let i in myObj){
    console.log(`${i}: ${myObj[i]}`); // key3: Prop3, key4: Prop4
}

//Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'})); //{"key":"prop"}
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'})); // {}

//==================================//
/** DESTRUCTURING ASSIGNMENT*/
//====================================//
let a, b;
[a, b] = [100, 200];

//Rest Pattern in Arrays (...rest - SPREAD Operator)
[a, b, ...rest] = [100, 200, 300, 400, 500];
console.log(b); // 200
console.log(rest); // 300 400 500;

//Rest Pattern in Object
({a, b} = {a: 100, b: 200, c: 300, d: 400, e: 500 });
({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500 });
console.log(rest); // {c: 300 d: 400 e: 500}

// ARRAY DESTRUCTURING
const people = ['John', 'Beth', 'Jill'];
const [person1, person2, person3] = people;
console.log(person1, person2, person3); // John Beth Jill

// PARSE ARRAY RETURN FROM FUNCTION
function getPeople(){
    return ['John', 'Jack', 'Joe'];
}

let per1, per2, per3;
[per1, per2, per3] = getPeople();
console.log(per1, per2, per3);

// OBJECT DESTRUCTURING -Use for React Module/Components
const person = {
    name1: 'John Doe',
    age: 32,
    city: 'Miami',
    gender: 'male',
    sayHello:  function(){
        console.log('Hello');
    }
}

// ES6 Destructuring
const {name1, age, city, sayHello} = person;
console.log(name1, age, city);
sayHello();
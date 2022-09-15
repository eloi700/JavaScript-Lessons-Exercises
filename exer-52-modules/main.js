//Common JS Module Syntax
// const person = require ('./module1.js');

//or import person from './module1';

//ES2015 Module
// import { person, sayHello } from "./module2";
// import * as mod from '.module2';
import greeting from './module2';

console.log(mod.person.name); //John
console.log(mod.sayHello());//Hello John
console.log(greeting);//Hello World
//The function is assigned to the hello variable. The value of hello is a function.
//call the function using the variable - hello

const hello = (name) => {
  const message = `Hello ${name}!`;
  return message;
};

hello("Cielo"); // Hello, Cielo!

function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}. How are you?`;
  return message;
}

console.log(sayHello("Cielo", "Tennert"));

//USING JS CLASSES - name starts in Uppercase Letter
//A class is used to create objects representing a concept. It offers a convenient syntax to give both data and behavior to these objects.
//A JavaScript class is defined with the class keyword. It can only contain methods. The constructor() method, called during object creation, is used to initialize the object, often by giving it some data properties. Inside methods, the this keyword represents the object on which the method was called.

//JS CLASS is LIKE A TEMPLATE

// class Myclass{
//   constructor(param1, param2 ...){
//     this.property1 = param1;
//     this.property2 = param2;
//   }
//   method1( ...){

//   }
//   method2( ...){

//   }
// }

class Character {
  //---Uppercase Letter (Note-can only contain methods)
  constructor(name, health, strength) {
    //-----Method -called during object creation & give it data PROPERTIES
    this.name = name; //--this.set by JS inside the Method & rep. the object
    this.health = health; // =health is a param2
    this.strength = strength;
    this.xp = 0; // XP is always zero for new characters
  }
  // Return the character description
  describe() {
    //---Method1
    return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
  }
}

//Once a class is defined, you can use it to Create Objects.
const aurora = new Character("Aurora", 150, 25); //instance of class-aurora, glacius, najakayo
const glacius = new Character("Glacius", 130, 30);
const najakayo = new Character("Naja", 190, 80);

console.log(aurora.health);
console.log(aurora.describe());
console.log(najakayo.strength);

console.log(najakayo);

const anObject = {
  myProp: 2,
};
// Create anotherObject using anObject as a prototype
const anotherObject = Object.create(anObject);
console.log(anotherObject.myProp);

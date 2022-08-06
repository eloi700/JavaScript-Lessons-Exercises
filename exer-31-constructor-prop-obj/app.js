//CONSTRUCTOR - a special Method of a CLASS for creating and initializing an object INSTANCE of that class

// Class Constructor
class Polygon{
    constructor(){
        this.name = "Polygon"
    }
}
const poly1 = new Polygon();
console.log(poly1.name); // Pplygon

// Person Constructon - name starts in Capital Letter
function Person(name, age){
    this.name = name;
    this.age = age;
    //console.log(this);
}

const firstName = new Person("Brad", 36);
//console.log(this); // will print window

// this in Global Scope pertains to Global  Object

//console.log(firstName.age); // 36

//STRING-------------
const name1 = "Jeff"; // returns Jeff - String
const name2 = new String("Jeff") //returns into a primitive Value
// "Jeff" 0: "J", 1: "e", 2: "f", 3: "f" - Object

//Person Constructor
function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const mary = new Person("mary", "johnson", 35);
console.log(mary.lastName);
console.log(mary.age);

//Prototype Method - Greeting()
Person.prototype.greeting = function(){
    return `Hello, ${this.firstName} ${this.lastName}`;
}

const personOne = new Person("John", "Doe");
// console.log(personOne.greeting());

//Constructor for a Customer
function Customer(firstName, lastName, phone, membership){
    //call is a function that allows to call another function from somewhere else in the current context
    Person.call(this, firstName, lastName)

    this.phone = phone;
    this.membership = membership;
}

//Inherit the Person Prototype
Customer.prototype = Object.create(Person.prototype);

//Make Customer.prototype return Customer()
Customer.prototype.constructor = Customer;

//Create Customer
const customerOne = new Customer ('Tom', 'Smith', '555-555-5555', 'Standard')
console.log(customerOne);

//Personal Greeting to a Customer - overwrite the greetings above
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}. Welcome to our Company!`
}

console.log(customerOne.greeting()); // Hello, Tom Smith
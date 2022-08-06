//ES6 INHERITANCE OR SUB-CLASS
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there, ${this.firstName} ${this.lastName}`
    }
}

class Customer extends Person{
    constructor(firstName, lastName, phone, membersip){
        super(firstName, lastName); // cause the parent class constructor

        //define extra for the Customer
        this.phone = phone;
        this.membersip = membersip;
    }
    //STATIC METHOD
    static getMembershipCost(){
        return 500;
    }
}

//Instantiate a New Customer
const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john);
console.log(john.greeting());
console.log(Customer.getMembershipCost());//Can't use Person as Person was not the Extended instead a Customer



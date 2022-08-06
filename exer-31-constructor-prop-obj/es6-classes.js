class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there, ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970); //2011-1970
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }
  //STATIC FUNCTION - works without Instantiating the Object
  //Instatiating means creating an Object from the class example const mary = new Person('Mary', 'Williams', '11-13-1980');

  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person("Mary", "Williams", "11-13-1980");
console.log(mary); // constructor: class Person -> __proto__: Object
console.log(mary.greeting()); //Hello there, Mary Williams
console.log(mary.calculateAge());

mary.getsMarried("Thomson");
console.log(mary);

//calling the static function
console.log(Person.addNumbers(1,2));// 3

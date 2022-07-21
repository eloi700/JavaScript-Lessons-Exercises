//OOP - Object is an entity that has properties.  Each property defines a characteristic of the object.  NO property same as the OTHER. It can be a piece of information associated with the object (color of the pen) or an action (the pen's ability to write).

const pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
}

pen.color = "red";
console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen.`)

//Returning the CHARACTER DESCRIPTION

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25
}

function description(character){
    return `${character.name} has ${character.health} health points and ${character.strength} as strength`;
}

console.log(description(aurora));

//ALTERNATIVE - RETURNING INSIDE OF AN OBJECT
//describe() function takes an object as a PARAMETER.
//keyword: THIS. This is automatically set by JavaScript inside a method and represents the object on which the method was called.
const auroraAlt = {
    name: "Aurora",
    health: 150,
    strength: 25,

describe(){
    return `${this.name} has ${this.health} healh points and ${this.strength} as strength`
    }
}

console.log(auroraAlt.describe())
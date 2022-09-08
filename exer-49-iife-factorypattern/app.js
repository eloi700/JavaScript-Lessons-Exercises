/** FACTORY PATTERN
 * A typical example is a paid membership application where the members and different types but same properties and methods.
 */

//Member Factory that takes MEMBER TYPE and creates NEW OBJECT based on that type.

function MemberFactory() {
  this.createMember = function (name, type) {

    let member;

    //Simple, Standard & Super Membership
    if (type === "simple") {
      member = new SimpleMembership(name);
    } else if (type === "standard") {
      member = new StandardMembership(name);
    } else if (type === "super") {
      member = new SuperMembership(name);
    }

    //Member Type
    member.type = type;

    //UI Membership Display
    member.define = function(){
        console.log(`${this.name} (${this.type}: ${this.cost})`);
    }

    //Inside of createMember function
    return member;
  };
}

const SimpleMembership = function(name){
    this.name = name;
    this.cost = '$5';
}

const StandardMembership = function(name){
    this.name = name;
    this.cost = '$15';
}

const SuperMembership = function(name){
    this.name = name;
    this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'))
members.push(factory.createMember('Chris Jackson', 'super'))
members.push(factory.createMember('Janice William', 'standard'))
members.push(factory.createMember('Tom Smith', 'super'))

members.forEach(function(member){
    member.define();
})();
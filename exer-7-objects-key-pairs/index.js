// Objects - store data in-depth -composite / complex data type
// key-value pairs

let course = {
    title: "Learn CSS Grid",
    lessons: 16,
    creator: "Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}
// Dot Notation - taking a particular object
console.log(course.title);

// Bracket Notation
console.log(course.tags[1]);

let castle = {
    title: "Live like a King in my Castle",
    castle_details: ["guests", "bedroom", "beds", "baths"],
    castleRating: 4.95,
    costPerNight: 190,
    isSuperHost: true,
    images: ["images/castle.png", "images/castle1.png"]
}

console.log(castle.castleRating);

// Methods on Object (Methods attached on Object e.g. - player.name)
// Creating Functions Into an Object
let player = {
    name: "Duh",
    chips: 200,
    sayHello: function(){
        return "Dah"
    }
}
console.log(player.sayHello());


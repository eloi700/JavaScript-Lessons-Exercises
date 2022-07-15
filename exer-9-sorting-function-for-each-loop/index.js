// FOR EACH LOOP & IF-ELSE
const fruits = ["🍇", "🍏", "🍏", "🍇", "🍇", "🍏", "🍏", "🍇"];
const grapeShelf = document.getElementById('grape-shelf');
const appleShelf = document.getElementById('apple-shelf');

function sortFruits(){
    fruits.forEach((fruit) =>{
        if (fruit === "🍇"){
            grapeShelf.textContent += fruit;
            grapeShelf.style.backgroundColor = "#fff";
        } else if (fruit === "🍏"){
            appleShelf.textContent += fruit;
            appleShelf.style.backgroundColor = "#ddd";
        }
    });
}
sortFruits();

// FOR LOOP & IF-ELSE
const womenShelf = document.getElementById('women-shelf');
const menShelf = document.getElementById('men-shelf');
const person = ["👩", "👨", "👨", "👩", "👩", "👩", "👨"];

function groupOfPersons(){
    for (i=0; i<person.length; i++){
        if(person[i] === "👩"){
            womenShelf.textContent += "👩";
            womenShelf.style.backgroundColor = "#ffc0cb";
        }else{
            menShelf.textContent += "👨";
            menShelf.style.backgroundColor = "#add8e6";
        }
    }
}
groupOfPersons();
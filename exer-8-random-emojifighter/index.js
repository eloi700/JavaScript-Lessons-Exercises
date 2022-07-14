const fighters = [ "🐒", "🦍", "🦧", "🐕", "🐩","🐺","🦊","🐈","🦁","🐅","🐆","🐄","🐖","🐏","🐐","🐘","🐊","🐍" ];

const stageEl = document.getElementById('stage');
const fightButton = document.getElementById('fightButton');
let animalFighters = []

function randomFighters(){
    return fighters[Math.floor(Math.random() * fighters.length)]
}

fightButton.addEventListener('click', ()=>{
    animalFighters = [randomFighters(), randomFighters()];
    // const randomAnimal1 = randomFighters();
    // const randomAnimal2 = randomFighters();
    // stageEl.textContent = `${randomAnimal1} vs ${randomAnimal2}`
    stageEl.textContent = `${animalFighters[0]} vs ${animalFighters[1]}`
})

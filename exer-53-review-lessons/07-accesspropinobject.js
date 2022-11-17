// ACCESSING OBJECT / NESTED OBJECT USING BRACKET & DOT NOTATION
let foods = {
    apples: {
        number : 25,
        size: "big",
        color: "red",
},
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27,
  };

  function checkInventory(scannedItem) {
    let selectedFood = scannedItem;
    return foods[selectedFood].color;
  }
  console.log(checkInventory('apples')); // red
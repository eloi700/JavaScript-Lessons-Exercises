//Basic Structure of Module Pattern

// (function(){
//     //Declare private vars and functions

//     return{
//         // Declare public vars and functions
//     }
// })();

//STANDARD MODULE PATTERN
const UICtrl = (function () {
  //IIFE-Immediately Invoked Function Expression eg. (function(){})();
  let text = "Hello World";
  //Private
  const changeText = function () {
    //function expression
    const element = document.querySelector("h4");
    element.style.color = "red";
    element.textContent = text;
  };
  //Public
  return {
    callChangeText: function () {
      changeText();
      console.log(text); //Hello World
    },
    text: text,
  };
})();

UICtrl.callChangeText(); //Hello World
console.log(UICtrl.text); //Hello World

//REVEALING MODULE PATTERN
const ItemCtrl = (function () {
  //IIFE = Self Executing Anonymous Function
  let _data = [];
  //Creating  PRIVATE variable add underscore(_)before eg. _data

  //Private
  function add(item) {
    _data.push(item);
    console.log("Item added....");
  }

  function getById(id) {
    return _data.find((item) => {
      return item.id === id;
    });
  }

  function getByName(name) {
    return _data.find((item) => {
      return item.name === name;
    });
  }

  //Public - revealing above methods
  return {
    add,
    getById,
    getByName
    //or add: add, get: get
  };
})();

ItemCtrl.add({ id: 1, name: "John" });
ItemCtrl.add({ id: 2, name: "Jill" });
console.log(ItemCtrl.getByName("John")); // {id: 1, name: 'John'}
console.log(ItemCtrl.getById(2)); // {id: 1, name: 'John'}

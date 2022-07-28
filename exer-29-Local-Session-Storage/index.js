/******COMPARISON B/W SESSION STORAGE & LOCAL STORAGE******/
//Once deleted in js file it won't be anymore available in the Session Storage however, in local storage, it is still existed.
/*********************************************************/

//----------Set Item to Session storage
// sessionStorage.setItem('name', 'Beth');
//Remove Item in Local Storage
// localStorage.removeItem('name');

//---------Set Item to Local storage
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

//----------Get Item from Local Storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);

//----------Clear Item from Local Storage
// localStorage.clear();
// console.log(name, age);

document.querySelector("form").addEventListener("submit", (e) => {
  const task = document.getElementById("task").value;

//   tasks.value = "";
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];

  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach(task => {
    console.log(task)
})

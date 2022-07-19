const saveBtn = document.getElementById("save-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

// Store Array in Local Storage
let myLeads = [];
let oldLeads = [];
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

tabBtn.addEventListener("click", () => {
  chrome.tabs.query(
    {
      // tabs key, object query method
      active: true,
      currentWindow: true,
    },
    (tabs) => {
      myLeads.push(tabs[0].url);
      console.log(myLeads)
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      render(myLeads);
    }
  );
});
// Render the Leads
function render(leads) {
  let listItems = ""; // create a list items
  for (let i = 0; i < leads.length; i++) {
    //add the link in new tab
    listItems += `<a href="${leads[i]}" target="_blank"><li> ${leads[i]}</li></a>`;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  // clearing the DOM by calling render() function
  render(myLeads);
});

saveBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value); //input value push it into myLeads Array
  inputEl.value = ""; //clears out the Input Field

  // Saving to Local Storages
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

// TRUTHY OR FALSY
// falsy Value
// 0, "", null, undefined, NaN
// null -> how YOU  as a developer signalize emptiness
// undefined -> how JAVASCRIPT signalize emptiness

// TO CHECK
// console.log(Boolen("")); - false
// console.log(Boolen("0")); - true
// console.log(Boolen("null")); - false
// console.log(Boolen("100")); - true
// console.log(Boolen([0])); - true
// console.log(Boolen(-0)); - false

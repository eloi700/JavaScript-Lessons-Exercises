const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

let myLeads = [];

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value); //input value push it into myLeads Array
    inputEl.value = "";  //clears out the Input Field
    renderLeads();
  });

// Render the Leads
function renderLeads() {
  let listItems = "";  // create a list items
  for (let i = 0; i < myLeads.length; i++) { //add the link in new tab
    listItems += `<a href="#" target="_blank"><li> ${myLeads[i]}</li></a>`;
  }
  ulEl.innerHTML = listItems;
}

//Deployment


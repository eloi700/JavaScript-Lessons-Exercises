const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  const choice = select.value;
  let days = 31;

  switch (choice) {
    case "February":
      days = 28;
      break;

    case "April":
    case "June":
    case "September":
    case "November":
      days = 30;
      break;
  }
  createCalendar(days, choice);
});

function createCalendar(days, choice) {
  list.innerHTML = "";
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31, "May");

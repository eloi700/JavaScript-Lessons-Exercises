// UI & Global Variable Declarations
const select = document.getElementById("select");
const container = document.querySelector(".container");
const addBtn = document.querySelector(".add-btn");
const itemList = document.getElementById("item-list");

const masterlist = document.querySelector(".masterlist");
const clearItems = document.querySelector(".clear-items");
const crispDramatic = document.querySelector(".crispy-dramatic");
const mintChoco = document.querySelector(".mint-choco");
const surfTurf = document.querySelector(".surf-turf");
const blackWhite = document.querySelector(".black-white");
const themeStandard = document.querySelector(".theme-standard");



//Change Events for Themes
select.addEventListener("change", () => {
  document.body.classList.forEach(className => document.body.classList.remove(className));

  if (select.value === "Crisp Dramatic") {
    document.body.classList.add('theme-crisp-dramatic');
  } else if (select.value === "Mint Chocolate") {
    document.body.classList.add('theme-mint-choco');
  } else if (select.value === "Surf & Turf") {
    document.body.classList.add('theme-surf-turf');
  } else if (select.value === "Black & White") {
    document.body.classList.add('theme-black-white');
  } else if (select.value === "Theme") {
    document.body.classList.add('theme-standard');
  }
});

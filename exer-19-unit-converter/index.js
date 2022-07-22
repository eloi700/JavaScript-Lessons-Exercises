const convertBtn = document.getElementById("convert-btn");
const numToConvert = document.getElementById("num-to-convert");
const lengthResult = document.getElementById("length-conv-result");
const volumeResult = document.getElementById("volume-conv-result");
const massResult = document.getElementById("mass-conv-result");

const conversion = {
  feet: 3.281,
  gallon: 0.264,
  pound: 2.204,
};

function registerConverter(convertUnit) {
  // Eventlistener - Enter (keypress)
  numToConvert.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
 //NOTE:  convertBtn.click(); ----not a good to declare a click event
      convertLength(convertUnit);
      convertVolume(convertUnit);
      convertMass(convertUnit);
    }
  });
  // Eventlistener - Click()
  convertBtn.addEventListener("click", () => {
    convertLength(convertUnit);
    convertVolume(convertUnit);
    convertMass(convertUnit);
  });
}
registerConverter(conversion);

function convertLength(unit) {
  const lengthByFeet = (+numToConvert.value * unit.feet).toFixed(3);
  const lengthByMeters = (+numToConvert.value / unit.feet).toFixed(3);
  lengthResult.textContent = `${numToConvert.value} meters = ${lengthByFeet} feet | ${numToConvert.value} feet = ${lengthByMeters} meters`;
}

function convertVolume(unit) {
  const volumeByLiters = (+numToConvert.value * unit.gallon).toFixed(3);
  const volumeByGallons = (+numToConvert.value / unit.gallon).toFixed(3);
  volumeResult.textContent = `${numToConvert.value} liters = ${volumeByLiters} gallons | ${numToConvert.value} gallons = ${volumeByGallons} liters`;
}

function convertMass(unit) {
  const massByKg = (+numToConvert.value * unit.pound).toFixed(3);
  const massByPounds = (+numToConvert.value / unit.pound).toFixed(3);
  massResult.textContent = `${numToConvert.value} kilos = ${massByKg} pounds | ${numToConvert.value} pounds = ${massByPounds} kilos`;
}

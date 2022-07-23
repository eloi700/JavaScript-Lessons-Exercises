// Switch Case use as alternative for If Else Else If.
// When one provides many options
// The switch statement kicks off the execution of one code block among many. Only the code block that matches the relevant situation will be executed
const textDesc = document.querySelector(".text-description");
const weather = document.getElementById("weather");

weather.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    selectWeatherType();
  }
});

function selectWeatherType() {
  const weatherType = document.getElementById("weather").value;
  switch (weatherType) {
    case "sunny":
      textDesc.textContent = "T-shirt time.";
      break;
    case "windy":
      textDesc.textContent = "Windbreaker life.";
      break;
    case "rainy":
      textDesc.textContent = "Bring that umbrella!";
      break;
    case "snowy":
      textDesc.textContent = "Winter is coming! Just stay inside!";
      break;
    case "cloudy":
      textDesc.textContent = "Yes, it might rain. Get a raincoat!";
      break;
    default:
      textDesc.textContent = "Not a valid weather type.";
  }
}

selectWeatherType();

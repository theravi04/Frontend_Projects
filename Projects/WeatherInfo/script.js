const API_key = "04f9904e8a20b69ff173a91dfefd6345";

const userInput = document.getElementById("userInput");
const getWeatherButton = document.getElementById("getWeatherButton");
const weatherAttribute = document.getElementById("weatherAttribute");
const displayResult = document.getElementById("displayResult");
const suggestionContainer = document.getElementById("suggestionContainer");

getWeatherButton.addEventListener("click", async function(){

    const city_name = userInput.value;
    const selectedAttribute = weatherAttribute.value;

    if(city_name === "" || selectedAttribute === "none"){
        displayResult.textContent = "Please enter a City & select an attribute.";
        return ;
    }

    try {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`);

        const data = await response.json();

        let weatherInfo;

        if(selectedAttribute === "temp"){
            weatherInfo = data.main.temp;
        }
        else if(selectedAttribute === "humidity"){
            weatherInfo = data.main.humidity;
    } else if (selectedAttribute === "pressure") {
      weatherInfo = data.main.pressure;
        }
        else if(selectedAttribute === "feels_like"){
            weatherInfo = data.main.feels_like;
        }
        else if(selectedAttribute === "temp_min"){
            weatherInfo = data.main.temp_min;
        }
        else if(selectedAttribute === "temp_max"){
            weatherInfo = data.main.temp_max;
        }
        else if(selectedAttribute === "wind_speed"){
            weatherInfo = data.wind.speed;
        }

        displayResult.textContent = `Weather ${selectedAttribute} : ${weatherInfo}`
        
    } catch (error) {
        displayResult.textContent = "Error while fetching data from API";
        console.log(error);
    }});

userInput.addEventListener("click", () => {
  userInput.value = "";
});

userInput.addEventListener("input", async function () {
  const query = userInput.value;

  if (!query) {
    suggestionContainer.style.display = "none";
    return;
  }

  const suggestions = await fetchCitySuggestions(query);

  displaySuggestions(suggestions);
});

function displaySuggestions(cities) {
  suggestionContainer.innerHTML = "";

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().startsWith(userInput.value.toLowerCase())
  );

  filteredCities.forEach((city) => {
    const cityDiv = document.createElement("div");
    cityDiv.textContent = city;
    cityDiv.addEventListener("click", function () {
      userInput.value = city;
      suggestionContainer.style.display = "none";
    });
    suggestionContainer.appendChild(cityDiv);
  });

  suggestionContainer.style.display = filteredCities.length ? "block" : "none";
}

async function fetchCitySuggestions(query) {
  const USERNAME = "";  // Replace with your GeoNames username
  const API_URL = `http://api.geonames.org/searchJSON?q=${query}&maxRows=10&username=${USERNAME}`;

  try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data, 'data')

      // Extract city names from the response data
      const cityNames = data.geonames.map(geoName => geoName.name);
      console.log(cityNames, 'cityNames')
      return cityNames;
  } catch (error) {
      console.error("Error fetching city suggestions:", error);
      return [];
  }
}

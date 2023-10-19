document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '04f9904e8a20b69ff173a91dfefd6345'; 
  
    const newDelhiTemp = document.getElementById('newDelhiTemp');
    const bangaloreTemp = document.getElementById('bangaloreTemp');
    const userInput = document.getElementById('userInput');
    const getWeatherButton = document.getElementById('getWeatherButton');
    const weatherAttribute = document.getElementById('weatherAttribute');
    const displayResult = document.getElementById('displayResult');
    const suggestionContainer = document.getElementById("suggestionContainer");
  
    function fetchTemperature(cityName, elementToUpdate) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        .then((response) => response.json())
        .then((data) => {
          const temperature = data.main.temp;
          elementToUpdate.textContent = `${temperature}°C`;
        })
        .catch((error) => {
          elementToUpdate.textContent = 'Error fetching temperature';
          console.error(error);
        });
    }
  
    // Fetch temperature for New Delhi and Bangalore on page load
    fetchTemperature('New Delhi', newDelhiTemp);
    fetchTemperature('Bangalore', bangaloreTemp);
  
    getWeatherButton.addEventListener('click', async function () {
        const city_name = userInput.value;
        const selectedAttribute = weatherAttribute.value;
    
        if (city_name === '' || selectedAttribute === 'none') {
          displayResult.textContent = 'Please enter a City & select an attribute.';
          return;
        }
    
        try {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}&units=metric`);
          const data = await response.json();
    
          let weatherInfo;
    
          switch (selectedAttribute) {
            case 'temp':
              weatherInfo = data.main.temp;
              break;
            case 'humidity':
              weatherInfo = data.main.humidity;
              break;
            case 'pressure':
              weatherInfo = data.main.pressure;
              break;
            case 'feels_like':
              weatherInfo = data.main.feels_like;
              break;
            case 'temp_min':
              weatherInfo = data.main.temp_min;
              break;
            case 'temp_max':
              weatherInfo = data.main.temp_max;
              break;
            case 'wind_speed':
              weatherInfo = data.wind.speed;
              break;
            default:
              weatherInfo = 'Unknown attribute';
              break;
          }
    
          displayResult.textContent = `Weather ${selectedAttribute} : ${weatherInfo}`;
    
        } catch (error) {
          displayResult.textContent = 'Error while fetching data from API';
          console.error(error);
        }
    });
  
    userInput.addEventListener('click', () => {
      userInput.value = '';
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
  });
  
  async function fetchCitySuggestions(query) {
    const USERNAME = "";  // Replace with your GeoNames username
    const API_URL = `http://api.geonames.org/searchJSON?q=${query}&maxRows=10&username=${USERNAME}`;
  
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const cityNames = data.geonames.map(geoName => geoName.name);
        return cityNames;
    } catch (error) {
        console.error("Error fetching city suggestions:", error);
        return [];
    }
  }
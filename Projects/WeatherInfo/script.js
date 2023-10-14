document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '04f9904e8a20b69ff173a91dfefd6345'; 
  
    const newDelhiTemp = document.getElementById('newDelhiTemp');
    const bangaloreTemp = document.getElementById('bangaloreTemp');
    const userInput = document.getElementById('userInput');
    const getWeatherButton = document.getElementById('getWeatherButton');
    const weatherAttribute = document.getElementById('weatherAttribute');
    const displayResult = document.getElementById('displayResult');
  
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
  });
  
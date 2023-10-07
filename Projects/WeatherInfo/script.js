const API_key = "04f9904e8a20b69ff173a91dfefd6345";

const userInput = document.getElementById("userInput");
const getWeatherButton = document.getElementById("getWeatherButton");
const weatherAttribute = document.getElementById("weatherAttribute");
const displayResult = document.getElementById("displayResult");

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
        }
        else if(selectedAttribute === "pressure"){
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
    }
})
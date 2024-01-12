function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

  
    const apiKey = '6c786c4b9ac5f28acb4bf55cce87d835';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <p>City: ${data.name} </p>
                <p> Country: ${data.sys.country}</p>
                <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = 'Error fetching weather data. Please try again.';
        });
}



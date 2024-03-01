const apiKey = '99ee87cca3ea50ee3d4bd824c8039d1f';

document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    fetchWeather(city);
});

function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle the weather data here
            displayWeather(data);
        })
        .catch(error => {
            // Handle errors here
            console.error('There was a problem with the fetch operation:', error);
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const weather = data.weather[0]; // Extracting the first weather condition

    weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Description: ${weather.description}</p>
        <img src="http://openweathermap.org/img/wn/${weather.icon}.png" alt="Weather Icon">
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Pressure: ${data.main.pressure} hPa</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Wind Direction: ${data.wind.deg}&deg;</p>
        <p>Visibility: ${data.visibility} meters</p>
    `;
}


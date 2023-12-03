document.addEventListener('DOMContentLoaded', function () {
    const weatherForm = document.getElementById('weather-form');
    const cityInput = weatherForm.querySelector('input[name="city"]');
    const cityElement = document.getElementById('city');
    const temperatureElement = document.getElementById('temperature');
    const weatherDescriptionElement = document.getElementById('weather-description');
  
    weatherForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the form from submitting traditionally
  
      const city = cityInput.value; // Get the city name from the input
  
      // Your API call here
      const apiKey = '4b4e3c6c0fmsh200bc93353c2993p17a126jsn372467f81535'; // Replace with your actual API key
      const apiUrl = `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&lang=en&units=imperial`;
  
      fetch(apiUrl, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
        }
      })
        .then((response) => response.json())
        .then((data) => {
          const temperature = data.main.temp;
          const weatherDescription = data.weather[0].description;
  
          cityElement.textContent = `Weather in ${city}`;
          temperatureElement.textContent = `${temperature}°F`;
          weatherDescriptionElement.textContent = weatherDescription;
        })
        .catch((error) => {
          console.error('API request error: ' + error.message);
        });
    });
  });
  
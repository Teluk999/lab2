const handleFormSubmit = function (city) {
  const apiKey = '4b4e3c6c0fmsh200bc93353c2993p17a126jsn372467f81535'; // Replace with your actual API key
  const apiUrl = `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&lang=en&units=imperial`;

  return fetch(apiUrl, {
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

      return {
        city: `Weather in ${city}`,
        temperature: `${temperature}°F`,
        weatherDescription: weatherDescription
      };
    })
    .catch((error) => {
      console.error('API request error: ' + error.message);
      throw error;
    });
};

// If running in a browser environment, add event listeners
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    const weatherForm = document.getElementById('weather-form');
    const cityInput = weatherForm.querySelector('input[name="city"]');
    const cityElement = document.getElementById('city');
    const temperatureElement = document.getElementById('temperature');
    const weatherDescriptionElement = document.getElementById('weather-description');

    weatherForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the form from submitting traditionally

      const city = cityInput.value; // Get the city name from the input

      handleFormSubmit(city)
        .then((weatherData) => {
          cityElement.textContent = weatherData.city;
          temperatureElement.textContent = weatherData.temperature;
          weatherDescriptionElement.textContent = weatherData.weatherDescription;
        })
        .catch((error) => {
          // Handle errors as needed
        });
    });
  });
}

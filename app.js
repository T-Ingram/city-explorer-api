import Weather from './weather.js'; // Import the Weather component

const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const cityInput = event.target['city-input'].value;

  try {
    // First request to fetch city data
    const cityResponse = await fetch(`http://localhost:3000/city?name=${cityInput}`);
    const cityData = await cityResponse.json();
    console.log(cityData);

    // Check if lat and lon are available
    if (cityData.lat && cityData.lon) {
      // Second request to fetch weather data using lat and lon
      const weatherResponse = await fetch(`http://localhost:3000/weather?name=${cityInput}&lat=${cityData.lat}&lon=${cityData.lon}`);
      const weatherData = await weatherResponse.json();
      console.log(weatherData);

      // Create an instance of Weather component and display weather info
      const weather = new Weather(weatherData);
      weather.displayWeatherInfo();
    } else {
      console.error('Latitude and longitude data not available.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

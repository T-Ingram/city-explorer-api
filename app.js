const searchForm = document.getElementById('search-form');
const weatherInfoDiv = document.getElementById('weather-info');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const cityInput = event.target['city-input'].value;

  try {

    const cityResponse = await fetch(`http://localhost:3000/city?name=${cityInput}`);
    const cityData = await cityResponse.json();
    console.log(cityData);
    const weatherResponse = await fetch(`http://localhost:3000/weather?name=${cityInput}&lat=${cityData.lat}&lon=${cityData.lon}`);
    const weatherData = await weatherResponse.json();
    console.log(weatherData)

    const parent = document.getElementById('weather-info');
    const heading = document.createElement('h2');

  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

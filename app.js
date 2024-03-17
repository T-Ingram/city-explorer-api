const searchForm = document.getElementById('search-form');
const weatherInfoDiv = document.getElementById('weather-info');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const cityInput = event.target['city-input'].value;
  const latInput = event.target['lat-input'].value;
  const lonInput = event.target['lon-input'].value;

  try {

    const response = await fetch(`http://localhost:3000/weather?name=${cityInput}&lat=${latInput}&lon=${lonInput}`);
    const cityData = await response.json();
    console.log(cityData)

    const parent = document.getElementById('weather-info');
    const heading = document.createElement('h2');

  } catch (error) {
    console.error('Error fetching data:', error);
  }
});



// // Check if city data contains lat and lon
// if (cityData.lat && cityData.lon) {
//     // Fetch weather data using lat and lon
//     const weatherResponse = await fetch(`/weather?lat=${cityData.lat}&lon=${cityData.lon}`);
//     const weatherData = await weatherResponse.json();

//     // Display weather information
//     weatherInfoDiv.innerHTML = `<h2>Weather for ${cityInput}</h2>`;
//     weatherData.forEach(day => {
//         weatherInfoDiv.innerHTML += `<p>Date: ${day.date}, Description: ${day.description}</p>`;
//     });
// } else {
//     // Handle case where lat and lon are not available
//     console.error('Latitude and longitude information not found for the city.');
// }
class Weather {
  constructor(weatherData) {
    this.weatherData = weatherData;
    this.weatherInfoDiv = document.getElementById('weather-info');
  }

  displayWeatherInfo() {
    // Clear previous weather info
    this.weatherInfoDiv.innerHTML = '';

    // Create elements to display weather information
    const heading = document.createElement('h2');
    heading.textContent = 'Weather Forecast';

    const ul = document.createElement('ul');
    this.weatherData.forEach(day => {
      const li = document.createElement('li');
      li.textContent = `${day.date}: ${day.description}`;
      ul.appendChild(li);
    });

    // Append elements to weather info div
    this.weatherInfoDiv.appendChild(heading);
    this.weatherInfoDiv.appendChild(ul);
  }
}

export default Weather;

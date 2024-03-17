const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Require the weather data from the JSON file
const weatherData = require('./data/weather.json');

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Define the Forecast class
class Forecast {
  constructor(date, description) {
    this.date = date;
    this.description = description;
  }
}

// Route to handle city data retrieval
app.get('/city', (req, res) => {
  const { name } = req.query;
  console.log('Query parameter: ', name); // Logging the name parameter

  // Find the city data based on the searchQuery
  const cityData = weatherData.find(data => data.city_name.toLowerCase() === name.toLowerCase());
  if (!cityData) {
    return res.status(404).json({ error: 'City not found.' });
  }

  // Send the city data
  res.json(cityData);
});

// Route to handle weather data retrieval
app.get('/weather', (req, res) => {
  console.log(req.query);
  const searchQuery = req.query.name;
  const lat = req.query.lat;
  const lon = req.query.lon;

  // Check if lat and lon parameters exist
  if (!lat || !lon) {
    return res.status(400).json({ error: 'Latitude and longitude parameters are required.' });
  }

  // Find the city data based on the searchQuery
  const cityData = weatherData.find(data => data.city_name.toLowerCase() === searchQuery.toLowerCase());
  if (!cityData) {
    return res.status(404).json({ error: 'City not found.' });
  }

  // Extract the forecast data for each day
  const forecastArray = cityData.data.map(day => {

    // Create and return a new Forecast object
    return new Forecast(day.datetime, day.weather.description);
  });

  // Send the forecast array
  res.json(forecastArray);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Require the weather data from the JSON file
const weatherData = require('./data/weather.json');

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle weather data retrieval
app.get('/weather', (req, res) => {
  const { lat, lon, searchQuery } = req.query;

  // Send the weather data obtained from the JSON file
  res.json(weatherData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

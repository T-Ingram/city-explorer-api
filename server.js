const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle weather data retrieval
app.get('/weather', (req, res) => {
  const { lat, lon, searchQuery } = req.query;

  // Placeholder weather data
  const weatherData = [
    {
      "description": "Low of 17.1, high of 23.6 with broken clouds",
      "date": "2021-03-31"
    },
    {
      "description": "Low of 17.5, high of 29.9 with few clouds",
      "date": "2021-04-01"
    }
    // Add more data here if necessary
  ];

  res.json(weatherData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

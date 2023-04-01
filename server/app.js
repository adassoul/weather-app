const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/weather', async (req, res) => {
  const { lat, lon } = req.query;

  try {
    // Replace YOUR_API_KEY with an actual OpenWeatherMap API key
    console.log("lol0")
    //v3
    // const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid="5fcb52e885b69640aa38af928301e86b"`);
    
    //weather-app apikey
    // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f733f21107edc9c539fe715474fe13c2&units=metric`);
    
    //default apikey
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5fcb52e885b69640aa38af928301e86b&units=metric`);
    // "" doesn't work => apikey needs to be not in ""
    // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid="5fcb52e885b69640aa38af928301e86b"&units=metric`); 
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("lol1")
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log("lol")
});

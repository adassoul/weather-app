import React, { useState, useEffect } from 'react';

const WeatherDetail = ({ label, value }) => (
  <div className="weather-detail">
    <span className="weather-detail-label">{label}: </span>
    <span className="weather-detail-value">{value}</span>
  </div>
);

const Weather = ({ coordinates }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/weather?lat=${coordinates.lat}&lon=${coordinates.lon}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeather();
  }, [coordinates]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : weather ? (
        <div>
          <h2>{weather.name}</h2>
          <h3>{weather.weather[0].description}</h3>
          <h3>{Math.round(weather.main.temp)}°C</h3>
          <WeatherDetail label="Feels Like" value={`${Math.round(weather.main.feels_like)}°C`} />
          <WeatherDetail label="Humidity" value={`${weather.main.humidity}%`} />
          <WeatherDetail label="Wind Speed" value={`${weather.wind.speed} m/s`} />
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;

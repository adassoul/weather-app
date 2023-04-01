import React, { useState } from 'react';
import './App.css';
import Weather from './components/Weather';

function App() {
  const [coordinates, setCoordinates] = useState(null);

  const handleGetLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCoordinates({ lat: latitude, lon: longitude });
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <button onClick={handleGetLocation}>Get Weather</button>
        {coordinates && <Weather coordinates={coordinates} />}
      </header>
    </div>
  );
}

export default App;

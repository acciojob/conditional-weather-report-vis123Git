import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay.js';

function App() {
  // Initialize state with default weather data
  const [weather, setWeather] = useState({ temperature: 0, conditions: '' });

  // Simulate fetching data with useEffect and updating state
  useEffect(() => {
    const weatherData = { temperature: 25, conditions: 'Sunny' };
    setWeather(weatherData);
  }, []);

  return (
    <div className="App">
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;

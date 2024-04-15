import React from 'react';

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;

  // Determine color based on the temperature
  const colorStyle = {
    color: temperature > 20 ? 'rgb(255, 0, 0)' : 'rgb(0, 0, 255)'
  };

  return (
    <div>
      <p style={colorStyle}>Temperature: {temperature}</p>
      <p>Conditions: {conditions}</p>
    </div>
  );
}

export default WeatherDisplay;

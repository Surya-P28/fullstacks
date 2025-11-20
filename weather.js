import React, { useState } from 'react';

function WeatherForecast() {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = () => {
    setLoading(true);
    setTimeout(() => {
      setForecast({ city: "New York", temp: "72°F", condition: "Sunny", icon: "☀️" });
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)', backgroundSize: '400% 400%', animation: 'gradient 15s ease infinite', color: 'white', textAlign: 'center' }}>
      <div>
        <h1>Weather Forecast</h1>
        <button onClick={fetchWeather} disabled={loading}>{loading ? 'Loading...' : 'Get Weather'}</button>
        {forecast && (
          <div>
            <h2>{forecast.city}</h2>
            <div style={{ fontSize: '3rem' }}>{forecast.icon}</div>
            <p>{forecast.temp}</p>
            <p>{forecast.condition}</p>
          </div>
        )}
      </div>
      <style>{`@keyframes gradient { 0%,100% {background-position:0% 50%} 50% {background-position:100% 50%} }`}</style>
    </div>
  );
}

export default WeatherForecast;

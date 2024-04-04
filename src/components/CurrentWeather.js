import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrentWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          'http://api.openweathermap.org/data/2.5/weather',
          {
            params: {
              q: 'Tucson',
              appid: '436c04c51e9621cd040868accde2d714', // Replace with your OpenWeatherMap API key
              units: 'imperial', // You can change units to 'imperial' for Fahrenheit
            },
          }
        );
        setWeather(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather:', error);
        setLoading(false);
      }
    };

    fetchWeather();

    // Clean up
    return () => {
      setWeather(null);
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!weather) return <p>Error fetching weather data</p>;

  const { main, weather: weatherInfo } = weather;

  return (
    <div>
      <h1>Current Weather in Tucson</h1>
      <p>Temperature: {main.temp} °F</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Description: {weatherInfo[0].description}</p>
    </div>
  );
};

export default CurrentWeather;

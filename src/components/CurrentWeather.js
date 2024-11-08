import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherIcon from './WeatherIcon';

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
              appid: process.env.REACT_APP_OPENWEATHER_API_KEY,
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
    <div style = {{borderRadius: '20px', border: "solid white 1px", width: 'max-content', padding: '10px'}}>
      <h2><WeatherIcon description={weatherInfo[0].description}/> {main.temp} °F</h2>
      <p>Tucson</p>
    </div>
  );
};

export default CurrentWeather;

import React from 'react';

const weatherIconClasses = {
  "clear sky": "wi wi-day-sunny",
  "few clouds": "wi wi-day-cloudy",
  "scattered clouds": "wi wi-cloud",
  "broken clouds": "wi wi-cloudy",
  "shower rain": "wi wi-showers",
  "rain": "wi wi-rain",
  "thunderstorm": "wi wi-thunderstorm",
  "snow": "wi wi-snow",
  "mist": "wi wi-fog",
};

const WeatherIcon = ({ description }) => {
  const iconClass = weatherIconClasses[description.toLowerCase()] || "wi wi-na";

  return (
      <i className={iconClass} style={{ fontSize: "30px", color: "#4a90e2" }}></i>
  );
};

export default WeatherIcon;

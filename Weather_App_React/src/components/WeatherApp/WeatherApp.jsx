import React, { useState } from 'react';
import './WeatherApp.css';
import search_icon from '../Assets/search.png';
import drizzle_icon from '../Assets/drizzle.png';
import humid_icon from '../Assets/humid.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import sun_icon from '../Assets/sun.png';
import wind_icon from '../Assets/wind.png';
import cloud_icon from '../Assets/cloud.png';
import clear_icon from '../Assets/clear.png';

const WeatherApp = () => {
  const api_key = process.env.REACT_APP_WEATHER_APP_API;

  const [wicon, setWicon] = useState(cloud_icon);

  const search = async () => {
    const element = document.querySelector(".cityInput");
    if (!element || element.value === "") {
      return;
    }

    const cityName = element.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`;

    try {
      const response = await fetch(url);
      if (response.status !== 200) {
        throw new Error("API request failed");
      }

      const data = await response.json();

      const humidity = document.querySelector(".humidity-percent");
      const wind = document.querySelector(".wind-rate");
      const temperature = document.querySelector(".weather-temp");
      const location = document.querySelector(".weather-location");

      humidity.innerHTML = data.main.humidity + " %";
      wind.innerHTML = data.wind.speed + " km/h";
      temperature.innerHTML = (data.main.temp - 273.15).toFixed(2) + "°C"; 
      location.innerHTML = data.name;

      const weatherIcon = getWeatherIcon(data.weather[0].icon);
      setWicon(weatherIcon);
    } catch (error) {
      console.error("Error in API request: ", error);
    }
  };

  const getWeatherIcon = (iconCode) => {
    switch (iconCode) {
      case "01d":
      case "01n":
        return clear_icon;
      case "02d":
      case "02n":
        return cloud_icon;
      case "03d":
      case "03n":
        return drizzle_icon;
      case "04d":
      case "04n":
        return drizzle_icon;
      case "09d":
      case "09n":
        return rain_icon;
      case "10d":
      case "10n":
        return rain_icon;
      case "13d":
      case "13n":
        return snow_icon;
      default:
        return clear_icon;
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="search" />
        <div className="search-icon" onClick={() => search()}>
          <img src={search_icon} alt="" />
        </div>
      </div>

      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">London</div>

      <div className="data-container">
        <div className="element">
          <img src={humid_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">20 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;

/*import { useEffect, useState } from "react";
import axios from "axios";

const WeatherData = ({ city }) => {
  //const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
  //const OPENWEATHER_API_KEY = import.meta.env.VITE_SOME_KEY;
  const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPENWEATHER_API_KEY}`
        //`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${OPENWEATHER_API_KEY}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  return (
    <>
      {weather.main ? (
        <div>
          <h2>Weather in {city}</h2>
          <div>Temperature {weather.main.temp}°C</div>
          <img
            alt="weather icon"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <div>Wind {weather.wind.speed} m/s</div>
          <div>Nosub {weather.lat}</div>
          <div>Nosub {weather.lon}</div>
          <div>Nosub {weather.part}</div>
        </div>
      ) : null}
    </>
  );
};

export default WeatherData;*/

/*import { useEffect, useState } from "react";
import axios from "axios";
//`${process.env}`
const WeatherData = ({ city }) => {
  const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
  const API_KEY = process.env.OPENWEATHERMAP_API;
  console.log("api", API_KEY)
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [city]);

  if (!weather) {
    return null;
  }

  return (
    <div>
      <h2>Weather in {city}</h2>
      <div>Temperature {weather.main.temp}°C</div>
      <img
        alt="weather icon"
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
      />
      <div>Wind {weather.wind.speed} m/s</div>
    </div>
  );
};

export default WeatherData;
*/
import axios from "axios";
import { useState, useEffect } from "react";

const WeatherData = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY; // Correct way to access environment variable

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [city, apiKey]); // Include apiKey in the dependency array

  if (!weather) {
    return null;
  }

  return (
    <div>
      <h2>Weather in {city}</h2>
      <div>Temperature {weather.main.temp}°C</div>
      <img
        alt="weather icon"
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
      />
      <div>Wind {weather.wind.speed} m/s</div>
    </div>
  );
};

export default WeatherData;
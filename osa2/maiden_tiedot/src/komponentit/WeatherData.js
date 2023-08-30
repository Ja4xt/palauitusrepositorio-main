
import axios from "axios";
import { useState, useEffect } from "react";

const WeatherData = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;

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
  }, [city, apiKey]);

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
import React, { useState } from "react";
import "./App.css";

function App() {
  const apiKey = "f69994944cd8f6bb0ba13fe2ea705a7a";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
        });
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        className="form-control"
        placeholder="Enter City..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />
      {typeof weatherData.main === "undefined" ? (
        <div>
          <p>
            Welcome to weather app! Enter city in a city to get the weather of.
          </p>
        </div>
      ) : (
        <div>
          <p>{weatherData.name}</p>
          <p>{Math.round(weatherData.main.temp)}°F</p>
          <p>{weatherData.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}

export default App;

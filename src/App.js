import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

export default function App(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState("Chicago");

  function handleResponse(response) {
    setweatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconURL: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "307f2bb4ef18a21f48e63f06fa722227";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCitychange(event) {
    setCity(event.target.value);
  }

  function showManhattan(event) {
    event.preventDefault();

    const apiKey = "cfc5cad501ca51e328475f69bd6d7dd0";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=manhattan&units=imperial&appid=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  }

  function showMiami(event) {
    event.preventDefault();

    const apiKey = "cfc5cad501ca51e328475f69bd6d7dd0";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=miami&units=imperial&appid=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  }

  function showManila(event) {
    event.preventDefault();

    const apiKey = "cfc5cad501ca51e328475f69bd6d7dd0";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=manila&units=imperial&appid=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  }

  function getLoc(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handlePosition);
  }

  function handlePosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "307f2bb4ef18a21f48e63f06fa722227";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-3">
            <a href="/" rel="noreferrer">
              Chicago
            </a>
          </div>
          <div className="col-3">
            <a href="/" rel="noreferrer" onClick={showManhattan}>
              Manhattan
            </a>
          </div>
          <div className="col-3">
            <a href="/" rel="noreferrer" onClick={showMiami}>
              Miami
            </a>
          </div>
          <div className="col-3">
            <a href="/" rel="noreferrer" onClick={showManila}>
              Manila
            </a>
          </div>
        </div>
        <br />
        <div className="city">
          <form onSubmit={handleSubmit}>
            <div className="row align-items-center">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Enter a City"
                  className="city-box"
                  width="300px"
                  onChange={handleCitychange}
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-search"
                />
              </div>
              <div className="col-2">
                <button
                  type="button"
                  onClick={getLoc}
                  className="btn btn-secondary"
                >
                  Current
                </button>
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>

        <p>
          <br />
          <a href="https://github.com/cerissad/weather-react">Source Code</a>
          <span> by Cerissa De Ocampo</span>
        </p>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}

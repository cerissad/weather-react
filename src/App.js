import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

export default function App(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState("Chicago");

  function handleResponse(response) {
    console.log(response);
    setweatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "cfc5cad501ca51e328475f69bd6d7dd0";
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
            <a href="/" rel="noreferrer">
              Manhattan
            </a>
          </div>
          <div className="col-3">
            <a href="/" rel="noreferrer">
              Miami
            </a>
          </div>
          <div className="col-3">
            <a href="/" rel="noreferrer">
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
                <button type="button" className="btn btn-secondary">
                  Current
                </button>
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
        </div>

        <div className="weekly">Weekly Forecast</div>

        <div className="row align-items-center">
          <div className="col-2">
            Monday
            <div className="emoji-temp">☁</div>
            <div className="text-temp">
              Hi:43°F
              <br />
              Lo:39°F
            </div>
          </div>

          <div className="col-2">
            Tuesday
            <div className="emoji-temp">🌧</div>
            <div className="text-temp">
              Hi:41°F
              <br />
              Lo:18°F
            </div>
          </div>

          <div className="col-3">
            Wednesday
            <div className="emoji-temp">🌤</div>
            <div className="text-temp">
              Hi:24°F
              <br />
              Lo:22°F
            </div>
          </div>

          <div className="col-2">
            Thursday
            <div className="emoji-temp">🌨</div>
            <div className="text-temp">
              Hi:28°F
              <br />
              Lo:22°F
            </div>
          </div>

          <div className="col-2">
            Friday
            <div className="emoji-temp">🌨</div>
            <div className="text-temp">
              Hi:25°F
              <br />
              Lo:11°F
            </div>
          </div>
        </div>

        <p>
          <br />
          <a href="https://github.com/cerissad/weather-react">Source Code</a>
          by Cerissa De Ocampo
        </p>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}

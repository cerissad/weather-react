import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

export default function App() {
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
        <form>
          <div className="row align-items-center">
            <div className="col-6">
              <input
                type="text"
                placeholder="Enter a City"
                className="city-box"
                width="300px"
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn btn-search" />
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-secondary">
                Current
              </button>
            </div>
          </div>
        </form>
      </div>
      <h1 className="text-capitalize">
        <br /> Chicago
      </h1>
      <h2>
        <span className="current-date">Saturday, 14:33</span>
        <br />
        <span>Clouds</span>
      </h2>
      <div className="main-temp">
        <h2 className="main-emoji-temp">
          🌥
          <img src="" alt="" />
          <span>81</span>°F
        </h2>
        <h3 className="more-weather">
          Humidity: <span>48</span>%
          <br />
          Wind: <span>25</span>mph
        </h3>
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
}

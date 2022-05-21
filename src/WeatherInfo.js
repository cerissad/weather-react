import React from "react";
import GetDate from "./GetDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="text-capitalize">
        <br /> {props.data.city}
      </h1>
      <h2>
        <span className="current-date">
          <GetDate date={props.data.date} />
        </span>
        <br />
        <span className="text-capitalize">{props.data.description}</span>
      </h2>
      <div className="main-temp">
        <h2 className="main-emoji-temp">
          <img src="http://openweathermap.org/img/wn/04d.png" alt="" />
          <span>{Math.round(props.data.temperature)}</span>°F
        </h2>
        <h3 className="more-weather">
          Humidity: <span>{props.data.humidity}</span>%
          <br />
          Wind: <span>{Math.round(props.data.wind)}</span>mph
        </h3>
      </div>
    </div>
  );
}

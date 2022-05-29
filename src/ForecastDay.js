import React from "react";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      {day()}
      <div className="emoji-temp">
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt=""
          width="42"
        />
      </div>
      <div className="text-temp">
        Hi:{Math.round(props.data.temp.max)}°
        <br />
        Lo:{Math.round(props.data.temp.min)}°
      </div>
    </div>
  );
}

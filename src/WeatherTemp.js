import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState(props.units);
  console.log(props.units);

  function showCel(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function showFaren(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (unit === "imperial") {
    return (
      <div>
        <span>{Math.round(props.farenheit)}</span>
        <span className="unit">°F|</span>
        <a href="/" rel="noreferrer" onClick={showCel} className="unit">
          °C
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <span>{Math.round((props.farenheit - 32) * (5 / 9))}</span>
        <span className="unit">°C|</span>
        <a href="/" rel="noreferrer" onClick={showFaren} className="unit">
          °F
        </a>
      </div>
    );
  }
}

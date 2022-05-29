import React, { useState } from "react";
import Imperial from "./Imperial";
import Metric from "./Metric";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

export default function App(props) {
  const [units, setUnits] = useState("imperial");

  function updateMetric(event) {
    event.preventDefault();
    setUnits("metric");
  }

  function updateImp(event) {
    event.preventDefault();
    setUnits("imperial");
  }

  if (units === "imperial") {
    return (
      <div>
        <div className="unit">
          <span>Fahrenheit|</span>
          <a href="/" rel="noreferrer" onClick={updateMetric}>
            Celsius
          </a>
        </div>
        <Imperial />
      </div>
    );
  } else {
    return (
      <div>
        <div className="unit">
          <span>Celsius|</span>
          <a href="/" rel="noreferrer" onClick={updateImp}>
            Fahrenheit
          </a>
        </div>
        <Metric />
      </div>
    );
  }
}

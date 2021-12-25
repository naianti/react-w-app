import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span> {Math.round(props.celsius)} </span>
        <span>
          °C /{" "}
          <a href="/" onClick={showF}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <div className="WeatherTemperature">
        <span> {Math.round(fahrenheit)}</span>
        <span>
          <a href="/" onClick={showC}>
            °C
          </a>
          / °F
        </span>
      </div>
    );
  }
}

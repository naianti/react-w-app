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
    console.log(props.data);

    return (
      <div className="WeatherTemperature">
        <span className="temperature"> {Math.round(props.celsius)} </span>
        <span className="units ">
          °C /
          <a href="/" onClick={showF} className="text-decoration-none">
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <div className="WeatherTemperature">
        <span className="temperature"> {Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={showC} className="text-decoration-none">
            °C{" "}
          </a>
          / °F
        </span>
      </div>
    );
  }
}

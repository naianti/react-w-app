import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <p>{day()}</p>
      <figure>
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
      </figure>
      <span className="WeatherForecast-temperature-max m-2">
        {maxTemperature()} °C
      </span>

      <span className="WeatherForecast-temperature-min">
        {minTemperature()} °C
      </span>
    </div>
  );
}

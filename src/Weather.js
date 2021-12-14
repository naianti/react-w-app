import React from "react";
import axios from "axios";

export default function Weather(props) {
  function showWeather(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}°c`
    );
  }

  let apiKey = "0c0f15195845da49d19b504381bfef7a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);

  return (
    <div className="Weather">
      <h2>This is react!</h2>
    </div>
  );
}

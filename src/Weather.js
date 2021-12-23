import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherDescription from "./WeatherDescription";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      feelingTemp: response.data.main.feels_like,
      icon: "https://weatherapp-nai-project.netlify.app/images/02n.png",
      date: new Date(),
    });

    setReady(true);
  }

  function search() {
    const apiKey = "0c0f15195845da49d19b504381bfef7a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <section>
          <form className="searcher" onSubmit={handleSubmit}>
            <div className="row align-items-center">
              <div className="col-6 col-l-6">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Enter any city here... (ex. Madrid, ES)  "
                  autoComplete="off"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>

              <div className="col-6 col-l-4">
                <input type="submit" className="button" value="Go!" />
                <button className="button-location">My Location</button>
              </div>
            </div>
          </form>
        </section>

        <WeatherDescription data={weatherData} />
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}

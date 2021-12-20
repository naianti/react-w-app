import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      country: response.data.sys.country,
      date: "Saturday",
      description: response.data.weather[0].description,
      time: "21:25",
      feelingTemp: response.data.main.feels_like,
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/27-weather/weather.png",
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <section>
          <form className="searcher">
            <div className="row align-items-center">
              <div className="col-6 col-l-6">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Enter any city here... (ex. Madrid, ES)  "
                  autoComplete="off"
                  autoFocus="on"
                />
              </div>

              <div className="col-6 col-l-4">
                <input type="submit" className="button" value="Go!" />
                <button className="button-location">My Location</button>
              </div>
            </div>
          </form>
        </section>

        <div className="row">
          <div className="col-sm-5">
            <div className="card-forecast-city">
              <div className="card-body">
                <section>
                  <h2>{weatherData.city + ", " + weatherData.country}</h2>
                  <p>
                    <img src="images/refresh.png" alt="refresh icon" />
                    Latest report:
                  </p>

                  <p>
                    <span>
                      <img src="images/calendar.png" alt="calendar icon" />
                      <span>{weatherData.date}</span>{" "}
                    </span>
                  </p>

                  <p>
                    <img src="images/stopwatch.png" alt="timer icon" />
                    <span>{weatherData.time}</span>
                  </p>
                </section>
              </div>
            </div>
          </div>
          <div className="col-sm-7">
            <div className="card-forecast-temp">
              <div className="card-body">
                <section>
                  <p>NOW</p>
                  <span>{Math.round(weatherData.temperature)}</span>
                  <span>°C</span>

                  <figure>
                    <img src={weatherData.icon} alt="weather icon" />
                  </figure>

                  <h4 className="text-capitalize">{weatherData.description}</h4>
                  <p>
                    Feels like{" "}
                    <span>{Math.round(weatherData.feelingTemp)} °C</span>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0c0f15195845da49d19b504381bfef7a";
    let city = props.defaultCity;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading...";
  }
}

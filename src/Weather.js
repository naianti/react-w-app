import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

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
                    <img
                      src="https://weatherapp-nai-project.netlify.app/images/refresh.png"
                      alt="refresh icon"
                    />
                    <span>Latest report:</span>
                  </p>

                  <p>
                    <img
                      src="https://weatherapp-nai-project.netlify.app/images/calendar.png"
                      alt="calendar icon"
                    />
                    <FormattedTime date={weatherData.date} />
                  </p>

                  <p>
                    <img
                      src="https://weatherapp-nai-project.netlify.app/images/stopwatch.png"
                      alt="timer icon"
                    />
                    <FormattedDate date={weatherData.date} />
                  </p>
                </section>
              </div>
            </div>
          </div>
          <div className="col-sm-7">
            <div className="card-forecast-temp">
              <div className="card-body">
                <section>
                  <h4>NOW</h4>
                  <span className="temperature">
                    {Math.round(weatherData.temperature)} °C
                  </span>

                  <figure>
                    <img
                      width="90px"
                      src={weatherData.icon}
                      alt="weather icon"
                    />
                  </figure>

                  <h5 className="text-capitalize">{weatherData.description}</h5>
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

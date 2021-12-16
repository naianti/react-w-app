import React from "react";
import "./App.css";

export default function App() {
  let weatherData = {
    city: "Barquisimeto",
    country: "VE",
    date: "Saturday",
    description: "Sunny",
    time: "21:25",
    temperature: "23",
    feelingTemp: "22",
  };

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>What's the weather in...</h1>
        </header>
        <div className="weather-app">
          <section>
            <form className="searcher">
              <div className="row align-items-center">
                <div className="col-6 col-l-6">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search any city here... (ex. Madrid, ES)  "
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
                      <img src="images/refresh.png" alt="refresh-icon" />
                      Latest report:
                    </p>

                    <p>
                      <span>
                        <img src="images/calendar.png" alt="calendar-icon" />
                        <span>{weatherData.date}</span>{" "}
                      </span>
                    </p>

                    <p>
                      <img src="images/stopwatch.png" alt="timer-icon" />
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
                    <span>{weatherData.temperature}</span>
                    <span>°C</span>

                    <figure>
                      <img src="./images/04n.png" alt="weather icon" />
                    </figure>

                    <h4>{weatherData.description}</h4>
                    <p>
                      Feels like <span>{weatherData.feelingTemp}</span> °C
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <section></section>
        </div>
        <figure>
          <div>
            <div className="indicator"></div>
          </div>
        </figure>
      </div>
    </div>
  );
}

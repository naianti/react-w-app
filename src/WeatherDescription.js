import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherDescription(props) {
  return (
    <div className="row d-flex">
      <div className="col-sm-6">
        <div className="card-forecast">
          <div className="card-body">
            <section className="card-city">
              <h2>{props.data.city + ", " + props.data.country}</h2>
              <span>
                <FormattedDate date={props.data.date} />
              </span>
              <div className="mt-3 p-3 d-none d-sm-block">
                <p className="humidity">
                  Humidity: <strong>{props.data.humidity}%</strong>
                </p>
                <p className="wind">
                  Wind: <strong>{props.data.wind}km/h</strong>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card-forecast">
          <div className="card-body">
            <section>
              <h4>NOW</h4>

              <WeatherIcon code={props.data.icon} size={60} />

              <WeatherTemperature celsius={props.data.temperature} />

              <h5 className="text-capitalize">{props.data.description}</h5>
              <p>
                Feels like <span>{Math.round(props.data.feelingTemp)} °C</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

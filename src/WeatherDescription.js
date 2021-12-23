import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function WeatherDescription(props) {
  return (
    <div className="row">
      <div className="col-sm-5">
        <div className="card-forecast-city">
          <div className="card-body">
            <section>
              <h2>{props.data.city + ", " + props.data.country}</h2>
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
                <FormattedTime date={props.data.date} />
              </p>

              <p>
                <img
                  src="https://weatherapp-nai-project.netlify.app/images/stopwatch.png"
                  alt="timer icon"
                />
                <FormattedDate date={props.data.date} />
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
                {Math.round(props.data.temperature)} °C
              </span>

              <figure>
                <WeatherIcon code={props.data.icon} />
              </figure>

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

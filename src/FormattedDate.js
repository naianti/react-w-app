import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.date.getDay()];

  let hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = props.date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }

  return (
    <span>
      <img
        src="https://weatherapp-nai-project.netlify.app/images/refresh.png"
        width="14"
        className="m-2"
        alt="refresh-icon"
      />
      Latest report: {day} {hour}:{minute}
    </span>
  );
}

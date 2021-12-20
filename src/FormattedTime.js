import React from "react";

export default function FormattedDate(props) {
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
      {hour}:{minute}
    </span>
  );
}

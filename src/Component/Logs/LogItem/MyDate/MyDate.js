import React from "react";
import "./MyDate.css"

const MyDate = (props) => {
  const month = props.date.toLocaleString('en', {month:"short"})
  const day = props.date.getDate()
  return (
    <div>
      <div className="date">
        <div className="month">{month}</div>
        <div className="day">{day}</div>
      </div>
    </div>
  );
};

export default MyDate;

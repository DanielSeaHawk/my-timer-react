import React from "react";
import MyDate from  './MyDate/MyDate'
import './LogItem.css'
import Card from "../../UI/Card/Card";

const LogItem = (props) => {
  return (
    <Card className="item">
      <MyDate date={props.date} />
      <div className="content">
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time} mins</div>
      </div>
    </Card>
  );
};

export default LogItem;

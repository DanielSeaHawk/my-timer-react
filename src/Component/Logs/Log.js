import React from "react";
import LogItem from "./LogItem/LogItem";
import "./Log.css";
import Card from "../UI/Card/Card";

export const Log = (props) => {


  const logItemData = props.logData.map((item) => (
    <LogItem {...item} key={item.id} />
  ));

  return <Card className="log">{logItemData}</Card>;
};

export default Log;

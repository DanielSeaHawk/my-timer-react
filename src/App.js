import React from "react";
import Log from "./Component/Logs/Log";
import LogForm from "./Component/LogsForm/LogForm";
import './App.css'

export const App = (props) => {
  const logData = [
    { id: "001", date: new Date(2021, 5, 30), desc: "React", time: 30 },
    { id: "002", date: new Date(2022, 2, 1), desc: "Javascript", time: 130 },
    { id: "003", date: new Date(2022, 9, 23), desc: "Vue", time: 45 },
    { id: "004", date: new Date(2023, 7, 17), desc: "CSS", time: 90 },
  ];
  return (
    <div className="app">
      <LogForm />
      <Log logData = {logData}/>
    </div>
  );
};
export default App;

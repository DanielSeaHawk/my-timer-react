import React from "react";
import Log from "./Component/Logs/Log";
import LogForm from "./Component/LogsForm/LogForm";
import './App.css'

export const App = () => {
  return (
    <div className="app">
      <LogForm />
      <Log />
    </div>
  );
};
export default App;

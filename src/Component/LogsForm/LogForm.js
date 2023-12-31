import React, { useState } from "react";
import Card from "../UI/Card/Card";
import "./LogForm.css";

const LogForm = () => {
  const [inputDate, setInputDate] = useState('');
  const [inputDesc, setInputDesc] = useState('');
  const [inputTime, setInputTime] = useState('');

  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
  };

  const descChangeHandler = (e) => {
    setInputDesc(e.target.value);
  };

  const timeChangeHandler = (e) => {
    setInputTime(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const newLog = {
      date: new Date(inputDate),
      desc: inputDesc,
      time: +inputTime,
    };

    setInputDate('')
    setInputDesc('')
    setInputTime('')
    console.log(newLog)
  };

  return (
    <Card className="log-form">
      <form onSubmit={formSubmitHandler}>
        <div className="form-item">
          <label htmlFor="date">Date: </label>
          <input onChange={dateChangeHandler} value={inputDate} id="date" type="date" />
        </div>
        <div className="form-item">
          <label htmlFor="desc">Content: </label>
          <input onChange={descChangeHandler} value={inputDesc} id="desc" type="text" />
        </div>
        <div className="form-item">
          <label htmlFor="time">Time: </label>
          <input onChange={timeChangeHandler} value={inputTime} id="time" type="number" />
        </div>
        <div className="form-btn">
          <button>Add New Assignment</button>
        </div>
      </form>
    </Card>
  );
};

export default LogForm;

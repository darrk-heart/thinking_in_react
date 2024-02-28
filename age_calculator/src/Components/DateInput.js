import React, { useState } from "react";
import "./DateInput.css";
import arrow from "../Assets/icon-arrow.svg";

const isValidDay = (value) => {
  return !isNaN(value) && value >= 1 && value <= 31;
};
const isValidMonth = (value) => {
  return !isNaN(value) && value >= 1 && value <= 12;
};
const isValidYear = (value) => {
  return !isNaN(value) && value >= 1920 && value <= 2023;
};

function DateInput() {
  const [dayValue, setDayValue] = useState("");
  const [monthValue, setMonthValue] = useState("");
  const [yearValue, setYearValue] = useState("");

  const handleDayChange = (e) => {
    const value = e.target.value;
    if (isValidDay(value)) {
      setDayValue(value);
    }
  };

  const handleMonthChange = (e) => {
    const value = e.target.value;
    if (isValidMonth(value)) {
      setMonthValue(value);
    }
  };

  const handleYearChange = (e) => {
    const value = e.target.value;
    if (isValidYear(value)) {
      setYearValue(value);
    }
  };

  return (
    <div>
      <div className="first">
        <div className="head">
          <span className="heading">DAY</span>
          <input
            type="number"
            id="dayInput"
            value={dayValue}
            onChange={handleDayChange}
            min="1"
            max="31"
            placeholder="DD"
          ></input>
        </div>
        <div className="head">
          <span className="heading">MONTH</span>
          <input
            type="number"
            id="monthInput"
            value={monthValue}
            onChange={handleMonthChange}
            min="1"
            max="12"
            placeholder="MM"
          ></input>
        </div>
        <div className="head">
          <span className="heading">YEAR</span>
          <input
            type="number"
            id="yearInput"
            value={yearValue}
            onChange={handleYearChange}
            min="1920"
            max="2023"
            placeholder="YYYY"
          ></input>
        </div>
      </div>
      <div className="first one">
        <div className="line"></div>
        <div>
          <img
            className="arrow"
            src={arrow}
            alt="You click this to see your date of Birth"
          />
        </div>
      </div>
    </div>
  );
}

export default DateInput;

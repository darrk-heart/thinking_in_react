import React, { useState } from "react";
import "./DateInput.css";
import arrow from "../Assets/icon-arrow.svg";

const isValidInput = (value, min, max) =>
  !isNaN(value) && value >= min && value <= max;

function DateInput() {
  const [dayValue, setDayValue] = useState("");
  const [monthValue, setMonthValue] = useState("");
  const [yearValue, setYearValue] = useState("");

  const handleInputChange = (e, setter, min, max) => {
    const value = e.target.value;
    if (isValidInput(value, min, max)) {
      setter(value);
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
            onChange={(e) => handleInputChange(e, setDayValue, 1, 31)}
            min="1"
            max="31"
            placeholder="DD"
          />
        </div>
        <div className="head">
          <span className="heading">MONTH</span>
          <input
            type="number"
            id="monthInput"
            value={monthValue}
            onChange={(e) => handleInputChange(e, setMonthValue, 1, 12)}
            min="1"
            max="12"
            placeholder="MM"
          />
        </div>
        <div className="head">
          <span className="heading">YEAR</span>
          <input
            type="number"
            id="yearInput"
            value={yearValue}
            onChange={(e) => handleInputChange(e, setYearValue, 1920, 2023)}
            min="1920"
            max="2023"
            placeholder="YYYY"
          />
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

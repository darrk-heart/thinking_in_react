import React, { useState } from "react";
import "./DateInput.css";
import arrow from "../assets/icon-arrow.svg";
import DateDisplay from "./DateDisplay";

const isValidInput = (value, min, max) =>
  !isNaN(value) && value >= min && value <= max;

function DateInput() {
  const [dayValue, setDayValue] = useState("");
  const [monthValue, setMonthValue] = useState("");
  const [yearValue, setYearValue] = useState("");
  const [age, setAge] = useState(null);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleInputChange = (e, setter, min, max) => {
    const value = e.target.value;
    if (isValidInput(value, min, max)) {
      setter(value);
    }
  };

  const calculateAge = () => {
    const currentDate = new Date();
    const birthDate = new Date(`${yearValue}-${monthValue}-${dayValue}`);
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    if (days < 0) {
      const tempDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      );
      days = tempDate.getDate() - birthDate.getDate() + currentDate.getDate();
      months--;
    }

    setAge({ years, months, days });
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
          <select
            id="monthInput"
            value={monthValue}
            onChange={(e) => setMonthValue(e.target.value)}
          >
            <option value="">MM</option>
            {months.map((month, index) => (
              <option key={index} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
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
            onClick={calculateAge}
          />
        </div>
      </div>
      <DateDisplay age={age} />
    </div>
  );
}

export default DateInput;

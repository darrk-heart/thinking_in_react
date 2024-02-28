import React, { useState } from "react";
import "./DateInput.css";
import arrowIcon from "../Assets/icon-arrow.svg";

const isValidInput = (value, min, max) =>
  !isNaN(value) && value >= min && value <= max;
const isValidDay = (value) => isValidInput(value, 1, 31);
const isValidMonth = (value) => isValidInput(value, 1, 12);
const isValidYear = (value) => isValidInput(value, 1920, 2023);

function DateInput() {
  const [dayValue, setDayValue] = useState("");
  const [monthValue, setMonthValue] = useState("");
  const [yearValue, setYearValue] = useState("");

  const handleInputChange = (setValue, isValid, min, max) => (e) => {
    const value = e.target.value;
    if (isValid(value)) {
      setValue(value);
    }
  };

  return (
    <div>
      <div className="first">
        <InputField
          label="DAY"
          value={dayValue}
          onChange={handleInputChange(setDayValue, isValidDay, 1, 31)}
          placeholder="DD"
        />
        <InputField
          label="MONTH"
          value={monthValue}
          onChange={handleInputChange(setMonthValue, isValidMonth, 1, 12)}
          placeholder="MM"
        />
        <InputField
          label="YEAR"
          value={yearValue}
          onChange={handleInputChange(setYearValue, isValidYear, 1920, 2023)}
          placeholder="YYYY"
        />
      </div>
      <SeparatorWithArrow />
    </div>
  );
}

const InputField = ({ label, value, onChange, placeholder }) => (
  <div className="head">
    <span className="heading">{label}</span>
    <input
      type="number"
      value={value}
      onChange={onChange}
      min={1}
      max={label === "YEAR" ? 2023 : 12}
      placeholder={placeholder}
    />
  </div>
);

const SeparatorWithArrow = () => (
  <div className="first one">
    <div className="line"></div>
    <div>
      <img className="arrow" src={arrowIcon} alt="Click to see date of birth" />
    </div>
  </div>
);

export default DateInput;

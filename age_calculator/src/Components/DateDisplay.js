import React from "react";
import "./DateDisplay.css";

const DisplayItem = ({ label, value }) => (
  <div>
    <span className="hyphen">{value}</span>
    <span>{label}</span>
  </div>
);

function DateDisplay({ age }) {
  const { years, months, days } = age || {};

  return (
    <div className="display">
      <DisplayItem label=" years" value={years !== undefined ? years : "--"} />
      <DisplayItem
        label=" months"
        value={months !== undefined ? months : "--"}
      />
      <DisplayItem label=" days" value={days !== undefined ? days : "--"} />
    </div>
  );
}

export default DateDisplay;

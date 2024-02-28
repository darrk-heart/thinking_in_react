import React from "react";
import "./DateDisplay.css";

const DisplayItem = ({ label, value }) => (
  <div>
    <span className="hyphen">{value}</span>
    <span>{label}</span>
  </div>
);

function DateDisplay() {
  return (
    <div className="display">
      <DisplayItem label=" years" value="--" />
      <DisplayItem label=" months" value="--" />
      <DisplayItem label=" days" value="--" />
    </div>
  );
}

export default DateDisplay;

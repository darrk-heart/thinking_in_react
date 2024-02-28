import React from "react";
import "./DateDisplay.css";

function DateDisplay() {
  return (
    <div className="display-head">
        <div className="space"></div>
      <div className="display">
        <span className="hyphen">--</span>
        <span className="hyphen">--</span>
        <span className="hyphen">--</span>
      </div>
      <div className="display">
        <span>years</span>
        <span>months</span>
        <span>days</span>
      </div>
    </div>
  );
}

export default DateDisplay;

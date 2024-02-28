import React from "react";
import "./DateDisplay.css";

function DateDisplay() {
  return (
    <div className="display">
      <div>
        <span className="hyphen">--</span>
        <span> years</span>
      </div>
      <div>
        <span className="hyphen">--</span>
        <span> months</span>
      </div>
      <div>
        <span className="hyphen">--</span>
        <span> days</span>
      </div>
    </div>
  );
}

export default DateDisplay;

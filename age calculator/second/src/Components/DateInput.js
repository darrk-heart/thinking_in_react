import React from "react";
import "./DateInput.css";

function DateInput() {
  return (
    <div className="dateinput">
      <div className="head">
        <span className="heading">DAY</span>
        <input placeholder="DD"></input>
      </div>
      <div className="head">
        <span className="heading">MONTH</span>
        <input placeholder="MM"></input>
      </div>
      <div className="head">
        <span className="heading">YEAR</span>
        <input placeholder="YYYY"></input>
      </div>
    </div>
  );
}

export default DateInput;

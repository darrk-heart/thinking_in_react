import React from "react";
import "./DateInput.css";
import arrow from "../Assets/icon-arrow.svg";

function DateInput() {
  return (
    <div>
      <div className="first">
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

// src\Assets\icon-arrow.svg

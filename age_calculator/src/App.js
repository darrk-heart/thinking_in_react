import React from "react";
import "./App.css";
import Background from "./components/Background";
import DateInput from "./components/DateInput";
import DateDisplay from "./components/DateDisplay";

function App() {
  return (
    <div className="App">
      <Background>
        <>
          <DateInput />
          <DateDisplay />
        </>
      </Background>
    </div>
  );
}

export default App;

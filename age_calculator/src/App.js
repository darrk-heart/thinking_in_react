import React from "react";
import "./App.css";
import Background from "./components/Background";
import DateDisplay from "./components/DateDisplay";
import DateInput from "./components/DateInput";

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

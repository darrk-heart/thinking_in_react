import React from "react";
import "./App.css";
import Background from "./components/Background";
import DateInput from "./components/DateInput";

function App() {
  return (
    <div className="App">
      <Background>
        <>
          <DateInput />
        </>
      </Background>
    </div>
  );
}

export default App;

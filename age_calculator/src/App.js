import "./App.css";
import Background from "./Components/Background";
import DateInput from "./Components/DateInput";
import DateDisplay from "./Components/DateDisplay";

function App() {
  return (
    <div className="App">
      <Background>
        <DateInput />
        <DateDisplay />
      </Background>
    </div>
  );
}

export default App;

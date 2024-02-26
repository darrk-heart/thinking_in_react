import "./App.css";
import ProductTable from "./Components/ProductTable";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <ProductTable name="Name" price="Price"></ProductTable>
    </div>
  );
}

export default App;

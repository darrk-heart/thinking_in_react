import "./App.css";
import ProductCatRow from "./Components/ProductCatRow";
import ProductRow from "./Components/ProductRow";
import ProductRower from "./Components/ProductRower";
import ProductTable from "./Components/ProductTable";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <ProductTable name="Name" price="Price">
        <ProductCatRow type="Fruits" />
        <ProductRow />
        <ProductCatRow type="Vegetables" />
        <ProductRower />
      </ProductTable>
    </div>
  );
}

export default App;

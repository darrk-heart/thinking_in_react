import React from "react";
import ProductCatRow from "./ProductCatRow";
import ProductRow from "./ProductRow";
import ProductRower from "./ProductRower";

function ProductTable({ name, price }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "150px",
          justifyContent: "space-between",
        }}
      >
        <h3>{name}</h3>
        <h3>{price}</h3>
      </div>
      <div>
        <ProductCatRow type="Fruits" />
        <ProductRow />
        <ProductCatRow type="Vegetables" />
        <ProductRower />
      </div>
    </div>
  );
}

export default ProductTable;

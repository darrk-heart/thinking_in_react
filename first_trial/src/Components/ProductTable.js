import React from "react";

function ProductTable({ name, price }) {
  return (
    <div
      style={{
        display: "flex",
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
    </div>
  );
}

export default ProductTable;

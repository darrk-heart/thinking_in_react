import React from "react";

function ProductTable({ name, price, children }) {
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
      <div>{children}</div>
    </div>
  );
}

export default ProductTable;

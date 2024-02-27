import React from "react";

function ProductRow() {
  const fruits = [
    { name: "Apple", price: 1 },
    { name: "Dragonfruit", price: 2 },
    { name: "Passionfruit", price: 3 },
  ];
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {fruits.map((fruit, index) => (
          <li
            key={index}
            style={{ color: fruit.name === "Dragonfruit" ? "red" : "black" }}
          >
            {fruit.name} <span style={{ marginRight: "100px" }}></span> $
            {fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductRow;

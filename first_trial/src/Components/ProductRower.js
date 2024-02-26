import React from "react";

function ProductRower() {
  const fruits = [
    { name: "Spinach", price: 2 },
    { name: "Pumpkin", price: 4 },
    { name: "Peas", price: 1 },
  ];
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit.name} ${fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductRower;

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
          <li key={index}>
            {fruit.name} ${fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductRow;

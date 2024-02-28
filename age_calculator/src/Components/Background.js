import React from "react";

function Background({ children }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "60vh",
        width: "46%",
        borderRadius: "20px 20px 150px 20px",
        padding: "50px",
      }}
    >
      {children}
    </div>
  );
}

export default Background;

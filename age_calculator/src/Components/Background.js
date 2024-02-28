import React from "react";

const backgroundStyle = {
  backgroundColor: "white",
  height: "60vh",
  width: "40%",
  borderRadius: "20px 20px 150px 20px",
  padding: "50px",
};

function Background({ children }) {
  return <div style={backgroundStyle}>{children}</div>;
}

export default Background;

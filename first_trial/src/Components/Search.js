import React from "react";

function Search() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        //height: '100vh'
      }}
    >
      <input
        style={{ width: "210px" }}
        type="text"
        placeholder="Search ...."
      ></input>
      <div
        style={{ marginTop: "10px", display: "flex", alignItems: "flex-start" }}
      >
        <label style={{ fontWeight: "600" }}>
          <input type="checkbox" />
          Only show products in stock
        </label>
      </div>
    </div>
  );
}

export default Search;

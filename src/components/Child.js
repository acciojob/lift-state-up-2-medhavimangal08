import React from "react";

const Child = ({ setText }) => {
  return (
    <div className="child">
      <h1>Child Component</h1>
      <input type="text" onChange={(e) => setText(e.target.value)}></input>
    </div>
  );
};

export default Child;

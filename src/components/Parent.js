import React from "react";

const Parent = ({ text }) => {
  return (
    <div className="parent">
      <h1>Parent Compoment</h1>
      <p>{text}</p>
    </div>
  );
};

export default Parent;

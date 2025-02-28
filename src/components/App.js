import React, { useState } from "react";
import Parent from "./Parent";
import Child from "./Child";

const App = () => {
  let [text, setText] = useState(null);

  return (
    <div>
      <Parent text={text}></Parent>
      <Child setText={setText}></Child>
    </div>
  );
};

export default App;

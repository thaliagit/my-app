import { useState, useEffect } from "react";

import React from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function countIncr() {
    setInterval(() => setCount((count) => count + 1), 1000);
    return () => {
      clearInterval();
      console.log("unmount")
    };
  }

  useEffect(() => countIncr, []);
  return <div>Counter: {count}</div>;
}

export default Counter;

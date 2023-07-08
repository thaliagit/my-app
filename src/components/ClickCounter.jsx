import React, { useEffect, useState } from "react";

export default function ClickCounter({onCounterChange}) {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
  onCounterChange(counter)
  }, [counter]);

  function handleCounterIncr() {
    setCounter(() => counter + 1);
  }
  function handleCounterReset() {
    setCounter(0);
  }
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleCounterIncr}>Increment</button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}

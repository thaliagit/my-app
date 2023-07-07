import React, { useState } from 'react'

export default function HookCounter({ initialValue = 0 }) {
  const [counter, setCounter ] = useState(initialValue)

  function handleCounterIncr(){
    setCounter(() => counter + 1)
  }
  function handleCounterReset(){
    setCounter(initialValue)
  }
    return (
    <div>
        <h2>Counter: {counter}</h2>
        <button onClick={handleCounterIncr}>Increament</button>
        <button onClick={handleCounterReset}>Reset</button>
    </div>
  )
}

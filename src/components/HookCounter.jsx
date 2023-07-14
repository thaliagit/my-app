import React, { useState } from 'react'

function useCounter(initialValue = 0){
  const [counter, setCounter] = useState(initialValue)

  function handleCounterIncr(){
    setCounter((c) => c + 1)
  }

  function handleCounterDecrement(){
    setCounter((c) => c - 1)
  }

  function handleCounterReset(){
    setCounter(initialValue)
  }

  return { 
    counter: counter,
    onIncrement: handleCounterIncr,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset
  }

}

export default function HookCounter({ initialValue = 0 }) {
  const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)

  

    return (
    <div>
        <h2>Counter: {counter}</h2>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onReset}>Reset</button>
    </div>
  )
}

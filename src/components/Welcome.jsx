import React, { useEffect, useState, useRef } from 'react'

function Welcome() {
    const [name, setName] = useState('World')
    const inpRef = useRef()

    useEffect(()=> {
        inpRef.current.focus()
    }, [])

    function handleNameChange(event){
        setName(event.target.value)
    }
  return (
    <div>
        <h2>Hello, {name}!</h2>
        <input ref={inpRef} value={name} onChange={handleNameChange} />
    </div>
  )
}

export default Welcome
import React, { useState } from 'react'

function useForm(){
  const [input, setInput] = useState('')
  function handleInput(e){
    setInput(e.target.value)
  }
  //console.log(input)
  return {
    input : input,
    handleInpVal : handleInput
  }
}

function ControlledForm() {
  const {input, handleInpVal} = useForm()
  return (
    <>
        <form> 
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" onChange={handleInpVal} />
            <label htmlFor="password">Password: </label>
            <input type="password" name="lastName" onChange={handleInpVal}/>
        </form>
    </>
  )
}

export default ControlledForm
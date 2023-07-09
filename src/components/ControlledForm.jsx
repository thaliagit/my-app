import React from 'react'

function useForm(){

}

function ControlledForm() {
  return (
    <>
        <form> 
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" />
            <label htmlFor="password">Password: </label>
            <input type="password" name="lastName" />
        </form>
    </>
  )
}

export default ControlledForm
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {

    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false
    })

    function handleInpChange(event){
        const {name, type, value, checked} = event.target
        setData((data) => {
            return { ...data,
                [name]: type === 'checkbox' ? checked : value 
            }
            
        })
    }

   
console.log(data)
  return (
    <div>
      <form>
        <label>username: </label>
        <input onChange={handleInpChange} value={data.username} type="text" name="username" />
        <label>password: </label>
        <input onChange={handleInpChange} value={data.password}type="password" name="password" />
        <label>checkbox: </label>
        <input onChange={handleInpChange} checked={data.remember}type="checkbox" name="remember" />
      </form>
    </div>
  );
}

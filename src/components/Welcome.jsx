import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

function Welcome() {
    const navigate = useNavigate()
    function moveToCounter(){
        navigate('/counter')
    }
  return (
    <div>Welcome, user!
        <Link to="/counter" style={{margin: 10}}>Counter</Link>
        <Link to="/login" style={{margin: 10}}>Login</Link>
        <Link to="/list" style={{margin: 10}}>Filtered List</Link>
    </div>
  )
}

export default Welcome
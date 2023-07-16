import React from 'react'
import { useNavigate } from 'react-router'

function Welcome() {
    const navigate = useNavigate()
    function moveToCounter(){
        navigate('/counter')
    }
  return (
    <div>Welcome, user!
        {/* <button onClick={moveToCounter}>Counter</button> */}
    </div>
  )
}

export default Welcome
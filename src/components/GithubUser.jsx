import React, { useEffect, useState } from 'react'

function GithubUser({username}) {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                return response.json()
            })
            .then(json => {      
                console.log(json)     
                setData(json)
            })
    }, [username])
  return (
    <>
        {data && <div>{data.name}</div>}
    </>
  )
}

export default GithubUser
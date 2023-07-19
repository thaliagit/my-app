import React from 'react'
import useSWR from 'swr'
import useGithubUser from './useGithubUser'



function GithubUsers({username}) {
    const {users, error, isLoading, getUserData} = useGithubUser(username)
    console.log(users)

    function handleGetUserData(){
      getUserData(username)
      console.log(users)
    }

    return (
    <>
        <button onClick={handleGetUserData}>get user data</button>
        {isLoading && <h3>Loading...</h3>}
        {error && <h3>An error has occurred</h3>}
        {users && <h3>{users.name}</h3>}
    </>
  )
}

export default GithubUsers
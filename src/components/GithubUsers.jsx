import React from 'react'
import useSWR from 'swr'
import useGithubUser from './useGithubUser'



function GithubUsers({username}) {
    const {users, error, isLoading} = useGithubUser(username)
    console.log(users)
    return (
    <>
        {isLoading && <h3>Loading...</h3>}
        {error && <h3>An error has occurred</h3>}
        {users && <h3>{users.name}</h3>}
    </>
  )
}

export default GithubUsers
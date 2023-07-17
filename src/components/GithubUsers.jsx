import React from 'react'
import useSWR from 'swr'
import useGithubUser from './useGithubUser'



function GithubUsers() {
    const {users, error, isLoading} = useGithubUser()
    console.log(users)
    return (
    <>
        {isLoading && <h3>Loading...</h3>}
        {error && <h3>An error has occurred</h3>}
        {users && <ul>
            {users.map(user => <li key={user.id}>{user.login}</li>)}
            </ul>}
    </>
  )
}

export default GithubUsers
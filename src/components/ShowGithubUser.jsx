import React from 'react'
import GithubUser from './GithubUser'
import { useParams } from 'react-router'

function ShowGithubUser() {
    const {username} = useParams()
  return (
    <>
        <GithubUser username={username}/>
    </>
  )
}

export default ShowGithubUser
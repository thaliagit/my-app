import React from 'react'
import GithubUsers from './GithubUsers'
import { useParams } from 'react-router'

function ShowGithubUser() {
    const {username} = useParams()
  return (
    <>
        <GithubUsers username={'thaliagit'}/>
    </>
  )
}

export default ShowGithubUser
import React from 'react'
import GithubUsers from './GithubUsers'
import { useParams } from 'react-router'

function ShowGithubUser() {
    const {username} = useParams()
  return (
    <>
        <GithubUsers username={null}/>
    </>
  )
}

export default ShowGithubUser
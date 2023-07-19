import useSWR from "swr";
const fetcher = url => fetch(url).then(res => res.json())

function useGithubUser(username) {
  const { data, error, mutate } = useSWR( username === null ? null : `https://api.github.com/users/${username}` , fetcher);
  function fetchGithubUser(){
    mutate()
  }
  return {
    users: data,
    error,
    isLoading: !data && !error,
    getUserData: fetchGithubUser
  };
}

export default useGithubUser;


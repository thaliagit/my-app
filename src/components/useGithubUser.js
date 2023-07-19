import useSWR from "swr";
const fetcher = url => fetch(url).then(res => res.json())

function useGithubUser(username) {
  const { data, error } = useSWR( username === null ? null : `https://api.github.com/users/${username}` , fetcher);
  return {
    users: data,
    error,
    isLoading: !data && !error,
  };
}

export default useGithubUser;


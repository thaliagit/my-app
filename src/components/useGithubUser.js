import useSWR from 'swr'
const fetcher = url => fetch(url).then(res => res.json())

function useGithubUser(){
    const {data, error} = useSWR(`https://api.github.com/users`, fetcher)
    return {
        users: data,
        error,
        isLoading: !data && !error
    }
}

export default useGithubUser
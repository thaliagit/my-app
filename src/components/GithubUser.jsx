import React, { useEffect, useState } from "react";

function useGithubUser(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubUser(username) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchGithubUser(username);
  }, [username]);

  return { data, loading, error };
}

function GithubUser({ username }) {
  const { data, loading, error } = useGithubUser(username);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There is an error</h1>}
      {data && <div>{data.name}</div>}
    </>
  );
}

export default GithubUser;

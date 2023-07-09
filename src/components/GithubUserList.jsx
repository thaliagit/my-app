import React, { useState } from "react";
import GithubUser from "./GithubUser";

function GithubUserList() {
  const [usernames, setUsernames] = useState([]);
  const [inp, setInp] = useState("");

  const handleInp = (e) => {
    setInp(e.target.value);
  };
  function addNewUser() {
    setUsernames((prev) => [...prev, inp]);
  }

  return (
    <>
      <input type="text" onChange={handleInp} value={inp} />
      <button onClick={addNewUser}>Add</button>
      <h3>
        {usernames.map((e) => (
          <li>{<GithubUser username={e} />}</li>
        ))}
      </h3>
    </>
  );
}

export default GithubUserList;

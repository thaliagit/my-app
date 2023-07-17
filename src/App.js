import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { LanguageContext } from "./components/LanguageContext";
import DisplayLanguage from "./components/DisplayLanguage";
import HookCounter from "./components/HookCounter";
import LoginForm from "./components/LoginForm";
import FilteredList from "./components/FilteredList";
import { Route, Routes } from "react-router";
import GithubUser from "./components/GithubUser";
import Welcome from "./components/Welcome";
import ShowGithubUser from "./components/ShowGithubUser";
import GithubUserList from "./components/GithubUserList";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<p>Add a user and select it</p>}/>
          <Route path=":username" element={<ShowGithubUser />}/>
        </Route>
        {/* <Route path="/counter" element={<HookCounter />} /> */}
      </Routes>
      <Link to="users">Users</Link>
    </>
  );
}

export default App;

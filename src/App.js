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

function App() {
  return(
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/list" element={<FilteredList />}/>
      <Route path="/counter" element={<HookCounter />} />
      <Route path="/login" element={<LoginForm />} />
      
    </Routes>
  )
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { LanguageContext } from "./components/LanguageContext";
import DisplayLanguage from "./components/DisplayLanguage";
import HookCounter from "./components/HookCounter";
import LoginForm from "./components/LoginForm";
import FilteredList from "./components/FilteredList";
import { Route, Routes } from "react-router";

function App() {
  return(
    <Routes>
      <Route path="/counter" element={<HookCounter />} />
      
    </Routes>
  )
}

export default App;

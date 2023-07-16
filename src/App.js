import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { LanguageContext } from "./components/LanguageContext";
import DisplayLanguage from "./components/DisplayLanguage";
import HookCounter from "./components/HookCounter";
import LoginForm from "./components/LoginForm";
import FilteredList from "./components/FilteredList";

function App() {
  const user = [
    {
      name: "John Doe",
      id: 12,
      age: 24,
    },
    {
      name: "Ted Mosby",
      id: 2,
      age: 32,
    },
    {
      name: "Barney Stinson",
      id: 2,
      age: 17,
    },
  ];

  return <FilteredList user={user} />;
}

export default App;

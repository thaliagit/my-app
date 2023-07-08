import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { LanguageContext } from "./components/LanguageContext";
import DisplayLanguage from "./components/DisplayLanguage";
import ClickCounter from "./components/ClickCounter";
import LoginForm from "./components/LoginForm";

function App() {
  // state = {
  //   language: "en"
  // }

  // handleLanguageChange = (event) => {
  //   this.setState({
  //     language: event.target.value
  //   })
  // }
  // const [showCounter, setShowCounter] = useState(true)

  // function handleToggleCounter(){
  //   setShowCounter(s => !s)
  // }

  const handleCounterChange = (counter) => {
    console.log("Counter number: " + counter);
  };

  return (
    <>
      {/* <select value={this.state.language} onChange={this.handleLanguageChange}>
      <option value="en">English</option>
      <option value="gr">Greek</option>
    </select>
      <LanguageContext.Provider value={this.state.language}>
        <DisplayLanguage />
      </LanguageContext.Provider> */}
      <ClickCounter onCounterChange={handleCounterChange} />
      {/* <button onClick={handleToggleCounter}>Toggle Counter</button>
      {showCounter && <ClickCounter />} */}
      {/* <LoginForm /> */}
    </>
  );
}

export default App;

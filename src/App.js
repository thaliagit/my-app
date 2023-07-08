import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { LanguageContext } from "./components/LanguageContext";
import DisplayLanguage from "./components/DisplayLanguage";
import ClickCounter from "./components/ClickCounter";
import LoginForm from "./components/LoginForm";
import Counter from "./components/Counter";

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



  return (
    <>
      {/* <select value={this.state.language} onChange={this.handleLanguageChange}>
      <option value="en">English</option>
      <option value="gr">Greek</option>
    </select>
      <LanguageContext.Provider value={this.state.language}>
        <DisplayLanguage />
      </LanguageContext.Provider> */}
      {/* <ClickCounter /> */}
      {/* <button onClick={handleToggleCounter}>Toggle Counter</button>
      {showCounter && <ClickCounter />} */}
      {/* <LoginForm /> */}
      <Counter />
    </>
  );
}

export default App;

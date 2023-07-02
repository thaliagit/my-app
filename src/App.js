import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Login from "./components/Login";

class App extends React.Component {
  onLogin(state){
    console.log(state)
  }
  render() {
    return (
      <div className="App">
        <Login onLogin = {this.onLogin} />
      </div>
    );
  }
}

export default App;

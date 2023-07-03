import logo from "./logo.svg";
import "./App.css";
import React from "react";
import UncontrolledLogin from "./components/UncontrolledLogin";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <UncontrolledLogin />
      </div>
    );
  }
}

export default App;

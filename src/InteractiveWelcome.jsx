import React from "react";
import Welcome from "./components/Welcome";

class InteractiveWelcome extends React.Component {
  constructor() {
    super();
    this.state = {
      inpVal: "",
    };
  }

  inpHandler = (e) => {
    this.setState({
      inpVal : e.target.value
    });
  };

  render() {
    return (
      <>
        <input type="text" name="username" onChange={this.inpHandler} value= {this.state.inpVal} />
        <Welcome name={this.state.inpVal} />
      </>
    );
  }
}

export default InteractiveWelcome;

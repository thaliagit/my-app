import React from "react";
import Age from "./Age";
class Welcome extends React.Component {
  render() {
    return (
      <>
        <p>Welcome, {this.props.name}!</p>
       {this.props.age > 18 ? <Age age = {this.props.age}/>
        : "You are very young!"}
      </>
    );
  }
}

Welcome.defaultProps = {
  name: "Anonymous",
  age: 0
};

export default Welcome;

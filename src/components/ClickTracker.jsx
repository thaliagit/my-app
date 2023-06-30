import React from "react";

class ClickTracker extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            lastClicked : null
        }
    }

    clickHandler = (event) => {
        this.setState({
            lastClicked : event.target.innerHTML
        })
    }

  render() {
    return (
      <>
        <button onClick={this.clickHandler}>One</button>
        <button onClick={this.clickHandler}>Two</button>
        <button onClick={this.clickHandler}>Three</button>
        <h1>{this.state.lastClicked}</h1>
      </>
    );
  }
}

export default ClickTracker;

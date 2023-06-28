import React from "react";

class Counter extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
          count : this.props.initialCount
        };

        setInterval(()=>{
          this.setState(prevState => ({
              count: prevState.count + this.props.initialIncrement
          }))
      }, this.props.initialIntervalIncr)
  }

  
  render() {
    return (
      <>
        {this.state.count < 150 && <h1>{this.state.count}</h1>}
      </>
    );
  }

}

Counter.defaultProps = {
  initialCount : 10,
  initialIncrement : 5,
  initialIntervalIncr: 1500
}
export default Counter;

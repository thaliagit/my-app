import React from "react";

class Counter extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
          count : 0
        };

        setInterval(()=>{
          this.setState(prevState => ({
              count: prevState.count += 1
          }))
      }, 1000)
  }

  
  render() {
    return (
      <>
        {this.state.count < 10 && <h1>{this.state.count}</h1>}
      </>
    );
  }
}

export default Counter;

import React from "react";
import CounterDisplay from "./CounterDisplay";
class Counter extends React.Component {
  state = {
    count: this.props.initialCount,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + this.props.initialIncrement /2,
      }));
    }, this.props.initialIntervalIncr);
  }
  

  render() {
    return (
      <>
        <CounterDisplay display={this.state.count} />
      </>
    );
  }
}

Counter.defaultProps = {
  initialCount: 10,
  initialIncrement: 5,
  initialIntervalIncr: 1500,
};
export default Counter;

import React from "react";

class ClickCounter extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    handleClickIncrement = (e)=> {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return (
            <>
            <p>Counter: {this.state.count}</p>
            <button onClick={this.handleClickIncrement}>Increment</button>
            </>
        )
    }
}

export default ClickCounter;
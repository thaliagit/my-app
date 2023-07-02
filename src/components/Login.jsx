import React from "react";

class Login extends React.Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         username : '',
         password: ''
      }
    }


 
    handleInput = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      
      this.setState({
        [name] : value
      })
    }
   
    btnHandler = () => {
      this.setState({
        username : "",
        password : ""
        
      })
    }
 


  render() {
    return (
      <>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" value={this.state.username} onChange={this.handleInput}/>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" value={this.state.password} onChange={this.handleInput}/>
        <button onClick={this.btnHandler}>Reset</button>
      </>
    );
  }
}

export default Login;

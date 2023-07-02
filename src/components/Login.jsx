import React from "react";

class Login extends React.Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         username : '',
         password: '',
         disable: true
      }
    }


 
    handleInput = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      
      this.setState({
        [name] : value
      }, ()=> this.setState({
        disable : this.state.username !== "" && this.state.password !== "" ? false : true
      }))
    }
   
    btnHandler = () => {
      this.props.onLogin(this.state)
    }
 


  render() {
    return (
      <>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" value={this.state.username} onChange={this.handleInput}/>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" value={this.state.password} onChange={this.handleInput}/>
        <button disabled={this.state.disable} onClick={this.btnHandler}>Login</button>
      </>
    );
  }
}

export default Login;

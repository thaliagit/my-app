import React from "react";

class UncontrolledLogin extends React.Component {
 
  constructor(props) {
    super(props)
  
    this.inputRef = React.createRef()
  }

  componentDidMount(){
    this.inputRef.current.focus()
  }
 

  handleFormSubmit = (event) => {
    event.preventDefault()

    const username = event.target.elements.username.value
    const password = event.target.elements.password.value 
    const checkbox = event.target.elements.checkbox.checked
    console.log({
      username,
      password,
      checkbox
    })

  }

  render() {
    return (
      <>
        <form action="" onSubmit={this.handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            ref={this.inputRef}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
          />
          <label htmlFor="checkbox">Accept Terms & Conditions</label>
          <input type="checkbox" name="checkbox" />
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </form>
      </>
    );
  }
}

export default UncontrolledLogin;

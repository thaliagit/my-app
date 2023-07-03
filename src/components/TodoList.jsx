import React, { Component } from "react";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newToDo: [],
      inpVal: "",
      random : false
    };
  }

  handleInpChange = (event) => {
    const value = event.target.value;
    this.setState({
      inpVal: value,
    });
  };
  addNewToDo = () => {
    this.setState({
        random : true
    }, () => this.setState((prev) => {
        prev.newToDo.push(prev.inpVal)
    }))
  };


  render() {
    const toDoItems = this.state.newToDo.map((item, index) => (
      <li key={item + index}>{item}</li>
    ));
    return (
      <>
        <ul>{toDoItems}</ul>
        <label htmlFor="newTodo">Add another To Do : </label>
        <input
          type="text"
          name="todoInp"
          value={this.state.inpVal}
          onChange={this.handleInpChange}
        />
        <button onClick={this.addNewToDo}>Add</button>
      </>
    );
  }
}

export default TodoList;

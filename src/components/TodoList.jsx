import React, { Component } from "react";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newToDo: [],
      inpVal: ""
    };
  }

  handleInpChange = (event) => {
    const value = event.target.value;
    this.setState({
      inpVal: value,
    });
  };
  addNewToDo = () => {
    this.setState((prevState) => ({
      newToDo: [...prevState.newToDo, prevState.inpVal],
      inpVal: ""
    }));
  };
  removeList = () => {
    this.setState({
      newToDo : []
    })
  }
  removeListItem = (event) => {
    const btnIndex = event.target.name;
    this.setState((prevState) => {
      const updatedToDo = prevState.newToDo.filter((item, index) => index !== parseInt(btnIndex));
      return {
        newToDo: updatedToDo
      };
    });
  };

  render() {
    const toDoItems = this.state.newToDo.map((item, index) => (
      <li key={item + index}>{item}<button onClick={this.removeListItem} name={index}>remove</button></li>
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
        <button onClick={this.removeList}>Reset List</button>
      </>
    );
  }
}

export default TodoList;

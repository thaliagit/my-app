import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList render={(items, removeItem) => {
        const toDoItems = items.map((item, index) => (
          <li key={item + index}>{item}<button onClick={removeItem} name={index}>remove</button></li>
        ));
        return <ul>{toDoItems}</ul>
      }}/>
    </div>
  );
}

export default App;

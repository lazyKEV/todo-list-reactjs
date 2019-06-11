import React, { Component } from 'react';
import uuid4 from 'uuid/v4'
import './App.css';
import TodoHeader from '../components/TodoHeader/TodoHeader';
import TodoList from '../components/TodoList/TodoList';
import InputItem from '../components/InputItem/InputItem';

class App extends Component {
  state = {
    items: [
      {
        id: uuid4(),
        title: "Hello",
        description: "Testing to-do list",
        date: "2019-06-11"
      },
      {
        id: uuid4(),
        title: "Hi",
        description: "Testing to-do list 2",
        date: "2019-06-11"
      }
    ]
  }

  render() {
    return (
      <div className="App">
        My To-do Lists
        <TodoHeader />
        <TodoList items={this.state.items} />
        <InputItem />
      </div>
    );
  }
}

export default App;
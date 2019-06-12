import React, { Component } from 'react';
import uuid4 from 'uuid/v4'
import moment from 'moment'
import './App.css';
import TodoNav from '../components/TodoNav/TodoNav';
import TodoList from '../components/TodoList/TodoList';
import InputItem from '../components/InputItem/InputItem';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      itemForm: {
        title: '',
        description: ''
      }
    }
    this.formSubmitHandler.bind(this);
    this.formInputHandler.bind(this);
    this.removeAllHandler.bind(this);
  }

  formSubmitHandler = (event) => {
    event.preventDefault()

    // title should not be empty
    if (this.state.itemForm.title === '') return;
    let itemForm = this.state.itemForm
    itemForm.title = itemForm.title.trim()
    itemForm.description = itemForm.description.trim()

    const newItem = {
      id: uuid4(),
      ...itemForm,
      date: moment.utc().unix()
    }

    // console.log(newItem)
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      itemForm: {
        title: '',
        description: ''
      }
    }));
  }

  formInputHandler = (key, event) => {
    this.setState({
      itemForm: {
        ...this.state.itemForm,
        [key]: event.target.value
      }
    });
  }

  removeAllHandler = (event) => {
    event.preventDefault();
    this.setState({
      items: []
    })
  }

  removeItemHandler = (key, event) => {
    event.preventDefault();
    this.setState(prevState => ({
      items: prevState.items.filter(item => {
        return item.id !== key;
      })
    }));
  }

  render() {
    return (
      <div className='App'>
        <TodoNav removeAll={this.removeAllHandler} />
        <TodoList items={this.state.items} removeItem={this.removeItemHandler} />
        <InputItem submitForm={this.formSubmitHandler} item={this.state.itemForm} changeInput={this.formInputHandler} />
      </div>
    );
  }
}

export default App;
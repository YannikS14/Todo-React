import React from 'react';
import './App.css';
import { TodoContainer } from '../TodoContainer/TodoContainer';
import { TodoForm } from '../TodoForm/TodoForm';
import { uid } from 'react-uid';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, value: 'Petz', status: 'active'},
        {id: 2, value: 'Mulm', status: 'active'},
        {id: 3, value: 'yeee', status: 'active'}
      ],
      userInput: '',
      category: 'all'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.transitionEnd = this.transitionEnd.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  handleSubmit(e) {
    this.setState({
      todos: [...this.state.todos, {
        id: uid(this.state.userInput), 
        value: this.state.userInput, 
        status: 'active'
      }],
      userInput: ''
    });
    e.preventDefault();
  }

  handleDelete(passedTodo) {
    this.setState(prevState => ({
      todos: prevState.todos.map(
        el => el === passedTodo? { ...el, status: 'delete'}: el
      )
    }));
  }

  transitionEnd(passedTodo) {
    const todos = this.state.todos.filter(todo => todo !== passedTodo);
    this.setState({ todos: todos });
  }

  handleComplete(passedTodo) {
    this.setState(prevState => ({
      todos: prevState.todos.map(
        el => el === passedTodo? { ...el, status: 'completed'}: el
      )
    }));
  }

  handleSelect(event) {
    this.setState({
      category: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header>
            <h1>React Todo List</h1>
        </header>
        <TodoForm onChange={this.handleChange} onSubmit={this.handleSubmit} userInput={this.state.userInput} handleSelect={this.handleSelect} category={this.state.category}/>
        <TodoContainer onDelete={this.handleDelete} todos={this.state.todos} transitionEnd={this.transitionEnd} onComplete={this.handleComplete} category={this.state.category}/>
      </div>
    );
  }
}
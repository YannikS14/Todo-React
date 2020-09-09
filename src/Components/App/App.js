import React from 'react';
import './App.css';
import { TodoContainer } from '../TodoContainer/TodoContainer';
import { TodoForm } from '../TodoForm/TodoForm';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, todo: 'Petz'},
        {id: 2, todo: 'Mulm'},
        {id: 3, todo: 'yee'}
      ],
      userInput: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  handleSubmit(e) {
    this.setState({
      todos: [...this.state.todos, {id: this.state.todos.length+1, todo: this.state.userInput}],
      userInput: ''
    });
    e.preventDefault();
  }

  handleDelete(todoId) {
    // To-Do: Add animation when deleting (css class .fall)
    const todos = this.state.todos.filter(todo => todo.id !== todoId);
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div className="App">
        <header>
            <h1>React Todo List</h1>
        </header>
        <TodoForm onChange={this.handleChange} onSubmit={this.handleSubmit} userInput={this.state.userInput}/>
        <TodoContainer onDelete={this.handleDelete} todos={this.state.todos} />
      </div>
    );
  }
}
import React, { useState } from 'react';
import './App.css';
import TodoContainer from '../TodoContainer/TodoContainer';
import TodoForm from '../TodoForm/TodoForm';

function App() {
  /*
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.transitionEnd = this.transitionEnd.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

    if (localStorage.getItem('todos') === null) {
      this.state = {
        todos: [],
        userInput: '',
        category: 'all',
      };
    } else {
      this.state = {
        todos: JSON.parse(localStorage.getItem('todos')),
        userInput: '',
        category: 'all',
      };
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }

  handleSubmit(e) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uid(this.state.userInput),
          value: this.state.userInput,
          status: 'uncompleted',
        },
      ],
      userInput: '',
    });
    e.preventDefault();
  }

  handleDelete(passedTodo) {
    this.setState((prevState) => ({
      todos: prevState.todos.map((el) =>
        el === passedTodo ? { ...el, status: 'delete' } : el,
      ),
    }));
  }

  transitionEnd(passedTodo) {
    const todos = this.state.todos.filter(
      (todo) => todo !== passedTodo,
    );
    this.setState({ todos: todos });
  }

  handleComplete(passedTodo) {
    this.setState((prevState) => ({
      todos: prevState.todos.map((el) =>
        el === passedTodo ? { ...el, status: 'completed' } : el,
      ),
    }));
  }

  handleSelect(event) {
    this.setState({
      category: event.target.value,
    });
  }
  */

  // State Hooks
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>React Todo List</h1>
      </header>
      <TodoForm
        setInputText={setInputText}
        setTodos={setTodos}
        inputText={inputText}
        todos={todos}
        /*onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          userInput={this.state.userInput}
          handleSelect={this.handleSelect}
          category={this.state.category}*/
      />
      <TodoContainer
        todos={todos}
        /*onDelete={this.handleDelete}
          todos={this.state.todos}
          transitionEnd={this.transitionEnd}
          onComplete={this.handleComplete}
          category={this.state.category}*/
      />
    </div>
  );
}

export { App };

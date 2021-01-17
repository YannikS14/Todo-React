import React from 'react';
import './TodoForm.css';
import { uid } from 'react-uid';

const TodoForm = ({ setInputText, setTodos, inputText, todos }) => {
  // Set State of inputText with current value of input field
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  // Set State of todos array with new object including the value of inputText and clear inputText afterwards
  const submitTodoHandler = (e) => {
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: uid(inputText) },
    ]);
    e.preventDefault();
    setInputText('');
  };

  return (
    <form /*onSubmit={this.props.onSubmit}*/>
      <input
        type="text"
        className="todo-input"
        value={inputText}
        onChange={inputTextHandler}
        //value={this.props.userInput}
        //onChange={this.props.onChange}
      />
      <button
        onClick={submitTodoHandler}
        className="todo-button"
        type="submit"
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          //value={this.props.category}
          //onChange={this.props.handleSelect}
          className="filter-todo"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default TodoForm;

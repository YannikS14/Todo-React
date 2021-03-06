import React from 'react';
import './Todo.css';

export class Todo extends React.Component {
  mountOrUnmount() {
    if (this.props.todo.status === 'delete') {
      return this.props.transitionEnd(this.props.todo);
    }
  }

  getClassName() {
    if (this.props.todo.status === 'delete') {
      return 'todo fall';
    } else if (this.props.todo.status === 'completed') {
      return 'todo completed';
    } else {
      return 'todo';
    }
  }

  render() {
    return (
      <div
        onTransitionEnd={() => this.mountOrUnmount()}
        className={this.getClassName()}
      >
        <li className="todo-item">{this.props.todo.value}</li>
        <button
          onClick={() => this.props.onComplete(this.props.todo)}
          className="complete-btn"
        >
          <i className="fas fa-check"></i>
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.todo)}
          className="trash-btn"
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
  }
}

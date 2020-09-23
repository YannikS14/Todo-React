import React, { Component } from 'react';
import './TodoContainer.css';
import { Todo } from '../Todo/Todo';

// HOC checking if todos-Array is null
const withTodosNull = (Component) => (props) =>
  !props.todos ? null : <Component {...props} />;

// HOC checking if todos-Array is empty
const withTodosEmpty = (Component) => (props) =>
  !props.todos.length ? (
    <div className="todo-container">
      <ul className="todo-list">You have no Todos.</ul>
    </div>
  ) : (
    <Component {...props} />
  );

//const withTodosFiltered = (Component) => (props) =>

class TodoContainer extends React.Component {
  render() {
    if (this.props.category === 'all') {
      return (
        <div className="todo-container">
          <ul className="todo-list">
            {this.props.todos.map((todo) => (
              <Todo
                key={todo.id}
                onDelete={this.props.onDelete}
                todo={todo}
                transitionEnd={this.props.transitionEnd}
                onComplete={this.props.onComplete}
              />
            ))}
          </ul>
        </div>
      );
    } else if (this.props.category === 'completed') {
      return (
        <div className="todo-container">
          <ul className="todo-list">
            {this.props.todos.map((todo) =>
              todo.status === 'completed' ? (
                <Todo
                  key={todo.id}
                  onDelete={this.props.onDelete}
                  todo={todo}
                  transitionEnd={this.props.transitionEnd}
                  onComplete={this.props.onComplete}
                />
              ) : null,
            )}
          </ul>
        </div>
      );
    } else if (this.props.category === 'uncompleted') {
      return (
        <div className="todo-container">
          <ul className="todo-list">
            {this.props.todos.map((todo) =>
              todo.status === 'uncompleted' ? (
                <Todo
                  key={todo.id}
                  onDelete={this.props.onDelete}
                  todo={todo}
                  transitionEnd={this.props.transitionEnd}
                  onComplete={this.props.onComplete}
                />
              ) : null,
            )}
          </ul>
        </div>
      );
    }
  }
}

// Refactor HOCs; Could also use Recompose Library
const TodoListWithConditionalRendering = withTodosNull(
  withTodosEmpty(TodoContainer),
);

export { TodoListWithConditionalRendering };

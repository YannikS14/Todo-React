import React from 'react';
import './TodoContainer.css';
import Todo from '../Todo/Todo';

const TodoContainer = ({ todos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            //onDelete={this.props.onDelete}
            text={todo.text}
            //transitionEnd={this.props.transitionEnd}
            //onComplete={this.props.onComplete}*/
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoContainer;

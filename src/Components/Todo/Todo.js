import React from 'react';
import './Todo.css';

export class Todo extends React.Component {
    render() {
        return(
            <div className="todo">
                <li className="todo-item">{this.props.todo.todo}</li>
                <button onClick={this.props.onClick} className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={() => this.props.onDelete(this.props.todo.id)} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        )
    }
}
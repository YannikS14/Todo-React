import React from 'react';
import './TodoContainer.css';
import { Todo } from '../Todo/Todo';

export class TodoContainer extends React.Component {
    render() {
        return(
            <div className="todo-container">
                <ul className="todo-list">
                    {this.props.todos.map(item => <Todo key={item.id} onDelete={this.props.onDelete} todo={item}/>)}
                </ul>
            </div>
        )
    }
}
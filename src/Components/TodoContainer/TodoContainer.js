import React from 'react';
import './TodoContainer.css';
import { Todo } from '../Todo/Todo';
import { uid } from 'react-uid';

export class TodoContainer extends React.Component {
    render() {
        return(
            <div className="todo-container">
                <ul className="todo-list">
                    {this.props.todos.map((item, index) => 
                    <Todo 
                    key={uid(item.value, index)} 
                    onDelete={this.props.onDelete} 
                    todo={item} 
                    transitionEnd={this.props.transitionEnd} 
                    onComplete={this.props.onComplete} 
                    category={this.props.category}
                    />)}
                </ul>
            </div>
        )
    }
}
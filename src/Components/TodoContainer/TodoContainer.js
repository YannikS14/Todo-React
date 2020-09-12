import React from 'react';
import './TodoContainer.css';
import { Todo } from '../Todo/Todo';
import { uid } from 'react-uid';

export class TodoContainer extends React.Component {
    render() {
        if (this.props.category === 'all') {
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
                        />)}
                    </ul>
                </div>
            )
        } else if (this.props.category === 'completed') {
            return(
                <div className="todo-container">
                    <ul className="todo-list">
                        {this.props.todos.map((item, index) =>
                        item.status === 'completed'?
                        <Todo 
                        key={uid(item.value, index)} 
                        onDelete={this.props.onDelete} 
                        todo={item} 
                        transitionEnd={this.props.transitionEnd} 
                        onComplete={this.props.onComplete} 
                        />: null)}
                    </ul>
                </div>
            )
        } else if (this.props.category === 'uncompleted') {
            return(
                <div className="todo-container">
                    <ul className="todo-list">
                        {this.props.todos.map((item, index) =>
                        item.status === 'active'?
                        <Todo 
                        key={uid(item.value, index)} 
                        onDelete={this.props.onDelete} 
                        todo={item} 
                        transitionEnd={this.props.transitionEnd} 
                        onComplete={this.props.onComplete} 
                        />: null)}
                    </ul>
                </div>
            )
        } else {
            return(
                <div className="todo-container">
                    <ul className="todo-list"></ul>
                </div>
            )
        }
    }
}
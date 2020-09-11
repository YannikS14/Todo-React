import React from 'react';
import './TodoForm.css';

export class TodoForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <input type="text" className="todo-input" value={this.props.userInput} onChange={this.props.onChange}/>
                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select value={this.props.category} onChange={this.props.handleSelect} className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        )
    }
}
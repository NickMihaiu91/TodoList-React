import React, { Component } from 'react';
import './TodoList.css';

import TodoItems from '../TodoItems/TodoItems'; 

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: JSON.parse(localStorage.getItem('todo-items')) || [],
        };
    }

    addItem(e) {
        var itemArray = this.state.items;

        itemArray.push(
            {
                text: this._inputElement.value,
                key: Date.now()
            }
        );

        this.setState({
            items: itemArray
        });

        localStorage.setItem('todo-items', JSON.stringify(itemArray));

        this._inputElement.value = "";

        e.preventDefault();
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={(e) => this.addItem(e)}>
                        <input ref={(a) => this._inputElement = a} placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} />
            </div>
        );
    }
}

export default TodoList;
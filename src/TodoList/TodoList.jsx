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
        e.preventDefault();

        if (!this._inputElement.value) {
            return this.setState({
                showEmptyInputErrorMessage: true
            });
        }

        var itemArray = this.state.items;

        itemArray.push(
            {
                text: this._inputElement.value,
                key: Date.now()
            }
        );

        this.setState({
            items: itemArray,
            showEmptyInputErrorMessage: false
        });

        localStorage.setItem('todo-items', JSON.stringify(itemArray));

        this._inputElement.value = "";
    }

    removeItem(key) {
        var itemArray = this.state.items;

        itemArray.splice(itemArray.findIndex((item) => item.key === key), 1);

        this.setState({
            items: itemArray
        });

        localStorage.setItem('todo-items', JSON.stringify(itemArray));
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
                {this.state.showEmptyInputErrorMessage &&
                    <div className="errorContainer">
                        <p className="error">Come on... don't leave it empty :)</p>
                    </div>
                }
                <TodoItems entries={this.state.items} onRemoveItem={(key) => this.removeItem(key)} />
            </div>
        );
    }
}

export default TodoList;
import React, { Component } from 'react';
import './TodoItems.css';

class TodoItems extends Component {
    onRemoveItemClicked(key) {
        if (typeof this.props.onRemoveItem === 'function') {
            this.props.onRemoveItem(key);
        }
    }

    render() {
        var todoEntries = this.props.entries,
            listItems;
        
        todoEntries.sort((a, b) => b.key - a.key);
        listItems = todoEntries.map((item) => <li key={item.key}><label>{item.text}</label><i className="removeItem" onClick={() => this.onRemoveItemClicked(item.key)}>X</i></li>);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}

export default TodoItems;

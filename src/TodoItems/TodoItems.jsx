import React, { Component } from 'react';
import './TodoItems.css';

class TodoItems extends Component {
    render() {
        var todoEntries = this.props.entries,
            listItems = todoEntries.map((item) => <li key={item.key}>{item.text}</li>);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}

export default TodoItems;

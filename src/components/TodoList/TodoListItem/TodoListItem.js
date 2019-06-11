import React from 'react';
import './TodoListItem.css'

const TodoListItem = (props) => {
    return (
        <div className="TodoListItem">
            {props.item.title} {props.item.description} {props.item.date}
            <button onClick={(event) => props.remove(props.item.id, event)}>Remove</button>
        </div>
    );
}

export default TodoListItem
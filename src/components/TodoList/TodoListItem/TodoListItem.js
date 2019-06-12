import React from 'react';
import './TodoListItem.css'

const TodoListItem = (props) => {
    return (
        <div className="TodoListItem">
            <div class="note-title">
                {props.item.title}
            </div>
            <div class="note-desc">
                {props.item.description}
            </div>
            <div class="note-del">
                <span>{props.item.date}</span>
                <span><i class="fa fa-trash" aria-hidden="true" onClick={(event) => props.remove(props.item.id, event)}></i></span>
            </div>
        </div>
    );
}

export default TodoListItem
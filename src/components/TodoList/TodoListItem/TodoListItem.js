import React from 'react';
import './TodoListItem.css'
import moment from 'moment'

const TodoListItem = (props) => {
    return (
        <div className="TodoListItem">
            <div className="note-title">
                {props.item.title}
            </div>
            <div className="note-desc">
                {props.item.description}
            </div>
            <div className="note-del">
                <span>{moment.unix(props.item.date).local().fromNow()}</span>
                <span><i className="fa fa-trash" aria-hidden="true" onClick={(event) => props.remove(props.item.id, event)}></i></span>
            </div>
        </div>
    );
}

export default TodoListItem
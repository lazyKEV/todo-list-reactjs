import React from 'react';
import TodoListItem from './TodoListItem/TodoListItem'
import './TodoList.css'


const TodoList = (props) => {
    return (
        <div className="TodoList">
            {props.items.map((item) => (
                <TodoListItem key={item.id} item={item} remove={props.removeItem} />
            ))}
        </div>
    );
}

export default TodoList
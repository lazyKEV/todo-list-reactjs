import React from 'react';
import TodoListItem from './TodoListItem/TodoListItem'


const TodoList = (props) => {
    return (
        <div>
            {props.items.map((item, index) => (
                <TodoListItem key={index} item={item} />
            ))}
        </div>
    );
}

export default TodoList
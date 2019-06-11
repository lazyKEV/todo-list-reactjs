import React from 'react';


const TodoListItem = ({item}) => {
    return (
        <div>
            {item.id} {item.title} {item.description}
        </div>
    );
}

export default TodoListItem
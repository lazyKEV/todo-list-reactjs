import React from 'react';


const TodoHeader = (props) => {
    return (
        <div>
            <button type="submit" onClick={props.removeAll}>Remove All</button> 
        </div>
    )
}

export default TodoHeader;
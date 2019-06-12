import React from 'react';
import './InputItem.css'


const InputItem = (props) => {
    return (
        <form onSubmit={props.submitForm} className="todo-form">
            <input
                type="text"
                placeholder="Title"
                value={props.item.title}
                onChange={
                    (event) => props.changeInput('title', event)
                }
            />
            <input
                type="text"
                placeholder="Description..."
                value={props.item.description}
                onChange={
                    (event) => props.changeInput('description', event)
                }
            />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default InputItem;
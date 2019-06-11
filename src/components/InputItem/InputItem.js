import React from 'react';
import './InputItem.css'


const InputItem = (props) => {
    return (
        <form onSubmit={props.submitForm} className="form-group">
            <div className="form-control">
                <input
                    type="text"
                    placeholder="Title"
                    value={props.item.title}
                    onChange={
                        (event) => props.changeInput('title', event)
                    }
                />
            </div>
            <div className="form-control">
                <textarea
                    type="text"
                    placeholder="Description..."
                    value={props.item.description}
                    onChange={
                        (event) => props.changeInput('description', event)
                    }
                />
            </div>
            <div className="form-control">
                <input type="submit" value="Submit" />
            </div>
        </form>
    );
}

export default InputItem;
import React from 'react';

import './Input.css';

const Input = props => {
    const element = props.element === 'input' ? 
        (<input
            id={props.id}
            type={props.type} 
            placeholder={props.placeholder}/>) :
        (<textarea name="" id={props.id} cols="30" rows={props.row || 3} />);

    return (
        <div className={`form-control`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
        </div>
    )
};

export default Input;
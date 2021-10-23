import React from 'react';

export default function InputText(props) {
    return (
        <input 
            className="inputText" 
            type={props.type} 
            placeholder={props.placeholder}
            autoFocus={props.autoFocus}
            >
            {props.name}
        </input>
    )
}
import React from 'react';
//styles
import "./Button.css"

const Button = props => {
    //props
    const { text, background } = props;
    return (
        <button className={`Button largeButton ${background}`}>
            {text}
        </button>
    );
};

export default Button;
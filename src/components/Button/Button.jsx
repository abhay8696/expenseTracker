import React from 'react';
//styles
import "./Button.css"

const Button = props => {
    //props
    const { text, background, buttonSize, icon, toggleModal } = props;
    return (
        <button 
        className={`Button ${buttonSize} ${background}`}
        onClick={toggleModal}
        >
            {text || <img src={icon} />}
        </button>
    );
};

export default Button;
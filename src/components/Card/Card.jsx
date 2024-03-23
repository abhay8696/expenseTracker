import React from 'react';
//styles
import "./Card.css"
//components
import Button from '../Button/Button';

const Card = () => {
    return (
        <div className='card'>
            <span>Wallet Balance: 4500</span>
            <Button />
        </div>
    );
};

export default Card;
import React from 'react';
//styles
import "./Card.css"
//components
import Button from '../Button/Button';

const Card = () => {
    return (
        <div className='card'>
            <span className='cardText'>
                Wallet Balance: <span className='cardTextGreen'>4500</span>
            </span>
            <Button />
        </div>
    );
};

export default Card;
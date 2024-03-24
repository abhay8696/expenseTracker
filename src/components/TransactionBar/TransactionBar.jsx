import React from 'react';
//styles
import "./TransactionBar.css"
import foodIcon from "../../assets/food.svg"
import deleteIcon from "../../assets/closeIcon.svg";
import editIcon from "../../assets/editIcon.svg";
//components
import Button from '../Button/Button';
const TransactionBar = () => {
    return (
        <div className='TransactionBar'>
            <span className='transactionIcon'>
                <img src={foodIcon}/>
            </span>
            <span className='TransactionBarBody'>
                <span className='TransactionText'>
                    <span className='TransactionName'>Movie</span>
                    <span className='TransactionDate'>March 20 2024</span>
                </span>
                <span className='TransactionAmount cardTextRed'>₹500</span>
            </span>
            <Button icon={deleteIcon} buttonSize="smallButton" background="backgroundRed"/>
            <Button icon={editIcon} buttonSize="smallButton" background="backgroundOrange"/>
        </div>
    );
};

export default TransactionBar;
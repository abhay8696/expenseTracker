import React from 'react';
//styles
import "./TransactionsBody.css"
import foodIcon from "../../assets/food.svg"
//components
import TransactionBar from '../TransactionBar/TransactionBar';

const TransactionsBody = () => {
    return (
        <div className='TransactionBody'>
            <TransactionBar name="Movie" date="March 20 2024" amount={500} icon={foodIcon}/>
            <TransactionBar name="Samosa" date="March 21 2024" amount={15} icon={foodIcon}/>
            <TransactionBar name="Auto" date="March 19 2024" amount={50} icon={foodIcon}/>
        </div>
    );
};

export default TransactionsBody;
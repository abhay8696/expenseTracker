import React from 'react';
//styles
import "./TransactionsBody.css"
import TransactionBar from '../TransactionBar/TransactionBar';

const TransactionsBody = () => {
    return (
        <div className='TransactionBody'>
            <TransactionBar />
        </div>
    );
};

export default TransactionsBody;
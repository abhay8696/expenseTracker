import React, { useContext } from 'react';
//styles
import "./TransactionsBody.css"
import foodIcon from "../../assets/food.svg"
//components
import TransactionBar from '../TransactionBar/TransactionBar';
//contexts
import { TransactionsContext } from '../../Contexts/AllContexts';

const TransactionsBody = () => {
    //contexts
    const [transactionData, setTransactionData] = useContext(TransactionsContext);
    //functions
    const displayTransactions = () => {
        let key = 0;
        if(transactionData && transactionData.length){
            return(
                transactionData.map(item => {
                    const { name, date, price, category } = item;
                    return <TransactionBar key={`${key++}`} name={name} date={date} amount={price} category={category}/>
                })
            )
        }
    }
    return (
        <div className='TransactionBody'> {displayTransactions()} </div>
    );
};

export default TransactionsBody;
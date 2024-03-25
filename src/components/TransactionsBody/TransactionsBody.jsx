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
        if(transactionData && transactionData.length){
            return(
                transactionData.map(item => {
                    const { name, date, price, icon } = item;
                    return <TransactionBar name={name} date={date} amount={price} icon={icon}/>
                })
            )
        }
    }
    return (
        <div className='TransactionBody'> {displayTransactions()} </div>
    );
};

export default TransactionsBody;
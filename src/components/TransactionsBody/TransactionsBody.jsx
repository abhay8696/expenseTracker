import React, { useContext, useEffect, useState } from 'react';
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
    const [pages, setPages] = useState({
        currentPage: 1,
        totalPages: 1
    })
    //everytime transactionData updates
    useEffect(()=> {
        setPagesCount();
    }, [transactionData])
    //functions
    const displayTransactions = () => {
        let key = 0;
        if(transactionData && transactionData.length){
            return(
                transactionData.map(item => {
                    const { name, date, price, category, id } = item;
                    return <TransactionBar key={`${key++}`} name={name} date={date} amount={price} category={category} id={id}/>
                })
            )
        }
    }
    const setPagesCount = () => {
        let totalPages = Math.ceil(transactionData.length / 5)
        setPages({
            currentPage: 1,
            totalPages
        })
    }
    return (
        <div className='TransactionBody'> {displayTransactions()} </div>
    );
};

export default TransactionsBody;
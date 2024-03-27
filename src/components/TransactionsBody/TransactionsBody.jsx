import React, { useContext, useEffect, useState } from 'react';
//styles
import "./TransactionsBody.css"
//components
import TransactionBar from '../TransactionBar/TransactionBar';
import PageNavigateBar from './PageNavigateBar';
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
            let bars = 
                transactionData.map(item => {
                    const { name, date, price, category, id } = item;
                    return <TransactionBar key={`${key++}`} name={name} date={date} amount={price} category={category} id={id}/>
                });
            
            bars.push( <PageNavigateBar key={"pageNavigate"} pages={pages} updatePage={updatePage} /> )
            return bars;
        }
    }
    const setPagesCount = () =>{
        setPages({ currentPage: 1, totalPages: Math.ceil(transactionData.length / 5) })
    }
    
    const updatePage = direction => {
        let {currentPage, totalPages} = pages;
        if(direction === "right" && currentPage < totalPages){
            setPages({...pages, currentPage: currentPage+1})
        }
        if(direction === "left" && currentPage > 1){
            setPages({...pages, currentPage: currentPage-1})
        }
    }
    return (
        <div className='TransactionBody'> {displayTransactions()} </div>
    );
};

export default TransactionsBody;
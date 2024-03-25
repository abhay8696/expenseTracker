import React, { useState } from 'react';
//styles
import "./TransactionBar.css"
import deleteIcon from "../../assets/closeIcon.svg";
import editIcon from "../../assets/editIcon.svg";
//components
import Button from '../Button/Button';
import Modal from '../Modal/Modal';


const TransactionBar = props => {
    //props
    const { name, date, amount, icon } = props;
    //states
    const [modalOn, setModalOn] = useState(false);
    //functions
    const toggleModal = () => setModalOn(!modalOn);
    return (
        <div className='TransactionBar'>
            <span className='transactionIcon'>
                <img src={icon}/>
            </span>
            <span className='TransactionBarBody'>
                <span className='TransactionText'>
                    <span className='TransactionName'>{name}</span>
                    <span className='TransactionDate'>{date}</span>
                </span>
                <span className='TransactionAmount cardTextRed'>₹{amount}</span>
            </span>
            <Button icon={deleteIcon} buttonSize="smallButton" background="backgroundRed"/>
            <Button icon={editIcon} buttonSize="smallButton" background="backgroundOrange" clickFunction={toggleModal}/>
            {modalOn ? 
                <Modal 
                toggleModal={toggleModal} 
                text="Edit Expense"/> 
            :null
            }
        </div>
    );
};

export default TransactionBar;
import React, { useState } from 'react';
//styles
import "./Modal.css"
import Button from '../Button/Button';

const Modal = props => {
    //props
    const { toggleModal, text } = props;
    //states
    const [formData, setFormData] = useState({})
    //functions
    const handleSubmit = evt => {
        evt.preventDefault();
    }
    const handleChange = evt => {
        const key = evt.target.name, value = evt.target.value;
        setFormData({...formData, [key]: value });
    }
    const expenseForm = () => {
        return (
            <form className='modalForm' onSubmit={handleSubmit}>
                <input onChange={handleChange} placeholder='Title' type='text' name='title'/>
                <input onChange={handleChange} placeholder='Price' type='number' name='price'/>
                <select onChange={handleChange} placeholder='Select Category' name='category'>
                    <option value="Food">Food</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Travel">Travel</option>
                </select>
                <input onChange={handleChange} placeholder='dd/mm/yyyy' type='date' name='date'/>
                <button type='submit'>Add Expense</button>
                <button onClick={toggleModal}>Cancel</button>
            </form>
        )
    }
    const balanceForm = () => {
        return(
            <form className='modalForm' onSubmit={handleSubmit}>
                <input onChange={handleChange} placeholder='Income Amount' type='number' name='amount' />
                {/* <Button /> */}
                <button type='submit'>Add Balance</button>
                <button onClick={toggleModal}>Cancel</button>
            </form>
        )
    }
    return (
        <div className='Modal' onClick={toggleModal}>
            <div className='modalBody' onClick={e => e.stopPropagation()}>
                <h4>{text}</h4>
                {
                    text === "Add Balance" ? balanceForm() : expenseForm()
                }
            </div>
        </div>
    );
};

export default Modal;
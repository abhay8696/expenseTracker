import React, { useState } from 'react';
//styles
import "./Modal.css"
import FormButtons from '../FormButtons/FormButtons';

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
    const ExpenseForm = () => {
        return (
            <form className='modalForm expensesForm' onSubmit={handleSubmit}>
                <div className='formInputsDiv'>
                    <input 
                    className="formInput" onChange={handleChange} placeholder='Title' type='text' name='title'/>
                    <input 
                    className="formInput" onChange={handleChange} placeholder='Price' type='number' name='price'/>
                    <select 
                    className="formInput" onChange={handleChange} placeholder='Select Category' name='category'>
                        <option value="Select Category">Select Category</option>
                        <option value="Food">Food</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Travel">Travel</option>
                    </select>
                    <input 
                    className="formInput" onChange={handleChange} placeholder='dd/mm/yyyy' type='date' name='date'/>
                </div>
                <FormButtons text="Add Expense" toggleModal={toggleModal}/>
            </form>
        )
    }
    const BalanceForm = () => {
        return(
            <form className='modalForm balanceForm' onSubmit={handleSubmit}>
                <div className='balanceFormInputDiv'>
                    <input 
                    className="formInput" 
                    onChange={handleChange} 
                    placeholder='Income Amount' 
                    type='number' 
                    name='amount' 
                    // required
                    />
                </div>
                <FormButtons text="Add Balance" toggleModal={toggleModal}/>
            </form>
        )
    }
    return (
        <div className='Modal' onClick={toggleModal}>
            <div className='modalBody' onClick={e => e.stopPropagation()}>
                <div className='modalHead'>{text}</div>
                {
                    text === "Add Balance" ? <BalanceForm /> : <ExpenseForm />
                }
            </div>
        </div>
    );
};

export default Modal;
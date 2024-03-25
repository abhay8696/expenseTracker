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
                <div className='formButtons'>
                    <Button 
                    text="Add Expense" 
                    background="backgroundOrange" 
                    buttonSize="largeButton"
                    buttonType="submit"
                    />
                    <Button 
                    text="Cancel" 
                    background="backgroundWhite" 
                    buttonSize="largeButton"
                    clickFunction={toggleModal}
                    />
                </div>
            </form>
        )
    }
    const balanceForm = () => {
        return(
            <form className='modalForm balanceForm' onSubmit={handleSubmit}>
                <input 
                className="formInput" 
                onChange={handleChange} 
                placeholder='Income Amount' 
                type='number' 
                name='amount' 
                // required
                />
                {/* <Button /> */}
                <div className='formButtons'>
                    <Button 
                    text="Add Balance" 
                    background="backgroundOrange" 
                    buttonSize="largeButton"
                    buttonType="submit"
                    />
                    <Button 
                    text="Cancel" 
                    background="backgroundWhite" 
                    buttonSize="largeButton"
                    clickFunction={toggleModal}
                    />
                </div>
            </form>
        )
    }
    return (
        <div className='Modal' onClick={toggleModal}>
            <div className='modalBody' onClick={e => e.stopPropagation()}>
                <div className='modalHead'>{text}</div>
                {
                    text === "Add Balance" ? balanceForm() : expenseForm()
                }
            </div>
        </div>
    );
};

export default Modal;
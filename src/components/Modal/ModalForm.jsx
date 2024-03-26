import React, { useState } from 'react';
//components
import FormButtons from '../FormButtons/FormButtons';


const ModalForm = props => {
    //props
    const { toggleModal, formType } = props;
    //states
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        date: "",
        category: "",
    })
    const [balanceFormData, setBalanceFormData] = useState({income: ""});
    //functions
    const handleChange = evt => {
        const key = evt.target.name, value = evt.target.value;
        setFormData({...formData, [key]: value });
    }
    const handleSubmit = evt => {
        evt.preventDefault();
    }

    const expenseAndEditInput = () => {
        return (
            <div className='formInputsDiv'>
                <input 
                value={formData.title}
                className="formInput" 
                onChange={handleChange} 
                placeholder='Title' 
                type='text' 
                name='title'
                autoFocus
                />
                <input 
                value={formData.price}
                className="formInput" 
                onChange={handleChange} 
                placeholder='Price' 
                type='number' 
                name='price'
                />
                <select
                value={formData.category} 
                className="formInput" 
                onChange={handleChange} 
                placeholder='Select Category' 
                name='category'>
                    <option value={null}>Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Travel">Travel</option>
                </select>
                <input 
                value={formData.date}
                className="formInput" 
                onChange={handleChange} 
                placeholder='dd/mm/yyyy' 
                type='date' 
                name='date'
                />
            </div>
        )
    } 
    const incomeInputs = () => {
        return (
            <div className='balanceFormInputDiv'>
                <input 
                className="formInput" 
                onChange={e=> setBalanceFormData(e.target.value)} 
                placeholder='Income Amount' 
                type='number' 
                name='income' 
                value={balanceFormData.income}
                autoFocus
                // required
                />
            </div>
        )
    }
    return (
        <form className='modalForm expensesForm' onSubmit={handleSubmit}>
            {formType === "Add Balance" ? incomeInputs() : expenseAndEditInput()}
            <FormButtons text={formType} toggleModal={toggleModal}/>
        </form>
    )
}

export default ModalForm;
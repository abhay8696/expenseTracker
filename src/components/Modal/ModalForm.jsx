import React, { useContext, useEffect, useState } from 'react';
//components
import FormButtons from '../FormButtons/FormButtons';
//contexts
import { MoneyContext, TransactionsContext } from '../../Contexts/AllContexts';
//style


const ModalForm = props => {
    //props
    const { toggleModal, formType } = props;
    //contexts
    const [money, setMoney] = useContext(MoneyContext);
    const [transactionData, setTransactionData] = useContext(TransactionsContext);
    //states
    const [formData, setFormData] = useState({
        name: "",
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
        if(formType === "Add Balance"){
            setMoney({
                ...money,
                balance: money.balance + balanceFormData.income
            });
        }else{
            let newExp = money.expenses + Number(formData.price);
            let newBalance = money.balance - Number(formData.price);

            if(newBalance < 0){
                return alert("Out of balance");
            }else{
                let newId = new Date / 1;
                let newTransaction = {...formData, id: newId};
                setMoney({balance: newBalance, expenses: newExp});
                setTransactionData([...transactionData, newTransaction]);
            }
        }

        toggleModal();
    }

    const expenseAndEditInput = () => {
        return (
            <div className='formInputsDiv'>
                <input 
                required
                value={formData.title}
                className="formInput" 
                onChange={handleChange} 
                placeholder='Title' 
                type='text' 
                name='name'
                autoFocus
                />
                <input 
                required
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
                    <option value="food">Food</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="travel">Travel</option>
                </select>
                <input 
                required
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
                onChange={e=> setBalanceFormData({income: +e.target.value})} 
                placeholder='Income Amount' 
                type='number' 
                name='income' 
                value={balanceFormData.income}
                autoFocus
                required
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
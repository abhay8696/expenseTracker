import React from 'react';
//styles
import "./AppBody.css";
import Transactions from '../Transactions/Transactions';
//components

const AppBody = () => {
    return (
        <div className='AppBody'>
            <Transactions />
        </div>
    );
};

export default AppBody;
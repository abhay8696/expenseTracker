import React from 'react';
//styles
import "./PieLabel.css";

const PieLabel = () => {
    return (
        <div className='pieLabel'>
            <span className='labelColorBar'></span>
            <span className='labelText'>Food</span>
        </div>
    );
};

export default PieLabel;
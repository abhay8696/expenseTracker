import React from 'react';
//styles
import "./PieChart.css";
//components
import PieLabel from '../PieLabel/PieLabel';

const PieChart = () => {
    return (
        <div className='pieChart'>
            <div className='pie'>
        
            </div>
            <PieLabel />
        </div>
    );
};

export default PieChart;
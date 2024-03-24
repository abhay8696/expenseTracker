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
            <div className='pieLabelsDiv'>
                <PieLabel />
                <PieLabel />
                <PieLabel />
            </div>
        </div>
    );
};

export default PieChart;
import React from 'react';
//styles
import "./AppHead.css"

//components
import Card from '../Card/Card';
import PieChart from '../PieChart/PieChart';

const AppHead = () => {
    return (
        <header className='AppHead'>
            <Card />
            <Card />
            <PieChart />
        </header>
    );
};

export default AppHead;
import React from 'react';
//styles
import "../TransactionsBody/TransactionsBody.css";
//hooks
import useChartData from '../customHooks/useChartData';
//library
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TopExpenseBody = () => {
    //hooks
    const chartData  = useChartData([
            { name: 'food', value: 0 },
            { name: 'entertainment', value: 0 },
            { name: 'travel', value: 0 },
        ]);

    return (
        <div className='TopExpensesBody'>
            <ResponsiveContainer width="100%" height="100%" >
                <BarChart width={150} height={40} data={chartData} layout="vertical">
                    <XAxis type='number' hide/>
                    <YAxis type="category" width={120} height={50} dataKey="name"/>
                    <Bar dataKey="value" fill="#8784D2" height={50}/>
                    {/* <Tooltip/> */}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TopExpenseBody;

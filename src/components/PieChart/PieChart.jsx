import React, { useContext, useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
//styles
import "./PieChart.css";
//components
import PieLabel from '../PieLabel/PieLabel';
import { TransactionsContext } from '../../Contexts/AllContexts';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartComp = () => {
    //context
    const [transactionData, setTransactionData] = useContext(TransactionsContext);
    const [chartData, setChartData] = useState([
        { name: 'food', value: 0 },
        { name: 'entertainment', value: 0 },
        { name: 'travel', value: 0 },
    ]);
    //on 1st render
    useEffect(()=> {
        setChartData([
            { name: 'food', value: 0 },
            { name: 'entertainment', value: 0 },
            { name: 'travel', value: 0 },
        ]);
        calculateCategories();
    }, [transactionData])
    //functions
    const calculateCategories = () => {
        let foodTotal = 0, entertainmentTotal = 0, travelTotal = 0;
        console.log("transactionData updated", transactionData)
        transactionData.forEach(item => {
            if(item.category === "food"){
                foodTotal += Number(item.price);
                setChartData(pre=>[{name: "food", value: foodTotal}, pre[1], pre[2]])
            }
            if(item.category === "entertainment"){
                entertainmentTotal += Number(item.price);
                setChartData(pre=>[pre[0], {name: "entertainment", value: entertainmentTotal}, pre[2]])
            }
            if(item.category === "travel") {
                travelTotal += Number(item.price);
                setChartData(pre=>[pre[0], pre[1], {name: "travel", value: travelTotal}])
            }
        });
    }
    return (
        <div className='pieChart' onClick={()=> console.log(chartData)}>
            <div className='pie'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={99}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className='pieLabelsDiv'>
                <PieLabel name="Food"/>
                <PieLabel name="Entertainment"/>
                <PieLabel name="Travel"/>
            </div>
        </div>
    );
};

export default PieChartComp;
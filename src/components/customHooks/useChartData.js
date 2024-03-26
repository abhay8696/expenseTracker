import React, { useContext, useEffect, useState } from 'react';
//contexts
import { TransactionsContext } from '../../Contexts/AllContexts';

const useChartData = initialData => {
    //context
    const [transactionData, setTransactionData] = useContext(TransactionsContext);
    //states
    const [chartData, setChartData] = useState(initialData);
    //everytime transactionData updates
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

    return chartData;
}


export default useChartData;
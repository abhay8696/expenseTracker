import { useState } from 'react'
//styles
import './App.css';
import foodIcon from "./assets/food.svg";
import movieIcon from "./assets/movie.svg";
import travelIcon from "./assets/travel.svg";
//components
import Navbar from './components/Navbar/Navbar'
import AppHead from './components/AppHead/AppHead'
import AppBody from './components/AppBody/AppBody';
//contexts
import { TransactionsContext } from "./Contexts/AllContexts"

const dummyData = [
  {
    name: "Movie",
    date: "March 20 2024",
    category: "entertainment",
    price: 300,
    icon: movieIcon
  },
  {
    name: "Samosa",
    date: "March 21 2024",
    category: "food",
    price: 50,
    icon: foodIcon
  },
  {
    name: "Auto",
    date: "March 19 2024",
    category: "travel",
    price: 150,
    icon: travelIcon
  },
]
function App() {
  const [balance, setBalance] = useState(5000);
  const [expenses, setExpenses] = useState(0);
  const [transactionData, setTransactionData] = useState(dummyData)

  return (
    <main className='App'>
      <TransactionsContext.Provider value={[transactionData, setTransactionData]}>
        <Navbar />
        <AppHead balance={balance} expenses={expenses}/>
        <AppBody transactionData={transactionData}/>
      </TransactionsContext.Provider> 
    </main>
  )
}

export default App

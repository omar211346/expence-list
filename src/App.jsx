import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";

function App() {

  const [expenses, setExpenses] = useState([
    { id: 1, title: "Grocery", amount: 50, date: "2025-05-08", category: "Food" },
    { id: 2, title: "Rent", amount: 800, date: "2025-05-01", category: "Housing" },
    { id: 3, title: "Internet", amount: 30, date: "2025-05-03", category: "Utilities" },
  ]);


  const addExpense = (newExpense) => {
    console.log("Adding new expense:", newExpense);
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      
      <ExpenseForm addExpense={addExpense} />
      
    
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;

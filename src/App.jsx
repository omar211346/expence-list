import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenceForm";

function App() {

  const [expenses, setExpenses] = useState([
    { id: 1, title: "Grocery", amount: 50, date: "2025-05-08", category: "Food" },
    { id: 2, title: "Rent", amount: 800, date: "2025-05-01", category: "Housing" },
    { id: 3, title: "Internet", amount: 30, date: "2025-05-03", category: "Utilities" },
  ]);

 
  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  
  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    console.log("Deleted expense with ID:", id);
  };

  const ExpenseItem = ({ expense, deleteExpense }) => {
    const handleDelete = () => {
      console.log("Deleting expense with ID:", expense.id);
      deleteExpense(expense.id);
    };
    return (
      <div>
        <h1>Expense Tracker</h1>
        
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      </div>
    );
  }
  return (
    <div>
      <h1>Expense Tracker</h1>
    
      <ExpenseForm addExpense={addExpense} />
      
     
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;

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

  const editExpense = (id) => {
    console.log("Editing expense with ID:", id);

    const expenseToEdit = expenses.find((expense) => expense.id === id);

    if (expenseToEdit) {
      const updatedExpenses = expenses.map((expense) =>
        expense.id === id ? updatedExpense : expense
      );

      setExpenses(updatedExpenses);
      console.log("Updated expenses:", updatedExpenses);
    }
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList 
        expenses={expenses} 
        deleteExpense={deleteExpense} 
        editExpense={editExpense} 
      />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenceForm";
import "./styles/app.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");

  useEffect(() => {
    const storedExpenses = localStorage.getItem("expenses");
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  const editExpense = (id, updatedData) => {
    const expenseToEdit = expenses.find((expense) => expense.id === id);

    if (expenseToEdit) {
      const updatedExpense = { ...expenseToEdit, ...updatedData };
      const updatedExpenses = expenses.map((expense) =>
        expense.id === id ? updatedExpense : expense
      );
      setExpenses(updatedExpenses);
    }
  };

  const totalAmount = expenses.reduce(
    (acc, curr) => acc + Number(curr.amount),
    0
  );

  const filteredExpenses = selectedMonth
    ? expenses.filter((e) => e.date.startsWith(selectedMonth))
    : expenses;

  return (
    <div className="app-wrapper">
      <h1 className="main-title">Expense Tracker</h1>

      <ExpenseForm addExpense={addExpense} />

      <div className="filter-container">
        <label htmlFor="month">Filter by month:</label>
        <input
          type="month"
          id="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        />
        <button onClick={() => setSelectedMonth("")}>Clear Filter</button>
      </div>

      <div className="summary">
        <p>Total: ${totalAmount}</p>
        <p>Number of expenses: {filteredExpenses.length}</p>
      </div>

      <ExpenseList
        expenses={filteredExpenses}
        deleteExpense={deleteExpense}
        editExpense={editExpense}
      />
    </div>
  );
}

export default App;

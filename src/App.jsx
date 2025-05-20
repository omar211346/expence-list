import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenceForm";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: "Grocery", amount: 50, date: "2025-05-08", category: "grocery" },
    { id: 2, title: "Rent", amount: 800, date: "2025-05-01", category: "housing" },
    { id: 3, title: "Internet", amount: 30, date: "2025-05-03", category: "utilities" },
  ]);

  const [selectedMonth, setSelectedMonth] = useState("");
  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    console.log("Deleted expense with ID:", id);
  };

  const editExpense = (id, updatedData) => {
    console.log("Editing expense with ID:", id);

    const expenseToEdit = expenses.find((expense) => expense.id === id);

    if (expenseToEdit) {
      const updatedExpense = { ...expenseToEdit, ...updatedData };
      const updatedExpenses = expenses.map((expense) =>
        expense.id === id ? updatedExpense : expense
      );

      setExpenses(updatedExpenses);
      console.log("Updated expenses:", updatedExpenses);
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
    <div>
      <h1>Expense Tracker</h1>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="month">Filter by month:</label>
        <input
          type="month"
          id="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        />
        <button onClick={() => setSelectedMonth("")}>Clear Filter</button>
      </div>
      <h2>Total: ${totalAmount}</h2>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList
        expenses={filteredExpenses}
        deleteExpense={deleteExpense}
        editExpense={editExpense}
      />
    </div>
  );
}

export default App;

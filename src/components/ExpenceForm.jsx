import React from "react";

const ExpenseForm = ({ addExpense }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      title: e.target.title, 
      amount: e.target.amount, 
      date: e.target.date,   
      category: e.target.category, 
    };
    console.log("New Expense:", newExpense);
    addExpense(newExpense);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" name="title" />
      <input type="number" placeholder="Amount" name="amount" />
      <input type="date" name="date" />
      <select name="category">
        <option value="">Select Category</option>
        <option value="housing">Housing</option>
        <option value="utilities">Utilities</option>
        <option value="grocery">Grocery</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;

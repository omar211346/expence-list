import React, { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      title: title,
      amount: amount,
      date: date,
      category: category,
    };

    console.log("New Expense:", newExpense);
    addExpense(newExpense);

    // Reset fields
    setTitle("");
    setAmount("");
    setDate("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
      <label>
        Title:
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </label>

      <label>
        Amount:
        <input 
          type="number" 
          placeholder="Amount" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          required 
        />
      </label>

      <label>
        Date:
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required 
        />
      </label>

      <label>
        Category:
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          required
        >
          <option value="">Select Category</option>
          <option value="housing">Housing</option>
          <option value="utilities">Utilities</option>
          <option value="grocery">Grocery</option>
        </select>
      </label>

      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;

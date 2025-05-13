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

    console.log("New Expense (corrected):", newExpense);
    addExpense(newExpense);

    
    setTitle("");
    setAmount("");
    setDate("");
    setCategory("");
  };

 
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Title" 
        name="title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input 
        type="number" 
        placeholder="Amount" 
        name="amount" 
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input 
        type="date" 
        name="date" 
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <select 
        name="category" 
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
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

import React, { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !date || !category) {
      setError("All fields are required.");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount,
      date,
      category,
    };

    addExpense(newExpense);
    setTitle("");
    setAmount("");
    setDate("");
    setCategory("");
    setError("");
  };

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="housing">Housing</option>
          <option value="utilities">Utilities</option>
          <option value="grocery">Grocery</option>
          <option value="transportation">Transportation</option>
          <option value="clothing">Clothing</option>
          <option value="entertainment">Entertainment</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Add Expense</button>
      </form>
    </>
  );
};

export default ExpenseForm;

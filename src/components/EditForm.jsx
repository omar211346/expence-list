import React, { useState, useEffect } from "react";

const EditForm = ({ expense = {}, saveEdit, cancelEdit }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (expense) {
      setTitle(expense.title || "");
      setAmount(expense.amount || "");
      setDate(expense.date || "");
      setCategory(expense.category || "");
    }
  }, [expense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = { title, amount, date, category };
    saveEdit(updatedData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
      </div>

      <div>
        <input 
          type="number" 
          placeholder="Amount" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
      </div>

      <div>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="housing">Housing</option>
        <option value="utilities">Utilities</option>
        <option value="grocery">Grocery</option>
        <option value="transportation">Transportation</option>
        <option value="clothing">Clothing</option>
        <option value="entertainment">Entertainment</option>
        <option value="other">Other</option>
        </select>

        </select>
      </div>

      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={cancelEdit}>Cancel</button>
      </div>
    </form>
  );
};

export default EditForm;

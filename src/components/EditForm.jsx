import React, { useState } from "react";

const EditForm = ({ expense }) => {
  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(expense.amount); 
  const [date, setDate] = useState(expense.date);
  const [category, setCategory] = useState(expense.category);

  const handleTitleChange = (e) => {
    setTitle(e.target.value); 
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <form>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={handleTitleChange} 
      />

      <input 
        type="number" 
        placeholder="Amount" 
        value={amount} 
        onChange={handleAmountChange} 
      />

      <input 
        type="date" 
        value={date} 
        onChange={handleDateChange}
      />

      <select value={category} onChange={handleCategoryChange}>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Housing">Housing</option>
        <option value="Utilities">Utilities</option>
      </select>
    </form>
  );
};

export default EditForm;
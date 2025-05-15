import React from "react";

const EditForm = ({ expense }) => {
  return (
    <form>
      <input type="text" placeholder="Title" value={expense.title} />
      <input type="number" placeholder="Amount" value={expense.amount} />
      <input type="date" value={expense.date} />
      <select value={expense.category}>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Housing">Housing</option>
        <option value="Utilities">Utilities</option>
      </select>
    </form>
  );
};

export default EditForm;
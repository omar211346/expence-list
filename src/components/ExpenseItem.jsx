import React, { useState } from "react";

const ExpenseItem = ({ expense, deleteExpense, editExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    console.log("Editing expense with ID:", expense.id);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    console.log("Deleting expense with ID:", expense.id);
    deleteExpense(expense.id);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px 0" }}>
      {isEditing ? (
        <div>
          <h3>Editing {expense.title}</h3>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{expense.title}</h3>
          <p>Amount: ${expense.amount}</p>
          <p>Date: {expense.date}</p>
          <p>Category: {expense.category}</p>

          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ExpenseItem;

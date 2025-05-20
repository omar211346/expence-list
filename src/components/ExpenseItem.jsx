import React, { useState } from "react";
import EditForm from "./EditForm";

const ExpenseItem = ({ expense, deleteExpense, editExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = (updatedData) => {
    editExpense(expense.id, updatedData);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteExpense(expense.id);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px 0" }}>
      {isEditing ? (
        <EditForm 
          expense={expense} 
          saveEdit={handleSave} 
          cancelEdit={handleCancel} 
        />
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

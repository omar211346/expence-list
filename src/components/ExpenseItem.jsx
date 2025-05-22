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
    <div className="expense-item">
      {isEditing ? (
        <EditForm 
          expense={expense} 
          saveEdit={handleSave} 
          cancelEdit={handleCancel} 
        />
      ) : (
        <>
          <h3>{expense.title}</h3>
          <p>Amount: ${expense.amount}</p>
          <p>Date: {expense.date}</p>
          <p>Category: {expense.category}</p>
          <div className="buttons">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ExpenseItem;

import React from "react";

const ExpenseItem = ({ expense, deleteExpense }) => {
  
  const handleDelete = () => {
    console.log("Deleting expense with ID:", expense.id);
    deleteExpense(expense.id);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px 0" }}>
      <h3>{expense.title}</h3>
      <p>Amount: ${expense.amount}</p>
      <p>Date: {expense.date}</p>
      <p>Category: {expense.category}</p>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ExpenseItem;

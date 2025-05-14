import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div>
      <h2>Number of expenses: {expenses.length}</h2>
      {expenses.length === 0 ? (
        <p>No expenses found</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseItem 
            key={expense.id} 
            expense={expense} 
            deleteExpense={deleteExpense} 
          />
        ))
      )}
    </div>
  );
};

export default ExpenseList;

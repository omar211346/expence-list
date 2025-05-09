import React from "react";

const ExpenseForm = ({ addExpense }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      title: e.target.title,  
      amount: e.target.amount, 
      date: e.target.date,    
      category: e.target.category, 
    };
    addExpense(newExpense);
  }};
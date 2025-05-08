import React from "react";
import ExpenseList from "./components/ExpenseList";

function App() {
  const testExpenses = [
    { id: 1, title: "Grocery", amount: 50, date: "2025-05-08", category: "Food" },
    { id: 2, title: "Rent", amount: 800, date: "2025-05-01", category: "Housing" },
    { id: 3, title: "Internet", amount: 30, date: "2025-05-03", category: "Utilities" },
  ];

 

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseList expenses={testExpenses} />
    </div>
  );
}

export default App;

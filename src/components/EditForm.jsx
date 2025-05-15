import React from "react";

    const EditForm = ({ expense }) => {
        
        const [title, setTitle] = useState(expense.title);
        const [amount, setAmount] = useState(""); 
        const [date, setDate] = useState(expense.date);
        const [category, setCategory] = useState(expense.category);
      
       
        const handleTitleChange = (e) => {
          setTitle(e.target); // 
        };
      
        
        const handleAmountChange = (e) => {
          setAmount(e.target.value);
        };
      
        const handleCategoryChange = (e) => {
          setCategory(e.target.value);
        };
      
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
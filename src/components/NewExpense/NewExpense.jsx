import React, { useState } from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveExpense = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const openEditing = () => {
    setIsEditing(true)
  }

  const cancelEditing = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm onSaveExpense={handleSaveExpense} onCancel={cancelEditing}/>
      ) : (
        <button onClick={openEditing}>Add new Expense</button>
      )}
    </div>
  );
}

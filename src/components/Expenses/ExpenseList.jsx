import React from "react";
import "./ExpenseList.css";
import ExpenseItems from "./ExpenseItems";

export default function ExpenseList(props) {
  if (props.expenses.length === 0)
    return (
      <h3 className="expenses-list__fallback">No expense for this year.</h3>
    );

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

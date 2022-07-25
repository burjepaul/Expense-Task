import React from "react";
import ExpenseDate from "./ExpenseDate.component";
import Card from "../UI/Card.component";
import "./ExpenseItems.styles.css";

export default function ExpenseItems(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}$</div>
        </div>
      </Card>
    </li>
  );
}

import React, { useState } from "react";
import Card from "../UI/Card.component";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.styles.css";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [fiteredYear, setFiteredYear] = useState("2020");

  const handleChangeYear = (newYear) => {
    setFiteredYear(newYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() + "" === fiteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={fiteredYear}
          onChangeYear={handleChangeYear}
        />
        <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
}

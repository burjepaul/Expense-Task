import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");


    //************* ONE SINGLE STATE****************/
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate:''
    // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

        //************* ONE SINGLE STATE****************/
    // setUserInput({
    //     ...userInput,
    //     enteredTitle : event.target.value 
    // })

    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitle : event.target.value }
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)

        //************* ONE SINGLE STATE****************/
    // setUserInput({
    //     ...userInput,
    //     enteredAmount : event.target.value 
    // })

    // setUserInput((prevState) => {
    //     return {...prevState, enteredAmount : event.target.value }
    // });
  };

  const dateChangeHandler = (event) =>{
    setEnteredDate(event.target.value)

        //************* ONE SINGLE STATE****************/
    // setUserInput({
    //     ...userInput,
    //     enteredDate : event.target.value 
    // })

    // setUserInput((prevState) => {
    //     return {...prevState, enteredDate : event.target.value }
    // });
}

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-12-31" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
import React, {useState} from 'react'
import ExpenseDate from './ExpenseDate.component'
import Card from '../UI/Card.component'
import './ExpenseItems.styles.css'

export default function ExpenseItems(props) {
  const [title, setTitle] = useState(props.title)

  const handleChange = () => {
    setTitle('Updated!')
  }
  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>{props.amount}$</div>
        </div>
        <button onClick={handleChange}>change title</button>
    </Card>
  )
}
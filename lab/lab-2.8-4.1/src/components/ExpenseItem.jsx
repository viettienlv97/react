import {useState} from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = ({expense}) => {
  const [title, setTitle] = useState(expense.title)
  return (
    <div className='expense-item rounded-3 my-3 text-light'>
      <div className='d-flex justify-content-between align-items-center py-2'>
        <div className='d-flex align-items-center'>
          <ExpenseDate date={expense.date} />
          <div className='ms-3 fw-bold fs-5'>{title}</div>
        </div>
        <div className='d-flex'>
          <div className='expense-amount py-2 px-4 fw-bold me-2'>
            ${expense.amount}
          </div>
          {/* lab3.1 */}
          <button className='btn bg-light' onClick={() => setTitle('Updated!')}>
            Change title
          </button>
        </div>
      </div>
    </div>
  )
}

export default ExpenseItem

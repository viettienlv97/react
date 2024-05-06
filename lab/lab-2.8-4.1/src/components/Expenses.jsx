import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'
import {useEffect, useState} from 'react'
import './Expenses.css'

const Expenses = ({expenses}) => {
  const [filtered, setFiltered] = useState(expenses)

  const yearFilter = expenses.map((expense) => expense.date.getFullYear())

  // lab4.1
  const handleChangeFilter = (year) => {
    if (!year) setFiltered(expenses)
    else {
      setFiltered(
        expenses.filter((expense) => expense.date.getFullYear() === year)
      )
    }
  }
  useEffect(() => {
    setFiltered(expenses)
  }, [expenses])
  return (
    <div className='wrapper'>
      {/* lab3.1 */}
      <ExpenseFilter
        filter={yearFilter}
        handleChangeFilter={handleChangeFilter}
      />
      {filtered && filtered.length ? (
        filtered.map((ex, i) => {
          return <ExpenseItem key={`${i}`} expense={ex} />
        })
      ) : (
        <div className='fs-4 fw-bold text-center text-light py-3'>
          Found no expenses.
        </div>
      )}
    </div>
  )
}

export default Expenses

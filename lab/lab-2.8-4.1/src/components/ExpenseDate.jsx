import './ExpenseDate.css'

const ExpenseDate = ({date}) => {
  const d = date
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return (
    <div className='expense-date ms-2 text-center'>
      <div className='fw-bold'>{monthNames[d.getMonth()]}</div>
      <div className=''>{d.getFullYear()}</div>
      <div className='fs-4 fw-bold'>{d.getDate()}</div>
    </div>
  )
}

export default ExpenseDate

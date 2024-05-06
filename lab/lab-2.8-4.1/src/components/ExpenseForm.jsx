import {useId, useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({setExpenses}) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [adding, setAdding] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      title,
      amount,
      date: new Date(date),
    }
    setAmount('')
    setDate('')
    setTitle('')
    console.log(data)
    setExpenses((prev) => [...prev, data])
  }
  return (
    <div className='expense-form p-4'>
      {!adding ? (
        <div className='text-center'>
          <button
            className='btn btn-violet text-light py-3 px-4'
            onClick={() => setAdding(true)}
          >
            Add New Expense
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='row mb-3'>
            <div className='col-5'>
              <label className='form-label fw-bold' htmlFor='title-input'>
                Title
              </label>
              <input
                value={title}
                className='form-control'
                id='title-input'
                type='text'
                placeholder=''
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='col-5'>
              <label className='form-label fw-bold' htmlFor='amount-input'>
                Amount
              </label>
              <input
                value={amount}
                className='form-control'
                id='amount-input'
                type='number'
                placeholder=''
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className='col-5'>
              <label className='form-label fw-bold' htmlFor='amount-input'>
                Date
              </label>
              <input
                className='form-control'
                value={date}
                id='amount-input'
                type='date'
                placeholder=''
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            <div>
              <button
                type='button'
                className='btn btn-secondary me-3'
                onClick={() => setAdding(false)}
              >
                Cancel
              </button>
              <button type='submit' className='btn btn-violet text-light'>
                Add Expense
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default ExpenseForm

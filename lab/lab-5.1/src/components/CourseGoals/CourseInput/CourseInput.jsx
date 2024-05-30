import React, { useState } from 'react'

import Button from '../../UI/Button/Button'
import './CourseInput.css'

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return
    }
    props.onAddGoal(enteredValue)
  }

  return (
    <form
      onSubmit={formSubmitHandler}
      className='goal-form shadow-lg border border-dark rounded m-auto mt-4 p-4'
    >
      <div
        // className={`${styles['form-control']} ${!isValid && styles.invalid}`}
        className='d-flex flex-column'
      >
        <label className='fw-bold'>Course Goal</label>
        <input
          type='text'
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  )
}

export default CourseInput

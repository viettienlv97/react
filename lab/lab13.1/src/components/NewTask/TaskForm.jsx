import React, { useRef, useState } from 'react'
import classes from './TaskForm.module.css'
import useFetch from '../../hooks/useFetch'
import { addTask } from '../../firebase/api'
import { useContext } from 'react'
import { TasksStatusContext } from '../../store/statusContext'

const TaskForm = () => {
  const { updateStatus } = useContext(TasksStatusContext)
  const { fetchData } = useFetch(addTask)
  const form = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const input = form.current[0]
    await fetchData({ name: input.value, isDone: false })
    updateStatus()
    form.current.reset()
    input.focus()
  }
  return (
    <section className='section'>
      <form
        ref={form}
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          id='task-input'
          required
        />
        <button type='submit'>Add Task</button>
      </form>
    </section>
  )
}

export default TaskForm

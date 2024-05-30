import React from 'react'
import classes from './TaskItem.module.css'
import useFetch from '../../hooks/useFetch'
import { updateTask, deleteTask } from '../../firebase/api'
import { useContext } from 'react'
import { TasksStatusContext } from '../../store/statusContext'

const TaskItem = ({ task }) => {
  const { status, updateStatus } = useContext(TasksStatusContext)
  const { fetchData: fetchUpdate } = useFetch(updateTask, null, status)
  const { fetchData: fetchDelete } = useFetch(deleteTask, null)

  const handleDeleteTask = async () => {
    await fetchDelete(task)
    updateStatus()
  }
  const handleUpdateTask = async () => {
    console.log(task.isDone)
    task.isDone = !task.isDone

    console.log(task)
    await fetchUpdate(task)
  }

  return (
    <li className={classes.task}>
      <div className={classes.item}>
        <span
          className={`${task.isDone ? classes.done : ''}`}
          onClick={() => handleUpdateTask(task.id)}
          role='button'
        >
          {task.name}
        </span>
        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
      </div>
    </li>
  )
}

export default TaskItem

import React from 'react'
import './CourseGoalItem.css'

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id)
  }

  return (
    <li
      className='goal-item bg-purple mb-3 p-3 text-light'
      onClick={deleteHandler}
    >
      {props.children}
    </li>
  )
}

export default CourseGoalItem

import React from 'react'

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem'

const CourseGoalList = (props) => {
  return (
    <ul
      className='goal-list m-auto mt-3 p-4'
      style={{ width: '700px' }}
    >
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  )
}

export default CourseGoalList

import React from 'react'
import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = ({ meal }) => {
  return (
    <div className={styles.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={styles.description}>{meal.description}</div>
        <div className={styles.price}>{meal.price}</div>
      </div>
      <div>
        <MealItemForm meal={meal} />
      </div>
    </div>
  )
}

export default MealItem

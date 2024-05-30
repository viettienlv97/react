import React from 'react'
import styles from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99
  }
]
const AvailableMeals = () => {
  return (
    <div className='w-50 mx-auto px-0 mt-5 mb-5'>
      <div className='bg-light py-2 rounded-4'>
        <div className={styles.meals}>
          <ul>
            {DUMMY_MEALS.map((meal) => {
              return (
                <li key={meal.id}>
                  <MealItem meal={meal} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AvailableMeals

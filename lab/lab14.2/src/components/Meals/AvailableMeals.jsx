import React, { memo } from 'react'
import styles from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'
import useFetch from '../../hooks/useFetch'
import { getMeals } from '../../firebase/api'

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
const AvailableMeals = memo(() => {
  const { data, loading, error } = useFetch(getMeals, [])

  const meals = []
  data &&
    data.forEach((doc) => {
      meals.push({ id: doc.id, ...doc.data() })
    })

  return (
    <div className='w-50 mx-auto px-0 mt-5 mb-5'>
      <div className='bg-light py-2 rounded-4'>
        <div className={styles.meals}>
          <ul>
            {meals.map((meal) => {
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
})

export default AvailableMeals

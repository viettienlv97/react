import './App.css'
import Expenses from './components/Expenses'
import ExpenseForm from './components/ExpenseForm'
import Section from './UI/Section'
import {useState} from 'react'

function App() {
  // lab4.2
  const [expenses, setExpenses] = useState([
    {
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2023, 5, 12),
    },
  ])
  console.log('render')
  return (
    <div>
      {/* lab3.1 */}
      <Section>
        <ExpenseForm
          // lab4.2
          setExpenses={setExpenses}
        />
      </Section>
      {/* lab 2.8 */}
      <Section className='mt-4'>
        <Expenses expenses={expenses} />
      </Section>
    </div>
  )
}

export default App

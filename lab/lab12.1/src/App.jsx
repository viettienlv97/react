import './App.css'
import db from './firebase/index'
import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  getDocs,
  getDoc
} from 'firebase/firestore'
import AddMovie from './components/AddMovie'
import MoviesList from './components/MoviesList'
import { useState } from 'react'
console.log(db)

function App() {
  const [addStatus, setAddStatus] = useState(false)
  return (
    <>
      <AddMovie setAddStatus={setAddStatus} />
      <MoviesList addStatus={addStatus} />
    </>
  )
}

export default App

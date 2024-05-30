import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore'
import db from './db'

const table = 'meals'

export const addMeal = async (payload) => {
  if (!payload) return

  const task = await addDoc(collection(db, table), payload)
  return task
}

export const getMeals = async () => {
  const querySnapshot = await getDocs(collection(db, table))
  return querySnapshot
}

export const updateMeal = async (payload) => {
  if (!payload) return

  const taskRef = doc(db, table, payload.id)
  const task = await updateDoc(taskRef, payload)
  return task
}

export const deleteMeal = async (payload) => {
  if (!payload) return

  const taskRef = doc(db, table, payload.id)
  await deleteDoc(taskRef)
  return true
}

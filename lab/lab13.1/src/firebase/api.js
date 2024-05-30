import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore'
import db from './db'

const table = 'todo-tasks'

export const addTask = async (payload) => {
  if (!payload) return

  const task = await addDoc(collection(db, table), payload)
  return task
}

export const getTasks = async () => {
  const querySnapshot = await getDocs(collection(db, table))
  return querySnapshot
}

export const updateTask = async (payload) => {
  if (!payload) return

  const taskRef = doc(db, table, payload.id)
  const task = await updateDoc(taskRef, payload)
  return task
}

export const deleteTask = async (payload) => {
  if (!payload) return

  const taskRef = doc(db, table, payload.id)
  await deleteDoc(taskRef)
  return true
}

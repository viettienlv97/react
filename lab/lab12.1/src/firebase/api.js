import db from './index'
import { collection, addDoc, getDocs } from 'firebase/firestore'

const tableName = 'movies'

export const addMovie = async (payload) => {
  try {
    const movie = await addDoc(collection(db, tableName), payload)
    console.log('Movie added on Id ', movie.id)
    return true
  } catch (error) {
    console.log('Error when add movie', error)
    return false
  }
}

export const getMovies = async () => {
  try {
    const movies = []
    const querySnapshot = await getDocs(collection(db, tableName))
    querySnapshot.forEach((doc) => {
      movies.push({ id: doc.id, ...doc.data() })
    })
    return movies
  } catch (error) {
    console.log('Error when geet all movies', error)
    return []
  }
}

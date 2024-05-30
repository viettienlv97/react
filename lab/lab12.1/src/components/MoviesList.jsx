import React, { useEffect, useState } from 'react'
import classes from './MoviesList.module.css'
import Movie from './Movie'
import { getMovies } from '../firebase/api'

const MoviesList = ({ addStatus }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const getMoviesList = async () => {
    setLoading(true)
    const list = await getMovies()
    console.log(list)
    if (!list || list.length < 1) {
      setMovies([])
    } else setMovies(list)
    setLoading(false)
  }

  useEffect(() => {
    getMoviesList()
  }, [addStatus])
  return (
    <>
      <section>
        <button onClick={getMoviesList}>Fetch Movies</button>
      </section>
      <section>
        {loading && <div>Fetching movies</div>}
        {!loading && (
          <div className={classes['movies-list']}>
            {movies &&
              movies.map((movie) => {
                return (
                  <Movie
                    key={movie.id}
                    movie={movie}
                  />
                )
              })}
          </div>
        )}
      </section>
    </>
  )
}

export default MoviesList

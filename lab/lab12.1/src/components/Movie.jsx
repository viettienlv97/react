import React from 'react'
import classes from './Movie.module.css'

const Movie = ({ movie }) => {
  return (
    <div className={classes.movie}>
      <h2>{movie.title}</h2>
      <h3>{movie.releaseDate}</h3>
      <p>{movie.description}</p>
    </div>
  )
}

export default Movie

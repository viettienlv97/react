import React, { useEffect, useState } from 'react'
import Youtube from './Youtube'
import useFetchAPI from '../../hooks/useFetchAPI'

const movieAPI = (id) => {
  return `https://api.themoviedb.org/3/movie/${id}/videos`
}

const MovieDetail = ({ movie }) => {
  console.log(movie)
  const { data, loading, error } = useFetchAPI(null, null, movieAPI(movie.id))
  const [trailerKey, setTrailerKey] = useState(null)

  useEffect(() => {
    const selectTrailer = () => {
      console.log('run again')
      if (data?.results) {
        const trailer = data?.results.find((clip) => clip.type === 'Trailer')
        console.log(trailer)
        setTrailerKey(trailer.key)
      }
    }
    selectTrailer()
    return () => {
      console.log('this run?')
      setTrailerKey(null)
    }
  }, [data, movie, loading])

  if (loading) {
    return <div>Loading ...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }
  if (data && trailerKey)
    return (
      <div className='text-light'>
        <div className='row'>
          <div className='col-6'>{movie.name}</div>
          <div className='col-6'>
            {trailerKey && (
              <div>
                <Youtube ytKey={trailerKey} />
              </div>
            )}
          </div>
        </div>
      </div>
    )
}

export default MovieDetail

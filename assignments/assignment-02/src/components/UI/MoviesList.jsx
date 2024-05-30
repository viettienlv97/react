import React from 'react'
import useFetchAPI from '../../hooks/useFetchAPI'
import SwiperCarousel from '../Swiper/SwiperCarousel'
import { useContext } from 'react'
import MovieContext from '../../store/movie-context'
import MovieDetail from '../Movie/MovieDetail'

const MoviesList = ({ imgType, title, id, url }) => {
  const { movie, listId } = useContext(MovieContext)
  console.log('render moviesList: ' + id)
  const { data, loading, error } = useFetchAPI(url, null)
  const movies = data?.results
  if (loading) return <div>Loading ...</div>
  if (error) return <div>Error: {error.message}</div>

  if (movies && movies.length) {
    return (
      <div className={`container-fluid py-2 ${id !== 8 ? 'mb-5' : ''}`}>
        {title && <div className='text-light fw-bold'>{title}</div>}
        <SwiperCarousel
          slider={movies}
          imgType={imgType}
          listId={id}
        />
        {movie && id === listId && <MovieDetail movie={movie} />}
      </div>
    )
  }
}

export default MoviesList

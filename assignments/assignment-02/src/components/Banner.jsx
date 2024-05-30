import React from 'react'
import { requests, imageUrl } from '../services/apiService'
import useFetchAPI from '../hooks/useFetchAPI.js'
import ButtonTransparent from './UI/ButtonTransparent'
import { truncateString } from '../helpers/text'

const Banner = () => {
  const { data, loading, error } = useFetchAPI(
    requests.fetchNetflixOriginals,
    null
  )
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) return <div>Error: {error.message}</div>
  console.log(data)

  const movie = data?.results[Math.floor(Math.random() * data?.results?.length)]

  if (movie)
    return (
      <div
        style={{
          height: '50vh',
          backgroundImage: `url(${imageUrl + movie?.backdrop_path})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
        className='position-relative'
      >
        <div className='position-absolute bottom-0 start-0 ms-4 w-25 mb-5'>
          <div className='text-light fs-2 fw-bold mb-4'>{movie?.name}</div>
          <div className='mb-2'>
            <ButtonTransparent className='me-3'>Play</ButtonTransparent>
            <ButtonTransparent>My List</ButtonTransparent>
          </div>
          <p
            className='text-light fs-8 fw-bold'
            style={{ minHeight: '100px' }}
          >
            {truncateString(movie.overview, 200)}
          </p>
        </div>
      </div>
    )
}

export default Banner

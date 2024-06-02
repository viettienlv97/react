import React, { useEffect, useState } from 'react'
import Youtube from './Youtube'
import useFetchAPI from '../../hooks/useFetchAPI'
import { imageUrl } from '../../services/apiService'

const movieAPI = (id) => {
  return `https://api.themoviedb.org/3/movie/${id}/videos`
}

const MovieDetail = ({ movie }) => {
  // sử dụng customhook để call api lấy ra các video key của phim
  const { data, loading, fetchData } = useFetchAPI(movieAPI(movie.id), {
    autoFetch: false,
    initialData: null
  })

  // sử dụng useEffect để gọi hàm call API mỗi khi thay đổi movie
  useEffect(() => {
    if (movie) {
      fetchData()
    }
  }, [movie])

  // lấy ra trailer của phim theo filter
  let trailer =
    data?.results && data?.results.find((clip) => clip.type === 'Trailer')
  if (!trailer) trailer = data?.results.find((clip) => clip.type === 'Teaser')

  if (loading) {
    return <div className='text-light'>Loading ...</div>
  }
  return (
    <div className='text-light'>
      <div className='row'>
        {/* // render ra thông tin của phim lấy */}
        <div className='col-12 col-lg-6'>
          <div className='ms-4 me-4'>
            <h2 className='fw-bold my-4'>{movie.title || movie.name}</h2>
            <div className='border-top'></div>
            {movie.release_date && (
              <div className='mt-3 fw-bold'>
                Release Date: {movie.release_date}
              </div>
            )}
            <div className='fw-bold mb-3'>Vote: {movie.vote_average} / 10</div>
            <p>{movie.overview}</p>
          </div>
        </div>
        <div className='col-12 col-lg-6'>
          {/* render ra iframe Youtube nếu lấy được trailer phim */}
          {trailer && (
            <div>
              <Youtube ytKey={trailer.key} />
            </div>
          )}
          {/*  render ra ảnh của phim nếu không lấy được trailer */}
          {!trailer && (
            <div>
              <img
                src={imageUrl + movie.backdrop_path}
                alt=''
                width={'100%'}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieDetail

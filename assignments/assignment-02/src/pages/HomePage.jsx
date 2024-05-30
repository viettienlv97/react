import React from 'react'
import Header from '../components/Header'
import MoviesList from '../components/UI/MoviesList'
import { requests } from '../services/apiService'
import MovieProvider from '../store/MovieProvider'

const movies_categories = [
  {
    id: 1,
    name: 'Original',
    imgType: 'poster_path',
    title: null,
    url: requests.fetchNetflixOriginals
  },
  {
    id: 2,
    name: 'Trending',
    imgType: 'backdrop_path',
    title: 'Xu hướng',
    url: requests.fetchTrending
  },
  {
    id: 3,
    name: 'Rating',
    imgType: 'backdrop_path',
    title: 'Xếp hạng cao',
    url: requests.fetchTopRated
  },
  {
    id: 4,
    name: 'Action',
    imgType: 'backdrop_path',
    title: 'Hành động',
    url: requests.fetchActionMovies
  },
  {
    id: 5,
    name: 'Comedy',
    imgType: 'backdrop_path',
    title: 'Hài',
    url: requests.fetchComedyMovies
  },
  {
    id: 6,
    name: 'Horror',
    imgType: 'backdrop_path',
    title: 'Kinh dị',
    url: requests.fetchHorrorMovies
  },
  {
    id: 7,
    name: 'Romance',
    imgType: 'backdrop_path',
    title: 'Lãng mạn',
    url: requests.fetchRomanceMovies
  },
  {
    id: 8,
    name: 'Documentary',
    imgType: 'backdrop_path',
    title: 'Tài liệu',
    url: requests.fetchDocumentaries
  }
]

const HomePage = () => {
  return (
    <>
      <Header />
      <MovieProvider>
        <main className='pb-5'>
          {movies_categories.map((cate) => {
            return (
              <section
                key={cate.id}
                id={cate.name}
              >
                <MoviesList
                  imgType={cate.imgType}
                  title={cate.title}
                  url={cate.url}
                  id={cate.id}
                />
              </section>
            )
          })}
        </main>
      </MovieProvider>
    </>
  )
}

export default HomePage

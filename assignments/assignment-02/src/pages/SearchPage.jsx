import React, { useState, useEffect, useCallback } from 'react'
import Navbar from '../components/Navbar'
import SearchForm from '../components/Search/SearchForm'
import SearchList from '../components/Search/SearchList'
import useFetchAPI from '../hooks/useFetchAPI'

const searchUrl =
  'https://api.themoviedb.org/3/search/movie?include_adult=true&language=en-US&query='

const SearchPage = () => {
  // khai báo state search để query
  const [search, setSearch] = useState(null)
  // sử dụng useFetchAPI để call api lấy dữ liệu
  const { data, loading, fetchData } = useFetchAPI(`${searchUrl}${search}`, {
    autoFetch: false
  })

  // sử dụng useEffect để call api mỗi khi có search thay đổi
  useEffect(() => {
    if (search) {
      fetchData()
    }
  }, [search])

  const searchMovies = useCallback((search) => {
    setSearch(search)
  }, [])

  const list = data?.results

  return (
    <>
      <Navbar />
      <SearchForm searchMovies={searchMovies} />
      {!loading && list && list.length > 0 && <SearchList movies={list} />}
    </>
  )
}

export default SearchPage

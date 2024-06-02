import React, { useRef, memo } from 'react'
import { Search } from 'react-feather'

const SearchForm = memo(({ searchMovies }) => {
  const form = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)
    const { search } = Object.fromEntries(fd.entries())
    searchMovies(search)
    form.current.reset()
  }

  return (
    <section id='search-form'>
      <div className='container-fluid'>
        <div className='row text-center justify-content-center'>
          <div className='col-lg-8 col-md-8 col-12 col-sm-10 col-xl-6 col-xxl-5'>
            <div className='d-flex mt-5'>
              <form
                ref={form}
                className='w-100 bg-light'
                onSubmit={handleSubmit}
              >
                <div
                  className='position-relative border-bottom border-info form-group'
                  style={{ height: '50px' }}
                >
                  <input
                    type='text'
                    name='search'
                    className='form-control w-100 border-0 h-100 ps-4 fs-5'
                    required
                  />
                  <Search
                    className='position-absolute  border-none bg-transparent'
                    style={{ right: '10px', top: '5px' }}
                    size={36}
                    color='gray'
                  />
                </div>
                <div className='d-flex justify-content-end my-5 me-5'>
                  <button
                    className='bg-light border-0 px-4 py-2 text-dark fw-bold'
                    type='button'
                    onClick={() => form.current.reset()}
                  >
                    RESET
                  </button>
                  <button className='bg-info text-light border-0 px-4 py-2 fw-bold'>
                    SEARCH
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default SearchForm

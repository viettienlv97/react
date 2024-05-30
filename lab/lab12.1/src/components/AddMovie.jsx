import React, { useRef } from 'react'
import classes from './AddMovie.module.css'
import { addMovie } from '../firebase/api'

const AddMovie = ({ setAddStatus }) => {
  const form = useRef()
  const handleAddMovie = (e) => {
    e.preventDefault()
    const elements = form.current.elements
    const payload = {
      title: elements['title-input'].value,
      description: elements['opening-text'].value,
      releaseDate: elements['releasedate-input'].value
    }
    const result = addMovie(payload)
    if (result) {
      setAddStatus((status) => !status)
      form.current.reset()
    }
  }
  return (
    <section>
      <form
        ref={form}
        onSubmit={handleAddMovie}
      >
        <div className={classes.control}>
          <label htmlFor='title-input'>Title</label>
          <input
            type='text'
            id='title-input'
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='opening-text'>Opening Text</label>
          <textarea
            name='opening-text'
            id='opening-text'
            required
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor='releasedate-input'>Release Date</label>
          <input
            type='date'
            id='releasedate-input'
            required
          />
        </div>
        <div>
          <button type='submit'>Add movie</button>
        </div>
      </form>
    </section>
  )
}

export default AddMovie

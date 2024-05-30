import React, { useState } from 'react'

const FormControl = () => {
  const [invalid, setInvalid] = useState({
    name: false,
    email: false
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const fd = new FormData(event.target)
    const data = Object.fromEntries(fd.entries())
    if (!data.name) {
      setInvalid((prev) => ({ ...prev, name: true }))
    }
    if (!data.email) setInvalid((prev) => ({ ...prev, email: true }))
    if (!data.name || !data.email) return

    console.log(data)
    event.target.reset()
  }

  const handleInvalidInput = (e) => {
    const inputName = e.target.name
    if (!e.target.value) {
      setInvalid((prev) => ({ ...prev, [inputName]: true }))
      return
    }

    setInvalid((prev) => ({ ...prev, [inputName]: false }))
  }

  const checkValidEmail = (value) => {
    const validEmail = value.includes('@')
    if (!validEmail) setInvalid((prev) => ({ ...prev, email: true }))
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className={`form-control ${invalid.name ? 'invalid' : ''}`}>
        <label htmlFor='name-input'>Your Name</label>
        <input
          type='text'
          id='name-input'
          name='name'
          onChange={handleInvalidInput}
          onBlur={handleInvalidInput}
        />
        {invalid.name && <div className='error-text'>oh no</div>}
      </div>
      <div className={`form-control ${invalid.email ? 'invalid' : ''}`}>
        <label htmlFor='email-input'>Your Email</label>
        <input
          type='text'
          id='email-input'
          name='email'
          onChange={handleInvalidInput}
          onBlur={(e) => {
            handleInvalidInput(e)
            checkValidEmail(e.target.value)
          }}
        />
        {invalid.email && <div className='error-text'>oh no</div>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default FormControl

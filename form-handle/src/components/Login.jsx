export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)
    // const groupCheckbox = fd.getAll('checkboxName')
    const data = Object.fromEntries(fd.entries())
    // data.checkbox = groupCheckbox
    console.log(data)
    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
          />
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
          />
        </div>
      </div>

      <p className='form-actions'>
        <button
          type='reset'
          className='button button-flat'
        >
          Reset
        </button>
        <button className='button'>Login</button>
      </p>
    </form>
  )
}

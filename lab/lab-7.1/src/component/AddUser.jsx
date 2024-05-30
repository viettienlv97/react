import classes from './AddUser.module.css'
import Button from './Button'
import { useRef, useImperativeHandle, forwardRef } from 'react'

const AddUser = forwardRef((props, ref) => {
  const form = useRef()
  const username = useRef()
  const age = useRef()

  useImperativeHandle(ref, () => {
    return {
      clear: () => {
        form.current.reset()
      }
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    props.onAddUser(username.current.value, age.current.value)
  }

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
    >
      <div className={classes.input}>
        <label htmlFor=''>Username</label>
        <input
          ref={username}
          type='text'
        />
      </div>
      <div className={classes.input}>
        <label htmlFor=''>Age (Years)</label>
        <input
          ref={age}
          type='number'
        />
      </div>
      <div className={classes.input}>
        <Button type='submit'>Submit</Button>
      </div>
    </form>
  )
})

export default AddUser

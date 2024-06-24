import { FormEvent, useState } from 'react'

import classes from './AuthForm.module.css'
import { setItem } from '../../services/localStorage'

type User = {
  email: string
  password: string
}

type ResUser = {
  email: string
  idToken: string
}

const apiKey = 'AIzaSyCvujSnZz9WXl-jT14B0fnB8zbN_snRRik'
const apiUrl = (isLogin: boolean) =>
  `https://identitytoolkit.googleapis.com/v1/accounts:${
    isLogin ? 'signInWithPassword' : 'signUp'
  }?key=${apiKey}`

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState)
  }

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const user = Object.fromEntries(formData) as User

    await fetchApi(user.email, user.password)
  }

  const fetchApi = async (email: string, password: string) => {
    const res = isLogin
      ? await fetch(apiUrl(isLogin), {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'Application/JSON' }
        })
      : await fetch(apiUrl(isLogin), {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'Application/JSON' }
        })

    if (res.ok) {
      const resData = (await res.json()) as ResUser
      setItem('user', resData)
    } else {
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmitForm}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            id='email'
            name='email'
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            name='password'
            required
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default AuthForm

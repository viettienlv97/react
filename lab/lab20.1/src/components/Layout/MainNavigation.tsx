import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css'
import { getItem, removeItem } from '../../services/localStorage'
import { useEffect, useState } from 'react'

const MainNavigation = () => {
  const [user, setUser] = useState<Object | null>(null)

  useEffect(() => {
    if (!user) {
      setUser(getItem('user', null))
    }
  }, [user])

  const handleLogout = () => {
    setUser(null)
    removeItem('user')
  }

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!user && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          {user && (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation

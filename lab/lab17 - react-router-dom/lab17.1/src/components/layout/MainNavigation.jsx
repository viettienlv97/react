import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              className={({isActive}) =>
                isActive ? classes.active : undefined
              }
              to={'quotes'}
              end
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) =>
                isActive ? classes.active : undefined
              }
              to={'quotes/new-quote'}
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation

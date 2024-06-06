import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to=''
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='products'
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation

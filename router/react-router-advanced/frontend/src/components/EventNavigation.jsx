import React from 'react'
import { NavLink } from 'react-router-dom'

const EventNavigation = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            to={''}
            end
          >
            All Events
          </NavLink>
        </li>
        <li>
          <NavLink to={'new'}>New Event</NavLink>
        </li>
      </ul>
    </>
  )
}

export default EventNavigation

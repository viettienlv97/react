import {NavLink} from 'react-router-dom'
import './Nav.scss'

const Nav = ({children, linkTo}) => {
  return (
    <NavLink className='navlink' to={linkTo}>
      {children}
    </NavLink>
  )
}

export default Nav

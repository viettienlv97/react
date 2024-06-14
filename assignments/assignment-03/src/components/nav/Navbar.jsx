import {NavLink} from 'react-router-dom'
import {ShoppingCart, User} from 'react-feather'
import Nav from '../UI/Nav'
import Dropdown from '../UI/Dropdown'

const Navbar = () => {
  return (
    <nav>
      <div className='container d-flex justify-content-between'>
        <ul className='list-unstyled d-flex align-items-center'>
          <li className='me-3'>
            <Nav linkTo='/'>
              <i className='fw-bold'>Home</i>
            </Nav>
          </li>
          <li>
            <Nav linkTo='/shop'>
              <i className='fw-bold'>Shop</i>
            </Nav>
          </li>
        </ul>
        <h2 className='py-3'>
          <i>BOUTIQUE</i>
        </h2>
        <ul className='list-unstyled d-flex align-items-center'>
          <li className='me-3'>
            <Nav linkTo='/cart'>
              <i className='fw-bold'>
                <ShoppingCart size={20} className='me-2' />
                Cart
              </i>
            </Nav>
          </li>
          {false && (
            <li>
              <Nav linkTo='/login'>
                <i className='fw-bold'>Login</i>
              </Nav>
            </li>
          )}
          {true && (
            <li className='me-2'>
              <div className='d-flex'>
                <Dropdown>
                  <User />
                  <i className='fw-bold'>Viettien</i>
                </Dropdown>
              </div>
            </li>
          )}
          {true && (
            <li>
              <Nav linkTo='/logout'>
                <i className='fw-bold'>(Logout)</i>
              </Nav>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

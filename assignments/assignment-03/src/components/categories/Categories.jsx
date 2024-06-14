import React from 'react'

const Categories = () => {
  return (
    <div>
      <h5 className='lato-regular-italic fw-bold mb-4'>CATEGORIES</h5>
      <h6 className='lato-regular-italic fw-bold bg-black text-light py-2 px-4'>
        APPLE
      </h6>
      <ul className='list-unstyled'>
        <li className='lato-regular-italic px-4 py-1'>
          <span role='button' className='navlink'>
            All
          </span>
        </li>
        <h6 className='lato-regular-italic fw-bold bg-light text-black py-2 px-4'>
          IPHONE & MAC
        </h6>
        <li className='lato-regular-italic px-4 py-1'>
          <span role='button' className='navlink'>
            iPhone
          </span>
        </li>
        <li className='lato-regular-italic px-4 py-1'>
          <span role='button' className='navlink'>
            iPad
          </span>
        </li>
        <li className='lato-regular-italic px-4 py-1'>
          <span role='button' className='navlink'>
            Macbook
          </span>
        </li>
        <li className='lato-regular-italic px-4 py-1'>All</li>
      </ul>
    </div>
  )
}

export default Categories

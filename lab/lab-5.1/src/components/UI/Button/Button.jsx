import React from 'react'

import './Button.css'

const Button = (props) => {
  return (
    <button
      type={props.type}
      className='btn btn-purple text-light mt-3'
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button

import React from 'react'
import { createPortal } from 'react-dom'
import './ProductModal.scss'

const ProductModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return undefined

  return createPortal(
    <div className='modal-overlay' onClick={onClose}>
      <div className='content' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default ProductModal

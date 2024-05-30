import React, { useEffect } from 'react'

const ChildComponent = ({ onUpdate }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onUpdate()
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [onUpdate])

  return <div>ChildComponent</div>
}

export default ChildComponent

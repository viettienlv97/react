import React, { useState, useCallback, useEffect } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
  // sử dụng useCallback để wrap lại function khai báo bên trong jsx
  // do đó khi jsx re-render thì function sẽ không cần khai báo lại.
  // sẽ an toàn khi sử dụng function làm dependency trong useEffect hoặc useCallback
  const handleUpdate = useCallback(() => {
    //do something
  }, [])

  return <ChildComponent onUpdate={handleUpdate} />
}

export default ParentComponent

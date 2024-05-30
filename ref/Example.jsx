import React, { useRef, useImperativeHandle, forwardRef } from 'react'

// Component con
const ChildComponent = forwardRef((props, ref) => {
  // khai báo 1 ref mới trong component con
  const childRef = useRef()

  // sử dụng useImperativeHandle để gán lại các
  // method khi sử dụng ref trong component cha

  // useImperativeHandle nhận 2 tham số:
  // ref từ component cha
  // và 1 function trả về 1 object chứa các
  // function sử dụng trong component cha
  useImperativeHandle(ref, () => ({
    getFocus: () => {
      childRef.current.focus()
    }
  }))

  return <input ref={childRef} />
})

// Component cha
const ParentComponent = () => {
  // khai báo ref trong component cha
  // ref này được gán ref vào component con,
  // sẽ có các phương thức cụ thể
  const childRef = useRef()

  const handleClick = () => {
    // phương thức getFocus() được khai báo bên trong component con
    childRef.current.getFocus()
  }

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>Focus Child Input</button>
    </div>
  )
}

export default ParentComponent

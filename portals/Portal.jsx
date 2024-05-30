import createPortal from 'react-dom'

const Portal = () => {
  return createPortal(<div>Modal</div>, document.getElementById('modal'))
}

export default Portal

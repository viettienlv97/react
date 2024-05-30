import classes from './ErrorModal.module.css'
import { createPortal } from 'react-dom'

const ErrorModal = ({ title, content, onConfirm }) => {
  return createPortal(
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div className={classes.header}>
          <h2>{title}</h2>
        </div>
        <div className={classes.content}>{content}</div>
        <div className={classes.actions}>
          <button onClick={() => onConfirm(null)}>Close</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default ErrorModal

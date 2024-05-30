import { child } from 'firebase/database'
import { createContext, useState } from 'react'

export const TasksStatusContext = createContext({
  status: false,
  updateStatus: () => {}
})

const TasksStatusProvider = ({ children }) => {
  const [status, setStatus] = useState(false)

  const handleUpdateStatus = () => {
    setStatus((status) => !status)
  }
  const init = {
    status,
    updateStatus: handleUpdateStatus
  }

  return (
    <TasksStatusContext.Provider value={init}>
      {children}
    </TasksStatusContext.Provider>
  )
}

export default TasksStatusProvider

import './App.css'
import TaskForm from './components/NewTask/TaskForm'
import Tasks from './components/Tasks/Tasks'
import TasksStatusProvider from './store/statusContext'

function App() {
  return (
    <TasksStatusProvider>
      <TaskForm />
      <Tasks />
    </TasksStatusProvider>
  )
}

export default App

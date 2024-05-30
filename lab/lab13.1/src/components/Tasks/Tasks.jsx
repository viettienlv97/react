import classes from './Tasks.module.css'
import TaskItem from './TaskItem'
import useFetch from '../../hooks/useFetch'
import { getTasks } from '../../firebase/api'
import { useContext } from 'react'
import { TasksStatusContext } from '../../store/statusContext'

const Tasks = () => {
  const { status } = useContext(TasksStatusContext)
  const { loading, error, data } = useFetch(getTasks, [], status)

  const list = []
  data.forEach((doc) => {
    list.push({ id: doc.id, ...doc.data() })
  })

  return (
    <section className='section'>
      {loading && <div className={classes.container}>Fetching data</div>}
      {!loading && error && (
        <div className={classes.container}>Failed to get tasks</div>
      )}
      {!loading && !error && list.length === 0 && (
        <div className={classes.container}>There are no task todo!</div>
      )}
      {!loading && !error && list.length > 0 && (
        <div className={classes.container}>
          <ul>
            {list.map((task) => {
              return (
                <TaskItem
                  key={task.id}
                  task={task}
                />
              )
            })}
          </ul>
        </div>
      )}
    </section>
  )
}

export default Tasks

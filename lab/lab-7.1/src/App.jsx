import { useRef, useState } from 'react'
import AddUser from './component/AddUser'
import UserList from './component/UserList'
import Card from './component/Card'
import ErrorModal from './component/ErrorModal'

function App() {
  const addUserForm = useRef()
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)

  const addUserHandler = (username, age) => {
    if (!username || !age) {
      setError({
        title: 'Invalid input',
        msg: 'Please enter a valid name and age (non-empty value)'
      })
      return
    }

    if (isNaN(Number(age)) || Number(age) <= 0) {
      setError({
        title: 'Invalid age',
        msg: 'Please enter a valid age (> 0.)'
      })
      return
    }
    addUserForm.current.clear()
    setUsers((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        username: username,
        age: age
      }
    ])
  }
  return (
    <>
      <Card>
        <AddUser
          ref={addUserForm}
          onAddUser={addUserHandler}
        />
      </Card>
      <Card>
        <UserList usersList={users} />
      </Card>
      {error && (
        <ErrorModal
          onConfirm={setError}
          title={error.title}
          content={error.msg}
        />
      )}
    </>
  )
}

export default App

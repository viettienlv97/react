import classes from './UsersList.module.css'

const UserList = ({ usersList }) => {
  return (
    <>
      {usersList && usersList.length ? (
        <div className={classes.users}>
          <ul>
            {usersList.map((user) => {
              return (
                <li
                  key={user.id}
                >{`${user.username} (${user.age} years old)`}</li>
              )
            })}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default UserList

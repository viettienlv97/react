import { Fragment, useState, useEffect, Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Users from './Users'
import classes from './UserFinder.module.css'
import UsersContext from '../store/users-context'

class UserFinder extends Component {
  // sử dụng static contextType để khai báo 1 context
  // 1 class chỉ có thể khai báo 1 context duy nhất
  static contextType = UsersContext
  constructor() {
    super()
    this.state = {
      filteredUsers: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    // sử dụng context bằng this.context.key
    this.setState({ filteredUsers: this.context.users })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        )
      })
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value })
  }

  handleResetTerm() {
    this.setState({ searchTerm: '' })
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input
            type='search'
            onChange={this.searchChangeHandler.bind(this)}
          />
        </div>
        <ErrorBoundary
          resetTerm={this.handleResetTerm.bind(this)}
          users={this.state.filteredUsers}
        >
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    )
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS)
//   const [searchTerm, setSearchTerm] = useState('')

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     )
//   }, [searchTerm])

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value)
//   }

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input
//           type='search'
//           onChange={searchChangeHandler}
//         />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   )
// }

export default UserFinder

import { Component } from 'react'
import classes from './Error.module.css'

class ErrorBoundary extends Component {
  constructor() {
    super()
    this.state = {
      hasError: false
    }
  }
  componentDidCatch(error) {
    this.setState({ hasError: true })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.users !== this.props.users) {
      if (this.props.users.length) {
        this.setState({ hasError: false })
      }
    }
  }

  resetError() {
    this.setState({ hasError: false })
    this.props.resetTerm()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={classes.error}>
          <p>Something went wrong!</p>
          <button onClick={this.resetError.bind(this)}>Try Again!</button>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary

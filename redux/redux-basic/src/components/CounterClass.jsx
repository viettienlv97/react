import { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  incrementHandler() {
    this.props.increment()
  }

  decrementHandler() {
    this.props.decrement()
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    )
  }
}
// connect counter to props
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}
// connect increment and decrement to props
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch({ type: 'increment' })
    },
    decrement: () => {
      dispatch({ type: 'decrement' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props) // Must call super(props) before using 'this' in constructor
    this.state = {date: new Date()}
    console.log('Constructor called')
  }

  // This method runs once after the component is mounted (inserted into the DOM)
  componentDidMount() {
    console.log('component DIDMount called ')
    // Setting up an interval to update time every second
    this.timerId = setInterval(this.tick, 1000)
  }

  // This method updates the state with current time every second
  tick = () => {
    this.setState({date: new Date()})
  }

  // This method is called whenever the component re-renders (due to state or props change)
  render() {
    const {date} = this.state // Destructuring date from state
    console.log('render called', date) // Log current render time
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>{' '}
      </div>
    )
  }
}

export default Clock

// There are 3 key lifecycle methods in the mounting phase:
// 1. constructor()
// 2. render()
// 3. componentDidMount()

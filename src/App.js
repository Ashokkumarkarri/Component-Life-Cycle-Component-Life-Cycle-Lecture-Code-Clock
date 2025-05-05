import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showclock: false}

  onTOggleClock = () => {
    this.setState(prevState => {
      const {showclock} = prevState
      return {showclock: !showclock}
    })
  }

  render() {
    const {showclock} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onTOggleClock}
        >
          {showclock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {showclock && <Clock />}
      </div>
    )
  }
}

export default App

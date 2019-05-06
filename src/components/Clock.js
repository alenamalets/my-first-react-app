import React, { Component } from 'react'



export default class Clock extends Component {
    state = { hours: new Date().getHours(), minutes: new Date().getMinutes(), seconds: new Date().getSeconds()}
    
    tick = () => {
      this.setState({
        hours: new Date().getHours(), minutes: new Date().getMinutes(), seconds: new Date().getSeconds()
      })
    }

    componentDidMount() {
      setInterval(this.tick,1000)
    }
    render() {
      const {hours, minutes, seconds} = this.state
      return (
        <div>
          <div id="clock-container">
            <span id="hours">{hours}</span>:
            <span id="minutes">{minutes}</span>:
            <span id="seconds">{seconds}</span>
          </div>
        </div>
      )
    }
}
import React, { Component } from 'react'

export default class User extends Component {
    state = { present: true }

    toggle = () => {
      this.setState({
        present: !this.state.present
      })
    }

    render() {
      return (
        <div>
          <button onClick={this.toggle}>Toggle</button>
          <div>
            <p>User:  
              <b>{ this.props.name }</b>  is <b>{this.state.present ? '' : 'not'}</b> present 
            </p>
          </div>
        </div>
      )
    }
}
{/* <p>The light switch is <b>{ this.state.active ? 'on' : 'off' }</b></p>
<button onClick={this.toggle}>Toggle</button> */}


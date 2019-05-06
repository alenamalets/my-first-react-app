import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import LightSwitch from './components/LightSwitch'
import UserBoard from './components/UserBoard'
import Clock from './components/Clock'


class App extends Component{
  render () {
    return (
      <main>
        <Title content="Some Simple Title" />
        <LightSwitch />
        <UserBoard />
        <Clock />
      </main>

  
    )
  }
}

export default App;

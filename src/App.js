import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import LightSwitch from './components/LightSwitch'
import UserBoard from './components/UserBoard'

class App extends Component{
  render () {
    return (
      <main>
        <Title content="Some Simple Title" />
        <LightSwitch />
        <UserBoard />
      </main>

  
    )
  }
}

export default App;

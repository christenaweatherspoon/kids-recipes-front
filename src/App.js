import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Recipes from './Recipes'

class App extends Component {
  render () {
    return (
      <Recipes christena={true} />
    )
  }
}

export default App

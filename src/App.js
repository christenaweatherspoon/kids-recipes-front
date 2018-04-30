import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Recipes from './Recipes'
import RecipeForm from './RecipeForm'

class App extends Component {
  render () {
    return (
    <div> 
      
      <RecipeForm />
      <Recipes />
    
    </div>
    )
  }
}

export default App

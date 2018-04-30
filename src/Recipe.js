import React, {Component } from 'react'
import axios from 'axios'

class Recipe extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.currentRecipe.name}</h1>
        {this.props.currentRecipe.ingredients}
        {this.props.currentRecipe.instructions}
      </div>
    )
  }
}


export default Recipe
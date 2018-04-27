import React, {Component } from 'react'
import axios from 'axios'

class Recipe extends Component {
  render () {
    return (
      <div>
        {this.props.currentRecipe.name}
      </div>
    )
  }
}




export default Recipe
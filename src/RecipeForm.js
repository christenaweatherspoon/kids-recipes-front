import React, { Component } from 'react'
import axios from 'axios'
import './RecipeForm.css'


class RecipeForm extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      ingredients: "",
      instructions: "",
    }
  }

  handleName (e) {
    this.setState({
      name: e.target.value
    })
  }
  handleIngredients (e) {
    this.setState({
      ingredients: e.target.value
    })
  }
  handleInstructions (e) {
    this.setState({
      instructions: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    axios.post("http://localhost:3001/recipes", {
      name: this.state.name,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions,
    })
    .catch(err => console.log(err))
  }
  render() {
    return(
      <div> 
        <form action="/recipes" method="post">
        <label>Name</label>
        <input onChange={(e) => this.handleName(e)} type="text" name="name" />
        <label>Ingredients</label>
        <input onChange={(e) => this.handleIngredients(e)} type="text" name="ingredients" />
        <label>Instructions</label>
        <input onChange={(e) => this.handleInstructions(e)} type="text" name="instructions" />
        <input type="submit" onClick={(e) => this.handleSubmit(e)} value="Add Recipe" />
        
  
</form>


      </div>
    )
    
  }
}





export default RecipeForm
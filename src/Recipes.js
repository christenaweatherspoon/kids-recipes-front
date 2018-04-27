import React, { Component } from "react";
import axios from "axios";
import Recipe from "./Recipe";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };

    // this.handleKeyUp = this.handleKeyUp.bind(this)
    // this.next = this.next.bind(this)
  }

  componentDidMount() {
    // window.addEventListener()
    axios
      .get("http://localhost:3001/recipes")
      .then(response => this.setState({ recipes: response.data }))
      .catch(err => console.log(err));
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <main>
          {this.state.recipes.map((recipe, i) => (
            <Recipe currentRecipe={recipe} />
          ))}
        </main>
      </div>
    );
  }
}

export default Recipes;

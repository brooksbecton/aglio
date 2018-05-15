import React, { Component } from "react";

import RecipeAndIngredients from "./containers/RecipeAndIngredients";

class App extends Component {
  render() {
    return (
      <div>
        <RecipeAndIngredients
          url="https://www.delish.com/cooking/recipe-ideas/a20671126/chicken-fried-shrimp-recipe/"
          render={({ recipe, ingredients }) => <div>Recipe</div>}
        />
      </div>
    );
  }
}

export default App;

/**
 * Get's a recipe's web page, scrapes the recipe and ingredients from it, and
 * returns the component state as arg to render prop.
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

class RecipeAndIngredients extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
  };

  constructor() {
    super();

    this.state = {
      recipe: [],
      ingredients: []
    };
  }

  componentDidMount() {
    this.getRecipePage(this.props.url);
  }

  getRecipePage = url => {
    fetch(url)
      .then(resp => resp.body)
      .then(html => {
        this.setState({ html });
      });
  };

  render() {
    return this.props.render(this.state);
  }
}

export default RecipeAndIngredients;

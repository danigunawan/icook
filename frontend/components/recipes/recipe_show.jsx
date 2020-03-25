import React from 'react';
import { Link } from "react-router-dom";
import StepListItem from '../steps/step_list_item';
import IngredientList from './ingredient_list';
// import StepList from '../steps/step_list';

class RecipeShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    this.props.requestRecipe(this.props.match.params.recipeId)
      .then(response => {
        this.setState({recipe: response.recipe})
      });
      // this.props.requestSteps(this.props.match.params.recipeId);
    }
    
    
    render () {
      console.log('this: ', this)
      if (!this.state.recipe) return null;
      if (!this.state.recipe.ingredients) return null;
      const { recipe } = this.state;
      let steps = [];
      if (recipe.steps) {
        steps = Object.values(recipe.steps)
      }

      console.log(steps)
    return (
      <div className="recipe-full-wrapper">
        <header className="article-header">
          <h1 className="header-title">
            {recipe.title}
          </h1>
          <div className="sub-header">
            By &nbsp;
            <Link to="/" className="recipe-author">{recipe.username}</Link>
            &nbsp; in &nbsp;
            <Link to="/" className="recipe-category">{recipe.category}</Link>
          </div>
        </header>
        <div className="article-body">
          <p>{recipe.body}</p>
          <div className="article-photo-container">
            <img src={recipe.photourl} />
          </div>
          <div>
            <h1>Ingredients: </h1>
            <br />
            <ul>
                {
                  recipe.ingredients.map((ingredient, idx) => (
                    <IngredientList ingredient={ingredient} key={idx} />
                  ))
                }
            </ul>
            {
              steps.map(step => (
                <StepListItem step={step} idx={step.id % steps[0].id} key={step.id} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
};

export default RecipeShow;
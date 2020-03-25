import React, { Component } from 'react';
// import EditRecipeContainer from '../edit_recipe/edit_recipe_container';
import CreateStep from '../../steps/create_step';
import CreateStepList from '../../recipes/create_steps/create_step_list';
import NewStep from '../../steps/new_step';

class CreateRecipe extends Component {

  constructor(props) {
    super(props);
  
    // this.state = this.props.recipe;
    this.state = {};
    // this.state = {recipe: {}};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStep = this.handleStep.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  componentDidMount() {
    this.props.requestRecipes()
      .then((res) => { 
        const recipeIdArray = Object.keys(res.recipes);
        const lastRecipeId = recipeIdArray[recipeIdArray.length - 1];
        const lastRecipe = res.recipes[lastRecipeId];
        this.props.requestRecipe(lastRecipe.id)
        .then(res => {
          this.setState(res.recipe)
        })
      })
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.updateRecipe(this.state);
    this.setState({
      recipe: {
        title: this.state.title,
        body: this.state.body,
        steps: this.state.steps
      }
    })
    this.props.history.push(`/recipes/${this.state.id}`)
  }

  handleStep(e) {
    e.preventDefault();
    const emptyStep = {
      title: "",
      body: "",
      recipe_id: this.state.id
    }
    this.props.createStep(emptyStep)
      .then(res => {
        console.log('recipe_id: ', this.state)
        const recipeId = res.step.recipe_id
        this.props.requestRecipe(recipeId)
          .then(res => this.setState(res.recipe))
      } )
  }
  
  render() {
    
    console.log('state: ', this.state)
    let stepList = [];
    if (this.state.steps) {
      stepList = Object.values(this.state.steps)
    }
    // const stepList = Object.values(this.state.steps)
    console.log('steplist: ', stepList)
    return (
      <div>
        <br/>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <div className="stepDetailBox">
            <div className="new-recipe-title">
              <h1>{this.state.title}</h1>
            </div>
            <label htmlFor="body">
              <textarea
                className="textEditor"
                placeholder="Description of the Recipe"
                onChange={this.update("body")}
              />
            </label>
            
            {/* <CreateStepList steps={this.state.steps} /> */}
            <ul>
          {/* {stepList.map((step, idx) => (
            
            <CreateStepListItem step={step} key={step.id} idx={idx}/>
          ))} */}
        {/* <NewStep step={step} key={idx} /> */}
        {/* console.log('stepsss: ', step) */}
         { stepList.map((step, idx) => (
           <div>
            <h2 className="recipe-step-title">Step {idx + 1}:
              <label htmlFor="stepTitle">
                <input type="text" value={step.title} onChange={this.update("stepTitle")} /> 
              </label>
            </h2>
            <div className="recipe-step-body">
              <textarea className="textEditor" placeholder="Step Description" onChange={this.update("body")} />
            </div>
           </div>
      ))}
        </ul>
            <div className="bottom-buttons">
              <div className="submit-button" onClick={ this.handleStep }>
                  Add Step
              </div>
              <div className="submit-button" onClick={this.handleSubmit}>Submit</div>
            </div>
          </div>

        </form>
      </div>
    );
  }
}

export default CreateRecipe;

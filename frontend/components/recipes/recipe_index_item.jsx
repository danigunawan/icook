import React from 'react';
import { Link } from "react-router-dom";

class RecipeIndexItem extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render () {
    return (
        <div className="recipe-index-item">
          <img src={window.indexURL} />
          <div className="recipe-info">
            <Link to="/recipes" className="recipe-title">{this.props.recipe.title}</Link>
            &nbsp; by &nbsp;
            <Link to="/recipes" className="recipe-author">{this.props.recipe.author.username}</Link>
            &nbsp; in &nbsp;
            <Link to="/recipes" className="recipe-category">{this.props.recipe.category}</Link>
          </div>
          <div className="recipe-stats">

          </div>
      </div>
    );
  }
};

export default RecipeIndexItem;
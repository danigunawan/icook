import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBottom extends Component {
  render() {
    return (
      <div className="site-header-bottom">
        <div className="site-header-bottom-left">
          <Link to='/'>
            <img src={window.spoonURL} />
            iCook
          </Link>
          <button>Recipes</button>
        </div>
        <div className="site-header-bottom-right">
          <Link to='/create'>
            PUBLISH
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBottom;

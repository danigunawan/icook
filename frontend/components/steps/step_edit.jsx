import React, { Component } from 'react';

class StepEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestStep(this.props.match.params.stepId)
      .then(res => this.setState(res.step))
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateStep(this.props.match.params.stepId);
    this.props.history.push(`/recipes/${this.state.recipe_id}/edit`);
  }
  
  render() {
    // console.log('props: ',this.props)
    // console.log('state: ',this.state)
    return (
      <div>
     <form onSubmit={this.handleSubmit}>
          <div className="stepDetailBox">
            <div className="new-recipe-title">
              <input value={this.state.title} onChange={this.update("title")}></input>
            </div>
            <label htmlFor="body">
              <textarea
                className="textEditor"
                value={this.state.body}
                onChange={this.update("body")}
              />
            </label>
            <div className="bottom-buttons">
              {/* <div className="submit-button" onClick={ this.handleStep }>
                  Add Step
              </div> */}
              <div className="submit-button" onClick={this.handleSubmit}>Submit</div>
            </div>
          </div>

        </form>
      </div>
    );
  }
}

export default StepEdit;

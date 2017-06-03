import React from 'react';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../actions/index'


/**
 * Its a container because it needs to dispatch actions.
 *
 */
class SearchBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {term: ''};
  }

  render(){
    return (
      <form onSubmit={this._onSubmitEvent.bind(this)} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite city"
          className="form-control"
          value={this.state.term}
          onChange={this._onInputChange.bind(this)}/>

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }

  /**
   * The function that handles the onChange event after the user types something
   * into the search bar.
   */
  _onInputChange(event){
    let term = event.target.value;
    this.setState({term});
  }

  /**
   * The function that handles the submit event of the search form.
   */
  _onSubmitEvent(event){
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term:''}); //clear the search form
  }

}

/**
 * This function makes sure the action gets dispatched to the middleware and
 * eventually to the reducer.
 */
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

//passing 'null' means this container is not interested in any state at the moment
export default connect(null, mapDispatchToProps)(SearchBar);

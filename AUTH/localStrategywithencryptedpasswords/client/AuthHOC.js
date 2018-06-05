import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {

    let content = <Redirect to='/'/>;

    if(this.props.authenticated){
      content = <ComposedComponent {...this.props} />;
    }

    render() {

      return {content};
    }
  }

  function mapstate = (state) => {
    return {
      authenticated : state.authenticated
    }
  }

  return connect(mapstate)(Authentication);
}


//wrap this around protected components

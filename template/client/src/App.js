import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './actions/actions';
import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' exact component={() => <div>Hey</div>} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapstate = (state) => {
  return {
    var : state.auth  //get auth reducer's state
  }
}

export default connect(mapstate, actions)(App);

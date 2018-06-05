import React, {Component} from 'react';

export default function(ComposedComponent) {
  class HOC extends Component {
    render() {

      return <ComposedComponent {...this.props} />
    }
  }

  return HOC      // connect(x,y)(HOC)  if we want accss to state here
}

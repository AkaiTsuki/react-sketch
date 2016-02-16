import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export const Previewable = ComposedComponent => {
  class PreviewableProvider extends Component {
    constructor(props, context) {
      super(props, context);
    }

    render(){
      return (<div style={this.props.style}><ComposedComponent {...this.props} /></div>);
    }
  }
  return PreviewableProvider;
}

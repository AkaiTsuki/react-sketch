import React, { Component, PropTypes } from 'react';

export default class MainFrame extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container-fluid full-height" >
        <div className="row full-height">
          {this.props.children}
        </div>
      </div>
    )
  }
}

import React, { Component, PropTypes } from 'react';

export default class FunctionalConsole extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){

    const btnStyle = {
      marginRight: '5px'
    }

    return(
      <div className="console-functional-panel">
        <h3>Canvas Functions</h3>
        <hr style={{margin: '0 0 5px  0'}} />

        <button className="btn btn-primary" style={btnStyle}>Delete Selected Widgets</button>
        <button className="btn btn-primary" style={btnStyle}>Group Selected Widgets</button>
      </div>
    )
  }
}

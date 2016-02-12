import React, { Component, PropTypes } from 'react';

const style = {
  backgroundColor: '#cecece'
};

export default class WidgetConsole extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="col-md-3 full-height" style={style}>
      </div>
    )
  }
}

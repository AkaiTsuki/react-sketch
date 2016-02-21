import React, { Component, PropTypes } from 'react';
import Canvas from './Canvas';

export default class Viewport extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render(){
    const {widgets, actions, selected,selectedWidgets, selectIndicator, config} = this.props;
    const style = {
      backgroundColor: '#212121',
      overflow: 'auto'
    };

    return (
      <div className="col-md-8 full-height view" style={style}>
        <Canvas widgets={widgets} actions={actions} selected={selected} selectedWidgets={selectedWidgets} selectIndicator={selectIndicator} config={config}/>
      </div>
    )
  }
}

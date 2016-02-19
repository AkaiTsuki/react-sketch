import React, { Component, PropTypes } from 'react';

export const Absolutify = ComposedComponent => {
  class AbsolutePositionProvider extends Component {
    constructor(props, context) {
      super(props, context);
    }

    render(){
      const {x, y, zIndex } = this.props;
      const style = {
        position: 'absolute',
        top: y,
        left: x,
        zIndex: 5
      }
      if(zIndex){
        style.zIndex = zIndex;
      }
      return <div className="absolutify" style={style} ><ComposedComponent {...this.props} /></div>;
    }
  }

  return AbsolutePositionProvider;
}

import React, { Component, PropTypes } from 'react';

export const Shadow = ComposedComponent => {
  class ShadowProvider extends Component {
    constructor(props, context) {
      super(props, context);
    }

    render(){
      const {x, y } = this.props;
      const style = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }
      return (
        <div className="shadow">
          <ComposedComponent {...this.props} />
          <div className="shadow" style={style}></div>
        </div>
      );
    }
  }

  return ShadowProvider;
}

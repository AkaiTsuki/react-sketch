import React, { Component, PropTypes } from 'react'
import ResizeIndicator from './ResizeIndicator'
import * as ResizeConstants from '../../constants/ResizeConstants';

export const Resizable = ComposedComponent => {
  class ResizableProvider extends Component {
    constructor(props, context) {
      super(props, context);
    }

    render(){
      return (
        <div className="resizable">
          <ComposedComponent {...this.props} />
          <ResizeIndicator direction={ResizeConstants.R} {...this.props} />
          <ResizeIndicator direction={ResizeConstants.L} {...this.props} />
          <ResizeIndicator direction={ResizeConstants.T} {...this.props} />
        </div>
      );
    }
  }
  return ResizableProvider;
}

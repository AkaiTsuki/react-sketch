import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import * as WidgetUtil from '../WidgetUtil';
import * as WidgetType from '../../constants/WidgetType';


/**
* Measurable HOC wraps a given compoent so that its width and height can be measured after
* mount to html DOM.
*/
export const Measurable = ComposedComponent => {
  class MeasurableProvider extends Component{
    constructor(props, context) {
      super(props, context);
    }

    componentDidMount(){
      const {id, actions} = this.props;
      const self = ReactDOM.findDOMNode(this);
      const width = self.offsetWidth;
      const height = self.offsetHeight;
      const marginTop = WidgetUtil.getTopMargin(self);
      const marginBottom = WidgetUtil.getBottomMargin(self);
      console.log("Update Layout")

      actions.updateLayout(id, width, height, marginTop, marginBottom);
    }

    render(){
      return (<ComposedComponent {...this.props} />);
    }
  }

  return MeasurableProvider;
}

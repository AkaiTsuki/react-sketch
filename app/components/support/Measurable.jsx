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
      this.updateLayout = this.updateLayout.bind(this);
    }

    componentDidMount(){
      this.updateLayout();
    }

    componentDidUpdate(prevProps){
      this.updateLayout();
    }

    updateLayout(){
      const {id, actions, width, height} = this.props;
      const self = ReactDOM.findDOMNode(this);
      const offsetWidth = self.offsetWidth;
      const offsetHeight = self.offsetHeight;
      const marginTop = WidgetUtil.getTopMargin(self);
      const marginBottom = WidgetUtil.getBottomMargin(self);
      if(width !== offsetWidth || height !== offsetHeight){
        actions.updateLayout(id, offsetWidth, offsetHeight, marginTop, marginBottom);
      }
    }

    render(){
      return (<ComposedComponent {...this.props} />);
    }
  }

  return MeasurableProvider;
}

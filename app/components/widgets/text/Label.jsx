import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import * as WidgetUtil from '../../WidgetUtil';

export default class Label extends Component{
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

    actions.updateLayout(id, width, height, marginTop, marginBottom);
  }

  render(){
    const {id, text, x, y} = this.props;
    const style = {
      top: y,
      left: x,
      margin: 0
    }

    return <label className="widget abs-pos" style={style}>{text}</label>
  }
}

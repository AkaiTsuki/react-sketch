import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import * as WidgetUtil from '../../WidgetUtil';

export default class Title extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
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
    const {id, text, x, y, tag, actions, isSelected} = this.props;
    const style = {
      top: y,
      left: x
    }
    let className = "widget abs-pos";
    if(isSelected){
      className = className + " selected";
    }

    const Tag = tag;

    return <Tag className={className} id={id} style={style} onClick={this.handleClick}>{text}</Tag>
  }

  handleClick(){
    const {id, actions} = this.props;
    actions.selectWidget(id);
  }
}

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import * as WidgetUtil from '../../WidgetUtil';
import * as WidgetType from '../../../constants/WidgetType';
import { DragSource } from 'react-dnd';

const labelSource = {
  beginDrag(props) {
    return {
      id: props.id
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Label extends Component{
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
    const {id, text, x, y, isSelected, connectDragSource} = this.props;
    const style = {
      top: y,
      left: x,
      margin: 0
    }

    let className = "widget abs-pos";
    if(isSelected){
      className = className + " selected";
    }

    return connectDragSource(<label className={className} style={style} onClick={this.handleClick}>{text}</label>);
  }

  handleClick(){
    const {id, actions} = this.props;
    actions.selectWidget(id);
  }
}

export default DragSource(WidgetType.WIDGET_DRAGGABLE, labelSource, collect)(Label);

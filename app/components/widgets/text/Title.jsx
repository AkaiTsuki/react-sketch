import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import * as WidgetUtil from '../../WidgetUtil';
import * as WidgetType from '../../../constants/WidgetType';
import { DragSource } from 'react-dnd';

const titleSource = {
  beginDrag(props) {
    console.log("Begin Drag");
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

class Title extends Component {
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
    const {id, text, x, y, tag, actions, isSelected, connectDragSource} = this.props;
    const style = {
      top: y,
      left: x
    }
    let className = "widget abs-pos";
    if(isSelected){
      className = className + " selected";
    }

    const Tag = tag;

    return connectDragSource(<Tag className={className} id={id} style={style} onClick={this.handleClick}>{text}</Tag>)
  }

  handleClick(e){
    const {id, actions} = this.props;
    const multi = e.ctrlKey;
    actions.selectWidget(id, multi);
  }
}

export default DragSource(WidgetType.WIDGET_DRAGGABLE, titleSource, collect)(Title);

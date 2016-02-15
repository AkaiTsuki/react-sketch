import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import * as WidgetType from '../../../constants/WidgetType';
import { DragSource } from 'react-dnd';

const source = {
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

export const Draggable = ComposedComponent => {

  class DraggableProvider extends Component{
    constructor(props, context) {
      super(props, context);
    }

    render(){
      const {connectDragSource, x, y} = this.props;
      const style = {
        top: y,
        left: x
      }
      return connectDragSource(<div className="draggable abs-pos" style={style} ><ComposedComponent {...this.props} /></div>);
    }
  }

  return DragSource(WidgetType.WIDGET_DRAGGABLE, source, collect)(DraggableProvider);
}

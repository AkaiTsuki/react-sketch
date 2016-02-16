import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import * as WidgetType from '../../constants/WidgetType';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

const source = {
  canDrag(props) {
    return props.selected[props.id];
  },

  beginDrag(props) {
    return {
      id: props.id,
      selected: props.selected,
      text: props.text,
      type: props.widgetType
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

export const Draggable = ComposedComponent => {

  class DraggableProvider extends Component{
    constructor(props, context) {
      super(props, context);
    }

    componentDidMount() {
    // Use empty image as a drag preview so browsers don't draw it
    // and we can draw whatever we want on the custom drag layer instead.
    this.props.connectDragPreview(getEmptyImage(), {
      // IE fallback: specify that we'd rather screenshot the node
      // when it already knows it's being dragged so we can hide it with CSS.
      captureDraggingState: true
    });
  }


    render(){
      const {connectDragSource, x, y, isDragging, zIndex } = this.props;
      const style = {
        position: 'absolute',
        top: y,
        left: x,
        zIndex: 5,
        // IE fallback to hide the node
        opacity: isDragging ? 0 : 1,
        height: isDragging ? 0 : ''
      }
      if(zIndex){
        style.zIndex = zIndex;
      }

      return connectDragSource(<div className="draggable" style={style} ><ComposedComponent {...this.props} /></div>);
    }
  }

  return DragSource(WidgetType.WIDGET_DRAGGABLE, source, collect)(DraggableProvider);
}

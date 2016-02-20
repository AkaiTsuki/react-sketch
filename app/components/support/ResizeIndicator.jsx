import React, { Component, PropTypes } from 'react'
import {calculateResizeIndicatorPosition} from '../../support/PositionSupport'
import { getEmptyImage } from 'react-dnd-html5-backend';
import { DragSource } from 'react-dnd';
import * as WidgetType from '../../constants/WidgetType';
import * as ResizeConstants from '../../constants/ResizeConstants';

const source = {
  canDrag(props) {
    return props.isSelected;
  },

  beginDrag(props) {
    return {
      id: props.id,
      direction: props.direction,
      x: props.x,
      y: props.y,
      width: props.width,
      height: props.height
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

class ResizeIndicator extends Component {
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

  cursorStyle(direction){
    switch (direction) {
      case ResizeConstants.L:
      case ResizeConstants.R:
        return 'ew-resize';
      case ResizeConstants.T:
      case ResizeConstants.B:
        return 'ns-resize';
      default:
        return 'pointer';
    }
  }

  render() {
    const {x,y,width,height, isSelected, direction,connectDragSource } = this.props;

    if(!isSelected){
      return null;
    }

    const indicatorLen = 10;
    const position = calculateResizeIndicatorPosition(width, height, indicatorLen, direction);

    const style = {
      position: 'absolute',
      top: position.y,
      left: position.x,
      width: indicatorLen,
      height: indicatorLen,
      backgroundColor: 'blue',
      cursor: this.cursorStyle(direction),
      zIndex: '65539'
    }

    return connectDragSource(
      <div style={style}></div>
    )
  }
}

export default DragSource(WidgetType.WIDGET_DRAGGABLE, source, collect)(ResizeIndicator);

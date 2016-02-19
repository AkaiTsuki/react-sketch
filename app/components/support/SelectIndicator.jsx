import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import * as WidgetType from '../../constants/WidgetType';
import { getEmptyImage } from 'react-dnd-html5-backend';

const source = {
  beginDrag(props) {
    return {
      id: 'SELECT_INDICATOR',
      left: props.selectIndicator.left,
      top: props.selectIndicator.top,
      width: props.selectIndicator.width,
      height: props.selectIndicator.height,
      selected: props.selected
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

class SelectIndicator extends Component {
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
    const {selectIndicator, connectDragSource} = this.props;
    const indicatorStyle = {
      left: selectIndicator.left,
      top: selectIndicator.top,
      width: selectIndicator.width,
      height: selectIndicator.height,
      position: 'absolute',
      boxShadow: '0 0 0 1px #0D47A1',
      zIndex: 65534
    }
    return connectDragSource(<div className='select-indicator' style={indicatorStyle}></div>);
  }
}

export default DragSource(WidgetType.WIDGET_DRAGGABLE, source, collect)(SelectIndicator);

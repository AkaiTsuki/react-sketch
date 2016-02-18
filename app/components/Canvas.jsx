import React, { Component, PropTypes } from 'react';
import * as WIDGET_TYPE from '../constants/WidgetType';
import Paper from './Paper'
import { DropTarget } from 'react-dnd';
import CustomDragLayer from './support/CustomDragLayer.jsx';

const CANVAS_ID = 'canvas';

const canvasTarget = {
  drop(props, monitor) {
    const draggedItem = monitor.getItem();
    if(draggedItem.id !== CANVAS_ID){
      const offset = monitor.getDifferenceFromInitialOffset();
      props.actions.moveSelectedWidgets(draggedItem.selected, offset.x, offset.y);
    } else {
      const scrollTop = draggedItem.scrollTop;
      const initClientOffset = monitor.getInitialClientOffset();
      const initSourceClientOffset = monitor.getInitialSourceClientOffset();
      const currentOffset = monitor.getDifferenceFromInitialOffset();

      const leftTopOffset = {
        x: currentOffset.x < 0 ? initClientOffset.x - initSourceClientOffset.x + currentOffset.x : initClientOffset.x - initSourceClientOffset.x,
        y: currentOffset.y < 0 ? initClientOffset.y - initSourceClientOffset.y + currentOffset.y + scrollTop : initClientOffset.y - initSourceClientOffset.y + scrollTop,
      }

      const absCurrentOffset = {
        x: Math.abs(currentOffset.x),
        y: Math.abs(currentOffset.y)
      }

      props.actions.dragSelectWidgets(props.widgets, leftTopOffset, absCurrentOffset);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    currentOffset: monitor.getSourceClientOffset()
  };
}

class Canvas extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render() {

    const {connectDropTarget, widgets, actions, selected} = this.props;
    const style = {
      backgroundColor: '#212121',
      overflow: 'auto'
    };

    return connectDropTarget(
      <div className="col-md-8 full-height" style={style}>
        <Paper widgets={widgets} actions={actions} selected={selected} />
      </div>
    )
  }

}

export default DropTarget(WIDGET_TYPE.WIDGET_DRAGGABLE, canvasTarget, collect)(Canvas);

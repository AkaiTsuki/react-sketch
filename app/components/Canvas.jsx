import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import * as WIDGET_TYPE from '../constants/WidgetType';
import Paper from './Paper'
import { DropTarget } from 'react-dnd';
import CustomDragLayer from './support/CustomDragLayer.jsx';
import {calculateDragSelectRectLeftTopPosition,snapToGridHalf} from '../support/PositionSupport'

const handleSelectWidgetInReact = (props, monitor, draggedItem) => {
  const initClientOffset = monitor.getInitialClientOffset();
  const initSourceClientOffset = monitor.getInitialSourceClientOffset();
  const currentOffset = monitor.getDifferenceFromInitialOffset();

  const leftTopPosition = calculateDragSelectRectLeftTopPosition(currentOffset, initClientOffset, initSourceClientOffset);

  const absCurrentOffset = {
    x: Math.abs(currentOffset.x),
    y: Math.abs(currentOffset.y)
  }

  props.actions.selectWidgetsInRect(props.widgets, leftTopPosition, absCurrentOffset);
}

const handleReisze = (props, monitor, draggedItem) => {
  const offset = monitor.getDifferenceFromInitialOffset();
  let {x, y} = offset;
  x = snapToGridHalf(x);
  y = snapToGridHalf(y);

  props.actions.resizeWidget(draggedItem.id, draggedItem.direction, x, y);
}

const canvasTarget = {
  drop(props, monitor, component) {
    const draggedItem = monitor.getItem();
    if(draggedItem.id === WIDGET_TYPE.DRAG_SELECT_RECT) {
      handleSelectWidgetInReact(props, monitor, draggedItem);
    } else if(draggedItem.direction){
      handleReisze(props, monitor, draggedItem);
    } else {
      const offset = monitor.getDifferenceFromInitialOffset();
      props.actions.moveSelectedWidgets(props.selected, offset.x, offset.y);
    }
  },
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

    const {connectDropTarget, widgets, actions, selected,selectedWidgets, selectIndicator} = this.props;
    const style = {
      backgroundColor: '#212121',
      width: 5000,
      height: 10000,
      position: 'absolute',
      top: 0,
      left: 0
    };

    return connectDropTarget(
      <div className="canvas" style={style}>
        <Paper widgets={widgets} actions={actions} selected={selected} selectedWidgets={selectedWidgets} selectIndicator={selectIndicator}/>
      </div>
    )
  }

}

export default DropTarget(WIDGET_TYPE.WIDGET_DRAGGABLE, canvasTarget, collect)(Canvas);

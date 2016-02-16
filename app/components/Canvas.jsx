import React, { Component, PropTypes } from 'react';
import * as WIDGET_TYPE from '../constants/WidgetType';
import {renderDraggable} from '../support/WidgetRenderSupport'

import { DropTarget } from 'react-dnd';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import CustomDragLayer from './support/CustomDragLayer.jsx';

const CANVAS_ID = 'canvas';

const canvasSource = {
  canDrag(props) {
    for(let id in props.selected){
      if(props.selected[id]) return false;
    }
    return true;
  },

  beginDrag(props) {
    return {
      id : CANVAS_ID
    };
  }
};


function sourceCollect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

const canvasTarget = {
  drop(props, monitor) {
    const draggedItem = monitor.getItem();
    if(draggedItem.id !== CANVAS_ID){
      const offset = monitor.getDifferenceFromInitialOffset();
      props.actions.moveSelectedWidgets(draggedItem.selected, offset.x, offset.y);
    } else {
      const initClientOffset = monitor.getInitialClientOffset();
      const initSourceClientOffset = monitor.getInitialSourceClientOffset();
      const currentOffset = monitor.getDifferenceFromInitialOffset();

      const leftTopOffset = {
        x: currentOffset.x < 0 ? initClientOffset.x - initSourceClientOffset.x + currentOffset.x : initClientOffset.x - initSourceClientOffset.x,
        y: currentOffset.y < 0 ? initClientOffset.y - initSourceClientOffset.y + currentOffset.y : initClientOffset.y - initSourceClientOffset.y,
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
    this._onClick = this._onClick.bind(this);
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

  render() {
    const {connectDropTarget, connectDragSource, widgets} = this.props;
    const style = {
      backgroundColor: 'rgba(0,0,0,0.7)'
    };

    const paperStyle = {
      position:'relative',
      backgroundColor: 'white',
      overflowY: 'auto',
      left: 0,
      top: 0
    }

    return (connectDropTarget(
      <div className="col-md-7 full-height" style={style}>
        {
          connectDragSource(
            <div className="paper full-height" style={paperStyle} onClick={this._onClick}>
              {this.renderWidgets()}
              <CustomDragLayer widgets={widgets} />
            </div>
          )
        }
      </div>
    ))
  }

  _onClick(e) {
    const {actions} = this.props;
    actions.unSelectAll();
  }

  renderWidgets() {
    const {widgets} = this.props;

    const widgetEle = [];
    for(let key in widgets){
      const widget = widgets[key];
      widgetEle.push(this.renderWidget(widget));
    }
    return widgetEle;
  }

  renderWidget(widget) {
    return renderDraggable(widget, this.props);
  }
}

export default DragSource(WIDGET_TYPE.WIDGET_DRAGGABLE, canvasSource, sourceCollect)(DropTarget(WIDGET_TYPE.WIDGET_DRAGGABLE, canvasTarget, collect)(Canvas));

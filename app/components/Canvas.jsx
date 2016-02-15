import React, { Component, PropTypes } from 'react';
import * as WIDGET_TYPE from '../constants/WidgetType';
import {renderDraggable} from '../support/WidgetRenderSupport'

import { DropTarget } from 'react-dnd';

const canvasTarget = {
  drop(props, monitor) {
    const draggedItem = monitor.getItem();
    const offset = monitor.getDifferenceFromInitialOffset();
    props.actions.moveSelectedWidgets(draggedItem.selected, offset.x, offset.y);
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

  render() {
    const {connectDropTarget} = this.props;
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

    return connectDropTarget(
      <div className="col-md-7 full-height" style={style}>
        <div className="paper full-height" style={paperStyle} onClick={this._onClick}>
          {this.renderWidgets()}
        </div>
      </div>
    )
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

export default DropTarget(WIDGET_TYPE.WIDGET_DRAGGABLE, canvasTarget, collect)(Canvas);

import React, { Component, PropTypes } from 'react';
import * as WidgetType from '../../constants/WidgetType';
import { DragLayer } from 'react-dnd';
import {renderPreivew} from '../../support/WidgetRenderSupport'

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
};


class CustomDragLayer extends Component{
  getItemStyles(props, widget, draggedWidget){
    const { currentOffset } = props;
    let { x, y } = currentOffset;

    const deltaX = draggedWidget.x - widget.x;
    const deltaY = draggedWidget.y - widget.y;

    return {
      position: 'absolute',
      // transform: transform,
      // WebkitTransform: transform
      top: y- deltaY,
      left: x - deltaX,
      boxShadow: '0 0 0 1px blue',
      opacity: 0.5
    };
  }

  renderItem(props, widget, draggedWidget) {
    const style = this.getItemStyles(props, widget, draggedWidget);
    return renderPreivew(widget, style);
  }

  renderItems(props, item){
    const {widgets} = props;
    const selected = item.selected;
    const draggedWidget = widgets[item.id];

    const selectedWidgets = [];
    for(let id in selected){
      if(selected[id]){
        selectedWidgets.push(widgets[id]);
      }
    }

    return selectedWidgets.map(widget => this.renderItem(props, widget, draggedWidget));
  }

  render() {
    const { item, isDragging, currentOffset } = this.props;

    if (!isDragging || !currentOffset) {
      return null;
    }

    return (
      <div style={layerStyles}>
          {this.renderItems(this.props, item)}
      </div>
    );
  }
}

function collect(monitor) {
  return {
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  }
}


export default DragLayer(collect)(CustomDragLayer);

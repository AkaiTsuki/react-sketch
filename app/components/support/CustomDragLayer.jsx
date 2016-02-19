import React, { Component, PropTypes } from 'react';
import * as WidgetType from '../../constants/WidgetType';
import { DragLayer } from 'react-dnd';
import {renderPreivew} from '../../support/WidgetRenderSupport'

const layerStyles = {
  position: 'absolute',
  pointerEvents: 'none',
  zIndex: 65535,
  // margin: '0 15px',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
};


class CustomDragLayer extends Component{
  getItemStyles(props, widget, draggedWidget){
    const { currentOffset } = props;
    let { x, y } = currentOffset;

    const style = {
      position: 'absolute',
      // transform: transform,
      // WebkitTransform: transform
      top: widget.y + y,
      left: widget.x + x,
      boxShadow: '0 0 0 1px blue',
      opacity: 0.5
    };

    return style;
  }

  renderItem(props, widget, draggedWidget) {
    const style = this.getItemStyles(props, widget, draggedWidget);
    return renderPreivew(widget, style);
  }

  renderItems(props, item){
    const {selectedWidgets} = props;
    const selected = item.selected;
    const draggedWidget = selectedWidgets.filter(w => w.id === item.id)[0];
    return selectedWidgets.map(widget => this.renderItem(props, widget, draggedWidget));;
  }

  renderCanvasPreview(props){
    const {currentOffset, initClientOffset, initSourceClientOffset, isDragging} = props;
    const initOffset = {
      x: currentOffset.x < 0 ? initClientOffset.x - initSourceClientOffset.x + currentOffset.x : initClientOffset.x - initSourceClientOffset.x,
      y: currentOffset.y < 0 ? initClientOffset.y - initSourceClientOffset.y + currentOffset.y : initClientOffset.y - initSourceClientOffset.y
    }

    const style = {
      position: 'absolute',
      top: initOffset.y,
      left: initOffset.x,
      width: Math.abs(currentOffset.x),
      height: Math.abs(currentOffset.y),
      boxShadow: '0 0 0 1px red'
    };

    return (
      <div style={layerStyles}>
        <div style={style}></div>
      </div>
    )
  }

  renderSelectIndicator(props){
    const {currentOffset, item} = props;

    const style = {
      position: 'absolute',
      top: item.top + currentOffset.y,
      left: item.left + currentOffset.x,
      width: item.width,
      height: item.height,
      boxShadow: '0 0 0 1px #0D47A1'
    }

    return (
      <div style={layerStyles}>
        <div style={style}></div>
        {this.renderItems(props, item)}
      </div>
    )
  }

  render() {
    const { item, isDragging, currentOffset } = this.props;

    if (!isDragging || !currentOffset) {
      return null;
    }

    if(item.id === 'SELECT_INDICATOR'){
      return this.renderSelectIndicator(this.props);
    };

    if(item.id === 'canvas'){
      return this.renderCanvasPreview(this.props);
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
    currentOffset: monitor.getDifferenceFromInitialOffset(),
    initClientOffset: monitor.getInitialClientOffset(),
    initSourceClientOffset: monitor.getInitialSourceClientOffset(),
    isDragging: monitor.isDragging()
  }
}


export default DragLayer(collect)(CustomDragLayer);

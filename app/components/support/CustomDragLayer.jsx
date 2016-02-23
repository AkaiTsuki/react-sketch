import React, { Component, PropTypes } from 'react';
import * as WidgetType from '../../constants/WidgetType';
import { DragLayer } from 'react-dnd';
import {renderPreivew, calculateResizePreviewStyle} from '../../support/WidgetRenderSupport'
import {snapToGrid, snapToGridHalf, calculateDragSelectRectLeftTopPosition} from '../../support/PositionSupport'

const layerStyles = {
  position: 'absolute',
  pointerEvents: 'none',
  zIndex: 65535,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
};

class CustomDragLayer extends Component{
  getItemStyles(props, widget){
    const { currentOffset } = props;

    let { x, y } = currentOffset;
    x = snapToGrid(x);
    y = snapToGrid(y)

    return {
      position: 'absolute',
      top: widget.y + y,
      left: widget.x + x,
      boxShadow: '0 0 0 1px blue',
      opacity: 0.5
    };
  }

  renderItem(props, widget) {
    const style = this.getItemStyles(props, widget);
    return renderPreivew(widget, style);
  }

  renderItems(props){
    const {selectedWidgets} = props;
    return selectedWidgets.map(widget => this.renderItem(props, widget));;
  }

  renderCanvasPreview(props){
    const {currentOffset, initClientOffset, initSourceClientOffset} = props;
    const initOffset = calculateDragSelectRectLeftTopPosition(currentOffset, initClientOffset, initSourceClientOffset);

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

    let { x, y } = currentOffset;
    x = snapToGrid(x);
    y = snapToGrid(y);

    const style = {
      position: 'absolute',
      top: item.top + y,
      left: item.left + x,
      width: item.width,
      height: item.height,
      boxShadow: '0 0 0 1px #0D47A1'
    }

    return (
      <div style={layerStyles}>
        <div style={style}></div>
        {this.renderItems(props)}
        {this.renderVerticalAlignAssist(props, style)}
        {this.renderHorizontalAlignAssist(props, style)}
      </div>
    )
  }

  renderResizePreview(props){
    const style = calculateResizePreviewStyle(props);
    return (
      <div style={layerStyles}>
        <div style={style}></div>
      </div>
    )
  }

  renderVerticalAlignAssist(props, style){
    const {alignments} = props;
    const x = style.left;
    const y = style.top;
    if(!alignments.vertical[x]) return null;

    const top = alignments.vertical[x].min < y ? alignments.vertical[x].min : y;
    const height = alignments.vertical[x].max < y ? y - top : alignments.vertical[x].max - top;
    const verticalStyle = {
      position: 'absolute',
      width: 1,
      left: x - 1,
      top: top,
      height: Math.abs(height),
      borderRight: '1px dashed green'
    };

    return (
      <div style={verticalStyle}></div>
    )
  }

  renderHorizontalAlignAssist(props, style) {
    const {alignments} = props;
    const x = style.left;
    const y = style.top;
    if(!alignments.horizontal[y]) return null;

    const left = alignments.horizontal[y].min < x ? alignments.horizontal[y].min : x;
    const width = alignments.horizontal[y].max < x ? x - left : alignments.horizontal[y].max - left;
    const horizontalStyle = {
      position: 'absolute',
      width: Math.abs(width),
      left: left,
      top: y - 1,
      height: 1,
      borderBottom: '1px dashed green'
    };
    
    return (
      <div style={horizontalStyle}></div>
    )
  }

  render() {
    const { item, isDragging, currentOffset } = this.props;

    if (!isDragging || !currentOffset) {
      return null;
    }

    if(item.id === WidgetType.SELECT_INDICATOR){
      return this.renderSelectIndicator(this.props);
    };

    if(item.id === WidgetType.DRAG_SELECT_RECT){
      return this.renderCanvasPreview(this.props);
    }

    if(item.direction){
      return this.renderResizePreview(this.props);
    }

    return null;
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

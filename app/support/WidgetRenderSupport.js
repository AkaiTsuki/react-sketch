import React, { Component, PropTypes } from 'react';
import * as WidgetType from '../constants/WidgetType';
import * as ResizeConstants from '../constants/ResizeConstants';

import LabelAbsolutify from '../components/widgets/text/LabelAbsolutify.jsx';
import TitleAbsolutify from '../components/widgets/text/TitleAbsolutify.jsx';
import TextInputAbsolutify from '../components/widgets/form/TextInputAbsolutify.jsx';
import PanelAbsolutify from '../components/widgets/container/PanelAbsolutify.jsx';

import LabelPreview from '../components/widgets/text/LabelPreview.jsx';
import TitlePreview from '../components/widgets/text/TitlePreview.jsx';
import TextInputPreview from '../components/widgets/form/TextInputPreview.jsx';
import PanelPreview from '../components/widgets/container/PanelPreview.jsx';

import {snapToGrid, snapToGridHalf, calculateDragSelectRectLeftTopPosition} from './PositionSupport'

export const renderPreivew = (widget, style) => {
  switch (widget.type) {
    case WidgetType.WIDGET_LABEL:
      return <LabelPreview key={widget.id} style={style} text={widget.text} />
    case WidgetType.WIDGET_TITLE:
      return <TitlePreview key={widget.id} style={style} text={widget.text} tag={widget.dom} />
    case WidgetType.WIDGET_INPUT_TEXT:
      return <TextInputPreview key={widget.id} style={style} width={widget.width} />
    case WidgetType.WIDGET_PANEL:
      return <PanelPreview key={widget.id} style={style} width={widget.width} height={widget.height}/>
    default:
      return null;
  }
}


const renderDraggableTitle = (widget, props) => {
  const {selected, actions} = props;
  return <TitleAbsolutify onSelect={actions.selectWidget} width={widget.width} height={widget.height} key={widget.id} id={widget.id} tag={widget.dom} text={widget.text} x={widget.x} y={widget.y} actions={actions} isSelected={selected[widget.id] === true} selected={selected} />
}

const renderDraggableLabel = (widget, props) => {
  const {selected, actions} = props;
  return <LabelAbsolutify onSelect={actions.selectWidget} width={widget.width} height={widget.height} key={widget.id} id={widget.id} text={widget.text} x={widget.x} y={widget.y} actions={actions} isSelected={selected[widget.id] === true} selected={selected} widgetType={widget.type} />
}

const renderDraggableTextInput = (widget, props) => {
  const {selected, actions} = props;
  return <TextInputAbsolutify onSelect={actions.selectWidget} width={widget.width} height={widget.height} key={widget.id} id={widget.id} x={widget.x} y={widget.y} actions={actions} isSelected={selected[widget.id] === true} selected={selected} />
}

const renderDraggablePanel = (widget, props) => {
  const {selected, actions} = props;
  return <PanelAbsolutify zIndex={3} onSelect={actions.selectWidget} key={widget.id} id={widget.id} x={widget.x} y={widget.y} actions={actions} isSelected={selected[widget.id] === true} width={widget.width} height={widget.height} selected={selected} />
}

export const renderDraggable = (widget, props) => {
  switch(widget.type){
    case WidgetType.WIDGET_TITLE:
      return renderDraggableTitle(widget, props);
    case WidgetType.WIDGET_LABEL:
      return renderDraggableLabel(widget, props);
    case WidgetType.WIDGET_INPUT_TEXT:
      return renderDraggableTextInput(widget, props);
    case WidgetType.WIDGET_PANEL:
      return renderDraggablePanel(widget, props);
    default:
      console.error("Unsupport widget type: "+ widget.type);
      return null;
  }
}

const getReizsePreviewCommonStyle = () => {
  return {
    position: 'absolute',
    boxShadow: '0 0 0 1px #0D47A1'
  }
}

const calculateRightResizePreviewStyle = (item, x, y) => {
  const style = getReizsePreviewCommonStyle();
  style.top = item.y;
  style.left = item.x;
  style.width = item.width + x;
  style.height = item.height;
  return style;
}

const calculateLeftResizePreviewStyle = (item, x, y) => {
  const style = getReizsePreviewCommonStyle();
  style.top = item.y;
  style.left = item.x + x;
  style.width = item.width - x;
  style.height = item.height;
  return style;
}

const calculateTopResizePreviewStyle = (item, x, y) => {
  const style = getReizsePreviewCommonStyle();
  style.top = item.y + y;
  style.left = item.x;
  style.width = item.width;
  style.height = item.height - y;
  return style;
}

export const calculateResizePreviewStyle = (props) => {
  const {currentOffset, item} = props;
  let { x, y } = currentOffset;
  x = snapToGridHalf(x);
  y = snapToGridHalf(y);

  switch (item.direction) {
    case ResizeConstants.R:
      return calculateRightResizePreviewStyle(item, x, y);
    case ResizeConstants.L:
      return calculateLeftResizePreviewStyle(item, x, y);
    case ResizeConstants.T:
      return calculateTopResizePreviewStyle(item, x, y);
    default:
      console.error("unsupported resize direction:" + item.direction);
  }
}

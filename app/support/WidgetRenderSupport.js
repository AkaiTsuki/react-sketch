import React, { Component, PropTypes } from 'react';
import * as WidgetType from '../constants/WidgetType';
import * as ResizeConstants from '../constants/ResizeConstants';

import LabelAbsolutify from '../components/widgets/text/LabelAbsolutify.jsx';
import TitleAbsolutify from '../components/widgets/text/TitleAbsolutify.jsx';
import TextInputAbsolutify from '../components/widgets/form/TextInputAbsolutify.jsx';
import PanelAbsolutify from '../components/widgets/container/PanelAbsolutify.jsx';
import CheckboxAbsolutify from '../components/widgets/form/CheckboxAbsolutify.jsx';
import RadioAbsolutify from '../components/widgets/form/RadioAbsolutify.jsx';
import TextAreaAbsolutify from '../components/widgets/form/TextAreaAbsolutify.jsx';
import DropDownAbsolutify from '../components/widgets/form/DropDownAbsolutify.jsx';

import LabelPreview from '../components/widgets/text/LabelPreview.jsx';
import TitlePreview from '../components/widgets/text/TitlePreview.jsx';
import TextInputPreview from '../components/widgets/form/TextInputPreview.jsx';
import PanelPreview from '../components/widgets/container/PanelPreview.jsx';
import CheckboxPreview from '../components/widgets/form/CheckboxPreview.jsx';
import RadioPreview from '../components/widgets/form/RadioPreview.jsx';
import TextAreaPreview from '../components/widgets/form/TextAreaPreview.jsx';
import DropDownPreview from '../components/widgets/form/DropDownPreview.jsx';

import {snapToGrid, snapToGridHalf, calculateDragSelectRectLeftTopPosition} from './PositionSupport'

export const renderPreivew = (widget, style) => {
  switch (widget.type) {
    case WidgetType.WIDGET_LABEL:
      return <LabelPreview key={widget.id} style={style} text={widget.text} />
    case WidgetType.WIDGET_TITLE:
      return <TitlePreview key={widget.id} style={style} text={widget.text} tag={widget.dom} />
    case WidgetType.WIDGET_INPUT_TEXT:
      return <TextInputPreview key={widget.id} style={style} width={widget.width} height={widget.height}/>
    case WidgetType.WIDGET_PANEL:
      return <PanelPreview key={widget.id} style={style} width={widget.width} height={widget.height}/>
    case WidgetType.WIDGET_INPUT_CHECKBOX:
      return <CheckboxPreview key={widget.id} style={style} width={widget.width} height={widget.height} label={widget.label} />
    case WidgetType.WIDGET_INPUT_RADIO:
      return <RadioPreview key={widget.id} style={style} width={widget.width} height={widget.height} label={widget.label} />
    case WidgetType.WIDGET_INPUT_TEXTAREA:
      return <TextAreaPreview key={widget.id} style={style} width={widget.width} height={widget.height} />
    case WidgetType.WIDGET_INPUT_DROPDOWN:
      return <DropDownPreview key={widget.id} style={style} width={widget.width} height={widget.height} options={widget.options}/>
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

const renderDraggableCheckbox = (widget, props) => {
  const {selected, actions} = props;
  return <CheckboxAbsolutify onSelect={actions.selectWidget} width={widget.width} height={widget.height} key={widget.id} id={widget.id} x={widget.x} y={widget.y} actions={actions} isSelected={selected[widget.id] === true} selected={selected} label={widget.label} />
}

const renderDraggableRadio = (widget, props) => {
  const {selected, actions} = props;
  return <RadioAbsolutify onSelect={actions.selectWidget} width={widget.width} height={widget.height} key={widget.id} id={widget.id} x={widget.x} y={widget.y} actions={actions} isSelected={selected[widget.id] === true} selected={selected} label={widget.label} fieldName={widget.fieldName} />
}

const renderDraggableTextArea = (widget, props) => {
  const {selected, actions} = props;
  return <TextAreaAbsolutify onSelect={actions.selectWidget} width={widget.width} height={widget.height} key={widget.id} id={widget.id} x={widget.x} y={widget.y} actions={actions} isSelected={selected[widget.id] === true} selected={selected} fieldName={widget.fieldName} />
}

const renderDraggableDropDown = (widget, props) => {
  const {selected, actions} = props;
  return <DropDownAbsolutify onSelect={actions.selectWidget} width={widget.width} height={widget.height} key={widget.id} id={widget.id} x={widget.x} y={widget.y} actions={actions} isSelected={selected[widget.id] === true} selected={selected} fieldName={widget.fieldName} options={widget.options} disabled={widget.disabled}/>
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
    case WidgetType.WIDGET_INPUT_CHECKBOX:
      return renderDraggableCheckbox(widget, props);
    case WidgetType.WIDGET_INPUT_RADIO:
      return renderDraggableRadio(widget, props);
    case WidgetType.WIDGET_INPUT_TEXTAREA:
      return renderDraggableTextArea(widget, props);
      case WidgetType.WIDGET_INPUT_DROPDOWN:
        return renderDraggableDropDown(widget, props);
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

const calculateBottomResizePreviewStyle =  (item, x, y) => {
  const style = getReizsePreviewCommonStyle();
  style.top = item.y;
  style.left = item.x;
  style.width = item.width;
  style.height = item.height + y;
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
    case ResizeConstants.B:
      return calculateBottomResizePreviewStyle(item, x, y);
    default:
      console.error("unsupported resize direction:" + item.direction);
  }
}

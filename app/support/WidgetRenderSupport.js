import React, { Component, PropTypes } from 'react';
import * as WidgetType from '../constants/WidgetType';

import LabelDraggable from '../components/widgets/text/LabelDraggable.jsx';
import TitleDraggable from '../components/widgets/text/TitleDraggable.jsx';
import TextInputDraggable from '../components/widgets/form/TextInputDraggable.jsx';
import PanelDraggable from '../components/widgets/container/PanelDraggable.jsx';

import LabelPreview from '../components/widgets/text/LabelPreview.jsx';
import TitlePreview from '../components/widgets/text/TitlePreview.jsx';
import TextInputPreview from '../components/widgets/form/TextInputPreview.jsx';
import PanelPreview from '../components/widgets/container/PanelPreview.jsx';

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
  return <TitleDraggable onSelect={actions.selectWidget} key={widget.id} id={widget.id} tag={widget.dom} text={widget.text} x={widget.x} y={widget.y} actions={actions} isSelected={selected[widget.id] === true} selected={selected} />
}

const renderDraggableLabel = (widget, props) => {
  const {selected, actions} = props;
  return <LabelDraggable onSelect={actions.selectWidget} key={widget.id} id={widget.id} text={widget.text} x={widget.x} y={widget.y} actions={actions} isSelected={selected[widget.id] === true} selected={selected} widgetType={widget.type} />
}

const renderDraggableTextInput = (widget, props) => {
  const {selected, actions} = props;
  return <TextInputDraggable onSelect={actions.selectWidget} width={widget.width} key={widget.id} id={widget.id} x={widget.x} y={widget.y} actions={actions} isSelected={selected[widget.id] === true} selected={selected} />
}

const renderDraggablePanel = (widget, props) => {
  const {selected, actions} = props;
  return <PanelDraggable zIndex={3} onSelect={actions.selectWidget} key={widget.id} id={widget.id} x={widget.x} y={widget.y} actions={actions} isSelected={selected[widget.id] === true} width={widget.width} height={widget.height} selected={selected} />
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

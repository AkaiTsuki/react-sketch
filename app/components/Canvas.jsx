import React, { Component, PropTypes } from 'react';
import * as WIDGET_TYPE from '../constants/WidgetType';
import Label from './widgets/text/Label.jsx';
import Title from './widgets/text/Title.jsx';
import TextInput from './widgets/form/TextInput.jsx';
import Panel from './widgets/container/Panel.jsx';

import { DropTarget } from 'react-dnd';

const canvasTarget = {
  drop(props, monitor) {
    console.log("Drop");
    const draggedItem = monitor.getItem();
    const offset = monitor.getDifferenceFromInitialOffset();
    props.actions.moveWidget(draggedItem.id, offset.x, offset.y);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class Canvas extends Component{
  constructor(props, context) {
    super(props, context);
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
        <div className="paper full-height" style={paperStyle}>
          {this.renderWidgets()}
        </div>
      </div>
    )
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
    switch(widget.type){
      case WIDGET_TYPE.WIDGET_TITLE:
        return this.renderTitle(widget);
      case WIDGET_TYPE.WIDGET_LABEL:
        return this.renderLabel(widget);
      case WIDGET_TYPE.WIDGET_INPUT_TEXT:
        return this.renderTextInput(widget);
      case WIDGET_TYPE.WIDGET_PANEL:
        return this.renderPanel(widget);
      default:
        console.error("Unsupport widget type: "+ widget.type);
        return null;
    }
  }

  renderTitle(widget){
    const {selected} = this.props;
    return <Title onSelect={this.props.actions.selectWidget} key={widget.id} id={widget.id} tag={widget.dom} text={widget.text} x={widget.x} y={widget.y} actions={this.props.actions} isSelected={selected[widget.id] === true} />
  }

  renderLabel(widget){
    const {selected} = this.props;
    return <Label onSelect={this.props.actions.selectWidget} key={widget.id} id={widget.id} text={widget.text} x={widget.x} y={widget.y} actions={this.props.actions} isSelected={selected[widget.id] === true} />
  }

  renderTextInput(widget){
    const {selected} = this.props;
    return <TextInput key={widget.id} id={widget.id} x={widget.x} y={widget.y} actions={this.props.actions} isSelected={selected[widget.id] === true} />
  }

  renderPanel(widget){
    const {selected} = this.props;
    return <Panel onSelect={this.props.actions.selectWidget} key={widget.id} id={widget.id} x={widget.x} y={widget.y} actions={this.props.actions} isSelected={selected[widget.id] === true} width={widget.width} height={widget.height}></Panel>
  }
}

export default DropTarget(WIDGET_TYPE.WIDGET_DRAGGABLE, canvasTarget, collect)(Canvas);

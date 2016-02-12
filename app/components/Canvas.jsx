import React, { Component, PropTypes } from 'react';
import * as WIDGET_TYPE from '../constants/WidgetType';



export default class Canvas extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const style = {
      backgroundColor: 'white',
      position:'relative',
      left: 0,
      top: 0,
    };

    return (
      <div className="col-md-7 full-height" style={style}>
        {this.renderWidgets()}
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
      default:
        console.error("Unsupport widget type: "+ widget.type);
        return null;
    }
  }

  renderTitle(widget){
    const Tag = widget.dom;
    const style = {
      top: widget.y,
      left: widget.x,
      margin: 0
    }
    return (
      <Tag key={widget.id} className="widget abs-pos" style={style}>{widget.text}</Tag>
    );
  }

  renderLabel(widget){
    const style = {
      top: widget.y,
      left: widget.x,
      margin: 0
    }
    return <label key={widget.id} className="widget abs-pos" style={style}>{widget.text}</label>
  }
}

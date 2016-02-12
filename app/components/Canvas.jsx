import React, { Component, PropTypes } from 'react';
import * as WIDGET_TYPE from '../constants/WidgetType';

const style = {
  backgroundColor: 'white',
  position:'relative',
  left: 0,
  top: 0
};

export default class Canvas extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render() {
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
      default:
        console.error("Unsupport widget type")
        return null;
    }
  }

  renderTitle(widget){
    const Tag = widget.dom;
    return (
      <Tag key={widget.id} className="abs-pos">{widget.text}</Tag>
    );
  }
}

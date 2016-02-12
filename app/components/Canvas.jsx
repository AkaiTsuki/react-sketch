import React, { Component, PropTypes } from 'react';
import * as WIDGET_TYPE from '../constants/WidgetType';
import Label from './widgets/text/Label.jsx';
import Title from './widgets/text/Title.jsx';


export default class Canvas extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render() {
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

    return (
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
      default:
        console.error("Unsupport widget type: "+ widget.type);
        return null;
    }
  }

  renderTitle(widget){
    return <Title key={widget.id} id={widget.id} tag={widget.dom} text={widget.text} x={widget.x} y={widget.y} actions={this.props.actions} />
  }

  renderLabel(widget){
    return <Label key={widget.id} id={widget.id} text={widget.text} x={widget.x} y={widget.y} actions={this.props.actions} />
  }
}

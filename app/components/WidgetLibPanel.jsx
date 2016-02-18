import React, { Component, PropTypes } from 'react';

const style = {

};

export default class WidgetLibPanel extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="col-md-2 full-height lib-panel" style={style}>
        <div className="col-md-12"><h4>Libraries</h4></div>

        {this.renderWidgetComponents()}
      </div>
    )
  }

  renderWidgetComponents(){
    const widgetLib = this.props.widgetLib;
    const group = [];

    for(let key in widgetLib){
      group.push(this.renderWidgetGroup(widgetLib[key]));
    }

    return group;
  }

  renderWidgetGroup(group){
    const widgets = group.widgets;
    const groupName = group.name;

    return widgets.map((widget) =>this.renderWidget(widget));
  }

  renderWidget(widget){
    const actions = this.props.actions;
    const onClickHandler = actions[widget.action];

    let className = 'lib-button';
    if(!widget.enable){
      className += ' lib-button-disable'
    }

    return (
      <div key={widget.name} className="col-md-6" style={{padding: 15}}>
        <a className={className} onClick={onClickHandler}>
          <div className={widget.icon} style={{height: '50px', lineHeight: '50px'}}></div>
          <div>{widget.display}</div>
        </a>
      </div>
    );
  }
}

import React, { Component, PropTypes } from 'react';

const style = {
  backgroundColor: '#3498DB',
  color: 'white'
};

export default class WidgetLibPanel extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="col-md-2 full-height" style={style}>
        <h3>Available Widgets</h3>
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

    return (
      <div key={groupName} style={{marginTop: '5px'}}>
        {groupName}
        <hr style={{margin: '0 0 5px  0'}} />
        {widgets.map((widget) =>this.renderWidget(widget))}
      </div>
    )
    return ;
  }

  renderWidget(widget){
    const actions = this.props.actions;

    const buttonStyle = {
      width : '100%',
      marginBottom: '5px'
    };

    const onClickHandler = actions[widget.action];

    return (
      <div key={widget.name}>
        <a className="btn btn-default" style={buttonStyle} onClick={onClickHandler}>
          <i className={widget.icon +" pull-left"}></i>
          {widget.display}
        </a>
      </div>
    );
  }
}

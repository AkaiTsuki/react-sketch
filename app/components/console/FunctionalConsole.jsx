import React, { Component, PropTypes } from 'react';

export default class FunctionalConsole extends Component {
  constructor(props, context) {
    super(props, context);
    this._onAlighLeftClick = this._onAlighLeftClick.bind(this);
    this._onAlighRightClick = this._onAlighRightClick.bind(this);
    this._onDeleteClick = this._onDeleteClick.bind(this);
  }

  render(){

    const btnStyle = {
      marginRight: '5px'
    }

    return(
      <div className="console-functional-panel">
        <h3>Canvas Functions</h3>
        <hr style={{margin: '0 0 5px  0'}} />

        <a className="btn btn-default" style={btnStyle} onClick={this._onAlighLeftClick}>
          <i className="fa fa-align-left pull-left"></i>
          Align Left
        </a>
        <a className="btn btn-default" style={btnStyle} onClick={this._onAlighRightClick}>
          <i className="fa fa-align-right pull-left"></i>
          Align Right
        </a>
        <a className="btn btn-default" style={btnStyle} onClick={this._onDeleteClick}>
          <i className="fa fa-trash pull-left"></i>
          Remove Widgets
        </a>
      </div>
    )
  }

  _onAlighLeftClick(e){
    const {actions, selected} = this.props;
    const selectWidgetIds = this.getSelectWidgetIds(selected);
    if(selectWidgetIds.length > 1) actions.alignWidgets(selectWidgetIds, "left");
  }

  _onAlighRightClick(e){
    const {actions, selected} = this.props;
    const selectWidgetIds = this.getSelectWidgetIds(selected);
    if(selectWidgetIds.length > 1) actions.alignWidgets(selectWidgetIds, "right");
  }

  _onDeleteClick(e){
      const {actions, selected} = this.props;
      const selectWidgetIds = this.getSelectWidgetIds(selected);
      if(selectWidgetIds.length > 0) actions.deleteSelectWidgets(selectWidgetIds);
  }

  getSelectWidgetIds(selected){
    const ids = [];
    for(let key in selected){
      if(selected[key]){
        ids.push(key);
      }
    }
    return ids;
  }
}

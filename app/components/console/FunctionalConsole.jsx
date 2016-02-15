import React, { Component, PropTypes } from 'react';
import * as CanvasActionType from '../../constants/CanvasActionType';

export default class FunctionalConsole extends Component {
  constructor(props, context) {
    super(props, context);
    this._onAlighLeftClick = this._onAlighLeftClick.bind(this);
    this._onAlighRightClick = this._onAlighRightClick.bind(this);
    this._onAlighTopClick = this._onAlighTopClick.bind(this);
    this._onDeleteClick = this._onDeleteClick.bind(this);
    this._onAlighBottomClick = this._onAlighBottomClick.bind(this);
  }

  render(){

    const btnStyle = {
      margin: '0 5px 5px 0'
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
        <a className="btn btn-default" style={btnStyle} onClick={this._onAlighTopClick}>
          <i className="fa fa-align-top pull-left"></i>
          Align Top
        </a>
        <a className="btn btn-default" style={btnStyle} onClick={this._onAlighBottomClick}>
          <i className="fa fa-align-bottom pull-left"></i>
          Align Bottom
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
    if(selectWidgetIds.length > 1) actions.alignWidgets(selectWidgetIds, CanvasActionType.ALIGN_DIR_LEFT);
  }

  _onAlighRightClick(e){
    const {actions, selected} = this.props;
    const selectWidgetIds = this.getSelectWidgetIds(selected);
    if(selectWidgetIds.length > 1) actions.alignWidgets(selectWidgetIds, CanvasActionType.ALIGN_DIR_RIGHT);
  }

  _onAlighTopClick(e){
    const {actions, selected} = this.props;
    const selectWidgetIds = this.getSelectWidgetIds(selected);
    if(selectWidgetIds.length > 1) actions.alignWidgets(selectWidgetIds, CanvasActionType.ALIGN_DIR_TOP);
  }

  _onAlighBottomClick(e){
    const {actions, selected} = this.props;
    const selectWidgetIds = this.getSelectWidgetIds(selected);
    if(selectWidgetIds.length > 1) actions.alignWidgets(selectWidgetIds, CanvasActionType.ALIGN_DIR_BOTTOM);
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

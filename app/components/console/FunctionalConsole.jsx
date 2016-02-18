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
      <div className="row">
        <div className="col-md-12"><h4>Tools</h4></div>
        <div className='col-md-6'>
          <a className="lib-button" onClick={this._onAlighLeftClick}>
            <div className="fa fa-align-left pull-left"></div>
            <div>Align Left</div>
          </a>
        </div>
        <div className='col-md-6'>
          <a className="lib-button" onClick={this._onAlighRightClick}>
            <div className="fa fa-align-right pull-left"></div>
            <div>Align Right</div>
          </a>
        </div>
        <div className='col-md-6'>
          <a className="lib-button" onClick={this._onAlighTopClick}>
            <div className="fa fa-align-left fa-align-top pull-left"></div>
            <div>Align Top</div>
          </a>
        </div>
        <div className='col-md-6'>
          <a className="lib-button" onClick={this._onAlighBottomClick}>
            <div className="fa fa-align-bottom fa-align-left pull-left"></div>
            <div>Align Bottom</div>
          </a>
        </div>
        <div className='col-md-6'>
          <a className="lib-button" onClick={this._onDeleteClick}>
            <div className="fa fa-trash pull-left"></div>
            <div>Remove</div>
          </a>
        </div>
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

import React, { Component, PropTypes } from 'react';

export default class SystemConfigConsole extends Component{
  constructor(props, context) {
    super(props, context);
    this._onSave = this._onSave.bind(this);
    this._onUndo = this._onUndo.bind(this);
    this._onRedo = this._onRedo.bind(this);
    this._onShowGridChange = this._onShowGridChange.bind(this);
  }

  render(){
    const {config} = this.props;

    let undoBtnClassName = 'lib-button noselect';
    if(!config.canUndo){
      undoBtnClassName += ' lib-button-disable'
    }

    let redoBtnClassName = 'lib-button noselect';
    if(!config.canRedo){
      redoBtnClassName += ' lib-button-disable'
    }

    return (
      <div className="row">
        <div className="console-section">
          <div className="col-md-12"><h4>Main Menu</h4></div>
          <div className="col-md-4">
            <a className="lib-button noselect" onClick={this._onSave}>
              <div className='fa fa-floppy-o pull-left'></div>
              Save
            </a>
          </div>
          <div className="col-md-4">
            <a className={undoBtnClassName} onClick={this._onUndo}>
              <div className='fa fa-undo pull-left'></div>
              Undo
              </a>
          </div>
          <div className="col-md-4">
            <a className={redoBtnClassName} onClick={this._onRedo}>
              <div className='fa fa-repeat pull-left'></div>
              Redo
            </a>
          </div>
        </div>
        <div className="console-section">
          <div className="col-md-12"><h4>System Config</h4></div>
          <div className="col-md-12">
            <label>
              <input type='checkbox' checked={config.showGrid} onChange={this._onShowGridChange}/>
              Toggle grid assistance on canvas
            </label>
          </div>
        </div>
      </div>
    )
  }

  _onSave(e){
    const {widgets} = this.props;
    localStorage.widgets = JSON.stringify(widgets);
  }

  _onUndo(e){
    const {actions, config} = this.props;
    if(config.canUndo) actions.undo();
  }

  _onRedo(e){
    const {actions, config} = this.props;
    if(config.canRedo) actions.redo();
  }

  _onShowGridChange(e) {
    const {actions} = this.props;
    actions.toggleShowGrid();
  }
}

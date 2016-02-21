import React, { Component, PropTypes } from 'react';

export default class SystemConfigConsole extends Component{
  constructor(props, context) {
    super(props, context);
    this._onSave = this._onSave.bind(this);
    this._onShowGridChange = this._onShowGridChange.bind(this);
  }

  render(){
    const {config} = this.props;
    return (
      <div className="row">
        <div className="console-section">
          <div className="col-md-12"><h4>Main Menu</h4></div>
          <div className="col-md-6">
            <a onClick={this._onSave} className="lib-button" onClick={this._onSave}>Save</a>
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

  _onShowGridChange(e) {
    const {actions} = this.props;
    actions.toggleShowGrid();
  }
}

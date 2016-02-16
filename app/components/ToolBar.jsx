import React, { Component, PropTypes } from 'react';

export default class ToolBar extends Component {
  constructor(props, context) {
    super(props, context);
    this._onSave = this._onSave.bind(this);
  }

  render(){
    return (
      <ul className="toolbar">
        <li><a onClick={this._onSave}>save to local</a></li>
      </ul>
    )
  }

  _onSave(e){
    const {widgets} = this.props;
    localStorage.widgets = JSON.stringify(widgets);
  }
}

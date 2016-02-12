import React, { Component, PropTypes } from 'react';

const style = {
  backgroundColor: '#3498DB',
  color: 'white'
};

export default class WidgetConsole extends Component{
  constructor(props, context) {
    super(props, context);
    this.renderConsole = this.renderConsole.bind(this);
  }

  render() {
    const {widget} = this.props;
    return (
      <div className="col-md-3 full-height" style={style}>
        {widget ? this.renderConsole(widget) : this.renderEmptyConsole()}
      </div>
    )
  }

  renderEmptyConsole(){
    return <h3 style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', textAlign: 'center'}}>Select a widget</h3>
  }

  renderConsole(widget) {
    const inputStyle = {
      width: 100,
      marginRight: 10
    }

    return (
      <div className="console-layout-panel">
        <h3>Layout Properties</h3>
        <hr style={{margin: '0 0 5px  0'}} />
        <div className="form-inline">
          <div className="form-group">
            <label htmlFor="console-layout-x">left: </label>
            <input type="text" className="form-control" id="console-layout-x" value={widget.x} readOnly style={inputStyle} />
          </div>
          <div className="form-group">
            <label htmlFor="console-layout-y">top: </label>
            <input type="text" className="form-control" id="console-layout-y" value={widget.y} readOnly style={inputStyle} />
          </div>
          <div className="form-group">
            <label htmlFor="console-layout-step">step: </label>
            <input type="text" className="form-control" id="console-layout-step" value={10} readOnly style={inputStyle} />
          </div>
        </div>
      </div>
    )
  }

}

import React, { Component, PropTypes } from 'react';
import EditableDiv from './EditableDiv.jsx'

export default class LayoutConsole extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {widget, actions} = this.props;

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
            <EditableDiv attr='x' value={widget.x} widgetId={widget.id} onUpdate={actions.updateWidget} />
          </div>
          <div className="form-group">
            <label htmlFor="console-layout-y">top: </label>
              <EditableDiv attr='y' value={widget.y} widgetId={widget.id} onUpdate={actions.updateWidget} />
          </div>
          <div className="form-group">
            <label htmlFor="console-layout-step">step: </label>
            <input type="text" className="form-control" id="console-layout-step" value={10} readOnly style={inputStyle} />
          </div>
        </div>
        <br />
        <div className="form-inline">
          <div className="form-group">
            <label htmlFor="console-layout-width">width: </label>
            <EditableDiv attr='width' value={widget.width} widgetId={widget.id} onUpdate={actions.updateWidget} />
          </div>
          <div className="form-group">
            <label htmlFor="console-layout-height">height: </label>
            <EditableDiv attr='height' value={widget.height} widgetId={widget.id} onUpdate={actions.updateWidget} />
          </div>
        </div>
      </div>
    )
  }

}

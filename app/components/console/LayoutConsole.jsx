import React, { Component, PropTypes } from 'react';
import EditableDiv from './EditableDiv.jsx'

export default class LayoutConsole extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {widget, actions} = this.props;

    return (
      <div className="row">
        <div className="col-md-12"><h4>Position</h4></div>
        <div className="col-md-6">
            <label htmlFor="console-layout-x">left: </label>
            <EditableDiv attr='x' value={widget.x} widgetId={widget.id} onUpdate={actions.updateWidget} />
        </div>
        <div className="col-md-6">
          <label htmlFor="console-layout-y">top: </label>
          <EditableDiv attr='y' value={widget.y} widgetId={widget.id} onUpdate={actions.updateWidget} />
        </div>

        <div className="col-md-12"><h4>Size</h4></div>
          <div className="col-md-6">
            <label htmlFor="console-layout-width">width: </label>
            <EditableDiv attr='width' value={widget.width} widgetId={widget.id} onUpdate={actions.updateWidget} />
          </div>
          <div className="col-md-6">
            <label htmlFor="console-layout-height">height: </label>
            <EditableDiv attr='height' value={widget.height} widgetId={widget.id} onUpdate={actions.updateWidget} />
          </div>

      </div>
    )
  }

}

import React, { Component, PropTypes } from 'react';
import FunctionalConsole from './console/FunctionalConsole.jsx';
import LayoutConsole from './console/LayoutConsole.jsx';
import PropertyConsole from './console/PropertyConsole.jsx';
import SystemConfigConsole from './console/SystemConfigConsole.jsx';

const style = {
  backgroundColor: '#2c2c2c',
  color: 'rgba(255,255,255,0.7)',
  padding: 0
};

export default class WidgetConsole extends Component{
  constructor(props, context) {
    super(props, context);
    this.renderConsole = this.renderConsole.bind(this);
    this._onSave = this._onSave.bind(this);
  }

  render() {
    const {widget, actions, selected} = this.props;
    return (
      <div className="col-md-2 full-height" style={style}>
        {widget ? this.renderConsole(widget, actions, selected) : this.renderEmptyConsole()}
      </div>
    )
  }

  renderEmptyConsole(){
    const {widgets, config, actions} = this.props;
    return (
      <div className='console'><SystemConfigConsole widgets={widgets} config={config} actions={actions}/></div>
    )

  }

  renderConsole(widget, actions, selected) {
    return (
      <div className='console'>
        <FunctionalConsole widget={widget} actions={actions} selected={selected} />
        <LayoutConsole widget={widget} actions={actions}/>
        <PropertyConsole widget={widget} actions={actions} />
      </div>

    )
  }

  _onSave(e){
    const {widgets} = this.props;
    localStorage.widgets = JSON.stringify(widgets);
  }

}

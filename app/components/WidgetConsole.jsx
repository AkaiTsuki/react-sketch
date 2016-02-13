import React, { Component, PropTypes } from 'react';
import LayoutConsole from './console/LayoutConsole.jsx';

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
    const {widget, actions} = this.props;
    return (
      <div className="col-md-3 full-height" style={style}>
        {widget ? this.renderConsole(widget, actions) : this.renderEmptyConsole()}
      </div>
    )
  }

  renderEmptyConsole(){
    return <h3 style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', textAlign: 'center',margin: '0px'}}>Select a widget</h3>
  }

  renderConsole(widget, actions) {
    return <LayoutConsole widget={widget} actions={actions}/>
  }

}

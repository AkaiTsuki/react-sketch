import React, { Component, PropTypes } from 'react';
// Drag and Drop Lib
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import WidgetLibPanel from './WidgetLibPanel.jsx'
import WidgetConsole from './WidgetConsole.jsx'
import Canvas from './Canvas.jsx'

class MainFrame extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {widgetLib, widgets, selected, actions} = this.props;
    const selectedWidgetId = this.getSelectWidgetId(widgets, selected);
    const widget = selectedWidgetId == null ? null : widgets[selectedWidgetId];

    return (
      <div className="container-fluid full-height" >

        <div className="row full-height">
          <div className='row full-height viewport'>
            <WidgetLibPanel widgetLib={widgetLib} actions={actions} />
            <Canvas widgets={widgets} actions={actions} selected={selected} />
            <WidgetConsole widgets={widgets} widget={widget} actions={actions} selected={selected} />
          </div>
        </div>
      </div>
    )
  }

  getSelectWidgetId(widgets, selected){
    for(let id in selected){
      if(selected[id]){
        return id;
      }
    }
    return null;
  }
}

export default DragDropContext(HTML5Backend)(MainFrame);

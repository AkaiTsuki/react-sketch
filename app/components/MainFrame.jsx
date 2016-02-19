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
    const {widgetLib, widgets, selected, actions, selectedWidgets, selectIndicator} = this.props;
    const selectedWidgetId = this.getSelectWidgetId(selectedWidgets);
    const widget = selectedWidgetId == null ? null : widgets[selectedWidgetId];

    return (
      <div className="container-fluid full-height" >

        <div className="row full-height">
          <div className='row full-height viewport'>
            <WidgetLibPanel widgetLib={widgetLib} actions={actions} />
            <Canvas widgets={widgets} actions={actions} selected={selected} selectedWidgets={selectedWidgets} selectIndicator={selectIndicator} />
            <WidgetConsole widgets={widgets} widget={widget} actions={actions} selected={selected} />
          </div>
        </div>
      </div>
    )
  }

  getSelectWidgetId(selectedWidgets){
    let selectId = null;
    if(selectedWidgets.length > 0) selectId = selectedWidgets[0].id;
    return selectId;
  }
}

export default DragDropContext(HTML5Backend)(MainFrame);

import React, { Component, PropTypes } from 'react';
// Drag and Drop Lib
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import WidgetLibPanel from './WidgetLibPanel.jsx'
import WidgetConsole from './WidgetConsole.jsx'
import Viewport from './Viewport.jsx'

class MainFrame extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {widgetLib, widgets, selected, actions, selectedWidgets, selectIndicator, config, alignments} = this.props;
    const selectedWidgetId = this.getSelectWidgetId(selectedWidgets);
    const widget = selectedWidgetId == null ? null : widgets[selectedWidgetId];

    return (
      <div className="container-fluid full-height" >
        <div className="row full-height">
            <WidgetLibPanel widgetLib={widgetLib} actions={actions} />
            <Viewport widgets={widgets} actions={actions} selected={selected} selectedWidgets={selectedWidgets} selectIndicator={selectIndicator} config={config} alignments={alignments}/>
            <WidgetConsole widgets={widgets} widget={widget} actions={actions} selected={selected} config={config}/>
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

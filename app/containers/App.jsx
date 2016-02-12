import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CanvasAction from '../actions/CanvasAction.js'
import MainFrame from '../components/MainFrame.jsx'
import WidgetLibPanel from '../components/WidgetLibPanel.jsx'
import WidgetConsole from '../components/WidgetConsole.jsx'
import Canvas from '../components/Canvas.jsx'

class App extends React.Component {
  render() {
    const {widgetLib, widgets, selected, actions, dispatch} = this.props;
    const selectedWidgetId = this.getSelectWidgetId(widgets, selected);
    const widget = selectedWidgetId == null ? null : widgets[selectedWidgetId];
    return (
      <MainFrame>
        <WidgetLibPanel widgetLib={widgetLib} actions={actions} />
        <Canvas widgets={widgets} actions={actions} selected={selected} />
        <WidgetConsole widget={widget} />
      </MainFrame>
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

function mapStateToProps(state) {
  return {
    widgetLib: state.widgetLib,
    widgets: state.widgets,
    selected: state.selected
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CanvasAction, dispatch),
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

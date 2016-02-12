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
    const {widgetLib, widgets, actions, dispatch} = this.props;
    return (
      <MainFrame>
        <WidgetLibPanel widgetLib={widgetLib} actions={actions} />
        <Canvas widgets={widgets} actions={actions} />
        <WidgetConsole />
      </MainFrame>
    )
  }
}

function mapStateToProps(state) {
  return {
    widgetLib: state.widgetLib,
    widgets: state.widgets
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

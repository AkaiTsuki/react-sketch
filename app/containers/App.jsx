import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CanvasAction from '../actions/CanvasAction.js'
import MainFrame from '../components/MainFrame.jsx'

import {rootSelector} from '../selectors/WidgetSelectors'

class App extends React.Component {

  componentDidMount(){
    const {actions} = this.props;
    if(localStorage.widgets){
      const widgets = JSON.parse(localStorage.widgets);
      actions.initApp(widgets);
    }
  }

  render() {
    const {widgetLib, widgets, selected, actions, dispatch, selectedWidgets} = this.props;
    return (
      <MainFrame widgetLib={widgetLib} actions={actions} widgets={widgets} selected={selected} selectedWidgets={selectedWidgets} />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CanvasAction, dispatch),
    dispatch
  }
}

export default connect(
  rootSelector,
  mapDispatchToProps
)(App)

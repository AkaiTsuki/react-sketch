import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CanvasAction from '../actions/CanvasAction.js'
import MainFrame from '../components/MainFrame.jsx'

class App extends React.Component {

  componentDidMount(){
    const {actions} = this.props;
    if(localStorage.widgets){
      const widgets = JSON.parse(localStorage.widgets);
      actions.initApp(widgets);
    }
  }

  render() {
    const {widgetLib, widgets, selected, actions, dispatch} = this.props;
    return (
      <MainFrame widgetLib={widgetLib} actions={actions} widgets={widgets} selected={selected} />
    )
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

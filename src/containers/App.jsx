import React, {Component} from 'react';
import { connect } from 'react-redux';

import rootSelector from '../selectors/RootSelector';
import Navi from '../components/navi/Navi';
import UIBuilder from '../components/ui-builder/UIBuilder'

class App extends Component {
  render(){
    const {widgetLib} = this.props;
    return (
      <div className="app">
        <div id="header">
          <Navi />
        </div>
        <div id="content">
          <UIBuilder widgetLib={widgetLib} />
        </div>
        <div id="footer">
          <div style={{textAlign: 'center'}}>Copyright 2016</div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(
  rootSelector,
  mapDispatchToProps
)(App)

import React, {Component, PropTypes} from 'react';

import Navi from '../components/navi/Navi';
import UIBuilder from '../components/ui-builder/UIBuilder'

export default class App extends Component {
  render(){
    const {widgetLib, systemConfig, actions} = this.props;
    return (
      <div className="app">
        <div id="header">
          <Navi />
        </div>
        <div id="content">
          <UIBuilder
            widgetLib={widgetLib}
            systemConfig={systemConfig}
            actions={actions} />
        </div>
        <div id="footer">
          <div style={{textAlign: 'center'}}>
            Copyright 2016
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  widgetLib : PropTypes.object,
  systemConfig: PropTypes.object
};

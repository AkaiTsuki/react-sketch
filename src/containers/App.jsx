import React, {Component} from 'react';
import Navi from '../components/navi/Navi';
import UIBuilder from '../components/ui-builder/UIBuilder'

export default class App extends Component {
  render(){
    return (
      <div className="app">
        <div id="header">
          <Navi />
        </div>
        <div id="content">
          <UIBuilder />
        </div>
        <div id="footer">
          <div style={{textAlign: 'center'}}>Copyright 2016</div>
        </div>
      </div>
    );
  }
}

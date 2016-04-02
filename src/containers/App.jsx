import React, {Component} from 'react';
import Navi from '../components/navi/Navi';

export default class App extends Component {
  render(){
    return (
      <div className="container-fluid">
        <Navi />
        <h1>React Sketch <small>A drag and drop tool to build dynamic UI</small></h1>
      </div>
    );
  }
}

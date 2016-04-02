import React, {Component} from 'react';

export default class NaviHeader extends Component {
  render(){
    return (
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="javascript:void(0)">React-Sketch</a>
      </div>
    );
  }
}

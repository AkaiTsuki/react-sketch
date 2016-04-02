import React, {Component} from 'react';

export default class NaviBody extends Component {
  render(){
    return (
      <div className="navbar-collapse collapse navbar-responsive-collapse">
        <ul className="nav navbar-nav">
          <li className="dropdown">
            <a href="#" data-target="#" className="dropdown-toggle" data-toggle="dropdown">File<b className="caret"></b></a>
            <ul className="dropdown-menu">
              <li><a href="javascript:void(0)">New</a></li>
              <li><a href="javascript:void(0)">Open</a></li>
              <li><a href="javascript:void(0)">Save</a></li>
              <li className="divider"></li>
              <li><a href="javascript:void(0)">Setting</a></li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

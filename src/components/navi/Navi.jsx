import React, {Component} from 'react';
import NaviHeader from './NaviHeader';
import NaviBody from './NaviBody';

export default class Navi extends Component {
  render() {
    return (
      <div className='row'>
        <div className="navbar navbar-default">
          <div className="container-fluid">
            <NaviHeader />
            <NaviBody />
          </div>
        </div>
      </div>
    )
  }
}

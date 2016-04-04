import React, {Component, PropTypes} from 'react';

/**
* control layer is responsible for handle user input events
**/
export default class ControlLayer extends Component {
  getStyle() {
    return {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 10000
    }
  }

  render() {
    const style = this.getStyle();
    return (
      <div className='control-layer' style={style}></div>
    );
  }
}

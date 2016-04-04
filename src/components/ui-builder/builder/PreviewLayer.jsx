import React, {Component, PropTypes} from 'react';

/**
* preview layer is responsible for rendering widgets in correct position
**/
export default class PreviewLayer extends Component {
  getStyle() {
    return {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1
    }
  }

  render() {
    const style = this.getStyle();
    return (
      <div className='preview-layer' style={style}></div>
    );
  }
}

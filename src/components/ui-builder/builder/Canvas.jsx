import React, {Component, PropTypes} from 'react';
import PreviewLayer from './PreviewLayer';
import ControlLayer from './ControlLayer';

/**
* a container use relative position to hold other widgets
**/
export default class Canvas extends Component {
  getStyle(canvasConfig) {
    return {
      width: canvasConfig.width,
      height: canvasConfig.height,
      position: 'relative'
    }
  }

  render() {
    const {canvasConfig} = this.props;
    const style = this.getStyle(canvasConfig);
    return (
      <div className='canvas' style={style}>
        <PreviewLayer />
        <ControlLayer />
      </div>
    );
  }
}


Canvas.propTypes = {
  canvasConfig: React.PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  })
};

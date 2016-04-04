import React, {Component, PropTypes} from 'react';
import Canvas from './Canvas';

/**
* Provide a viewport to hold the canvas, the viewport is enabling the
* scrolling feature on both x and y coordination
*/
export default class WidgetBuilderView extends Component {
  render() {
    const {systemConfig} = this.props;

    return (
      <div className='col-md-9 full-height'>
        <div className='panel panel-default full-height' style={{overflow: 'auto'}}>
          <Canvas canvasConfig={systemConfig.canvas}/>
        </div>
      </div>
    );
  }
}

WidgetBuilderView.propTypes = {
  systemConfig: PropTypes.object
};

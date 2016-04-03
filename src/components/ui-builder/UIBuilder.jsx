import React, {Component, PropTypes } from 'react';
import WidgetLibraryView from './library/WidgetLibraryView';
import WidgetBuilderView from './builder/WidgetBuilderView';

export default class UIBuilder extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {widgetLib, systemConfig} = this.props;

    return (
      <div className='container-fluid full-height'>
        <WidgetLibraryView widgetLib={widgetLib}/>
        <WidgetBuilderView systemConfig={systemConfig} />
      </div>
    );
  }
}

UIBuilder.propTypes = {
  widgetLib : PropTypes.object,
  systemConfig: PropTypes.object
};

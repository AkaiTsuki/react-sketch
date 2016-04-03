import React, {Component, PropTypes } from 'react';
import WidgetLibraryView from './library/WidgetLibraryView';
import WidgetBuilderView from './builder/WidgetBuilderView';

export default class UIBuilder extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className='container-fluid full-height'>
        <WidgetLibraryView />
        <WidgetBuilderView />
      </div>
    );
  }
}

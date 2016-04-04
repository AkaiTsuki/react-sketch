import React, {Component, PropTypes} from 'react';
import WidgetList from './WidgetList';

export default class WidgetLibraryView extends Component {
  render() {
    const {widgetLib, actions} = this.props;

    return (
      <div className='col-md-3 full-height'>
        <div className='panel panel-primary full-height' style={{overflow: 'auto'}}>
          <div className='panel-heading'>
             <h3 className="panel-title">Widget Library</h3>
          </div>
          <div className='panel-body'>
            <WidgetList widgetLib={widgetLib} actions={actions}/>
          </div>
        </div>
      </div>
    );
  }
}

WidgetLibraryView.propTypes = {
  widgetLib : PropTypes.object
};

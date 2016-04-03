import React, {Component} from 'react';
import WidgetList from './WidgetList';

export default class WidgetLibraryView extends Component {
  render() {
    const {widgetLib} = this.props;

    return (
      <div className='col-md-3 full-height'>
        <div className='panel panel-primary full-height'>
          <div className='panel-heading'>
             <h3 className="panel-title">Widget Library</h3>
          </div>
          <div className='panel-body'>
            <WidgetList widgetLib={widgetLib}/>
          </div>
        </div>
      </div>
    );
  }
}

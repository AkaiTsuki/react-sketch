import React, {Component, PropTypes} from 'react';

export default class WidgetListItem extends Component {
  render() {
    const {widget} = this.props;

    return (
      <div className='list-group-item'>
        <div className='row-action-primary'>
          <i className='material-icons'>{widget.iconText}</i>
        </div>
        <div className='row-content'>
         <div className='action-secondary' onClick={this._onClick.bind(this, widget.name)}><i className='material-icons'>add_circle</i></div>
         <h4 className='list-group-item-heading'>{widget.display}</h4>
         <p className='list-group-item-text'>{widget.description}</p>
       </div>
      </div>
    );
  }

  _onClick(widgetName) {
    const {actions} = this.props;
    actions.addWidget(widgetName);
  }
}

WidgetListItem.propTypes = {
  widget : PropTypes.object
};

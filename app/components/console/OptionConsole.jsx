import React, { Component, PropTypes } from 'react';
import EditableDiv from './EditableDiv.jsx'

class OptionConfigPanel extends Component {
  constructor(props, context) {
    super(props, context);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  render(){
    const {widgetId, opt, actions} = this.props

    return (
      <div key={opt.id} className="row" style={{marginBottom: 10}}>
        <div className="col-md-12">
          <label>Value</label>
          <EditableDiv attr='value' value={opt.value} widgetId={widgetId} optionId={opt.id} onUpdate={actions.updateDropDownOption} width='100%' />
        </div>
        <div className="col-md-12">
          <label>Display</label>
          <EditableDiv attr='display' value={opt.display} widgetId={widgetId} optionId={opt.id} onUpdate={actions.updateDropDownOption} width='100%' />
        </div>
        <div className="col-md-12">
          <div className='fa fa-trash' onClick={this.onDeleteClick} style={{cursor: 'pointer'}}></div>
        </div>
      </div>
    )
  }

  onDeleteClick(e) {
    const {widgetId, opt, actions} = this.props;
    actions.deleteDropDownOption(widgetId, opt.id);
  }
}

export default class OptionConsole extends Component {
  constructor(props, context) {
    super(props, context);
    this.onAddOption = this.onAddOption.bind(this);
  }

  render(){
    const {widgetId, options, actions} = this.props;
    return (
      <div className="console-section col-md-12">
        <div className="row">
          <div className='col-md-12'>
            <h4>Options<span className="fa fa-plus pull-right" style={{cursor: 'pointer'}} onClick={this.onAddOption}></span></h4>
          </div>
        </div>
        {this.renderOptionInputs(widgetId, options, actions)}
      </div>
    )
  }

  renderOptionInputs(widgetId, options, actions){
    return options.map(opt => {
      return <OptionConfigPanel key={opt.id} widgetId={widgetId} opt={opt} actions={actions} />
    });
  }

  onAddOption(e){
    const {widgetId, actions} = this.props;
    actions.addDropDownOption(widgetId);
  }
}

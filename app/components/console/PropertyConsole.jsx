import React, { Component, PropTypes } from 'react';
import EditableDiv from './EditableDiv.jsx'

export default class PropertyConsole extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isEditingText: false
    }

    this.onClickText = this.onClickText.bind(this);
    this.onBlurText = this.onBlurText.bind(this);
    this.onKeyupText = this.onKeyupText.bind(this);
  }

  render(){
    const {widget, actions} = this.props

    return(
      <div className="row">
        <div className="console-section col-md-12">
          <div className="col-md-12"><h4>Attribute</h4></div>
          {widget.text ? this.renderTextPropertyInput(widget, actions) : null}
          {widget.fieldName ? this.renderFieldNamePropertyInput(widget, actions) : null}
          {widget.fieldValue ? this.renderFieldValuePropertyInput(widget, actions) : null}
          {widget.label ? this.renderLabelPropertyInput(widget, actions) : null}
        </div>
        {widget.options ? this.renderOptionsPropertySection(widget, actions) : null}
      </div>
    )
  }

  renderTextPropertyInput(widget, actions){
    return this.renderPropertyInput('Text', 'text', widget.text, widget.id, actions.updateWidget);
  }

  renderFieldNamePropertyInput(widget, actions){
    return this.renderPropertyInput('Field Name', 'fieldName', widget.fieldName, widget.id, actions.updateWidget);
  }

  renderFieldValuePropertyInput(widget, actions){
    return this.renderPropertyInput('Field Value', 'fieldValue', widget.fieldValue, widget.id, actions.updateWidget);
  }

  renderLabelPropertyInput(widget, actions){
    return this.renderPropertyInput('label', 'label', widget.label, widget.id, actions.updateWidget);
  }

  renderPropertyInput(label, attr, value, id, onUpdate){
    return (
      <div className="col-md-12">
        <label>{label}</label>
        <EditableDiv attr={attr} value={value} widgetId={id} onUpdate={onUpdate} width='100%' />
      </div>
    )
  }

  renderOptionsPropertySection(widget, actions){
    return(
      <div className="console-section col-md-12">
        <div className="row"><div className='col-md-12'><h4>Options</h4></div></div>
        {this.renderOptionInputs(widget, actions)}
      </div>
    )
  }

  renderOptionInputs(widget, actions) {
    return widget.options.map(opt => {
      return (
        <div key={opt.id} className="row" style={{marginBottom: 10}}>
          <div className="col-md-12">
            <label>Value</label>
            <EditableDiv attr='value' value={opt.value} widgetId={widget.id} optionId={opt.id} onUpdate={actions.updateDropDownOption} width='100%' />
          </div>
          <div className="col-md-12">
            <label>Display</label>
            <EditableDiv attr='display' value={opt.display} widgetId={widget.id} optionId={opt.id} onUpdate={actions.updateDropDownOption} width='100%' />
          </div>
          <div className="col-md-12">
            <div className='fa fa-trash'></div>
          </div>
        </div>
      )
    });
  }

  onClickText(e){
    this.setState({isEditingText: true});
  }

  onBlurText(e){
    this.setState({isEditingText: false});
    const value = e.target.value.trim();
    this.updateWidget('text', value);
  }

  onKeyupText(e){
    if(e.keyCode === 13){
      this.setState({isEditingText: false});
      const value = e.target.value.trim();
      this.updateWidget('text', value);
    }
  }

  updateWidget(key, value){
    const {widget, actions} = this.props;
    actions.updateWidget(widget.id, key, value);
  }
}

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
          {widget.label ? this.renderLabelPropertyInput(widget, actions) : null}
        </div>
      </div>
    )
  }

  renderTextPropertyInput(widget, actions){
    return (
      <div className="col-md-12">
        <label>Text</label>
        <EditableDiv attr='text' value={widget.text} widgetId={widget.id} onUpdate={actions.updateWidget} width='100%' />
      </div>
    )
  }

  renderFieldNamePropertyInput(widget, actions){
    return (
      <div className="col-md-12">
        <label>Field Name</label>
        <EditableDiv attr='fieldName' value={widget.fieldName} widgetId={widget.id} onUpdate={actions.updateWidget} width='100%' />
      </div>
    )
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

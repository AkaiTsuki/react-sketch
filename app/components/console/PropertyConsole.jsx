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
      <div className="console-property-panel">
        <h3>Attribute Section</h3>
        <hr style={{margin: '0 0 5px  0'}} />

        <div className="form-horizontal">
          {widget.text ? this.renderTextPropertyInput(widget, actions) : null}
        </div>
      </div>
    )
  }

  renderTextPropertyInput(widget, actions){
    return (
      <div className="form-group">
        <label htmlFor="console-property-text" className="col-sm-2 control-label">Text</label>
        <div className="col-sm-10">
          <EditableDiv attr='text' value={widget.text} widgetId={widget.id} onUpdate={actions.updateWidget} width='100%' />
        </div>
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

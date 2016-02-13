import React, { Component, PropTypes } from 'react';

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
    const {widget} = this.props

    const inputStyle = {
      width: 100,
      marginRight: 10
    }

    return(
      <div className="console-property-panel">
        <h3>Attribute Section</h3>
        <hr style={{margin: '0 0 5px  0'}} />

        <div className="form-horizontal">
          <div className="form-group">
            <label htmlFor="console-property-text" className="col-sm-2 control-label">Text</label>
            <div className="col-sm-10">
              {
                this.state.isEditingText ? <input type="text" className="form-control" id="console-property-text" autoFocus={true} defaultValue={widget.text} onBlur={this.onBlurText} onKeyUp={this.onKeyupText} />
              : <div className="form-control" onClick={this.onClickText}>{widget.text}</div>
              }
            </div>
          </div>
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

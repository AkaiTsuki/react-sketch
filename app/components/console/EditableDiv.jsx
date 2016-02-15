import React, { Component, PropTypes } from 'react';

export default class EditableDiv extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isEditing: false
    }

    this._onBlur = this._onBlur.bind(this);
    this._onKeyup = this._onKeyup.bind(this);
    this._onClick = this._onClick.bind(this);
  }

  render(){
    const { value, width } = this.props;

    const inputStyle = {
      width: width ? width : 100,
      marginRight: 10
    }
    
    return this.state.isEditing ? <input type="text" className="form-control"  defaultValue={value} autoFocus={true} onBlur={this._onBlur} onKeyUp={this._onKeyup} style={inputStyle} />
  : <div className="form-control" style={inputStyle} onClick={this._onClick} >{value}</div>
  }

  _onBlur(e){
    this.updateAttribute(e.target.value.trim());
  }

  _onKeyup(e){
    if(e.keyCode === 13) this.updateAttribute(e.target.value.trim());
  }

  updateAttribute(value){
    const {widgetId, onUpdate, attr} = this.props;
    this.setState({
      isEditing: false
    });
    onUpdate(widgetId, attr, value);
  }

  _onClick(e){
    this.setState({isEditing: true});
  }
}
import React, { Component, PropTypes } from 'react';

export default class Checkbox extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    const {id, label, fieldName} = this.props;
    const style = {
      margin: 0,
      height: 20
    }

    const inputStyle = {
      marginRight: 5
    }

    let className = "form-control";

    return (
      <div className="widget" style={style}>
        <input type="checkbox" name={fieldName} style={inputStyle}/>
        <label className="noselect">{label}</label>
      </div>
    );
  }
}

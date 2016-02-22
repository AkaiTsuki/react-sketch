import React, { Component, PropTypes } from 'react';

export default class DropDown extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    const {id, width, height, options, disabled} = this.props;
    const style = {
      margin: 0,
    }

    if(width){
      style.width = width;
    }

    if(height){
      style.height = height;
    }

    let className = "widget form-control";

    return (
      <select className={className} style={style} disabled={disabled}>
        {this.renderOptions(options)}
      </select>
    );
  }

  renderOptions(options){
    return options.map(opt => {
      return <option key={opt.value} value={opt.value}>{opt.display}</option>
    });
  }
}

import React, { Component, PropTypes } from 'react';

export default class TextArea extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    const {id, width, height} = this.props;
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

    return (<textarea type="text" className={className} style={style} placeholder="Multi line input"></textarea>);
  }
}

import React, { Component, PropTypes } from 'react';
import {Measurable} from '../../support/Measurable';
import {Selectable} from '../../support/Selectable';
import {Draggable} from '../../support/Draggable';

export default class TextInput extends Component {
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

    return (<input type="text" className={className} style={style} placeholder="Text Input Box" />);
  }
}

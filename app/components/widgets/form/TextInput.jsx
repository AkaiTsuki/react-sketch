import React, { Component, PropTypes } from 'react';
import {Measurable} from '../../support/Measurable';
import {Selectable} from '../../support/Selectable';
import {Draggable} from '../../support/Draggable';

class TextInput extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    const {id, width} = this.props;
    const style = {
      margin: 0,
    }

    if(width){
      style.width = width;
    }

    let className = "widget form-control";

    return (<input type="text" className={className} style={style} onClick={this.handleClick} placeholder="Text Input Box" />);
  }
}

export default Draggable(Selectable(Measurable(TextInput)));

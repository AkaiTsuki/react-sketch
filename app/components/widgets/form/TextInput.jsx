import React, { Component, PropTypes } from 'react';
import {Measurable} from '../core/Measurable';
import {Selectable} from '../core/Selectable';
import {Draggable} from '../core/Draggable';

class TextInput extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    const {id} = this.props;
    const style = {
      margin: 0
    }

    let className = "widget form-control";

    return (<input type="text" className={className} style={style} onClick={this.handleClick} placeholder="Text Input Box" />);
  }
}

export default Draggable(Selectable(Measurable(TextInput)));
